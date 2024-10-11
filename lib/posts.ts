import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export interface PostType {
  id: string;
  title: string;
  content: string;
}

const postsDirectory = path.join(process.cwd(), 'posts');

export const getPosts = () => {
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

export const getPost = (id: string) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const contentHtml = marked(content);

  return {
    title: data.title,
    content: contentHtml,
  };
};

export const getPaths = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const paths = fileNames.map((fileName) => ({
    params: { id: fileName.replace(/\.md$/, '') },
  }));

  return paths;
};
