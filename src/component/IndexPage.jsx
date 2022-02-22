import "./IndexPage.css";
import { CarouselImage } from "./CarouselImage/CarouselImage.jsx";
import { ProductInformation } from "./ProductInformation/ProductInformation.jsx";
import { ProductFeatures } from "./ProductFeatures/ProductFeatures.jsx";
export const IndexPage = () => {
  return (
    <main>
      <div className="first-component">
        <CarouselImage />
        <ProductInformation />
      </div>
      <ProductFeatures />
    </main>
  );
};
