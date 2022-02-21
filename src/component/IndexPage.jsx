import "./IndexPage.css";
import { CarouselImage } from "./CarouselImage/CarouselImage.jsx";
import { ProductInformation } from "./ProductInformation/ProductInformation.jsx";

export const IndexPage = () => {
  return (
    <main>
      <div className="first-component">
        <CarouselImage />
        <ProductInformation />
      </div>
    </main>
  );
};
