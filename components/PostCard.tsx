import React from 'react';
import 'github-markdown-css/github-markdown.css';
import styles from './PostCard.module.css';

interface PostCardProps {
  id: string;
  title: string;
  excerpt: string;
}

const PostCard: React.FC<PostCardProps> = ({ id, title, excerpt }) => {
  return (
    <div className={styles['post-card']}>
      <div>
        <h2>
          <a href={`/posts/${id}`}>
            {title}
          </a>
        </h2>
        <br/>
        <span
          className="markdown-body"
          style={{ color: 'var(--text-secondary-color)' }}
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
      </div>
    </div>
  );
};

export default PostCard;
