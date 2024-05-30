import NextAuth from 'next-auth';
import GoogleProvider from '@auth/core/providers/google';
import { connectToDb } from './connectTodb';
import { createUser, getUser, getUserByEmail } from './data';

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
  ],
  callbacks: {
    async signIn({ account, profile }) {
      // console.log('------------------------------');
      // console.log('account', account);
      // console.log('profile', profile);
      // console.log('------------------------------');

      if (account.provider === 'google') {
        try {
          const user = await getUserByEmail(profile.email);
          console.log('user', user);
          if (!user) {
            const newUser = {
              username: profile.name,
              email: profile.email,
              isAdmin: false,
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
