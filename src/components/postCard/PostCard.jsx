import Image from 'next/image';
import styles from './postCard.module.css';
import Link from 'next/link';
const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            // src='https://free-images.com/md/9cb8/sunset_sundown_da_nang.jpg'
            src={post.img}
            alt='Image load fail'
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post['slug']}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
