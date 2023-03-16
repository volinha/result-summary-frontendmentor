import "./App.css";

import data from "./data.json";

import FinalResult from "./components/FinalResult";
import Summary from "./components/Summary";

function App() {
  return (
      <div className="sm:h-screen flex flex-col sm:flex-row items-center justify-center font-sans text-[18px]">
        <FinalResult />
        <Summary />
      </div>
  );
}

export default App;
