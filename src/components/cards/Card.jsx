import React from "react";
import { Link } from "react-router-dom";

const Card = ({ width, height, title, location, flag, img, id }) => {
  return (
    <div className="card">
      <Link to={`/`}>
      <div
        className={`child relative overflow-hidden rounded-[30px]`}
        style={{ width: width, height: height }}
      >
        <img src={img} alt={title} className="w-full h-full object-cover" />
        <div className="bottom absolute bottom-[11px] flex flex-col left-[42px]">
          <h1 className="text-4xl font-semibold text-white">
            {title && title}
          </h1>
          <div className="flex items-center">
           {flag && <img src={flag} alt="Flag" className="mr-2 w-[22px] h-[22px]" />}
            <h1 className="font-semibold text-2xl text-white object-cover">
            {location && location}
            </h1>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Card;
