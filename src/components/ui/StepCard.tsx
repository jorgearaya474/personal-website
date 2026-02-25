interface StepCardProps {
  step: string;
  heading: string;
  text: string;
}

const StepCard: React.FC<StepCardProps> = ({
  step,
  heading,
  text,
}) => {
  return (
    <div className="flex flex-col gap-4 justify-start items-start bg-surface p-8 rounded-lg">
      <div className="w-10 h-10 p-1 rounded-full font-primary text-2xl text-center font-black bg-accent">{step}</div>
      <h3>{heading}</h3>
      <p>{text}</p>
    </div>
  );
};

export default StepCard;