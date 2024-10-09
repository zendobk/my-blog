import React from 'react';
import styles from './Layout.module.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.h1}>My Blog</h1>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>© 2024 My Blog</p>
          <div className={styles.socialMedia}>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
