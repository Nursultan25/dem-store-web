import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../../pages/Pages.css";

// TABLE PRODUCTS

export function TableProducts() {
  const categoryId = useSelector((state) => state.reducer.categoryId);

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
            <li className="title">{item.title}</li>
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
              <button
                className="delete_btn"
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
      </div>
    </form>
  );
}

// ALL TABLE PRODUCTS

export function AllTableProducts() {
  const [productsAll, setProductsAll] = useState();

  useEffect(() => {
    axios
      .get("https://demo-store19.herokuapp.com/api/demo-store/products/all")
      .then((res) => {
        setProductsAll(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
        {productsAll?.map((item, i) => (
          <ul key={i}>
            <li className="title">{item.title}</li>
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
              <button
                className="delete_btn"
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
      </div>
    </form>
  );
}

// USERS TABLE

export function UsersTableAll() {
  const [usersAll, setUsersAll] = useState();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .get("https://demo-store19.herokuapp.com/api/demo-store/private-users")
      .then((res) => {
        setUsersAll(res.data);
      })
      .catch((err) => {
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
      {/* <form className="table">
        <div className="thead">
          <ul>
            <li className="name">Имя</li>
            <li className="role">Роль</li>
            <li className="delete_list_user"></li>
          </ul>
        </div>
        <div className="tbody">
          {usersAll?.map((item, i) => (
            <ul key={i}>
              <li className="name">{item.username}</li>
              <li className="role">{item.role}</li>
              <li className="delete_list_user">
                <button
                  className="delete_btn"
                  onClick={() => {
                    removeUser(item.user_id);
                    refreshPage();
                  }}
                >
                  Удалить
                </button>
              </li>
            </ul>
          ))}
        </div>
      </form> */}
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
                    removeUser(item.category_name);
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
    </>
  );
}
