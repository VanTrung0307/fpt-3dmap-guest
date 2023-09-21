/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { getEvents } from "../api/Event";

const Timeline = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventData = await getEvents();
        setEvents(eventData);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  const getStatusColor = (status) => {
    if (status === "ACTIVE") {
      return "bg-green-500 text-white";
    } else if (status === "INACTIVE") {
      return "bg-red-500 text-white";
    }
    return "";
  };

  return (
    <div className="w-8/12 md:w-12/12 lg:6/12 mx-auto relative py-20">
      <h1 className="text-3xl text-center font-bold text-blue-500">
        Sự kiện đang diễn ra
      </h1>
      <div className="border-l-4 border-[#FF9B50] rounded mt-10 ml-[-50px]">
        {isLoading ? (
          <div className="loading-animation flex justify-center items-center">
            <div
              className="animate-spin inline-block w-10 h-10 border-[3px] border-current border-t-transparent text-orange-600 rounded-full"
              role="status"
              aria-label="loading"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          events.map((event, index) => (
            <div
              key={index}
              className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-gradient-to-r from-[#FFA41B] to-[#FD8D14] text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0"
            >
              <div className="w-5 h-5 bg-blue-500 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

              <div className="w-10 h-1 bg-[#FF9B50] absolute -left-10 z-0"></div>

              <div className="flex-auto">
                <h1 className="text-lg">{formatDate(event.createdAt)}</h1>
                <h1 className="text-xl font-bold">{event.name}</h1>
                <h3
                  className={`text-sm ${getStatusColor(
                    event.status
                  )} w-[60px] p-[5px] rounded fade`}
                  style={{ marginTop: "10px" }}
                >
                  {event.status}
                </h3>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Timeline;
