import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";
import { Icons } from "./Icons";

const SiteFooter = () => {
  return (
    <footer>
      <div className="mb-6 mt-14 flex flex-col items-center">
        <div className="mb-3 flex gap-x-4">
          <a target="_blank" rel="noreferrer" href="mailto:2473487465@qq.com">
            <span className="sr-only">Mail</span>
            <Mail className="h-6 w-6" />
          </a>
          <a target="_blank" rel="noreferrer" href={siteConfig.links.juejin}>
            <span className="sr-only">juejin</span>
            <Icons.juejin className="h-6 w-6" />
          </a>
          <a target="_blank" rel="noreferrer" href={siteConfig.links.github}>
            <span className="sr-only">Github</span>
            <Icons.github className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
