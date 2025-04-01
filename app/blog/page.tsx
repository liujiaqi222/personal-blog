import { posts } from "#site/content";
import PostItem from "@/components/Post/PostItem";
import { sortPosts } from "@/lib/utils";
import "./mdx.css";
import QueryPagination from "@/components/QueryPagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jiaqi's blog",
  description: "web developer blog",
};


const POSTS_PER_PAGE = 5;
type BlogPageProps = {
  searchParams: {
    page?: string;
  };
};

const BlogPage = async ({ searchParams }: BlogPageProps) => {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const sortedPost = sortPosts(posts.filter((post) => post.published));
  const displayPosts = sortedPost.slice(POSTS_PER_PAGE * (currentPage - 1), POSTS_PER_PAGE * currentPage);
  return (
    <div className="p-6 mx-auto container max-w-2xl lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-0">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-2xl md:text-3xl">Blog</h1>
          <p className="text-lg text-muted-foreground">Web dev stuff...</p>
        </div>
      </div>
      <hr className="mt-8" />
      {displayPosts?.length ? (
        <ul>
          {displayPosts.map((post) => (
            <li key={post.title}>
              <PostItem {...post} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Nothing here yet.</p>
      )}
      <QueryPagination totalPages={totalPages} className="justify-end mt-4" />
    </div>
  );
};

export default BlogPage;
