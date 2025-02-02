import React from 'react';
import 'github-markdown-css/github-markdown.css';

interface PostCardProps {
  id: string;
  title: string;
  excerpt: string;
}

const PostCard: React.FC<PostCardProps> = ({ id, title, excerpt }) => {
  return (
    <div style={{ border: '1px solid #e0e0e0', marginBottom: '16px', backgroundColor: 'var(--background)', padding: '16px' }}>
      <div>
        <h5 style={{ color: 'var(--foreground)' }}>
          <a href={`/posts/${id}`} style={{ textDecoration: 'underline' }} className='_title'>
            {title}
          </a>
        </h5>
        <span
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: excerpt }}
          style={{ color: 'var(--text-secondary-color)' }}
        />
      </div>
    </div>
  );
};

export default PostCard;
