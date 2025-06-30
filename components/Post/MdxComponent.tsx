import Image from "next/image";
import { ReactNode, isValidElement } from "react";
import { MDXContent } from "mdx/types";
import Link from "next/link";
import Callout from "./Callout";
import { cn, generateSlug } from "@/lib/utils";


const createHeading = (As: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") => {
  const Heading = (props: { className?: string; children: ReactNode }) => {
    const title =
      typeof props.children === "string"
        ? props.children
        : isValidElement(props.children)
          ? (props.children.props as { children: string }).children
          : (props.children as string);

    return (
      <Link
        href={`#${generateSlug(title)}`}
        className={cn(props.className, "no-underline hover:underline hover:underline-offset-4")}
      >
        <As id={generateSlug(title)}>{title}</As>
      </Link>
    );
  };
  Heading.displayName = `Heading(${As})`;
  return Heading;
};

const components = {
  Image,
  Link,
  Callout,
  h1: createHeading("h1"),
  h2: createHeading("h2"),
  h3: createHeading("h3"),
  h4: createHeading("h4"),
  h5: createHeading("h5"),
  h6: createHeading("h6"),
};
const MdxComponent = ({ content }: { content: MDXContent }) => {
  return content({
    components,
  });
};

export default MdxComponent;
