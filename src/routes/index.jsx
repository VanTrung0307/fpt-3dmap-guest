/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import {
    createBrowserRouter
} from "react-router-dom";
import MainHome from "../canvas";
import App from './../App';
import { LoginPage } from "../components/LoginPage";
  
export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            children: [
                {
                    path: 'dashboard',
                    element: <MainHome />
                }
            ]
        },
        {
            path: 'main',
            element: <MainHome />,
            children: [
                {
                    path: 'login',
                    element: <LoginPage />
                }
            ]
        },
        {
            path: 'login',
            element: <LoginPage />,
        },
    ]
  );

