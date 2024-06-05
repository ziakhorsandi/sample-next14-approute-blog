import React from 'react';
import styles from './postUser.module.css';
import { getUser } from '@/lib/data';
import Image from 'next/image';

// const getData = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     { cache: 'no-store' }
//   );
//   if (!res.ok) throw new Error('Sth went wrong');
//   return res.json();
// };

const PostUser = async ({ userId }) => {
  // const user = await getData(userId);
  const user = await getUser({ id: userId });

  return (
    <div className={styles.container}>
      <Image
        src={user.img ? user.img : '/avatar.jpg'}
        alt=''
        height={50}
        width={50}
        style={{ objectFit: 'cover' }}
        className={styles.avatar}
      />

      <div className={styles.txtContainer}>
        <div className={styles.title}>user</div>
        <div className={styles.username}>{user.username}</div>
      </div>
    </div>
  );
};

export default PostUser;
