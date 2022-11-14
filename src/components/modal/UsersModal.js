import React, { useState } from "react";
import "./Modal.css";
import axios from "axios";

const UsersModal = ({ active, setActive, closeModal }) => {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState("ADMIN");

  const usersParam = {
    id: "Идентификатор",
    login: login,
    password: password,
    role: role,
  };

  const createUser = () => {
    axios
      .post(
        "https://demo-store19.herokuapp.com/api/demo-store/private-users",
        usersParam
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function refreshPage() {
    setTimeout(() => {
      window.location.reload(false);
    }, 500);
    console.log("page to reload");
  }

  return (
    <div
      className={active ? "modal active" : "modal block"}
      style={{ display: active ? "flex" : "none" }}
      onClick={() => setActive(false)}
    >
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <div className="users_modal_header">
          <input
            type="text"
            placeholder="Имя"
            onChange={(e) => {
              setLogin(e.target.value);
            }}
          />
          <label htmlFor="">
            <input
              type="text"
              value={role}
              placeholder="Роль"
              onChange={(e) => {
                setRole(e.target.value);
              }}
            />
            <p>CLIENT, ADMIN, PROVIDER</p>
          </label>
        </div>
        <div className="modal_password">
          <input
            type="text"
            placeholder="Пароль"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button
          onClick={() => {
            createUser();
            closeModal(false);
            refreshPage();
          }}
        >
          Добавить
        </button>
      </div>
    </div>
  );
};

export default UsersModal;
