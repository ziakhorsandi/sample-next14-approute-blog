import Image from 'next/image';
import styles from './singlePost.module.css';
const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src='https://free-images.com/md/9cb8/sunset_sundown_da_nang.jpg'
          alt=''
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles.txtContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src='https://free-images.com/md/9cb8/sunset_sundown_da_nang.jpg'
            alt=''
            height={50}
            width={50}
            style={{ objectFit: 'cover' }}
            className={styles.avatar}
          />
          <div className={styles.detailTxt}>
            <div className={styles.detailTitle}>Author</div>
            <div className={styles.detailValue}>Jone Doe</div>
          </div>
          <div className={styles.detailTxt}>
            <div className={styles.detailTitle}>Published</div>
            <div className={styles.detailValue}>01.01.2024</div>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea tempore
          dolore itaque ipsum suscipit, a voluptatum culpa maiores earum aliquid
          dignissimos doloremque laudantium provident ad, commodi nulla fugiat
          blanditiis laborum.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
