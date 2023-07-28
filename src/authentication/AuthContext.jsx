/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { login } from "../api/Account";
import { getPlayers } from "../api/Player";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [userId, setUserId] = useState("");
  const [players, setPlayers] = useState();
  // const [userRank, setUserRank] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    const userId = localStorage.getItem("userId");
    if (token && username && userId) {
      setLoggedIn(true);
      setUser(username);
      setUserId(userId);
    }

    fetchRanksAndPlayers(userId);
  }, []);

  const authenLogin = async (username, password) => {
    try {
      const response = await login(username, password);

      if (JSON.stringify(response.data) !== "{}") {
        localStorage.setItem("token", response.data.token);
        setLoggedIn(true);

        localStorage.setItem("username", username);
        setUser(username);

        console.log(response.data.userId);
        localStorage.setItem("userId", response.data.userId);
        await fetchRanksAndPlayers(response.data.userId);
        // setUserId(response.data.userId);

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
    setUser(null);
    setLoggedIn(false);
    localStorage.removeItem("token");
  };

  const fetchRanksAndPlayers = async (userId) => {
    try {
      const playersResponse = await getPlayers();
      if (Array.isArray(playersResponse)) {
        const userRankIndex = playersResponse.find(
          (userRank) => userRank.userId === userId
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
