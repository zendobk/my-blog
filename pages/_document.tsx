import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="title" content="My Blog" />
        <meta
          name="description"
          content="Stay updated with the latest trends and insights in technology, programming, and software development. Join our community of tech enthusiasts and elevate your coding skills with expert tips and tutorials."
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
