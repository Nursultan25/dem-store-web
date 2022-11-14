import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DropDown } from "../components/dropdown/DropDown";
import ProductsModal from "../components/modal/ProductsModal";
import {
  AllTableProducts,
  TableProducts,
} from "../components/tableProducts/TableProducts";
import "./Pages.css";

function Products() {
  const [activeModal, setActiveModal] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <section>
      <div className="wrapper">
        <nav>
          <Link to="/category" className="tabs_btn">
            Категории
          </Link>
          <Link className="active_tab">Товары</Link>
          <Link to="/users" className="tabs_btn">
            Пользователи
          </Link>
        </nav>
        <div className="products_block">
          <div className="products_block_head">
            <button
              onClick={() => {
                setActiveModal(true);
              }}
            >
              Создать
            </button>
            <DropDown selected={selected} setSelected={setSelected} />
          </div>
          {selected ? <TableProducts /> : <AllTableProducts />}
        </div>
        <ProductsModal
          active={activeModal}
          setActive={setActiveModal}
          closeModal={setActiveModal}
        />
      </div>
    </section>
  );
}

export default Products;
