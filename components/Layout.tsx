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
          </ul>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>© 2024 My Blog</p>
          <div className={styles.socialMedia}>
            <Link href="https://www.linkedin.com/in/zendobk/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Link>
            <Link href="https://facebook.com/zendobk/" target="_blank" rel="noopener noreferrer">
              Facebook
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
