import React from 'react';
import styles from './PostDetail.module.css';

interface PostDetailProps {
  title: string;
  content: string;
}

import { Card, CardContent, Typography, Link as MuiLink } from '@mui/material';

const PostDetail: React.FC<PostDetailProps> = ({ title, content }) => {
  return (
    <article>
      <Card variant="outlined" sx={{ marginBottom: 2 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            <MuiLink href="" underline="hover">
              {title}
            </MuiLink>
            <Typography variant="body2" color="text.secondary" component="div">
              <div className={styles.md} dangerouslySetInnerHTML={{ __html: content }} />
            </Typography>
          </Typography>
        </CardContent>
      </Card>
    </article>
  );
};

export default PostDetail;
