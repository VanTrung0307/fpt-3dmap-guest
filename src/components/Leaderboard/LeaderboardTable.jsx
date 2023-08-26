/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRankofPlayers, getPlayers } from "../../api/Player";
import { AuthContext } from "../../authentication/AuthContext";
import "../Leaderboard/LeaderboardTable.css";
import Pagination from "./../Pagination";

const ITEMS_PER_PAGE = 10;

const LeaderboardTable = () => {
  const [rank, setRank] = useState([]);
  const [player, setPlayer] = useState([]);
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [selectedSchoolId, setSelectedSchoolId] = useState(null);

  useEffect(() => {
    const fetchRankOptions = async () => {
      try {
        // Fetch event and school data here
        const eventsResponse = await fetch(`https://anhkiet-001-site1.htempurl.com/api/Events`);
        const schoolsResponse = await fetch(`https://anhkiet-001-site1.htempurl.com/api/Schools`);

        const eventsData = await eventsResponse.json();
        const schoolsData = await schoolsResponse.json();

        // For the sake of example, let's assume you pick the first event and school
        const selectedEvent = eventsData[0];
        const selectedSchool = schoolsData[0];

        const rankedPlayers = await getRankofPlayers(selectedEvent.id, selectedSchool.id);
        setRank(rankedPlayers);
      } catch (error) {
        console.error("Error fetching ranked players:", error);
        setRank([]);
      }
    };

    fetchRankOptions();
  }, []);

  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (selected) => {
    setCurrentPage(selected);
  };

  const sortedPlayer = player.sort((a, b) => b.totalPoint - a.totalPoint);
  const offset = currentPage * ITEMS_PER_PAGE;
  const paginatedPlayer = sortedPlayer.slice(offset, offset + ITEMS_PER_PAGE);

  const { loggedIn, players, nickname } = useContext(AuthContext);
  console.log("nickname leader", nickname);
  console.log(players);

  const fetchRankOptions = async () => {
    try {
      const rankedPlayers = await getRankofPlayers(selectedEventId, selectedSchoolId);
      setRank(rankedPlayers);
    } catch (error) {
      console.error("Error fetching ranked players:", error);
      setRank([]);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="col-span-12">
        <h1 className="flex items-center justify-center font-bold text-6xl custom-font mt-[70px]">
          Leaderboard
        </h1>
        <div className="filter-controls">
          <label>
            Event ID:
            <select
              value={selectedEventId || ''}
              onChange={(e) => setSelectedEventId(e.target.value)}
            >
              <option value="">Select Event</option>
              {player.map(player => (
                <option key={player.eventId} value={player.eventId}>
                  {player.eventId}
                </option>
              ))}
            </select>
          </label>
          <label>
            School ID:
            <select
              value={selectedSchoolId || ''}
              onChange={(e) => setSelectedSchoolId(e.target.value)}
            >
              <option value="">Select School</option>
              {player.map(player => (
                <option key={player.schoolId} value={player.schoolId}>
                  {player.schoolId}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="overflow-auto lg:overflow-visible">
          <table className="table flex w-[65rem] text-gray-400 border-separate space-y-6 text-sm">
            <thead className="bg-gray-800 text-gray-500">
              <tr>
                <th className="p-3">Rank</th>
                <th className="p-3 text-left">Point</th>
                <th className="p-3 text-left">Username</th>
                <th className="p-3 text-left">Time Recorded</th>
              </tr>
            </thead>
            <tbody>
              {paginatedPlayer.map((userRank, index) => {
                const actualIndex = currentPage * ITEMS_PER_PAGE + index;
                return (
                  <tr
                    className="bg-gray-800"
                    key={userRank.id}
                    value={userRank.id}
                  >
                    <td className="p-3 text-center">
                      {actualIndex < 3 ? (
                        <img
                          className="h-12 w-12 object-cover inline-block"
                          src={
                            actualIndex === 0
                              ? "/medal/top1.png"
                              : actualIndex === 1
                                ? "/medal/top2.png"
                                : actualIndex === 2
                                  ? "/medal/top3.png"
                                  : ""
                          }
                          alt="unsplash image"
                        />
                      ) : (
                        actualIndex + 1
                      )}
                    </td>
                    <td className="p-3">{userRank.totalPoint}</td>
                    <td className="p-3 font-bold">{userRank.nickname}</td>
                    <td className="p-3">
                      <span className="bg-green-400 text-gray-50 rounded-md px-2">
                        {userRank.totalTime ? userRank.totalTime : "0"}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          &nbsp;
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(player.length / ITEMS_PER_PAGE)}
            onPageChange={handlePageChange}
          />
        </div>

        {loggedIn ? (
          <>
            {nickname}

            <h1 className="font-bold text-6xl custom-font">Your rank:</h1>

            <table className="table flex text-gray-400 border-separate space-y-6 text-sm">
              <thead className="bg-gray-800 text-gray-500">
                <tr>
                  <th className="p-3">Rank</th>
                  <th className="p-3 text-left">Point</th>
                  <th className="p-3 text-left">Username</th>
                  <th className="p-3 text-left">Time Recorded</th>
                </tr>
              </thead>

              <tr className="bg-gray-800">
                <td className="p-3">
                  <div className="flex align-items-center">
                    <img
                      className="rounded-full h-12 w-12 object-cover"
                      src="https://i.pinimg.com/736x/69/c4/46/69c4468eddacd590f1231e4de934ded1.jpg"
                      alt="unsplash image"
                    />
                  </div>
                </td>
                <td className="p-3">
                  {players?.totalPoint ? players.totalPoint : "-"}
                </td>
                <td className="p-3 font-bold">{nickname}</td>
                <td className="p-3">
                  <span className="bg-red-400 text-gray-50 rounded-md px-2">
                    {players?.totalTime ? players.totalTime : "0"}
                  </span>
                </td>
              </tr>
            </table>
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
