import NextAuth from 'next-auth';
import GoogleProvider from '@auth/core/providers/google';
import CredentailsProvider from '@auth/core/providers/credentials';
import { createUser, getUser } from './data';
import bcrypt from 'bcrypt';

export const loginWithCeredentails = async (credentals) => {
  const user = await getUser({ username: credentals.username });
  if (!user) {
    throw new Error('wrong credentals');
  }
  const isPassword = await bcrypt.compare(credentals.password, user.password);
  if (!isPassword) {
    throw new Error('wrong credentals');
  }
  return user;
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
    CredentailsProvider({
      async authorize(credentials) {
        try {
          const user = await loginWithCeredentails(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === 'google') {
        try {
          const user = await getUser({ email: profile.email });
          if (!user) {
            const newUser = {
              username: profile.name,
              email: profile.email,
              img: profile.picture,
            };
            await createUser(newUser);
          }
        } catch (err) {
          console.log('err', err);
          return false;
        }
      }
      return true;
    },
  },
});
