import Image from "next/image";
import * as runtime from "react/jsx-runtime";

const useMdxComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
};
const MdxComponent = ({ code }: { code: string }) => {
  const Component = useMdxComponent(code);
  return <Component components={components} />;
};

export default MdxComponent;
