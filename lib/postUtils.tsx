import { readdir, readFile } from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { compile, run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import rehypePrettyCode from "rehype-pretty-code";

export type PostInfo = {
  slug: string;
  title: string;
  description?: string;
  date: string;
  published?: boolean;
};

export type Post = PostInfo & {
  content: string;
};

const PostsDirectory = path.join(process.cwd(), "content", "blog");

// 递归遍历 content/blog目录下的所有的md和mdx文件
async function processFile(filePath: string, relativePath: string): Promise<PostInfo | null> {
  try {
    const fileContent = await readFile(filePath, "utf-8");
    const { data } = matter(fileContent);

    // 构建文章slug，保持目录结构
    const parsedPath = path.parse(relativePath);
    const slug = `/blog/${parsedPath.dir ? parsedPath.dir + "/" : ""}${parsedPath.name}`;

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      published: data.published ?? true,
    };
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
    return null;
  }
}

async function processDirectory(dirPath: string, relativePath: string = ""): Promise<PostInfo[]> {
  const posts: PostInfo[] = [];
  const entries = await readdir(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    const entryRelativePath = path.join(relativePath, entry.name);

    if (entry.isDirectory()) {
      const subPosts = await processDirectory(fullPath, entryRelativePath);
      posts.push(...subPosts);
    } else if (entry.isFile() && (entry.name.endsWith(".md") || entry.name.endsWith(".mdx"))) {
      const post = await processFile(fullPath, entryRelativePath);
      if (post) posts.push(post);
    }
  }

  return posts;
}

export async function getAllPostInfo(): Promise<PostInfo[]> {
  try {
    const posts = await processDirectory(PostsDirectory);
    // 按日期降序排序
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error("Error reading blog posts:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string) {
  try {
    // 首先尝试读取.mdx文件
    let postPath = path.join(PostsDirectory, `${slug}.mdx`);
    let fileContent: string;

    try {
      fileContent = await readFile(postPath, "utf-8");
    } catch {
      // 如果.mdx文件不存在，尝试读取.md文件
      postPath = path.join(PostsDirectory, `${slug}.md`);
      fileContent = await readFile(postPath, "utf-8");
    }

    const { data, content } = matter(fileContent);

    if (!fileContent || data.published === false) return null;
    
    const code = String(await compile(content, { outputFormat: "function-body", rehypePlugins: [rehypePrettyCode] }));
    
     const { default: MDXContent } = await run(code, {
       ...runtime,
       baseUrl: import.meta.url,
     });
    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      content: MDXContent,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}
