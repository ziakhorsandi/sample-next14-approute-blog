'use server';
const { signIn, signOut } = require('./auth');

export const loginWithGoogle = async () => {
  await signIn('google');
};
export const handleLogOut = async () => {
  await signOut('google', { redirectTo: '/' });
};
