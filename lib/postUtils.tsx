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
  toc: {
    level: number;
    text: string;
  }[];
};

const PostsDirectory = path.join(process.cwd(), "content", "blog");

// 递归遍历 content/blog目录下的所有的md和mdx文件
async function processFile(filePath: string, relativePath: string): Promise<PostInfo | null> {
  try {
    const fileContent = await readFile(filePath, "utf-8");
    const { data } = matter(fileContent);

    // 构建文章slug，保持目录结构
    const parsedPath = path.parse(relativePath);
    const slug = `${parsedPath.dir ? parsedPath.dir + "/" : ""}${parsedPath.name}`;

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
    console.error("Error Get All Post Info:", error);
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

    // 直接从Markdown内容中提取标题，构建TOC
    const toc: { level: number; text: string }[] = [];
    let match;

    // 修改正则表达式以匹配前面可能有空格的标题
    const headingRegex = /^\s*(#{1,6})\s+(.+)$/gm;
    const linkRegex = /^\[([^\]]+)\]\(.+\)$/;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      let text = match[2].trim();
      const linkMatch = text.match(linkRegex);

      // If it matches the link format AND has captured text inside brackets
      if (linkMatch && linkMatch[1]) {
        // Use the text captured inside the square brackets
        text = linkMatch[1].trim(); // Trim again in case of spaces like [ text ](...)
      }
      toc.push({ level, text });
    }

    // 编译MDX内容
    const code = String(
      await compile(content, {
        outputFormat: "function-body",
        rehypePlugins: [rehypePrettyCode],
      })
    );
    // 运行编译后的代码
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
      toc: toc,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}
