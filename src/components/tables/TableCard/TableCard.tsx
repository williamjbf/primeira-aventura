import React from "react";
import {FaUser} from "react-icons/fa";

interface TableCardProps {
  imageUrl: string;
  title: string;
  system: string;
  gmName: string;
  timeAgo: string;
  onClick?: () => void;
  className?: string;
}

export const TableCard: React.FC<TableCardProps> = (
  {
    imageUrl,
    title,
    system,
    gmName,
    timeAgo,
    onClick,
    className = "",
  }) => {
  return (
    <div
      onClick={onClick}
      className={
        [
          "flex items-start gap-3 p-2 rounded hover:bg-gray-700 transition-colors cursor-pointer",
          className,
        ].join(" ")
      }
    >
      {/* Thumbnail */}
      <img
        src={imageUrl}
        alt={`${title} thumbnail`}
        className="h-14 w-10 object-cover rounded"
      />

      {/* Infos à direita */}
      <div className="flex flex-col text-sm w-full">
        <span className="relative group max-w-ful">
          <span className="text-white font-semibold truncate leading-tight block max-w-[200px]">
          {title}
        </span>
        <span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs text-center leading-relaxed rounded-md px-3 py-2 whitespace-normal z-10 max-w-md break-words shadow-xl">
          {title}
        </span>
      </span>

      <span className="text-gray-400 text-xs truncate leading-tight">
          {system}
        </span>
      <div className="flex items-center justify-between text-gray-500 text-xs mt-0.5">
          <span className="flex items-center gap-1">
            <FaUser className="text-xs"/>
            {gmName}
          </span>
        <span className="whitespace-nowrap">{timeAgo}</span>
      </div>
    </div>
</div>
)
  ;
};

export default TableCard;
