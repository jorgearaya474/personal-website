import { CtaButtonProps } from "@/types/types";

const CtaButton: React.FC<CtaButtonProps> = ({
  href,
  text,
  target = "_self",
  title,
  className = "",
}) => {
  return (
    <a
      className={`text-lg font-medium font-primary rounded-xl text-black px-5 py-3 bg-teal-400 hover:bg-amber-400 transition-colors duration-300 ${className}`}
      href={href}
      target={target}
      title={title}
    >
      {text}
    </a>
  );
};

export default CtaButton;
