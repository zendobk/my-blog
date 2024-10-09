import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface PostType {
  id: string;
  title: string;
  content: string;
}

const postsDirectory = path.join(process.cwd(), 'posts');

export const getPosts = (): PostType[] => {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      id: fileName.replace(/\.md$/, ''),
      title: data.title,
      content: content,
    };
  });

  return posts;
};
