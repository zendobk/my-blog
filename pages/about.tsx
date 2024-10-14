import Layout from '@/components/Layout';
import { Typography } from '@mui/material';
import React from 'react';

const About: React.FC = () => {
  return (
    <Layout>
      <Typography variant="body1" component="div">
        Hello! 👋
      </Typography>
      <br />
      <Typography variant="body1" component="div">
        My name is Dao Nguyen. I am a passionate software developer with a love for creating dynamic and user-friendly
        web applications.
      </Typography>
      <br />
      <Typography variant="body1" component="div">
        I have experience in various programming languages and frameworks, but I specialize in TypeScript and React. In
        my free time, I enjoy learning new technologies, contributing to open-source projects, and writing about my
        experiences in the tech industry.
      </Typography>
      <br />
      <Typography variant="body1" component="div">
        Feel free to connect with me on social media or check out my blog for more insights into my work and interests.
      </Typography>
    </Layout>
  );
};

export default About;
