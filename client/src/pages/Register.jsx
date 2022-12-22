import axios from "axios";
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import loginImg from "../assets/img/icons8-multiply-30.png";
import pizzaImg from "../assets/img/pizza.png";
import "../scss/components/_login.scss";

const Register = ({ setLogoutUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/auth/register", {
        email,
        password,
      })
      .then((response) => {
        console.log("response", response);
        localStorage.setItem(
          "login",
          JSON.stringify({
            userLogin: true,
            token: response.data.access_token,
          })
        );
        setError("");
        setEmail("");
        setPassword("");
        setLogoutUser(false);
        navigate("/");
      })
      .catch((error) => setError(error.response.data.message));
  };
  return (
    <div className="login__container">
      <div className="login">
        <div className="login__carts">
          <img className="login__img" src={pizzaImg} alt="" />
        </div>
        <div className="login__carts">
          <NavLink to="/">
            <button className="login__btn">
              <img src={loginImg} alt="" />
            </button>
          </NavLink>
          <h1 className="login__title">Pizza Register</h1>

          <form className="login__input" onSubmit={register}>
            <div className="login__inputs">
              <input
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="login__inputs">
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="login__inputs">
              <button type="submit" className="login__btn--submit">
                Register
              </button>
            </div>
          </form>
          {error && (
            <p
              style={{
                color: "red",
                textAlign: "center",
                fontSize: "31px",
                letterSpacing: "1px",
              }}
            >
              {error}
            </p>
          )}
          <div className="item__register">
            <p>
              уже есть аккаунт?{" "}
              <Link to="/login" className="item__register--link">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
