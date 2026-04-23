interface CtaButtonProps {
  href: string;
  text: string;
  target?: "_blank" | "_self";
  title: string;
  className: string;
  variant?: "primary" | "secondary";
}

const variantStyles = {
  primary:
    "text-foreground bg-accent hover:bg-primary hover:text-accent",
  secondary:
    "text-accent bg-transparent border border-accent hover:bg-accent hover:text-foreground",
};

const CtaButton: React.FC<CtaButtonProps> = ({
  href,
  text,
  target = "_self",
  title,
  className = "",
  variant = "primary",
}) => {
  return (
    <a
      className={`text-xl font-bold font-primary rounded-xl px-5 py-3 transition duration-300 hover:scale-105 ${variantStyles[variant]} ${className}`}
      href={href}
      target={target}
      title={title}
    >
      {text}
    </a>
  );
};

export default CtaButton;
