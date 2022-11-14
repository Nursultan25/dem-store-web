import React, { useState } from "react";
import "../App.css";
import "./Pages.css";

function Authorization() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  // const login = () => {
  // 	axios.get("")
  // }

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
                type="text"
                placeholder="Пароль"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </form>
            <button disabled={!user || !password}>Войти</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Authorization;
