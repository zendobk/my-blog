import { GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import { getPost, getPaths, PostType } from '@/lib/posts';

interface PostProps {
  post: PostType;
}

const PostPage: React.FC<PostProps> = ({ post }) => {
  return (
    <Layout>
      <article className="prose lg:prose-xl mx-auto my-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
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
