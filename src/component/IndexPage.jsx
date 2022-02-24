import "./IndexPage.css";
import { CarouselImage } from "./CarouselImage/CarouselImage.jsx";
import { ProductInformation } from "./ProductInformation/ProductInformation.jsx";
import { ProductFeatures } from "./ProductFeatures/ProductFeatures.jsx";
import { ProductDescription } from "./ProductDescription/ProductDescription.jsx";
import { RatingCarousel } from "./RatingCarousel/RatingCarousel.jsx";
export const IndexPage = () => {
  return (
    <main>
      <div className="first-component">
        <CarouselImage />
        <ProductInformation />
      </div>
      <ProductFeatures />
      <ProductDescription />
      <RatingCarousel />
    </main>
  );
};
