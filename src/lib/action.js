'use server';

import { createUser, getUser } from './data';
const { signIn, signOut } = require('./auth');

export const loginWithGoogle = async () => {
  await signIn('google');
};
export const handleLogOut = async () => {
  await signOut('google', { redirectTo: '/' });
};

export const register = async (formData) => {
  const { username, email, password, passwordRe, img } =
    Object.fromEntries(formData);

  try {
    if (password !== passwordRe) {
      return { error: 'Password does not match' };
    }
    if (await getUser({ username: username })) {
      return { error: 'User is already exist' };
    }

    await createUser({ username, email, password, passwordRe, img });
  } catch (error) {
    console.log(error);
    return { error: 'sth went wrong' };
  }
};
export const login = async (formData) => {
  const { username, password } = Object.fromEntries(formData);
  try {
    await signIn('credentials', { username, password });
  } catch (error) {
    console.log(error);
    return { error: 'Sth with credential went wrong' };
  }
};
