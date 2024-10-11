import React from 'react';

interface PostCardProps {
  id: string;
  title: string;
  content: string;
}

import { Card, CardContent, Typography, Link as MuiLink } from '@mui/material';

const PostCard: React.FC<PostCardProps> = ({ id, title, content }) => {
  return (
    <Card variant="outlined" sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          <MuiLink href={`/posts/${id}`} underline="hover">
            {title}
          </MuiLink>
          <Typography variant="body2" color="text.secondary">
            {content.length > 100 ? `${content.substring(0, 100)}...` : content}
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;
