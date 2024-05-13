import Image from 'next/image';
import styles from './contact.module.css';
const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          style={{ objectFit: 'contain' }}
          src='/about.png'
          alt=',,,'
          fill
        />
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form} action=''>
          <input type='text' placeholder='Name and Surname' />
          <input type='text' placeholder='Email Adress' />
          <input type='text' placeholder='Phone Number (Optional)' />
          <textarea
            name=''
            id=''
            col='30'
            row='30'
            placeholder='Message'
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
