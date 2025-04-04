import MdxComponent from "@/components/Post/MdxComponent";
import { siteConfig } from "@/config/site";
import { getAllPostInfo, getPostBySlug } from "@/lib/postUtils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import TableOfContents from "@/components/Post/TableOfContents";

type PostPageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export async function generateMetadata(props: PostPageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const post = await getPostBySlug(slug.join("/"));
  if (!post) return {};
  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", post.title);

  return {
    title: post.title,
    description: post.description,
    authors: { name: siteConfig.author },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: post.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

// runs at build time and uses the returned list to generate the static pages.
export async function generateStaticParams() {
  return (await getAllPostInfo()).map((post) => {
    return {
      slug: post.slug.split("/").slice(1),
    };
  });
}

const PostPage = async (props: PostPageProps) => {
  const { slug } = await props.params;
  const post = await getPostBySlug(slug.join("/"));
  if (!post) {
    notFound();
  }
  return (
    <div className="container mx-auto p-6 flex justify-center gap-8 relative">
      <article className="prose dark:prose-invert flex-1 max-w-2xl">
        <h1 className="mb-2">{post.title}</h1>
        {post.description ? <p className="text-xl mt-0 text-muted-foreground ">{post.description}</p> : null}
        <hr className="my-4" />
        <MdxComponent content={post.content} />
      </article>
      <aside className="hidden lg:block sticky top-20 h-fit">
        <TableOfContents toc={post.toc} />
      </aside>
    </div>
  );
};

export default PostPage;
