import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Cart from "./pages/Cart";
import FullPizza from "./pages/FullPizza";
import Home from "./pages/Home";
import Login from "./pages/Login.jsx";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import "./scss/app.scss";

function App() {
  const [logoutUser, setLogoutUser] = useState(false);
  return (
    <Routes>
      <Route path="/login" element={<Login setLogoutUser={setLogoutUser} />} />
      <Route
        path="/register"
        element={<Register setLogoutUser={setLogoutUser} />}
      />
      <Route
        path="/"
        element={
          <MainLayout logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
        }
      >
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="pizza/:id" element={<FullPizza />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
