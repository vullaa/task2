import React from "react";
import Tabinfo from "./Tabinfo";
import "./../First.css";

const Tabs1 = (props) => {
  const { domain, price, oldp } = props;
  return (
      <div className="card-main">
        <div className="card-content">
          <div className="domain">{`${domain}`}</div>
          <div className="pr">
            <div className="price">{`${price}`}</div>
            <div className="oldp">{`${oldp}`}</div>
          </div>
        </div>
        <button id="btn">Buy Now</button>
      </div>
  );
};

export default Tabs1;
