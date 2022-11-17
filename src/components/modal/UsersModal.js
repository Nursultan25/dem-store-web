import React, { useState } from "react";
import "./Modal.css";
import axios from "axios";
import { UsersDropDown } from "../dropdown/DropDown";

const UsersModal = ({ active, setActive, closeModal }) => {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [selected, setSelected] = useState("");

  const usersParam = {
    login: login,
    password: password,
    role: selected,
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
        </div>
        <div className="users_roles">
          <UsersDropDown selected={selected} setSelected={setSelected} />
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
