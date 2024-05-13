'use client';
import { useState } from 'react';
import styles from './links.module.css';
import Navlink from './NavLiink/Navlink';
import Image from 'next/image';

const Links = () => {
  const links = [
    {
      title: 'HomePage',
      path: '/',
    },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Contact',
      path: '/contact',
    },
    {
      title: 'Blog',
      path: '/blog',
    },
  ];

  const session = true;
  const isAdmin = true;

  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <Navlink item={link} key={link.title} />
        ))}
        {session ? (
          isAdmin && (
            <>
              <Navlink item={{ title: 'Admin', path: '/admin' }} />
              <button className={styles.logout}>Logout</button>
            </>
          )
        ) : (
          <Navlink item={{ title: 'Login', path: '/login' }} />
        )}
      </div>
      <Image
        className={styles.menuBtn}
        onClick={() => setOpen((perv) => !perv)}
        src='/menu.png'
        alt=''
        width={50}
        height={50}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <Navlink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
