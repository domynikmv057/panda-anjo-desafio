import FullStar from "../assets/svgIcons/FullStar.svg";
import EmptyStar from "../assets/svgIcons/EmptyStar.svg";

export const StarsBuilding = (stars) => {
  if (stars === 5) {
    return (
      <ul>
        <li>
          <img src={FullStar} alt="star" />
        </li>
        <li>
          <img src={FullStar} alt="star" />
        </li>
        <li>
          <img src={FullStar} alt="star" />
        </li>
        <li>
          <img src={FullStar} alt="star" />
        </li>
        <li>
          <img src={FullStar} alt="star" />
        </li>
      </ul>
    );
  } else if (stars === 4) {
    return (
      <ul>
        <li>
          <img src={FullStar} alt="star" />
        </li>
        <li>
          <img src={FullStar} alt="star" />
        </li>
        <li>
          <img src={FullStar} alt="star" />
        </li>
        <li>
          <img src={FullStar} alt="star" />
        </li>
        <li>
          <img src={EmptyStar} alt="star" />
        </li>
      </ul>
    );
  } else if (stars === 3) {
    return (
      <ul>
        <li>
          <img src={FullStar} alt="star" />
        </li>
        <li>
          <img src={FullStar} alt="star" />
        </li>
        <li>
          <img src={FullStar} alt="star" />
        </li>
        <li>
          <img src={EmptyStar} alt="star" />
        </li>
        <li>
          <img src={EmptyStar} alt="star" />
        </li>
      </ul>
    );
  } else if (stars === 2) {
    return (
      <ul>
        <li>
          <img src={FullStar} alt="star" />
        </li>
        <li>
          <img src={FullStar} alt="star" />
        </li>
        <li>
          <img src={EmptyStar} alt="star" />
        </li>
        <li>
          <img src={EmptyStar} alt="star" />
        </li>
        <li>
          <img src={EmptyStar} alt="star" />
        </li>
      </ul>
    );
  } else if (stars === 1) {
    return (
      <ul>
        <li>
          <img src={FullStar} alt="star" />
        </li>
        <li>
          <img src={EmptyStar} alt="star" />
        </li>
        <li>
          <img src={EmptyStar} alt="star" />
        </li>
        <li>
          <img src={EmptyStar} alt="star" />
        </li>
        <li>
          <img src={EmptyStar} alt="star" />
        </li>
      </ul>
    );
  } else if (stars === 0) {
    return (
      <ul>
        <li>
          <img src={EmptyStar} alt="star" />
        </li>
        <li>
          <img src={EmptyStar} alt="star" />
        </li>
        <li>
          <img src={EmptyStar} alt="star" />
        </li>
        <li>
          <img src={EmptyStar} alt="star" />
        </li>
        <li>
          <img src={EmptyStar} alt="star" />
        </li>
      </ul>
    );
  }
};
