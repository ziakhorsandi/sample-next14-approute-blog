import Image from 'next/image';
import styles from './home.module.css';
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.title}>Lorem ipsum dolor sit amet.</div>
        <div className={styles.des}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eos
          asperiores voluptas dolores voluptatibus temporibus, porro ipsum
          consectetur minus ab, non quas atque reiciendis autem, quos a quia rem
          iure?
        </div>
        <div className={styles.btns}>
          <button className={styles.btn}>Learn More</button>
          <button className={styles.btn}>Contact</button>
        </div>
        <div className={styles.brands}></div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src='/home.png'
          alt='...'
          fill
          style={{ objectFit: 'contain' }}
        ></Image>
      </div>
    </div>
  );
};

export default Home;
