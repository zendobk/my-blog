import React from 'react';
import 'github-markdown-css/github-markdown.css';

interface PostCardProps {
  id: string;
  title: string;
  excerpt: string;
}

import { Card, CardContent, Typography, Link } from '@mui/material';

const PostCard: React.FC<PostCardProps> = ({ id, title, excerpt }) => {
  return (
    <Card variant="outlined" sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5">
          <Link href={`/posts/${id}`} underline="hover">
            {title}
          </Link>
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          component="span"
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
      </CardContent>
    </Card>
  );
};

export default PostCard;
