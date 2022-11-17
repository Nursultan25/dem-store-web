import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "../App.css";
import "./Pages.css";
import { useDispatch, useSelector } from "react-redux";
import { setIsLogged } from "../store/reducer";

function Authorization() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  
  const dispatch = useDispatch()

  const login = () => {
    let userId = user;
    let passwordId = password;
    if (userId === "admin" && passwordId === "admin") {
      sessionStorage.setItem("token", "T");
      dispatch(setIsLogged(true));
    }
  };

  const isLogged = useSelector((state) => state.reducer.isLogged);

  if (sessionStorage.getItem("token") ) {
    return <Navigate to="/category" />;
  }

  return (
    <section>
      <div className="wrapper">
        <div className="authorisation_block">
          <div className="authorization_content">
            <h1>Авторизация</h1>
            <form className="log_in">
              <input
                type="text"
                placeholder="Логин"
                value={user}
                onChange={(e) => {
                  setUser(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </form>
            <button
              disabled={!user || !password}
              onClick={() => {
                login();
              }}
            >
              Войти
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Authorization;
