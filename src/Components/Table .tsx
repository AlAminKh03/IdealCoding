import { ReactNode } from "react";

export interface ColumnProps<T> {
  label: string;
  value?: keyof T;
}

export interface TableProps<T> {
  column: ColumnProps<T>[];
  data: T[];
}
const Table = <T,>({ column, data }: TableProps<T>) => {
  return (
    <div className="mt-8">
      <table className="border">
        <thead>
          <tr className="border ">
            {column.map((columnData) => {
              return (
                <th key={columnData.label} className="px-8 border">
                  {columnData.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="border">
          {data.map((productName, i) => {
            return (
              <tr key={i} className="border">
                {column.map((columnData) => {
                  const value =
                    columnData.value &&
                    (productName[columnData.value] as ReactNode);
                  return <td key={columnData.label}>{value}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
