import { defineConfig, s } from "velite";

export default defineConfig({
  root: "content",
  collections: {
    posts: {
      name: "Post",
      pattern: ["blog/**/*.mdx", "blog/**/*.md"],
      schema: s
        .object({
          slug: s.path(),
          title: s.string(),
          description: s.string().max(999).optional(),
          date: s.isodate(),
          published: s.boolean().default(true),
          tags: s.array(s.string()).optional(),
          body: s.mdx(),
        })
        .transform((data) => ({ ...data, slugAsParams: data.slug.split("/").slice(1).join("/") })),
    },
  },

  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
});
