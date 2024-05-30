'use client';
import { useState } from 'react';
import styles from './links.module.css';
import Navlink from './NavLiink/Navlink';
import Image from 'next/image';
import { handleLogOut } from '@/lib/action';

const Links = ({ session }) => {
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
  const [open, setOpen] = useState(false);
  console.log('session', session);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <Navlink item={link} key={link.title} />
        ))}
        {session?.user ? (
          <>
            <form action={handleLogOut}>
              <button className={styles.logout}>Logout</button>
            </form>
            {session?.user.isAdmin && (
              <Navlink item={{ title: 'Admin', path: '/admin' }} />
            )}
          </>
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
