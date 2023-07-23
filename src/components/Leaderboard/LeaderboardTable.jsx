/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import "../Leaderboard/LeaderboardTable.css";
import { getRanks } from "../../api/Rank";
import { getPlayers } from "../../api/Player";
import { AuthContext } from "../../authentication/AuthContext";
import { Link } from "react-router-dom";

const LeaderboardTable = () => {
  const [rank, setRank] = useState([]);
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    const fetchRankOptions = async () => {
      try {
        const rankBoard = await getRanks();
        const playerBoard = await getPlayers();
        setRank(rankBoard);
        setPlayer(playerBoard);
      } catch (error) {
        console.error("Error fetching school options:", error);
        setRank([]);
        setPlayer([]);
      }
    };

    fetchRankOptions();
  }, []);

  const { loggedIn, user, ranks, players } = useContext(AuthContext);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="col-span-12">
        <h1 className="flex items-center justify-center font-bold text-6xl custom-font">
          Leaderboard
        </h1>
        <div className="overflow-auto lg:overflow-visible">
          <table className="table text-gray-400 border-separate space-y-6 text-sm">
            <thead className="bg-gray-800 text-gray-500">
              <tr>
                <th className="p-3">Rank</th>
                <th className="p-3 text-left">Place</th>
                <th className="p-3 text-left">Point</th>
                <th className="p-3 text-left">Username</th>
                <th className="p-3 text-left">Time Recorded</th>
              </tr>
            </thead>
            <tbody>
              {(rank && player).map((userRank, index) => (
                <tr
                  className="bg-gray-800"
                  key={userRank.id}
                  value={userRank.id}
                >
                  <td className="p-3">
                    <img
                      className="h-12 w-12 object-cover"
                      src={
                        index === 0
                          ? "public/medal/top1.png"
                          : index === 1
                          ? "public/medal/top2.png"
                          : index === 2
                          ? "public/medal/top3.png"
                          : ""
                      }
                      alt="unsplash image"
                    />
                  </td>
                  <td className="p-3">{userRank.place}</td>
                  <td className="p-3">{userRank.totalPoint}</td>
                  <td className="p-3 font-bold">{userRank.nickname}</td>
                  <td className="p-3">
                    <span className="bg-green-400 text-gray-50 rounded-md px-2">
                      {userRank.totaTime ? userRank.totalTime : "0"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {loggedIn ? (
          <>
            <h1 className="font-bold text-6xl custom-font">Your rank:</h1>
            <tr className="bg-gray-800">
              <td className="p-3">
                <div className="flex align-items-center">
                  <img
                    className="rounded-full h-12 w-12 object-cover"
                    src="https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt="unsplash image"
                  />
                </div>
              </td>
              <td className="p-3">{ranks.place}</td>
              <td className="p-3">{players.totalPoint}</td>
              <td className="p-3 font-bold">{user}</td>
              <td className="p-3">
                <span className="bg-red-400 text-gray-50 rounded-md px-2">
                  {players.totalTime}
                </span>
              </td>
            </tr>
          </>
        ) : (
          <>
            <h1 className="font-bold text-6xl custom-font">Your rank:</h1>
            <Link to={"/login"}>
              <div
                className="button w-100 h-10 bg-orange-500 rounded-lg cursor-pointer select-none
                active:translate-y-2  active:[box-shadow:0_0px_0_0_#FC5404,0_0px_0_0_#443737]
                active:border-b-[0px]
                transition-all duration-150 [box-shadow:0_10px_0_0_#FC5404,0_15px_0_0_#443737]
                border-b-[1px] border-orange-400"
              >
                <span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg ">
                  Please login to see your rank!
                </span>
              </div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default LeaderboardTable;
