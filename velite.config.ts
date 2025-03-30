import { defineConfig, s } from "velite";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
export default defineConfig({
  root: "content",
  collections: {
    posts: {
      name: "Post",
      pattern: ["blog/**/*.mdx", "blog/**/*.md"],
      schema: s
        .object({
          slug: s.path(),
          code: s.mdx(),
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
      rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, { theme: "one-dark-pro" }],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
    remarkPlugins: [],
  },
});
