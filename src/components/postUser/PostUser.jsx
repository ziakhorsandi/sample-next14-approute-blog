import React from 'react';
import styles from './postUser.module.css';

const getData = async (userId) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    { cache: 'no-store' }
  );
  if (!res.ok) throw new Error('Sth went wrong');
  return res.json();
};

const PostUser = async ({ userId }) => {
  const user = await getData(userId);
  // console.log('user', user);
  return (
    <div className={styles.container}>
      <div className={styles.title}>user</div>
      <div className={styles.username}>{user.name}</div>
    </div>
  );
};

export default PostUser;
