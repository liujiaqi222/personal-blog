import Link from "next/link";
import { posts } from "#site/content";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn, sortPosts } from "@/lib/utils";
import PostItem from "@/components/Post/PostItem";

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5);
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32">
        <div className="container mx-auto flex flex-col gap-4 text-center">
          <h1 className="text-2xl sm:text-3xl">Hello, I&apos;m Jiaqi!</h1>
          <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-lg text-balance">
            Welcome to my site. Built using Next.js 15, Shadcn and Velite.
          </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Link href="/blog" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}>
              View my blog
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-fit")}
            >
              Github
            </Link>
          </div>
        </div>
      </section>
      <section className="container mx-auto max-w-4xl py-4 lg:py-6 flex flex-col gap-y-6 mt-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-center">Latest Posts</h2>
        <ul className="flex flex-col">
          {latestPosts.map((post) => (
            <li key={post.slug} className="first:border-t first:border-border">
              <PostItem {...post} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
