import "./RatingCarousel.css";
import { useEffect, useState, useRef } from "react";
import ArrowIcon from "../../assets/svgIcons/ArrowIcon.svg";
import { StarsBuilding } from "../../services/StarsBuilding.js";
import { Api } from "../../services/Api/Api.js";
export const RatingCarousel = () => {
  const [ratingPost, setRatingPost] = useState([]);
  const [totalStars, setTotalStars] = useState(0);
  const [scroll, setScroll] = useState(0);
  const carousel = useRef(null);

  useEffect(() => {
    Api.get("/rating").then((response) => {
      setRatingPost(response.data);
    });
  }, []);

  useEffect(() => {
    const stars = ratingPost.reduce((acc, value) => {
      return (acc += value.stars);
    }, 0);
    setTotalStars(Math.round(stars / ratingPost.length));
  }, [ratingPost]);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
    setScroll(carousel.current.scrollLeft);
  };
  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
    setScroll(carousel.current.scrollLeft);
  };

  return (
    <section className="main-container-rating">
      <div className="rating-info">
        <h1>Opinião de quem comprou</h1>
        <div className="rating-total">
          <p>({ratingPost.length} avaliações)</p>
          <div className="line-seper"></div>
          <div className="stars-list">{StarsBuilding(totalStars)}</div>
        </div>
      </div>
      <div className="carrosel-slide">
        <button className="invert-position" onClick={handleLeftClick}>
          <img src={ArrowIcon} alt="scroll left" />
        </button>
        <div className="carousel-container" ref={carousel}>
          {ratingPost.map((item) => {
            const { id, name, stars, description, date } = item;
            return (
              <div className="rating-card" key={id}>
                <h2>{name}</h2>
                <div className="stars-list">{StarsBuilding(stars)}</div>
                <p>" {description} "</p>
                <span>{date}</span>
              </div>
            );
          })}
        </div>
        <button className="invert-position" onClick={handleRightClick}>
          <img src={ArrowIcon} alt="scroll right" />
        </button>
      </div>
      <section className="carousel-buttons">
        <button
          className={
            scroll <= 1000 ? "slide-rating-style-1" : "slide-rating-style-2"
          }
        ></button>
        <button
          className={
            scroll >= 1000 && scroll <= 2000
              ? "slide-rating-style-1"
              : "slide-rating-style-2"
          }
        ></button>
        <button
          className={
            scroll >= 2000 ? "slide-rating-style-1" : "slide-rating-style-2"
          }
        ></button>
      </section>
    </section>
  );
};
