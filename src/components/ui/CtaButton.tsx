interface CtaButtonProps {
  href: string;
  text: string;
  target?: "_blank" | "_self";
  title: string;
  className: string;
}

const CtaButton: React.FC<CtaButtonProps> = ({
  href,
  text,
  target = "_self",
  title,
  className = "",
}) => {
  return (
    <a
      className={`text-xl font-bold font-primary rounded-xl text-foreground px-5 py-3 bg-accent hover:bg-primary hover:text-accent transition-colors transition-transform duration-300 hover:scale-105 ${className}`}
      href={href}
      target={target}
      title={title}
    >
      {text}
    </a>
  );
};

export default CtaButton;
