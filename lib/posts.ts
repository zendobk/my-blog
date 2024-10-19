import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export interface PostType {
  id: string;
  title: string;
  excerpt: string;
  content: string;
}

const postsDirectory = path.join(process.cwd(), 'posts');

marked.setOptions({
  async: false,
  gfm: true,
});

export const getPosts = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const excerpt = content.length > 200 ? `${content.substring(0, 200)}...` : content;
    const html = marked(excerpt) as string;
    return {
      id: fileName.replace(/\.md$/, ''),
      title: data.title,
      excerpt: html,
    };
  });
  return posts;
};

export const getPost = (id: string) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const html = marked(content) as string;
  return {
    title: data.title,
    content: html,
  };
};

export const getPaths = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const paths = fileNames.map((fileName) => ({
    params: { id: fileName.replace(/\.md$/, '') },
  }));

  return paths;
};
