'use client';
import { register } from '@/lib/action';
import styles from './registerForm.module.css';
import { useFormState } from 'react-dom';
import { useFormStatus } from 'react-dom';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button type='submit' disabled={pending}>
      {pending ? 'Registering...' : 'Register'}
    </button>
  );
}

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, null);
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push('/login');
  }, [state?.success, router]);

  return (
    <>
      <form className={styles.form} action={formAction}>
        <input type='text' placeholder='username' name='username' />
        <input type='email' placeholder='email' name='email' />
        <input type='password' placeholder='password' name='password' />
        <input type='password' placeholder='password agian' name='passwordRe' />
        {/* <button type='submit'>Register</button> */}
        <Submit />
        {state?.error}
        <Link href='/login'>
          Have an account? <b>Login</b>
        </Link>
      </form>
    </>
  );
};

export default RegisterForm;
