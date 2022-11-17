import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../components/loader/Loader";

function Prices() {
  const [price, setPrice] = useState([]);
  const [priceValue, setPriceValue] = useState();
  const [priceId, setPriceId] = useState();
  const [loader, setLoader] = useState(false);
  const [showUpdatePrice, setShowUpdatePrice] = useState(false);
  const [values, setValues] = useState();

  const getPrice = () => {
    setLoader(true);
    axios
      .get("https://demo-store19.herokuapp.com/api/demo-store/products/prices")
      .then((res) => {
        setLoader(false);
        setPrice(res.data);
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
      });
  };

  const updatedPrices = {
    id: priceId,
    price: values,
  };

  const updatePrice = () => {
    axios
      .put(
        `https://demo-store19.herokuapp.com/api/demo-store/products/prices`,
        updatedPrices
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removePrice = (prId) => {
    axios
      .delete(
        `https://demo-store19.herokuapp.com/api/demo-store/products/prices?priceId=${prId}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPrice();
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
          <Link to="/category" className="tabs_btn">
            Категории
          </Link>
          <Link to="/products" className="tabs_btn">
            Товары
          </Link>
          <Link to="/users" className="tabs_btn">
            Пользователи
          </Link>
          <Link className="active_tab">Цены</Link>
        </nav>
        {showUpdatePrice ? (
          <div className="price_content">
            <input
              type="number"
              defaultValue={priceValue}
              onChange={(e) => {
                setValues(e.target.value);
              }}
            />
            <button
              onClick={() => {
                updatePrice();
                refreshPage();
              }}
            >
              Изменить
            </button>
            <button
              onClick={() => {
                setShowUpdatePrice(false);
              }}
            >
              Отмена
            </button>
          </div>
        ) : (
          ""
        )}
        {loader ? (
          <Loader />
        ) : (
          <form className="table top">
            <div className="thead">
              <ul>
                <li className="prices">Цена</li>
                <li className="provider">Поставщик</li>
                <li className="product">Товар</li>
                <li className="btn_list"></li>
              </ul>
            </div>
            {price?.map((item, i) => (
              <div className="tbody" key={i}>
                <ul>
                  <li className="prices">{item.price}</li>
                  <li className="provider">{item.user.username}</li>
                  <li className="product">{item.product.title}</li>
                  <li className="btn_list">
                    <button
                      className="update_ntb"
                      type="button"
                      onClick={() => {
                        setPriceValue(item.price);
                        setPriceId(item.id);
                        setShowUpdatePrice(true);
                      }}
                    >
                      Изменить
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        removePrice(item.id);
                        refreshPage();
                      }}
                    >
                      Удалить
                    </button>
                  </li>
                </ul>
              </div>
            ))}
          </form>
        )}
      </div>
    </section>
  );
}

export default Prices;
