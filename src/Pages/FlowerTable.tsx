import Table from "../Components/Table ";
import { ColumnProps } from "../Components/Table ";

type ColumnProp = {
  type: string;
  variant: string;
  sector: string;
};

const FlowerTable = () => {
  const column: ColumnProps<ColumnProp>[] = [
    { label: "Product type", value: "type" },
    { label: "variant", value: "variant" },
    { label: "sector", value: "sector" },
    { label: "Action", value: undefined },
  ];
  const data = [
    { type: "Mango", variant: "Green", sector: "Fruit" },
    { type: "Apple", variant: "Yellow", sector: "Fruit" },
    { type: "Orange", variant: "Yellow", sector: "Fruit" },
    { type: "Banana", variant: "Yellow", sector: "Fruit" },
    { type: "Dragon", variant: "Yellow", sector: "Fruit" },
    { type: "Lichie", variant: "Yellow", sector: "Fruit" },
  ];
  return <Table column={column} data={data} />;
};

export default FlowerTable;
