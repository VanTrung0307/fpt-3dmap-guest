/* eslint-disable no-unused-vars */
import React from "react";
import "../Leaderboard/LeaderboardTable.css";

const LeaderboardTable = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="col-span-8">
        <h1 className="flex items-center justify-center font-bold text-6xl custom-font">
          Leaderboard
        </h1>
        <div className="overflow-auto lg:overflow-visible">
          <table className="table text-gray-400 border-separate space-y-6 text-sm">
            <thead className="bg-gray-800 text-gray-500">
              <tr>
                <th className="p-3">Brand</th>
                <th className="p-3 text-left">Category</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-800">
                <td className="p-3">
                  <div className="flex align-items-center">
                    <img
                      className="rounded-full h-12 w-12 object-cover"
                      src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
                      alt="unsplash image"
                    />
                    <div className="ml-3">
                      <div className="">Appple</div>
                      <div className="text-gray-500">mail@rgmail.com</div>
                    </div>
                  </div>
                </td>
                <td className="p-3">Technology</td>
                <td className="p-3 font-bold">200.00$</td>
                <td className="p-3">
                  <span className="bg-green-400 text-gray-50 rounded-md px-2">
                    available
                  </span>
                </td>
              </tr>
              <tr className="bg-gray-800">
                <td className="p-3">
                  <div className="flex align-items-center">
                    <img
                      className="rounded-full h-12 w-12 object-cover"
                      src="https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                      alt="unsplash image"
                    />
                    <div className="ml-3">
                      <div className="">Realme</div>
                      <div className="text-gray-500">mail@rgmail.com</div>
                    </div>
                  </div>
                </td>
                <td className="p-3">Technology</td>
                <td className="p-3 font-bold">200.00$</td>
                <td className="p-3">
                  <span className="bg-red-400 text-gray-50 rounded-md px-2">
                    no stock
                  </span>
                </td>
              </tr>
              <tr className="bg-gray-800">
                <td className="p-3">
                  <div className="flex align-items-center">
                    <img
                      className="rounded-full h-12 w-12 object-cover"
                      src="https://images.unsplash.com/photo-1600856209923-34372e319a5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2135&q=80"
                      alt="unsplash image"
                    />
                    <div className="ml-3">
                      <div className="">Samsung</div>
                      <div className="text-gray-500">mail@rgmail.com</div>
                    </div>
                  </div>
                </td>
                <td className="p-3">Technology</td>
                <td className="p-3 font-bold">200.00$</td>
                <td className="p-3">
                  <span className="bg-yellow-400 text-gray-50  rounded-md px-2">
                    start sale
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardTable;