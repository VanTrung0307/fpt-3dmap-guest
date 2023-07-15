/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import MainHome from "../canvas";
import App from "./../App";
import { LoginPage } from "../components/LoginPage";
import { RegisterPage } from "../components/RegisterPage";
import Leaderboard from "../components/Leaderboard/Leaderboard"
import ForgotPassword from "../components/ForgotPassword";
import VerifyEmail from "../components/VerifyEmail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "dashboard",
        element: <MainHome />,
      },
    ],
  },
  {
    path: "main",
    element: <MainHome />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
    children: [
      {
        path: "signup",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "signup",
    element: <RegisterPage />,
  },
  {
    path: "leaderboard",
    element: <Leaderboard />,
  },
  {
    path: "forgotPassword",
    element: <ForgotPassword />,
  },
]);
