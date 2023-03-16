import "./App.css";

import data from "./data.json";

import FinalResult from "./components/FinalResult";
import Summary from "./components/Summary";

function App() {
  return (
    <div className="sm:h-screen flex flex-col sm:flex-row items-center justify-center font-sans text-[18px]">
      <div className="sm:flex sm:shadow-2xl">
        <FinalResult className="flex-1" />
        <Summary className="flex-1" />
      </div>
    </div>
  );
}

export default App;
