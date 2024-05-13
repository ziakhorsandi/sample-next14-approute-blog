import Image from 'next/image';
import styles from './about.module.css';
const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.txtContainer}>
        <h2 className={styles.subtitle}>About Us</h2>
        <h1 className={styles.title}>
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          aut amet nihil deleniti dolor ex minima placeat earum inventore
          beatae? Pariatur voluptatibus fugit dolore totam illum. Officiis neque
          aperiam dolor?
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 k+</h1>
            <p>Lorem, ipsum dolor.</p>
          </div>
          <div className={styles.box}>
            <h1>10 k+</h1>
            <p>Lorem, ipsum dolor.</p>
          </div>
          <div className={styles.box}>
            <h1>10 k+</h1>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          className='img'
          src='/about.png'
          alt='about pic'
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  );
};

export default AboutPage;
