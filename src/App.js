import "./App.css";

import reaction from "./assets/images/icon-reaction.svg";
import memory from "./assets/images/icon-memory.svg";
import verbal from "./assets/images/icon-verbal.svg";
import visual from "./assets/images/icon-visual.svg";

function App() {
  return (
    <>
      <div className="font-sans text-[18px]">
        <div className="flex flex-col items-center bg-gradient-to-b from-lightslateblue to-lightroyalblue rounded-b-3xl">
          <p className="font-bold text-gray-300 p-5">Your Result</p>
          <div className="bg-gradient-to-b from-violetblue to-persianblue rounded-full p-8 flex flex-col items-center">
            <p className="font-extrabold text-gray-50 text-6xl mx-2">80</p>
            <p className="font-bold text-gray-400 text-sm">of 100</p>
          </div>

          <p className="font-bold text-gray-50 my-4 text-2xl">Great</p>
          <p className="font-medium mx-12 mt-2 mb-6 text-gray-200 text-md">
            You scored higher than 67% of the people who have taken this tests.
          </p>
        </div>

        <div className="p-5 mx-6 font-bold">Summary</div>

        <div className="bg-lightred/10 mx-10 p-3 rounded-xl">
          <div className="flex justify-between">
            <div className="flex flex-row font-bold text-lightred">
              <img className="mx-2" src={reaction} alt="Reaction" />
              Reaction
            </div>
            <div className="flex flex-row font-bold">
              <div className="text-gray-700 mx-1">80</div>{" "}
              <div className="text-gray-400">/ 100</div>
            </div>
          </div>
        </div>

        <div className="bg-orangeyyellow/10 mx-10 my-5 p-3 rounded-xl">
          <div className="flex justify-between">
            <div className="flex flex-row font-bold text-orangeyyellow">
              <img className="mx-2" src={memory} alt="Memory" />
              Memory
            </div>
            <div className="flex flex-row font-bold">
              <div className="text-gray-700 mx-1">80</div>
              <div className="text-gray-400">/ 100</div>
            </div>
          </div>
        </div>

        <div className="bg-greenteal/10 mx-10 my-5 p-3 rounded-xl">
          <div className="flex justify-between">
            <div className="flex flex-row font-bold text-greenteal">
              <img className="mx-2" src={verbal} alt="Verbal" />
              Verbal
            </div>
            <div className="flex flex-row font-bold">
              <div className="text-gray-700 mx-1">80</div>{" "}
              <div className="text-gray-400">/ 100</div>
            </div>
          </div>
        </div>

        <div className="bg-cobaltblue/10 mx-10 my-5 p-3 rounded-xl">
          <div className="flex justify-between">
            <div className="flex flex-row font-bold text-cobaltblue">
              <img className="mx-2" src={visual} alt="Visual" />
              Visual
            </div>
            <div className="flex flex-row font-bold">
              <div className="text-gray-700 mx-1">80</div>{" "}
              <div className="text-gray-400">/ 100</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mx-10 ">
          <button className="font-medium w-full py-3 bg-darkgreyblue rounded-3xl text-white">
            Continue
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
