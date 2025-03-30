import { posts } from "#site/content";
import PostItem from "@/components/Post/PostItem";
import { sortPosts } from "@/lib/utils";

const BlogPage = async () => {
  const sortedPost = sortPosts(posts.filter(post=>post.published))
  const displayPosts = sortedPost;
  return (
    <div className="px-4 mx-auto container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-0">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-3xl lg:text-3xl">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Web dev stuff...
          </p>
        </div>
      </div>
      <hr className="mt-8" />
      {displayPosts?.length ? (
        <ul>
          {displayPosts.map((post) => (
            <li key={post.title}>
              <PostItem {...post}/>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nothing here yet.</p>
      )}
    </div>
  );
};

export default BlogPage;
