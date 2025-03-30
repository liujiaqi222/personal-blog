import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Icons } from "../Icons";
import { MainNav } from "./MainNav";
import MobileNav from "./MobileNav";
import ModeToggle from "./ModeToggle";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-6 mx-auto container flex items-center h-14 max-w-screen-2xl">
        <MainNav />
        <div className="flex-1 items-center justify-end gap-2">
          <nav className="flex items-center justify-end">
            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer" className="hidden sm:inline-flex">
              {/* 使用shadcn button的样式 */}
              <div className={cn(buttonVariants({ variant: "ghost" }), "w-10 px-0")}>
                <Icons.github className="h-4 w-4" />
                <span className="sr-only">Github</span>
              </div>
            </Link>
            <Link href={siteConfig.links.juejin} target="_blank" rel="noreferrer" className="hidden sm:inline-flex">
              <div className={cn(buttonVariants({ variant: "ghost" }), "w-10 px-0")}>
                <Icons.juejin className="h-4 w-4" />
                <span className="sr-only">Juejin</span>
              </div>
            </Link>
            <ModeToggle/>
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
