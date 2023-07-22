import Table, { ColumnProps } from "../Components/Table ";
type ColumnProp = {
  name: string;
  color: string;
  category: string;
};
const fruitTable = () => {
  const column: ColumnProps<ColumnProp>[] = [
    { label: "Product Name", value: "name" },
    { label: "Color", value: "color" },
    { label: "Category", value: "category" },
    { label: "Action", value: undefined },
  ];
  const data = [
    { name: "Mango", color: "Yellow", category: "Fruit" },
    { name: "Apple", color: "Yellow", category: "Fruit" },
    { name: "Orange", color: "Yellow", category: "Fruit" },
    { name: "Banana", color: "Yellow", category: "Fruit" },
    { name: "Dragon", color: "Yellow", category: "Fruit" },
    { name: "Lichie", color: "Yellow", category: "Fruit" },
  ];
  return (
    <div>
      <Table column={column} data={data} />
    </div>
  );
};

export default fruitTable;
