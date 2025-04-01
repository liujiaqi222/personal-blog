import { posts } from "#site/content";
import MdxComponent from "@/components/Post/MdxComponent";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type PostPageProps = {
  params: {
    slug: string[];
  };
};

const getPost = async (params: PostPageProps["params"]) => {
  // https://nextjs.org/docs/messages/sync-dynamic-apis#possible-ways-to-fix-it
  const { slug } = await params;
  const slugStr = slug?.join("/");
  const post = posts.find((post) => post.slugAsParams === slugStr);
  return post;
};

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = await getPost(params);

  if (!post) {
    return {};
  }

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
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

const PostPage = async ({ params }: PostPageProps) => {
  const post = await getPost(params);
  if (!post || !post.published) {
    notFound();
  }
  return (
    <article className="p-6 mx-auto container max-w-2xl prose dark:prose-invert">
      <h1 className="mb-2">{post.title}</h1>
      {post.description ? <p className="text-xl mt-0 text-muted-foreground ">{post.description}</p> : null}

      <hr className="my-4" />

      <MdxComponent code={post.body} />
    </article>
  );
};

export default PostPage;
