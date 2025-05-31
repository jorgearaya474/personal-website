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
      className={`text-lg font-bold font-primary rounded-xl text-black px-5 py-3 bg-teal-400 hover:bg-amber-400 transition-colors transition-transform duration-300 hover:scale-105 ${className}`}
      href={href}
      target={target}
      title={title}
    >
      {text}
    </a>
  );
};

export default CtaButton;
