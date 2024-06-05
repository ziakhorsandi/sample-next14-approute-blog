import { login, loginWithGoogle } from '@/lib/action';

const LoginPage = async () => {
  return (
    <>
      <div>LoginPage</div>
      <form action={loginWithGoogle}>
        <button>Sign in with Google</button>
      </form>
      <form action={login}>
        <input type='text' placeholder='Username' name='username' />
        <input type='password' placeholder='Password' name='password' />
        <button>Login</button>
      </form>
    </>
  );
};

export default LoginPage;
