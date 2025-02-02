import React from 'react';
import 'github-markdown-css/github-markdown.css';

interface PostDetailProps {
  title: string;
  content: string;
}

const PostDetail: React.FC<PostDetailProps> = ({ title, content }) => {
  return (
    <article style={{ border: '1px solid #e0e0e0', borderRadius: 4, marginBottom: 16, padding: 16 }} >
      <div>
        <h4>{title}</h4>
        <div style={{ padding: 10 }} />
        <span
          style={{ color: '#757575' }}
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </article>
  );
};

export default PostDetail;
