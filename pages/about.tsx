import Layout from '@/components/Layout';
import React from 'react';

const About: React.FC = () => {
  return (
    <Layout>
      <div style={{ fontSize: '1rem', marginBottom: '1rem' }}>
        Hello! 👋
      </div>
      <br />
      <div style={{ fontSize: '1rem', marginBottom: '1rem' }}>
        My name is Dao Nguyen. I am a passionate software developer with a love for creating dynamic and user-friendly
        web applications.
      </div>
      <br />
      <div style={{ fontSize: '1rem', marginBottom: '1rem' }}>
        I have experience in various programming languages and frameworks, but I specialize in TypeScript and React. In
        my free time, I enjoy learning new technologies, contributing to open-source projects, and writing about my
        experiences in the tech industry.
      </div>
      <br />
      <div style={{ fontSize: '1rem', marginBottom: '1rem' }}>
        Feel free to connect with me on social media or check out my blog for more insights into my work and interests.
      </div>
    </Layout>
  );
};

export default About;
