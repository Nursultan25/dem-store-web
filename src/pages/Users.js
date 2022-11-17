import React, { useState } from "react";
import { Link } from "react-router-dom";
import UsersModal from "../components/modal/UsersModal";
import { UsersTableAll } from "../components/tableProducts/TableProducts";

function Users() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <section>
      <div className="wrapper">
        <nav>
          <Link to="/category" className="tabs_btn">
            Категории
          </Link>
          <Link to="/products" className="tabs_btn">
            Товары
          </Link>
          <Link className="active_tab">Пользователи</Link>
          <Link to="/prices" className="tabs_btn">
            Цены
          </Link>
        </nav>
        <div className="users_block">
          <div className="products_block_head">
            <button
              type="button"
              onClick={() => {
                setModalActive(true);
              }}
            >
              Создать
            </button>
          </div>
          <UsersTableAll />
        </div>
        <UsersModal
          active={modalActive}
          setActive={setModalActive}
          closeModal={setModalActive}
        />
      </div>
    </section>
  );
}

export default Users;
