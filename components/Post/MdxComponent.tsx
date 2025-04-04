import Image from "next/image";
import Callout from "./Callout";
import { MDXContent } from "mdx/types";
import Link from "next/link";

const components = {
  Image,
  Link,
  Callout,
};
const MdxComponent = ({ content }: { content: MDXContent }) => {
  return content({
    components,
  });
};

export default MdxComponent;
