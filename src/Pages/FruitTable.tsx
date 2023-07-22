import Table from "../Components/Table ";

const fruitTable = () => {
  const column = [
    { label: "Product Name", value: "name" },
    { label: "Color", value: "color" },
    { label: "Category", value: "category" },
    { label: "Action", value: " " },
  ];
  const data = [
    { name: "Mango", color: "Yellow", category: "Fruit" },
    { name: "Mango", color: "Yellow", category: "Fruit" },
    { name: "Mango", color: "Yellow", category: "Fruit" },
    { name: "Mango", color: "Yellow", category: "Fruit" },
    { name: "Mango", color: "Yellow", category: "Fruit" },
    { name: "Mango", color: "Yellow", category: "Fruit" },
  ];
  return (
    <div>
      <Table column={column} data={data} />
    </div>
  );
};

export default fruitTable;
