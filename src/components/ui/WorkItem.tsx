import { WorkProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const WorkItem: React.FC<WorkProps> = ({
  title,
  image,
  link,
  technologies,
  description,
}) => {
  return (
    <div className="bg-surface rounded-xl shadow-lg group">
      {/* Image + overlay */}
      <div className="relative overflow-hidden rounded-t-xl sm:rounded-xl">
        <Image
          className="w-full h-full object-cover"
          src={image}
          alt={title}
          width={400}
          height={300}
        />
        <div className="opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 absolute top-0 bottom-0 w-full backdrop-blur-sm bg-surface border-2 border-accent rounded-xl hidden sm:flex flex-col items-start justify-between gap-3 px-6 py-6 z-10 transition-opacity duration-200">
          <div>
            <h3 className="font-primary font-bold text-xl md:text-2xl">
              {title}
            </h3>
            {/*<p className="hidden md:block">{description}</p>*/}
            {technologies && (
              <div className="flex flex-wrap gap-2 mt-3">
                {technologies.map((tech, index) => (
                  <span
                    className="inline-flex items-center rounded-md bg-indigo-400/20 px-3 py-1 text-xs md:text-sm font-medium font-secondary text-accent ring-1 ring-inset ring-indigo-400/10"
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div>
            <Link
              href={link}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-sm md:text-lg text-accent font-bold font-primary underline"
            >
              View website
            </Link>
          </div>
        </div>
      </div>

      {/* Info visible debajo de la imagen en mobile */}
      <div className="sm:hidden px-4 py-4 flex flex-col gap-3">
        <h3 className="font-primary font-bold text-xl">{title}</h3>
        {technologies && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                className="inline-flex items-center rounded-md bg-indigo-400/20 px-3 py-1 text-xs font-medium font-secondary text-accent ring-1 ring-inset ring-indigo-400/10"
                key={index}
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        <Link
          href={link}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="text-sm text-accent font-bold font-primary underline"
        >
          View website
        </Link>
      </div>
    </div>
  );
};

export default WorkItem;
