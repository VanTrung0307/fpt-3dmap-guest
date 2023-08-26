/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { login } from "../api/Account";
import { getPlayers, } from "../api/Player";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [studentId, setStudentId] = useState("");
  const [players, setPlayers] = useState("");
  const [nickname, setNickname] = useState("");

  const [events, setEvents] = useState([]);
  const [schools, setSchools] = useState([]);
  // const [userRank, setUserRank] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    const studentId = localStorage.getItem("studentId");
    const nickname = localStorage.getItem("nickname");
    if (token && email && studentId && nickname) {
      setLoggedIn(true);
      setUser(email);
      setStudentId(studentId);
      setNickname(nickname);
    }

    fetchRanksAndPlayers(studentId);
    fetchEventAndSchoolData();
  }, []);

  const fetchEventAndSchoolData = async () => {
    try {
      const eventsResponse = await fetch(`https://anhkiet-001-site1.htempurl.com/api/Events`);
      const schoolsResponse = await fetch(`https://anhkiet-001-site1.htempurl.com/api/Schools`);

      const eventsData = await eventsResponse.json();
      const schoolsData = await schoolsResponse.json();

      setEvents(eventsData);
      setSchools(schoolsData);
    } catch (error) {
      console.error("Error fetching event and school data:", error);
    }
  };

  const authenLogin = async (email, passcode) => {
    try {
      const response = await login(email, passcode);

      if (JSON.stringify(response.data) !== "{}") {
        localStorage.setItem("token", response.data.token);
        setLoggedIn(true);
        localStorage.setItem("email", response.data.email);

        localStorage.setItem("nickname", response.data.nickname);
        console.log("nickname", response.data.nickname);

        localStorage.setItem("studentId", response.data.studentId);
        await fetchRanksAndPlayers(response.data.studentId);

        toast.success("Login successful!", { autoClose: 3000 });
      } else if (response.data.status === 400 && response.data.errors) {
        const errorMessage = Object.values(response.data.errors)[0][0];
        toast.error(errorMessage, { autoClose: 3000 });
      } else {
        toast.error("Invalid username or password", { autoClose: 3000 });
      }
    } catch (error) {
      toast.error("Invalid username or password", { autoClose: 3000 });
    }
  };

  const logout = () => {
    setUser(false)
    setNickname(null);
    setLoggedIn(false);
    localStorage.removeItem("token");
  };

  const fetchRanksAndPlayers = async (userId) => {
    try {
      const playersResponse = await getPlayers();
      if (Array.isArray(playersResponse)) {
        const userRankIndex = playersResponse.find(
          (userRank) => userRank.studentId === userId
        );
        // console.log(userRankIndex);
        setPlayers(userRankIndex);
      } else {
        console.log("Error fetching ranks and players: Invalid data format");
      }
    } catch (error) {
      console.log("Error fetching ranks and players:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        authenLogin,
        logout,
        user,
        nickname,
        fetchRanksAndPlayers,
        players,
        events,
        schools
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthContext, AuthProvider };
