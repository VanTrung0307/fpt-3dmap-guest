/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authentication/AuthContext";
import "../Leaderboard/LeaderboardTable.css";
import Pagination from "./../Pagination";
import { useEffect } from "react";
import { getEvents } from "../../api/Event";
import { getSchools } from "../../api/Schools";
import { getPlayers, getRankofPlayers } from "../../api/Player";

const LeaderboardTable = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [events, setEvents] = useState([]);
  const [schools, setSchools] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [selectedSchool, setSelectedSchool] = useState("");
  const [rankedPlayers, setRankedPlayers] = useState([]);
  const [player, setPlayer] = useState([]);
  const ITEMS_PER_PAGE = 10;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const eventsData = await getEvents();
        const schoolsData = await getSchools();
        setEvents(eventsData);
        setSchools(schoolsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchRankedPlayers() {
      try {
        if (selectedEvent && selectedSchool) {
          const rankedPlayersData = await getRankofPlayers(
            selectedEvent,
            selectedSchool
          );
          setRankedPlayers(rankedPlayersData);
        }
      } catch (error) {
        console.error("Error fetching ranked players:", error);
      }
    }

    fetchRankedPlayers();
  }, [selectedEvent, selectedSchool]);

  useEffect(() => {
    async function fetchPlayers() {
      try {
        const playersData = await getPlayers();
        setPlayer(playersData);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    }

    if (!selectedEvent && !selectedSchool) {
      fetchPlayers();
    }
  }, [selectedEvent, selectedSchool]);

  const { loggedIn, time, point, players, nickname } = useContext(AuthContext);

  const sortedPlayers = (
    selectedEvent || selectedSchool ? rankedPlayers : player
  ).sort((a, b) => {
    if (b.totalPoint !== a.totalPoint) {
      return b.totalPoint - a.totalPoint;
    } else {
      return a.totalTime - b.totalTime;
    }
  });

  const yourRankIndex = sortedPlayers.findIndex(
    (player) => player.nickname === nickname
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="col-span-12">
        <h1 className="flex items-center justify-center font-bold text-6xl bebas-font mt-[90px]">
          Bảng xếp hạng
        </h1>

        <div className="flex items-center space-x-4 mb-4 mt-[50px]">
          <select
            className="px-4 py-2 bg-gray-800 text-gray-200 rounded-md w-[300px] focus:outline-none focus:ring focus:border-blue-300"
            value={selectedEvent}
            onChange={(e) => setSelectedEvent(e.target.value)}
          >
            <option value="">Chọn sự kiện</option>
            {events.map((event) => (
              <option key={event.id} value={event.id}>
                {event.name}
              </option>
            ))}
          </select>

          <select
            className="px-4 py-2 bg-gray-800 text-gray-200 rounded-md w-[300px] focus:outline-none focus:ring focus:border-blue-300"
            value={selectedSchool}
            onChange={(e) => setSelectedSchool(e.target.value)}
          >
            <option value="">Chọn trường</option>
            {schools.map((school) => (
              <option key={school.id} value={school.id}>
                {school.name}
              </option>
            ))}
          </select>
        </div>

        <div className="overflow-auto lg:overflow-visible">
          <table className="table flex w-[65rem] text-gray-400 border-separate space-y-6 text-sm">
            <thead className="bg-gray-800 text-gray-500">
              <tr>
                <th className="p-3">Xếp hạng</th>
                <th className="p-3 text-left">Biệt danh</th>
                <th className="p-3 text-left">Tổng điểm</th>
                <th className="p-3 text-left">Tổng thời gian</th>
              </tr>
            </thead>
            <tbody>
              {sortedPlayers
                .slice(
                  currentPage * ITEMS_PER_PAGE,
                  (currentPage + 1) * ITEMS_PER_PAGE
                )
                .sort((a, b) => b.totalPoint - a.totalPoint)
                .map((player, index) => {
                  const actualIndex = currentPage * ITEMS_PER_PAGE + index;
                  return (
                    <tr
                      key={player.id}
                      className={`bg-gray-800 ${
                        actualIndex === yourRankIndex ? "bg-green-700" : ""
                      }`}
                    >
                      <td className="p-3 text-center">
                        {currentPage === 0 && index < 3 ? (
                          <img
                            src={
                              index === 0
                                ? "/medal/top1.png"
                                : index === 1
                                ? "/medal/top2.png"
                                : index === 2
                                ? "/medal/top3.png"
                                : ""
                            }
                            className="h-12 w-12 object-cover inline-block"
                            alt="medal image"
                          />
                        ) : (
                          actualIndex + 1
                        )}
                      </td>
                      <td className="p-3 font-bold">{player.nickname}</td>
                      <td className="p-3">{player.totalPoint}</td>
                      <td className="p-3">
                        <span className="bg-green-400 text-gray-50 rounded-md px-2">
                          {player.totalTime}
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
            totalPages={
              selectedEvent || selectedSchool
                ? Math.ceil(rankedPlayers.length / ITEMS_PER_PAGE)
                : Math.ceil(player.length / ITEMS_PER_PAGE)
            }
            onPageChange={handlePageChange}
          />
        </div>
        {loggedIn ? (
          <>
            <h1 className="font-bold text-3xl bebas-font mt-[50px]">
              Xếp hạng của bạn:
            </h1>

            <table className="table flex text-gray-400 border-separate space-y-6 text-sm">
              <thead className="bg-gray-800 text-gray-500">
                <tr>
                  <th className="p-3">Xếp hạng</th>
                  <th className="p-3 text-left">Biệt danh</th>
                  <th className="p-3 text-left">Tổng điểm</th>
                  <th className="p-3 text-left">Tổng thời gian</th>
                </tr>
              </thead>

              <tr className="bg-gray-800">
                <td className="p-3">
                  <div className="flex align-items-center">
                    <img
                      className="h-12 w-12 object-cover inline-block"
                      src={
                        yourRankIndex === 0
                          ? "/medal/top1.png"
                          : yourRankIndex === 1
                          ? "/medal/top2.png"
                          : yourRankIndex === 2
                          ? "/medal/top3.png"
                          : ""
                      }
                      alt="unsplash image"
                    />
                  </div>
                </td>
                <td className="p-3 font-bold">{nickname}</td>
                <td className="p-3">{point ? point : "0"}</td>
                <td className="p-3">
                  <span className="bg-red-400 text-gray-50 rounded-md px-2">
                    {time ? time : "0"}
                  </span>
                </td>
              </tr>
            </table>
          </>
        ) : (
          <>
            <h1 className="font-bold text-3xl bebas-font mt-[50px]">
              Xếp hạng của bạn:
            </h1>
            <Link to={"/login"}>
              <div
                className="button w-100 h-10 bg-orange-500 rounded-lg cursor-pointer select-none
                active:translate-y-2  active:[box-shadow:0_0px_0_0_#FC5404,0_0px_0_0_#443737]
                active:border-b-[0px]
                transition-all duration-150 [box-shadow:0_10px_0_0_#FC5404,0_15px_0_0_#443737]
                border-b-[1px] border-orange-400"
              >
                <span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg ">
                  Đăng nhập để thấy xếp hạng của mình!
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
