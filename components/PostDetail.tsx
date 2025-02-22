import React from 'react';
import 'github-markdown-css/github-markdown.css';
import styles from './PostDetail.module.css';

interface PostDetailProps {
  title: string;
  content: string;
}

const PostDetail: React.FC<PostDetailProps> = ({ title, content }) => {
  return (
    <article className={styles['post-card']}>
      <div>
        <h2>{title}</h2>
        <br />
        <span
          className="markdown-body"
          style={{ color: 'var(--text-secondary-color)' }}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </article>
  );
};

export default PostDetail;
