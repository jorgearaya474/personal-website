import * as React from "react";

interface ToolSectionTitleProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  title: string;
  num: string;
}
const ToolSectionTitle: React.FC<ToolSectionTitleProps> = ({
  level,
  title,
  num,
}) => {
  const HeaderTag = `h${level}`;
  return React.createElement(
    HeaderTag,
    {
      className:
        "font-primary text-2xl font-bold text-white mb-4 flex items-center gap-2",
    },
    <>
      <span className="text-md font-black bg-gradient-to-tr from-teal-500 to-cyan-700 w-10 h-10 text-center p-1 rounded-full">
        {num}
      </span>{" "}
      {title}
    </>,
  );
};

export default ToolSectionTitle;
