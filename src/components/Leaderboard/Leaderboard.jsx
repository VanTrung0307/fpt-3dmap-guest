/* eslint-disable no-unused-vars */
import React from "react";
import LeaderboardTable from "../Leaderboard/LeaderboardTable";

const Leaderboard = () => {
  return (
    <>
      <div className="flex items-center justify-center font-bold text-[60px]">
        <button
          className="absolute top-4 left-4 bg-white text-white rounded-full p-2 hover:bg-orange-500 transition duration-200"
          onClick={() => window.history.back()}
          title="Back"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black hover:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
            <title>Back</title>
          </svg>
        </button>
        Leaderboard
      </div>
      <LeaderboardTable />
    </>
  );
};

export default Leaderboard;
