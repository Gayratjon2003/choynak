import React from "react";
import { Link } from "react-router-dom";

const Card0 = ({ width, height, title,  img, id }) => {
  return (
    <div className="card">
      <Link to={`/`}>
      <div
        className={`child relative overflow-hidden rounded-[30px] card0-control`}
        style={{ width: width, height: height }}
      >
        <img src={img} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full card0 opacity-0 flex items-center justify-center">
              <h1 className="text-white text-30">{title}</h1>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Card0;
