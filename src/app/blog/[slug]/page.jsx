import Image from 'next/image';
import styles from './singlePost.module.css';
import PostUser from '@/components/postUser/postUser';
import { Suspense } from 'react';
// import { getPost } from '@/lib/data';

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
  if (!res.ok) throw new Error('Sth went wrong');
  return res.json();
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getData(slug);
  // const post = await getPost(slug);
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={post.img} alt='' fill style={{ objectFit: 'cover' }} />
      </div>
      <div className={styles.txtContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailTxt}>
            <div className={styles.detailTitle}>Published</div>
            <div className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 15)}
            </div>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
