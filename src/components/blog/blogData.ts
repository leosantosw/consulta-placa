import fs from "node:fs";
import path from "node:path";

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  modified?: string;
  author?: string;
  readTime: string;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

const blogDirectory = path.join(process.cwd(), "src", "content", "blog");

const parseFrontmatter = (raw: string) => {
  const match = raw.match(/^---\s*[\r\n]+([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) {
    return { data: {}, content: raw.trim() };
  }
  const data: Record<string, string> = {};
  const lines = match[1].split(/\r?\n/);
  for (const line of lines) {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) {
      continue;
    }
    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();
    if (key) {
      data[key] = value;
    }
  }
  const content = raw.slice(match[0].length).trim();
  return { data, content };
};

const ensureBlogDirectory = () => {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }
  return fs
    .readdirSync(blogDirectory)
    .filter((file) => file.endsWith(".md"));
};

export const getAllPosts = (): BlogPostMeta[] => {
  const files = ensureBlogDirectory();
  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(blogDirectory, file), "utf-8");
      const { data } = parseFrontmatter(raw);
      return {
        slug,
        title: data.title ?? slug,
        description: data.description ?? "",
        date: data.date ?? "",
        modified: data.modified,
        author: data.author,
        readTime: data.readTime ?? "",
      };
    })
    .sort((a, b) => {
      const aDate = new Date(a.date).getTime();
      const bDate = new Date(b.date).getTime();
      if (Number.isNaN(aDate) || Number.isNaN(bDate)) {
        return 0;
      }
      return bDate - aDate;
    });
};

export const getPostBySlug = (slug: string): BlogPost | null => {
  const files = ensureBlogDirectory();
  const file = files.find((name) => name.replace(/\.md$/, "") === slug);
  if (!file) {
    return null;
  }
  const raw = fs.readFileSync(path.join(blogDirectory, file), "utf-8");
  const { data, content } = parseFrontmatter(raw);
  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    date: data.date ?? "",
    modified: data.modified,
    author: data.author,
    readTime: data.readTime ?? "",
    content,
  };
};
