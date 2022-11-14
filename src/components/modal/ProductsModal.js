import axios from "axios";
import React, { useState } from "react";
import { DropDownModal } from "../dropdown/DropDown";
import "./Modal.css";

const ProductsModal = ({ active, setActive, closeModal }) => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [categoryName, setCategoryName] = useState();
  const [price, setPrice] = useState([]);

  const params = {
    title: title,
    description: description,
    image: imageUrl,
    price: [
      {
        price: price,
      },
    ],
    category: categoryName,
  };

  const createProducts = () => {
    axios
      .post(
        "https://demo-store19.herokuapp.com/api/demo-store/products",
        params
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
        <div className="modal_header">
          <input
            type="text"
            placeholder="Заголовок"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="modal_cont">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Описание"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="modal_article">
          <input
            type="text"
            placeholder="Адрес картинки"
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
          />
        </div>
        <div className="modal_footer">
          <DropDownModal categoryName={categoryName} setCategoryName={setCategoryName} />
          <input
            type="text"
            placeholder="Цена"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <button
          onClick={() => {
            createProducts();
            closeModal(false)
            refreshPage();
          }}
        >
          Добавить
        </button>
      </div>
    </div>
  );
};

export default ProductsModal;
