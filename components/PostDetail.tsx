import React from 'react';
import 'github-markdown-css/github-markdown.css';

interface PostDetailProps {
  title: string;
  content: string;
}

import { Card, CardContent, Typography } from '@mui/material';

const PostDetail: React.FC<PostDetailProps> = ({ title, content }) => {
  return (
    <Card variant="outlined" sx={{ marginBottom: 2 }} component="article">
      <CardContent>
        <Typography variant="h4">{title}</Typography>
        <div style={{ padding: 10 }} />
        <Typography
          variant="body2"
          color="text.secondary"
          component="span"
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </CardContent>
    </Card>
  );
};

export default PostDetail;
