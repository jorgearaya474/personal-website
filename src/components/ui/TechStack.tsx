import type { TechSkill } from "@/types/types";
import {
  WordPressIcon,
  PHPIcon,
  JavaScriptIcon,
  ReactIcon,
  NextjsIcon,
  TailwindIcon,
  SassIcon,
  FigmaIcon,
  AcfIcon,
  AlpineIcon,
} from "@/components/icons";

const TechStack = () => {
  const technologies: TechSkill[] = [
    {
      name: "WordPress",
      icon: <WordPressIcon />,
    },
    {
      name: "ACF",
      icon: <AcfIcon />,
    },
    {
      name: "PHP",
      icon: <PHPIcon />,
    },
    {
      name: "JavaScript",
      icon: <JavaScriptIcon />,
    },
    {
      name: "React",
      icon: <ReactIcon />,
    },
    {
      name: "Alpine.js",
      icon: <AlpineIcon />,
    },
    {
      name: "NextJS",
      icon: <NextjsIcon />,
    },
    {
      name: "Tailwind",
      icon: <TailwindIcon />,
    },
    {
      name: "Sass",
      icon: <SassIcon />,
    },
    {
      name: "Figma",
      icon: <FigmaIcon />,
    }
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {technologies.map((tech, index) => (
        <div
          key={tech.name}
          className="flex flex-row items-center justify-center bg-surface rounded-lg p-5 h-full min-h-20 group border border-surface hover:border-accent transition-all duration-300"
        >
          <div className="mr-2 grayscale transition-all duration-300 group-hover:grayscale-0">{tech.icon}</div>
          <div className="text-lg font-primary font-medium">{tech.name}</div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
