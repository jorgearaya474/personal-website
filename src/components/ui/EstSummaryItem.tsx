import CheckMarkIcon from "../icons/checkMarkIcon";

/**
 * Displays a label-value pair with a checkmark icon.
 * @param label The label text.
 * @param value The value text.
 */
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
        <span className="font-bold">{value}</span>
      </span>
    </div>
  );
};

export default EstSummaryItem;
