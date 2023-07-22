import "./App.css";
import FruitTable from "./Pages/fruitTable";
import BasicCard from "./Pages/BasicCard";
import GoldenCard from "./Pages/GoldenCard";
import PremiumCard from "./Pages/PremiumCard";

function App() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-10">
        <BasicCard />
        <PremiumCard />
        <GoldenCard />
      </div>
      <FruitTable />
    </div>
  );
}

export default App;
