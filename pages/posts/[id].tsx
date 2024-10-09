import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import { getPosts, PostType } from '@/lib/posts';

interface PostProps {
  post: PostType;
}

const PostPage: React.FC<PostProps> = ({ post }) => {
  return (
    <Layout>
      <h1>{post.title}</h1>
      <p>Post content goes here...</p>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getPosts();
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = getPosts();
  const post = posts.find((post) => post.id === params?.id);

  return {
    props: {
      post,
    },
  };
};

export default PostPage;
