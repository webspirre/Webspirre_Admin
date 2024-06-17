import React from "react";

interface TableProps {
  columns: string[];
  data: { [key: string]: any }[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white ">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                className="py-2 px-4 text-[11px]  text-left text-gray-600 font-bold"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="text-[#888888] text-[13px]">
              {columns.map((column) => (
                <td key={column} className="py-2 px-4   text-gray-700">
                  {column === "Website Image" ? (
                    <img
                      src={row[column]}
                      alt={`${row["Name of Website"]} Image`}
                      className="h-12 w-12 object-cover"
                    />
                  ) : (
                    row[column]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
