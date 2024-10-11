import { GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import { getPost, getPaths, PostType } from '@/lib/posts';
import PostDetail from '@/components/PostDetail';

interface PostProps {
  post: PostType;
}

const PostPage: React.FC<PostProps> = ({ post }) => {
  return (
    <Layout>
      <PostDetail title={post.title} content={post.content} />
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = getPaths();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPost(params?.id as string);

  return {
    props: {
      post,
    },
  };
};

export default PostPage;
