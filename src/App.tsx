import "./App.css";
import MinimalSpend from "./components/MinimalSpend/MinimalSpend";
import Gender from "./components/Gender/Gender";
import Region from "./components/Region/Region";
function App() {
  return (
    <div className="container">
      <MinimalSpend />
      <Region />
      <Gender />
    </div>
  );
}

export default App;
