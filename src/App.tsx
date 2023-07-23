import "./App.css";
import FruitTable from "./Pages/FruitTable";
import BasicCard from "./Pages/BasicCard";
import GoldenCard from "./Pages/GoldenCard";
import PremiumCard from "./Pages/PremiumCard";
import FlowerTable from "./Pages/FlowerTable";

function App() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-10">
        <BasicCard />
        <PremiumCard />
        <GoldenCard />
      </div>
      <FruitTable />
      <FlowerTable />
    </div>
  );
}

export default App;
