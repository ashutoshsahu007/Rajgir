import React, { createContext, useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Bottom from "./components/Bottom";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Download from "./components/Download";
import Body2 from "./components/Body2";
import AppLayout from "./components/AppLayout";
import Body3 from "./components/Body3";
import Payment from "./components/Payment";
export const TouristDataProvider = createContext({});

const App = () => {
  const [touristData, setTouristData] = useState({ initialRenderBody2: false });
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/downloadticket",
          element: <Download />,
        },
        {
          path: "/body2",
          element: <Body2 />,
        },
        {
          path: "/body3",
          element: <Payment />,
        },
      ],
    },
  ]);
  return (
    <TouristDataProvider.Provider value={{ touristData, setTouristData }}>
      <div style={{ position: "relative", minHeight: "100vh" }}>
        <RouterProvider router={appRouter} />
        <Bottom />
      </div>
    </TouristDataProvider.Provider>
  );
};

export default App;
