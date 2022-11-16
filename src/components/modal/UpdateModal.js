import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { DropDownModal } from "../dropdown/DropDown";
import "./Modal.css";

const UpdateModal = ({ open, setOpen, setClose }) => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [categoryName, setCategoryName] = useState();
  const [price, setPrice] = useState([]);

  const productsId = useSelector((state) => state.reducer.productsId);
  const istitle = useSelector((state) => state.reducer.istitle);
  const isdescription = useSelector((state) => state.reducer.isdescribtion);
  const isimage = useSelector((state) => state.reducer.isimage);

  console.log(productsId);

  const params = {
    id: productsId,
    title: title,
    description: description,
    image: imageUrl,
    category: categoryName,
  };

  const updateProduct = () => {
    axios
      .put(
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
      className={open ? "modal active" : "modal block"}
      style={{ display: open ? "flex" : "none" }}
      onClick={() => setOpen(false)}
    >
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <div className="modal_header">
          <input
            type="text"
            placeholder="Заголовок"
            defaultValue={istitle}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="modal_cont">
          <textarea
            defaultValue={isdescription}
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
            defaultValue={isimage}
            placeholder="Адрес картинки"
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
          />
        </div>
        <div className="modal_footer">
          <DropDownModal
            categoryName={categoryName}
            setCategoryName={setCategoryName}
          />
          <input
            type="text"
            placeholder="Цена"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <button
          type="button"
          onClick={() => {
            updateProduct();
            setClose(false);
            // refreshPage();
          }}
        >
          Добавить
        </button>
      </div>
    </div>
  );
};

export default UpdateModal;
