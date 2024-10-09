import React from 'react';
import styles from './Layout.module.css';
import Link from 'next/link';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.h1}>My Blog</h1>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>© 2024 My Blog</p>
          <div className={styles.socialMedia}>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              Twitter
            </Link>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
