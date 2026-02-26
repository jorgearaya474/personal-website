import type { Post } from "@/types/types";
import CtaButton from "./CtaButton";
import Link from "next/link";
import truncateText from "@/lib/truncateText";

const ItemCard: React.FC<Post> = ({ slug, title, description, tags }) => {
  return (
    <div className="bg-surface rounded-xl overflow-hidden shadow-lg">
      <div className="flex flex-col items-start justify-between h-full gap-8 px-6 py-6">
        <div className="flex flex-col gap-3">
          <h3 className="hover:text-accent transition-colors duration-300">
            <Link href={`/blog/${slug}`}>{title}</Link>
          </h3>
          {tags && (
            <div className="flex gap-2">
              {tags.map((tag, index) => (
                <span
                  className="inline-flex items-center rounded-md bg-indigo-400/20 px-2 py-1 text-xs font-secondary font-medium text-accent ring-1 ring-inset ring-indigo-400/10"
                  key={index}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <p>
            {truncateText(description)}
          </p>
        </div>
        <div>
          <CtaButton
            href={`/blog/${slug}`}
            title={title}
            text="Read more"
            className="shrink-0 w-auto inline-flex"
          />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
