import "./App.css";

import data from "./data.json";

import FinalResult from "./components/FinalResult";
import Summary from "./components/Summary";
import { useState } from "react";

function App() {

  const [myData, setMyData] = useState(data);

  return (
    <div className="sm:h-screen flex flex-col sm:flex-row items-center justify-center font-sans text-[18px]">
      <div className="sm:flex sm:shadow-2xl">
        <FinalResult />
        <Summary rawData={myData}/>
      </div>
    </div>
  );
}

export default App;
