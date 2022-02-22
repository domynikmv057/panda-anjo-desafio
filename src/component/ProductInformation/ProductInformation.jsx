import { Frete } from "../Frete/Frete.jsx";
import { useEffect, useState } from "react";
import "./ProductInformation.css";

export const ProductInformation = () => {
  const [selectButton, setSelectButton] = useState("1");
  const [productQuantity, setProductQuantity] = useState(1);
  const [price, setPrice] = useState(23.4);
  const [oldPrice, setOldPrice] = useState(30.0);
  const [pixPrice, setPixPrice] = useState(22.23);
  const [cardPrice, setCardPrice] = useState(7.8);
  const [basePrice, setBasePrice] = useState({
    price: 23.4,
    oldPrice: 30.0,
    pixPrice: 22.23,
    cardPrice: 7.8,
  });

  const changeSelectedButton = (e) => {
    setSelectButton(e.target.value);
    setProductQuantity(1);
  };

  const addProduct = () => {
    if (productQuantity <= 98) {
      setProductQuantity(productQuantity + 1);
    }
  };

  const removeProduct = () => {
    if (productQuantity >= 2) {
      setProductQuantity(productQuantity - 1);
    }
  };

  useEffect(() => {
    setPrice(basePrice.price * productQuantity * selectButton);
    setOldPrice(basePrice.oldPrice * productQuantity * selectButton);
    setCardPrice(basePrice.cardPrice * productQuantity * selectButton);
    setPixPrice(basePrice.pixPrice * productQuantity * selectButton);
  }, [
    basePrice.price,
    basePrice.oldPrice,
    basePrice.cardPrice,
    basePrice.pixPrice,
    productQuantity,
    selectButton,
  ]);
  return (
    <section className="main-container">
      <div className="product-title">
        <h1>
          Oleo de coco Extra Virgem Extraido da Película do Coco Santo Oleo -
          200ml
        </h1>
      </div>

      <div className="button-options">
        <p>SELECIONE UMA DAS OPÇÕES ABAIXO</p>
        <button
          value={"1"}
          onClick={(e) => {
            changeSelectedButton(e);
          }}
          className={selectButton === "1" ? "select-button" : ""}
        >
          200 ml
        </button>
        <button
          value={"2"}
          onClick={(e) => {
            changeSelectedButton(e);
          }}
          className={selectButton === "2" ? "select-button" : ""}
        >
          400 ml
        </button>
        <button
          value={"3"}
          onClick={(e) => {
            changeSelectedButton(e);
          }}
          className={selectButton === "3" ? "select-button" : ""}
        >
          1 L
        </button>
        <button
          value={"4"}
          onClick={(e) => {
            changeSelectedButton(e);
          }}
          className={selectButton === "4" ? "select-button" : ""}
        >
          2 L
        </button>
      </div>

      <div className="product-price">
        <div className="pix-price">
          <div>
            <p className="price-text pix-value-text">
              R${" "}
              {pixPrice.toLocaleString("pt-br", { minimumFractionDigits: 2 })}{" "}
            </p>
            <div className="discount">- 5%</div>
          </div>
          <p className="card-division">Via Boleto, PIX e transferência</p>
        </div>
        <div>
          <p className="price-text">
            <span>
              R${" "}
              {oldPrice.toLocaleString("pt-br", { minimumFractionDigits: 2 })}
            </span>{" "}
            R$ {price.toLocaleString("pt-br", { minimumFractionDigits: 2 })}
          </p>
          <p className="card-division">
            ou em{" "}
            <span>
              3x R${" "}
              {cardPrice.toLocaleString("pt-br", { minimumFractionDigits: 2 })}
            </span>{" "}
            s/ juros
          </p>
        </div>
      </div>

      <div className="product-quantity">
        <div className="button-product-quantity">
          <button onClick={removeProduct}>-</button>
          <span>{productQuantity}</span>
          <button onClick={addProduct}>+</button>
        </div>
        <div>
          <button className="sign-button">COMPRAR</button>
        </div>
      </div>
      <div className="link-large-quantities ">
        <a href="#">
          {" "}
          Quer comprar em grandes quantidades?{" "}
          <span className="lin-span-more">Temos um desconto especial!</span>
        </a>
      </div>

      <Frete />
    </section>
  );
};
