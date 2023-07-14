/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import {
    createBrowserRouter
} from "react-router-dom";
import MainHome from "../canvas";
import App from './../App';
  
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
            element: <MainHome />
        }
    ]
  );

