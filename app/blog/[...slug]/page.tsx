import { posts } from "#site/content";
import MdxComponent from "@/components/Post/MdxComponent";
import { notFound } from "next/navigation";

type PostPageProps = {
  params: {
    slug: string[];
  };
};

const getPost = async (params: PostPageProps["params"]) => {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);
  return post;
};

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
