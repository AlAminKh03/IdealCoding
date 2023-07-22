import { ReactNode } from "react";

interface ColumnProps<T> {
  label: string;
  value: keyof T;
}

interface tableProps<T> {
  column: ColumnProps<T>[];
  data: T[];
}
const Table = <T,>({ column, data }: tableProps<T>) => {
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
          {data.map((productName, i: number) => {
            return (
              <tr key={i} className="border">
                {column.map((columnData) => {
                  console.log(columnData);
                  const value = productName[columnData.value] as ReactNode;
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
