import { Calendar } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { buttonVariants } from "../ui/button";
import { cn, formatDate } from "@/lib/utils";

type PostItemsProps = {
  slug: string;
  title: string;
  description?: string;
  date: string;
};

const PostItem: FC<PostItemsProps> = ({ slug, title, description, date }) => {
  const link = `/blog/${slug}`
  return (
    <article className="flex flex-col gap-2 border-border border-b py-3">
      <div>
        <h2 className="text-xl font-bold">
          <Link href={link}>{title}</Link>
        </h2>
      </div>
      <div className="max-w-none text-muted-foreground">{description}</div>
      <div className="flex justify-between items-center">
        <dl>
          <dt className="sr-only">Published On</dt>
          <dd className="text-sm sm:text-base font-medium flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
        <Link href={link} className={cn(buttonVariants({ variant: "link" }), "py-0")}>
          Read More →
        </Link>
      </div>
    </article>
  );
};

export default PostItem;
