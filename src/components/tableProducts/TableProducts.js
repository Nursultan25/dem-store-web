import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../pages/Pages.css";
import {
  setIsCategory,
  setIsDescribtion,
  setIsImage,
  setIsProductsId,
  setIsTitle,
} from "../../store/reducer";
import Loader from "../loader/Loader";
import UpdateModal from "../modal/UpdateModal";

// TABLE PRODUCTS

export function TableProducts() {
  const [open, setOpen] = useState(false);
  const [productId, setProductId] = useState();
  const categoryId = useSelector((state) => state.reducer.categoryId);

  const dispatch = useDispatch();

  const removeProduct = (id) => {
    axios
      .delete(
        `https://demo-store19.herokuapp.com/api/demo-store/products?id=${id}`
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
    <>
      <form className="table">
        <div className="thead">
          <ul>
            <li className="title">Заголовок</li>
            <li className="description">Описание</li>
            <li className="image">Картинка</li>
            <li className="price">Цена</li>
            <li className="category_name">Категория</li>
            <li className="delete_list"></li>
          </ul>
        </div>
        <div className="tbody">
          {categoryId?.map((item, i) => (
            <ul key={i}>
              <li className="title">{item.id}</li>
              <li className="description">{item.description}</li>
              <li className="image">
                <img src={item.image} alt="" />
              </li>
              <li className="price">
                {item.price?.map((prices, i) => (
                  <span key={i}>{prices.price},</span>
                ))}
              </li>
              <li className="category_name">{item.category.category_name}</li>
              <li className="delete_list">
                {console.log(item.id)}

                <button
                  className="update_product"
                  type="button"
                  onClick={() => {
                    dispatch(setIsProductsId(item.id));
                    dispatch(setIsTitle(item.title));
                    dispatch(setIsDescribtion(item.description));
                    dispatch(setIsImage(item.image));
                    dispatch(setIsCategory(item.category.category_name));
                    setOpen(true);
                  }}
                >
                  Изменить
                </button>
                <button
                  type="button"
                  onClick={() => {
                    removeProduct(item.id);
                    refreshPage();
                  }}
                >
                  Удалить
                </button>
              </li>
            </ul>
          ))}
          <UpdateModal open={open} setOpen={setOpen} setClose={setOpen} />
        </div>
      </form>
    </>
  );
}

// ALL TABLE PRODUCTS

export function AllTableProducts() {
  const [productsAll, setProductsAll] = useState();
  const [spinner, setSpinner] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setSpinner(true);
    axios
      .get("https://demo-store19.herokuapp.com/api/demo-store/products/all")
      .then((res) => {
        setSpinner(false);
        setProductsAll(res.data);
      })
      .catch((err) => {
        setSpinner(false);
        console.log(err);
      });
  }, []);

  const removeProduct = (delId) => {
    axios
      .delete(
        `https://demo-store19.herokuapp.com/api/demo-store/products?id=${delId}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const dispatch = useDispatch();

  function refreshPage() {
    setTimeout(() => {
      window.location.reload(false);
    }, 500);
    console.log("page to reload");
  }

  return (
    <>
      {spinner ? (
        <Loader />
      ) : (
        <form className="table">
          <div className="thead">
            <ul>
              <li className="title">Заголовок</li>
              <li className="description">Описание</li>
              <li className="image">Картинка</li>
              <li className="category_name">Категория</li>
              <li className="delete_list"></li>
            </ul>
          </div>
          <div className="tbody">
            {productsAll?.map((item, i) => (
              <ul key={i}>
                <li className="title">{item.title}</li>
                <li className="description">{item.description}</li>
                <li className="image">
                  <img src={item.image} alt="" />
                </li>
                <li className="category_name">{item.category.category_name}</li>
                <li className="delete_list">
                  <button
                    className="update_ntb"
                    type="button"
                    onClick={() => {
                      dispatch(setIsProductsId(item.id));
                      dispatch(setIsTitle(item.title));
                      dispatch(setIsDescribtion(item.description));
                      dispatch(setIsImage(item.image));
                      dispatch(setIsCategory(item.category.category_name));
                      setOpen(true);
                    }}
                  >
                    Изменить
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      removeProduct(item.id);
                      refreshPage();
                    }}
                  >
                    Удалить
                  </button>
                </li>
              </ul>
            ))}
            <UpdateModal open={open} setOpen={setOpen} setClose={setOpen} />
          </div>
        </form>
      )}
    </>
  );
}

// USERS TABLE

export function UsersTableAll() {
  const [usersAll, setUsersAll] = useState();
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    setSpinner(true);
    axios
      .get("https://demo-store19.herokuapp.com/api/demo-store/private-users")
      .then((res) => {
        setSpinner(false);
        setUsersAll(res.data);
      })
      .catch((err) => {
        setSpinner(false);
        console.log(err);
      });
  };

  const removeUser = (ids) => {
    axios
      .delete(
        `https://demo-store19.herokuapp.com/api/demo-store/private-users/delete?id=${ids}`
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
    <>
      {spinner ? (
        <Loader />
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th className="table_name">Имя</th>
              <th className="table_products">Роль</th>
              <th></th>
            </tr>
          </thead>
          {usersAll?.map((item, i) => (
            <tbody key={i}>
              <tr>
                <td className="table_name">{item.username}</td>
                <td className="table_products">{item.role}</td>
                <td>
                  <button
                    className="delete"
                    onClick={() => {
                      removeUser(item.user_id);
                      refreshPage();
                    }}
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      )}
    </>
  );
}
