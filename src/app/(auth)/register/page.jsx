import styles from './register.module.css';
import RegisterForm from '@/components/registerForm/RegisterForm';

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wraper}>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
