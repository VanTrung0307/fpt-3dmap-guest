/* eslint-disable no-unused-vars */
import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { login } from "../api/Account";
import { getRanks } from "../api/Rank";
import { getPlayers } from "../api/Player";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [ranks, setRanks] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    if (token && username) {
      setLoggedIn(true);
      setUser(username);
    }
  }, []);

  const authenLogin = async (username, password) => {
    try {
      const response = await login(username, password);

      if (JSON.stringify(response.data) !== "{}") {
        localStorage.setItem("token", response.data.token);
        setLoggedIn(true);

        localStorage.setItem("username", username);
        setUser(username);

        fetchRanksAndPlayers();

        toast.success("Login successful!", { autoClose: 3000 });
        window.location.href = "/";
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

  const fetchRanksAndPlayers = async () => {
    try {
      const ranksResponse = await getRanks();
      const playersResponse = await getPlayers();
      setRanks(ranksResponse.data);
      setPlayers(playersResponse.data);
    } catch (error) {
      console.log("Error fetching ranks and players:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ loggedIn, authenLogin, logout, user, ranks, players }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthContext, AuthProvider };