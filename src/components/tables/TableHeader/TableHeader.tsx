import {FaUser} from "react-icons/fa";
import type {ReactNode} from "react";

interface TableHeaderProps {
  imageUrl: string;
  title: string;
  system: string;
  gmName: string;
  onSubscribe: () => void;
  actionButton: ReactNode;
}

export const TableHeader: React.FC<TableHeaderProps> = (
  {
    imageUrl,
    title,
    system,
    gmName,
    actionButton,
  }) => {
  return (
    <div className="flex justify-between items-start">
      <div className="flex gap-4 items-start">
        <img src={imageUrl} alt={title} className="w-28 h-36 rounded-md object-cover border border-gray-600"/>
        <div>
          <h2 className="text-3xl font-bold leading-snug text-white drop-shadow">
            {title}
          </h2>
          <p className="text-gray-400 text-sm mt-1">{system}</p>
          <p className="text-gray-300 text-sm flex items-center gap-2 mt-1">
            <FaUser className="text-sm"/> {gmName}
          </p>
        </div>
      </div>

      <div>{actionButton}</div>
    </div>
  );
};