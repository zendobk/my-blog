import Layout from '@/components/Layout';
import PostCard from '@/components/PostCard';
import { getPosts, PostType } from '@/lib/posts';

interface HomeProps {
  posts: PostType[];
}

const HomePage: React.FC<HomeProps> = ({ posts }) => {
  return (
    <Layout>
      <ul>
        {posts.map((post) => (
          <PostCard key={post.id} id={post.id} title={post.title} content={post.content} />
        ))}
      </ul>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const posts = getPosts();

  return {
    props: {
      posts,
    },
  };
};

export default HomePage;
