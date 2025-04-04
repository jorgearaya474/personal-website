import type { TechSkill } from "@/types/types";
import WordPressIcon from "@/components/icons/WordPressIcon";
import PHPIcon from "@/components/icons/PHPIcon";
import JavaScriptIcon from "@/components/icons/JavaScriptIcon";
import ReactIcon from "@/components/icons/ReactIcon";
import NextjsIcon from "@/components/icons/NextjsIcon";
import TailwindIcon from "@/components/icons/TailwindIcon";
import SassIcon from "@/components/icons/SassIcon";
import FigmaIcon from "@/components/icons/FigmaIcon";
import LaravelIcon from "../icons/LaravelIcon";

const TechStack = () => {
  const technologies: TechSkill[] = [
    {
      name: "WordPress",
      icon: <WordPressIcon />,
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
    },
    {
      name: "Laravel",
      icon: <LaravelIcon />,
    },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="flex flex-row items-center justify-center h-20 bg-zinc-800 rounded-lg p-4"
        >
          <div className="mr-2">{tech.icon}</div>
          <div className="font-primary text-white font-medium">{tech.name}</div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
