import Image from 'next/image';
import styles from './postCard.module.css';
import Link from 'next/link';
const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            // src='https://free-images.com/md/ca86/haematopus_ostralegus_bird_flight.jpg'
            src='https://free-images.com/md/9cb8/sunset_sundown_da_nang.jpg'
            alt='Image load fail'
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          maiores placeat saepe maxime possimus sequi quaerat eos quia, ipsum
          ducimus.
        </p>
        <Link className={styles.link} href='/blog/post'>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
