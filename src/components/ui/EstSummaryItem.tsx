import CheckMarkIcon from "../icons/checkMarkIcon";

interface EstSummaryItemProps {
  label: string;
  value: string;
}

const EstSummaryItem: React.FC<EstSummaryItemProps> = ({ label, value }) => {
  return (
    <div className="flex flex-row items-center font-secondary text-base">
      <CheckMarkIcon className="flex-none self-start mt-1 fill-white w-4 h-4" />
      <span className="ml-1 capitalize">
        <span className="font-medium">{label}: </span>
        {value}
      </span>
    </div>
  );
};

export default EstSummaryItem;
