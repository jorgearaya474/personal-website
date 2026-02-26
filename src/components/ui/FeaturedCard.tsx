import { ReactNode } from "react";

interface FeaturedCardProps {
  icon: ReactNode;
  heading: string;
  text: string;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({
  icon,
  heading,
  text,
}) => {
  return (

    <div className="bg-surface p-8 rounded-lg">
      <div className="flex flex-col gap-4 justify-start items-start mb-2">
        {icon}
        <h3>{heading}</h3>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default FeaturedCard;