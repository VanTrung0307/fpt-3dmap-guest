/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import MainHome from "../canvas";
import ConfirmResetPassword from "../components/ConfirmResetPassword";
import ForgotPassword from "../components/ForgotPassword";
import Leaderboard from "../components/Leaderboard/Leaderboard";
import { LoginPage } from "../components/LoginPage";
import { RegisterPage } from "../components/RegisterPage";
import App from "./../App";
import Account from "../components/Account";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainHome />,
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
      {
        path: "forgotPassword",
        element: <ForgotPassword />,
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
    path: "account",
    element: <Account />,
  },
  // {
  //   path: "forgotPassword",
  //   element: <ForgotPassword />,
  //   children: [
  //     {
  //       path: "reset",
  //       element: <ConfirmResetPassword />,
  //     },
  //   ],
  // },
  {
    path: "reset",
    element: <ConfirmResetPassword />,
  },
]);
