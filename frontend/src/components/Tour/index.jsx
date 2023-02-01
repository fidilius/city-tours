import { useState } from "react";
import "./index.scss";

export default function index({ dataCity, handleRemove }) {
  const [showInfo, setShowInfo] = useState(false);
  const { id, img, city, name, info } = dataCity;

  return (
    <article className="tour">
      <div className="img-container">
        <img src={img} alt={city} />
        <span className="material-symbols-outlined close-btn" onClick={() => handleRemove(id)}>
          disabled_by_default
        </span>
      </div>
      <div className="tour-info">
        <h3>{city}</h3>
        <h4>{name}</h4>
        <h5>
          info
          <span className="material-symbols-outlined" onClick={() => setShowInfo(!showInfo)}>
            top_panel_open
          </span>
        </h5>
        {showInfo && <p>{info}</p>}
      </div>
    </article>
  );
}
