import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

// MDX can be retrieved from anywhere, such as a file or a database.
const mdxSource = `
export const title = "MDX Export Demo";

# Hello, world!


`;

export default async function Page() {
  // Run the compiled code
  const { default: MDXContent, ...rest } = await evaluate(mdxSource, runtime);

  console.log(rest); // logs { title: 'MDX Export Demo' }

  // Render the MDX content, supplying the ClientComponent as a component, and
  // the exported MDXDefinedComponent.
  return (
    <>
      <MDXContent />
    </>
  );
}
