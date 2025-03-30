import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import Callout from "./Callout";

/**
 * @see https://velite.js.org/guide/using-mdx#rendering-mdx-content
 */
const useMdxComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  Callout,
  
};
const MdxComponent = ({ code }: { code: string }) => {
  const Component = useMdxComponent(code);
  return <Component components={components} />;
};

export default MdxComponent;
