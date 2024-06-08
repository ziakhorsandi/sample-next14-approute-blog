import LoginForm from '@/components/loginForm/LoginForm';
import { loginWithGoogle } from '@/lib/action';
import styles from './login.module.css';

const LoginPage = async () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wraper}>
          <form action={loginWithGoogle}>
            <button className={styles.btn}>Sign in with Google</button>
          </form>
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
