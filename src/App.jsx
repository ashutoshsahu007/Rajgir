import React from "react";
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

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/download",
      element: <Download />,
    },
  ]);
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Header router={appRouter} />
      {/* <RouterProvider router={appRouter} /> */}
      <Body />
      <Bottom />
    </div>
  );
};

export default App;
