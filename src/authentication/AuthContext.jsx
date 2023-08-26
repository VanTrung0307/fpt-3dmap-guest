/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { login } from "../api/Account";
import { getPlayers } from "../api/Player";
import {
  readLocalStorage,
  removeLocalStorage,
  writeLocalStorage,
} from "./localStorageService";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [studentId, setStudentId] = useState("");
  const [players, setPlayers] = useState("");
  const [nickname, setNickname] = useState("");
  const [point, setPoint] = useState("");
  const [time, setTime] = useState("");
  const [createAt, setCreateAt] = useState("");
  const [schoolName, setschoolName] = useState("");
  const [eventName, seteventName] = useState("");
  // const [userRank, setUserRank] = useState(null);

  useEffect(() => {
    const token = readLocalStorage("token");
    const email = readLocalStorage("email");
    const studentId = readLocalStorage("studentId");
    const nickname = readLocalStorage("nickname");
    const point = readLocalStorage("totalPoint");
    const time = readLocalStorage("totalTime");
    const createAt = readLocalStorage("createdAt");
    const schoolName = readLocalStorage("schoolName");
    const eventName = readLocalStorage("eventName");

    if (
      token &&
      email &&
      studentId &&
      nickname &&
      point &&
      time &&
      createAt &&
      schoolName &&
      eventName
    ) {
      setLoggedIn(true);
      setUser(email);
      setStudentId(studentId);
      setNickname(nickname);
      setPoint(point);
      setTime(time);
      setCreateAt(createAt);
      setschoolName(schoolName);
      seteventName(eventName);
    }
  }, []);

  const authenLogin = async (email, passcode) => {
    try {
      const response = await login(email, passcode);

      if (JSON.stringify(response.data) !== "{}") {
        writeLocalStorage("token", response.data.token);
        setLoggedIn(true);
        writeLocalStorage("email", response.data.email);
        writeLocalStorage("nickname", response.data.nickname);
        writeLocalStorage("totalPoint", response.data.totalPoint);
        writeLocalStorage("totalTime", response.data.totalTime);
        writeLocalStorage("studentId", response.data.studentId);
        writeLocalStorage("createdAt", response.data.createdAt);
        writeLocalStorage("schoolName", response.data.schoolName);
        writeLocalStorage("eventName", response.data.eventName);

        await fetchRanksAndPlayers(response.data.studentId);

        toast.success("Đăng nhập thành công", { autoClose: 3000 });
      } else if (response.data.status === 400 && response.data.errors) {
        const errorMessage = Object.values(response.data.errors)[0][0];
        toast.error(errorMessage, { autoClose: 3000 });
      } else {
        toast.error("Tài khoản hoặc mật khẩu sai", { autoClose: 3000 });
      }
    } catch (error) {
      toast.error("Tài khoản hoặc mật khẩu sai", { autoClose: 3000 });
    }
  };

  const logout = () => {
    setUser(false);
    setNickname(null);
    setPoint(false);
    setTime(false);
    setCreateAt(false);
    setschoolName(false);
    setCreateAt(false);
    seteventName(false);
    removeLocalStorage("token");
    window.location.href = "/";
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
        // console.log("Error fetching ranks and players: Invalid data format");
      }
    } catch (error) {
      // console.log("Error fetching ranks and players:", error);
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
        point,
        time,
        createAt,
        schoolName,
        eventName,
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
