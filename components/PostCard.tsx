import React from 'react';
import 'github-markdown-css/github-markdown.css';

interface PostCardProps {
  id: string;
  title: string;
  excerpt: string;
}

import { Card, CardContent, Typography, Link as MuiLink } from '@mui/material';

const PostCard: React.FC<PostCardProps> = ({ id, title, excerpt }) => {
  return (
    <Card variant="outlined" sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          <MuiLink href={`/posts/${id}`} underline="hover">
            {title}
          </MuiLink>
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div">
          <div className="markdown-body" dangerouslySetInnerHTML={{ __html: excerpt }} />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;
