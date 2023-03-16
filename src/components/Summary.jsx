import React from "react";

import reaction from "../assets/images/icon-reaction.svg";
import memory from "../assets/images/icon-memory.svg";
import verbal from "../assets/images/icon-verbal.svg";
import visual from "../assets/images/icon-visual.svg";

const Summary = ({ rawData }) => {
  return (
    <div className="container min-w-screen sm:max-w-sm">

      <div className="p-5 mx-6 font-bold">Summary</div>
      
      <div className="bg-lightred/10 mx-10 p-3 rounded-xl">
        <div className="flex justify-between">
          <div className="flex flex-row font-bold text-lightred">
            <img className="mx-2" src={reaction} alt="Reaction" />
            {rawData[0].category}
          </div>
          <div className="flex flex-row font-bold">
            <div className="text-gray-700 mx-1">{rawData[0].score}</div> <div className="text-gray-400">/ 100</div>
          </div>
        </div>
      </div>

      <div className="bg-orangeyyellow/10 mx-10 my-5 p-3 rounded-xl">
        <div className="flex justify-between">
          <div className="flex flex-row font-bold text-orangeyyellow">
            <img className="mx-2" src={memory} alt="Memory" />
            {rawData[1].category}
          </div>
          <div className="flex flex-row font-bold">
            <div className="text-gray-700 mx-1">{rawData[1].score}</div>
            <div className="text-gray-400">/ 100</div>
          </div>
        </div>
      </div>

      <div className="bg-greenteal/10 mx-10 my-5 p-3 rounded-xl">
        <div className="flex justify-between">
          <div className="flex flex-row font-bold text-greenteal">
            <img className="mx-2" src={verbal} alt="Verbal" />
            {rawData[2].category}
          </div>
          <div className="flex flex-row font-bold">
            <div className="text-gray-700 mx-1">{rawData[2].score}</div> <div className="text-gray-400">/ 100</div>
          </div>
        </div>
      </div>

      <div className="bg-cobaltblue/10 mx-10 my-5 p-3 rounded-xl">
        <div className="flex justify-between">
          <div className="flex flex-row font-bold text-cobaltblue">
            <img className="mx-2" src={visual} alt="Visual" />
            {rawData[3].category}
          </div>
          <div className="flex flex-row font-bold">
            <div className="text-gray-700 mx-1">{rawData[3].score}</div> <div className="text-gray-400">/ 100</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mx-10 ">
        <button className="font-medium w-full py-3 bg-darkgreyblue rounded-3xl text-white hover:bg-gradient-to-b hover:from-lightroyalblue hover:to-lightslateblue transition transition-colors">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Summary;
