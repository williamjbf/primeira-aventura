import React from "react";
import TableCard from "./TableCard";

interface TableCardGridProps {
  tables: {
    imageUrl: string;
    title: string;
    system: string;
    gmName: string;
    timeAgo: string;
  }[];
}

export const TableCardGrid: React.FC<TableCardGridProps> = ({tables}) => {
  // Quebra em colunas de 6 itens (para 4 colunas com 6 linhas cada)
  const columns = Array.from({length: 4}, (_, i) =>
    tables.slice(i * 6, i * 6 + 6)
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {columns.map((column, colIdx) => (
        <div key={colIdx} className="flex flex-col gap-2 bg-gray-800">
          {column.map((table, idx) => (
            <TableCard key={idx} {...table} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TableCardGrid;
