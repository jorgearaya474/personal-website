import type { ToolProps } from "@/types/types";
import CtaButton from "./CtaButton";
import Link from "next/link";
import truncateText from "@/lib/truncateText";
import Image from "next/image";

const ItemCardProject: React.FC<ToolProps> = ({
  title,
  url,
  image,
  description,
}) => {
  return (
    <div className="bg-zinc-800/60 rounded-xl overflow-hidden shadow-lg">
      <div className="flex flex-col items-start justify-between h-full gap-4 px-6 py-6">
        <div className="flex flex-col gap-3">
          <Link
            href={url}
            target="_blank"
            className="overflow-hidden rounded-md"
          >
            <Image
              src={image}
              className="rounded-md hover:scale-105 transition-transform duration-300 h-64 object-cover"
              width={500}
              height={300}
              alt={title}
            ></Image>
          </Link>
          <h3 className="font-primary font-bold text-2xl hover:text-teal-400 transition-colors duration-300">
            <Link href={url} target="_blank">
              {title}
            </Link>
          </h3>
          <p className="text-white font-secondary text-base">{description}</p>
        </div>
        <div>
          <CtaButton
            href={url}
            target="_blank"
            title={title}
            text="Try It Now"
            className="font-medium shrink-0 w-auto inline-flex"
          />
        </div>
      </div>
    </div>
  );
};

export default ItemCardProject;
