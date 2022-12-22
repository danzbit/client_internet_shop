import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";

const MainLayout = ({ logoutUser, setLogoutUser }) => {
  return (
    <div className="wrapper">
      <Header logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
