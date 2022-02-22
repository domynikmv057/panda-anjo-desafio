import "./ProductFeatures.css";
import LowCarb from "../../assets/svgIcons/LowCarb.svg";
import NoDairy from "../../assets/svgIcons/NoDairy.svg";
import NoGluten from "../../assets/svgIcons/NoGluten.svg";
import Organic from "../../assets/svgIcons/Organic.svg";

export const ProductFeatures = () => {
  return (
    <section>
      <div className="main-container-features">
        <div className="svg-container">
          <img src={NoGluten} alt="sem glútem" className="big-svg" />
          <span>Sem Glúten</span>
        </div>

        <div className="svg-container">
          <img src={Organic} alt="organico" className="big-svg" />
          <span>Orgânico</span>
        </div>

        <div className="svg-container">
          <img src={LowCarb} alt="lowCarb" className="normal-svg" />
          <span>LowCarb</span>
        </div>

        <div className="svg-container">
          <img src={NoDairy} alt="sem lacteos" className="normal-svg" />
          <span>Sem Lácteos</span>
        </div>
      </div>
      <div className="food-background"></div>
    </section>
  );
};
