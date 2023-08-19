/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { login } from "../api/Account";
import { getPlayers } from "../api/Player";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [studentId, setStudentId] = useState("");
  const [players, setPlayers] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    const studentId = localStorage.getItem("studentId");
    const nickname = localStorage.getItem("nickname");
    if (token && email && studentId && nickname) {
      setLoggedIn(true);
      setStudentId(studentId);
    }

    fetchRanksAndPlayers(studentId);
  }, []);

  const authenLogin = async (email, passcode) => {
    try {
      const response = await login(email, passcode);

      if (JSON.stringify(response.data) !== "{}") {
        localStorage.setItem("token", response.data.token);
        setLoggedIn(true);

        localStorage.setItem("studentId", response.data.studentId);
        await fetchRanksAndPlayers(response.data.studentId);

        localStorage.setItem("nickname", response.data.nickname);
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
        nickname,
        fetchRanksAndPlayers,
        players,
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
