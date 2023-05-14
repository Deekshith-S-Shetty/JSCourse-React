import React from "react";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Components/Home/About";
import Register from "./Components/Authentication/Register";
import Login from "./Components/Authentication/Login";
import Leaderboard from "./Components/Home/Leaderboard";
import Workspace from "./Components/Home/Workspace";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Layout children={<Home />} />}></Route>
      <Route
        exact
        path="/about"
        element={<Layout children={<About />} />}
      ></Route>
      <Route
        exact
        path="/register"
        element={<Layout children={<Register />} />}
      ></Route>
      <Route
        exact
        path="/login"
        element={<Layout children={<Login />} />}
      ></Route>
      <Route
        exact
        path="/leaderboard"
        element={<Layout children={<Leaderboard />} />}
      ></Route>
      <Route
        exact
        path="/home/:name"
        element={<Workspace />}
      ></Route>
    </Routes>
  );
};

export default App;
