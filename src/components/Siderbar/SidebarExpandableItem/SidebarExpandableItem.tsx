import React, {useState} from 'react';
import {FaChevronDown} from 'react-icons/fa';

interface SidebarExpandableItemProps {
  icon: React.ReactNode;
  label: string;
  items: string[];
}

interface SidebarExpandableItemProps {
  icon: React.ReactNode;
  label: string;
  items: string[];
  maxVisible?: number;
}

const SidebarExpandableItem: React.FC<SidebarExpandableItemProps> = (
  {
    icon,
    label,
    items,
    maxVisible = 5, // padrão
  }) => {
  const [open, setOpen] = useState(false);

  const visibleItems = open ? items.slice(0, maxVisible) : [];

  return (
    <div>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center justify-between w-full px-3 py-2 hover:bg-gray-800 rounded"
      >
        <span className="flex items-center gap-3 text-white">
          {icon}
          {label}
        </span>
        <FaChevronDown className={`transition-transform ${open ? 'rotate-180' : ''}`}/>
      </button>

      {open && (
        <ul className="ml-6 mt-1 space-y-1 max-h-48 overflow-y-auto pr-1">
          {visibleItems.map((item, index) => (
            <li
              key={index}
              className="text-sm text-gray-300 hover:text-white cursor-pointer"
            >
              {item}
            </li>
          ))}

          {items.length > maxVisible && (
            <li className="text-sm text-blue-400 hover:underline cursor-pointer">
              + Ver Mais
            </li>
          )}
        </ul>
      )}
    </div>
  );
};


export default SidebarExpandableItem;