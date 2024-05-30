import { loginWithGoogle } from '@/lib/action';

const LoginPage = async () => {
  return (
    <>
      <div>LoginPage</div>
      <form action={loginWithGoogle}>
        <button type='submit'>Sign in with Google</button>
      </form>
    </>
  );
};

export default LoginPage;
