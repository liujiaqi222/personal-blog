"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Icons } from "../Icons";
import { siteConfig } from "@/config/site";
import { DialogTitle } from "@radix-ui/react-dialog";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <DialogTitle content="menus" />
      <SheetTrigger asChild>
        <Button variant="outline" className="w-10 px-0 sm:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="p-8">
        <Link href={"/"} className="flex items-center">
          <Icons.logo className="h-4 w-4" />
          <span className="font-bold">{siteConfig.name}</span>
        </Link>
        <div className="flex flex-col gap-3 mt-3">
          <Link href="/blogs">Blog</Link>
          <Link href="/about">About</Link>

          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            Github
          </Link>
          <Link href={siteConfig.links.juejin} target="_blank" rel="noreferrer">
            Juejin
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
