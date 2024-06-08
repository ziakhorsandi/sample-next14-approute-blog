'use client';
import { login } from '@/lib/action';
import styles from './loginForm.module.css';
import { useFormState } from 'react-dom';
import { useFormStatus } from 'react-dom';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button type='submit' disabled={pending}>
      {pending ? 'Loging...' : 'login'}
    </button>
  );
}

const LoginForm = () => {
  const [state, formAction] = useFormState(login, null);
  const router = useRouter();

  // useEffect(() => {
  //   state?.success && router.push('/login');
  // }, [state?.success, router]);

  return (
    <>
      <form className={styles.form} action={formAction}>
        <input type='text' placeholder='username' name='username' />
        <input type='password' placeholder='password' name='password' />
        <Submit />
        {state?.error}
        <Link href='/register'>
          {`Dont have anny account? `}
          <b>Login</b>
        </Link>
      </form>
    </>
  );
};

export default LoginForm;
