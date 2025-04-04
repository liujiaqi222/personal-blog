import MdxComponent from "@/components/Post/MdxComponent";
import { siteConfig } from "@/config/site";
import { getAllPostInfo, getPostBySlug } from "@/lib/postUtils";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type PostPageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export async function generateMetadata(props: PostPageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const post = await getPostBySlug(slug.join("/"));
  if (!post) return {}
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
    <article className="p-6 mx-auto container max-w-2xl prose dark:prose-invert">
      <h1 className="mb-2">{post.title}</h1>
      {post.description ? <p className="text-xl mt-0 text-muted-foreground ">{post.description}</p> : null}

      <hr className="my-4" />

      <MdxComponent content={post.content} />
    </article>
  );
};

export default PostPage;
