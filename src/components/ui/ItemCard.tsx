import CtaButton from "./CtaButton";
import Link from "next/link";
import truncateText from "@/lib/truncateText";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  href: string;
  target?: "_blank" | "_self";
  tags?: string[];
  image?: string;
  ctaText?: string;
}

const ItemCard = ({
  title,
  description,
  href,
  target,
  tags,
  image,
  ctaText = "Read more",
}: CardProps) => {
  return (
    <div className="bg-surface rounded-xl overflow-hidden shadow-lg">
      <div className="flex flex-col items-start justify-between h-full gap-8 px-6 py-6">
        <div className="flex flex-col gap-3">
          {image && (
            <Link href={href} target={target} className="overflow-hidden rounded-md">
              <Image
                src={image}
                className="rounded-md hover:scale-105 transition-transform duration-300 h-64 object-cover"
                width={500}
                height={300}
                alt={title}
              />
            </Link>
          )}
          <h3 className="text-2xl hover:text-accent transition-colors duration-300">
            <Link href={href} target={target}>{title}</Link>
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
          <p>{image ? description : truncateText(description)}</p>
        </div>
        <div>
          <CtaButton
            href={href}
            target={target}
            title={title}
            text={ctaText}
            className="shrink-0 w-auto inline-flex"
          />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
