import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Pages.css";

function Category() {
  const [categoryData, setCategoryData] = useState();
  const [values, setValues] = useState();

  const getCategory = () => {
    axios
      .get("https://demo-store19.herokuapp.com/api/demo-store/categories")
      .then((res) => {
        setCategoryData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const header = {
    name: values,
  };

  const createCategory = () => {
    axios
      .post(
        `https://demo-store19.herokuapp.com/api/demo-store/categories`,
        header
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeCategory = (id) => {
    axios
      .delete(
        `https://demo-store19.herokuapp.com/api/demo-store/categories?categoryName=${id}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCategory();
  }, []);

  function refreshPage() {
    setTimeout(() => {
      window.location.reload(false);
    }, 500);
    console.log("page to reload");
  }

  return (
    <section>
      <div className="wrapper">
        <nav>
          <Link className="active_tab">Категории</Link>
          <Link to="/products" className="tabs_btn">
            Товары
          </Link>
          <Link to="/users" className="tabs_btn">
            Пользователи
          </Link>
        </nav>
        <div className="main_page_block">
          <div className="search_content">
            <div className="create">
              <input
                type="text"
                placeholder="Введите название"
                onChange={(e) => {
                  setValues(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  createCategory();
                  refreshPage();
                }}
              >
                Создать
              </button>
            </div>
            <button>Поиск</button>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th className="table_name">Название</th>
                <th className="table_products">Склад</th>
                <th></th>
              </tr>
            </thead>
            {categoryData?.map((categories, i) => (
              <tbody key={i}>
                <tr>
                  <td className="table_name">{categories.category_name}</td>
                  <td className="table_products">{categories.in_stock}</td>
                  <td>
                    <button
                      className="delete"
                      onClick={() => {
                        removeCategory(categories.category_name);
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
        </div>
      </div>
    </section>
  );
}

export default Category;
