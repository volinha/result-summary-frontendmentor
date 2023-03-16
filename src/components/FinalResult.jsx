import React from "react";

const FinalResult = ({ rawData }) => {

  const total = rawData.reduce((acc, current) => acc + current.score, 0);
  const average = total / rawData.length;

  return (
    <div className="container sm:max-w-sm">
      <div className="flex flex-col items-center sm:py-5 bg-gradient-to-b from-lightslateblue to-lightroyalblue rounded-b-3xl sm:rounded-3xl">
        <p className="font-bold text-gray-300 p-5">Your Result</p>
        <div className="bg-gradient-to-b from-violetblue to-persianblue rounded-full p-8 flex flex-col items-center">
          <p className="font-extrabold text-gray-50 text-6xl mx-2">{average.toFixed(0)}</p>
          <p className="font-bold text-gray-400 text-sm">of 100</p>
        </div>

        <p className="font-bold text-gray-50 my-4 text-2xl">Great</p>
        <p className="font-medium mx-12 mt-2 mb-6 text-gray-200 text-md">
          You scored higher than 67% of the people who have taken this tests.
        </p>
      </div>
    </div>

  );
};

export default FinalResult;
