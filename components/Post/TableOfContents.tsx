import { generateSlug } from "@/lib/utils";

type TableOfContentsProps = {
  toc?: {
    level: number;
    text: string;
  }[];
};

const TableOfContents = ({ toc }: TableOfContentsProps) => {
  if (!toc || toc.length === 0) return null;
  let minLevel = 6;
  toc.forEach(({ level }) => (minLevel = Math.min(level, minLevel)));
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-bold text-lg">目录</h2>
      <ul className="flex flex-col gap-2">
        {toc.map((title, index) => (
          <li
            key={index}
            style={{ marginLeft: `${(title.level - minLevel) * 0.5}rem` }}
            className="text-sm hover:text-primary transition-colors"
          >
            <a href={`#${generateSlug(title.text)}`}>{title.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
