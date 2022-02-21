import { Frete } from "../Frete/Frete.jsx";
import { useState } from "react";
import "./ProductInformation.css";

export const ProductInformation = () => {
  const [selectButton, setSelectButton] = useState("200ml");
  const [productQuantity, setProductQuantity] = useState(1);
  const [price, setPrice] = useState(17.8);
  const [oldPrice, setOldPrice] = useState(30.0);
  const [pixPrice, setPixPrice] = useState(16.8);
  const [cardPrice, setCardPrice] = useState(3.27);
  const changeSelectedButton = (e) => {
    setSelectButton(e.target.value);
  };

  const addProduct = () => {
    if (productQuantity <= 98) {
      setProductQuantity(productQuantity + 1);

      setPrice(price + 16.81);
      setOldPrice(oldPrice + 30.01);
      setPixPrice(pixPrice + 17.88);
      setCardPrice(cardPrice + 3.27);
    }
  };

  const removeProduct = () => {
    if (productQuantity >= 2) {
      setProductQuantity(productQuantity - 1);
      setPrice(price - 16.81);
      setOldPrice(oldPrice - 30.01);
      setPixPrice(pixPrice - 17.88);
      setCardPrice(cardPrice - 3.27);
    }
  };
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
          value={"200ml"}
          onClick={(e) => {
            changeSelectedButton(e);
          }}
          className={selectButton === "200ml" ? "select-button" : ""}
        >
          200 ml
        </button>
        <button
          value={"400ml"}
          onClick={(e) => {
            changeSelectedButton(e);
          }}
          className={selectButton === "400ml" ? "select-button" : ""}
        >
          400 ml
        </button>
        <button
          value={"1l"}
          onClick={(e) => {
            changeSelectedButton(e);
          }}
          className={selectButton === "1l" ? "select-button" : ""}
        >
          1 L
        </button>
        <button
          value={"2l"}
          onClick={(e) => {
            changeSelectedButton(e);
          }}
          className={selectButton === "2l" ? "select-button" : ""}
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
        <a href="#"> Quer comprar em grandes quantidades?</a>
      </div>

      <Frete />
    </section>
  );
};
