import "./CarouselImage.css";
import Product1 from "../../assets/product/Product 639x639.png";
import Product2 from "../../assets/product/Product 113x127.png";

import { useState } from "react";
export const CarouselImage = () => {
  const [imageFocus, setImageFocus] = useState(false);
  const changeImage = () => {
    if (imageFocus === false) {
      setImageFocus(true);
    } else {
      setImageFocus(false);
    }
  };
  const preventWarning = () => {};
  return (
    <section className="main-container">
      <section className="carousel">
        <div className="promotion">
          <p>-22%</p>
        </div>
        <img
          onClick={changeImage}
          src={Product1}
          className={imageFocus ? "grayScale" : ""}
          alt="Óle de coco, santo óleo"
        />
      </section>
      <section className="carousel-buttons">
        <button
          onClick={changeImage}
          className={imageFocus ? "slide-style-2" : "slide-style-1"}
        ></button>
        <button
          onClick={changeImage}
          className={imageFocus ? "slide-style-1" : "slide-style-2"}
        ></button>
        <button className="slide-style-2"></button>
      </section>
      <section className="images-carousel">
        <div
          className={imageFocus ? "" : "border-focus"}
          onClick={imageFocus ? changeImage : preventWarning}
        >
          <img src={Product2} alt="óleo de coco." />
        </div>
        <div
          className={imageFocus ? "border-focus" : ""}
          onClick={imageFocus ? preventWarning : changeImage}
        >
          <img src={Product2} alt="óleo de coco." className="grayScale" />
        </div>
      </section>
    </section>
  );
};
