/* eslint-disable no-unused-vars */
import React from "react";
import LeaderboardTable from "../Leaderboard/LeaderboardTable";
import LearderboardNavbar from "./LearderboardNavbar";
import { useNavigate } from "react-router-dom";

const Leaderboard = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <>
      <LearderboardNavbar />
      <button
        className="absolute top-[80px] left-9 bg-white text-white rounded-full p-2 hover:bg-orange-500 transition duration-200"
        onClick={handleBack}
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
          <title>Trở lại</title>
        </svg>
      </button>
      <LeaderboardTable />
    </>
  );
};

export default Leaderboard;
