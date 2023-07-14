

import React, { useState } from "react";
import "./Third.css";
import FAQ from "./Faq/FAQ";
import user from "./../../assets/user.svg";

function Third() {
  const [show, setShow] = useState(false);
  const handleOpen = () => {
    setShow(!show);
  }

  

  return (
    <div className="app2">
      <div className="main2" onClick={handleOpen}>
        <div className="main-bar">
          <div className="content">
            <img className="user" src={user} alt="avatar" />
            <div className="info">
              <h4>About Us</h4>
              <h6>4 articles on this Topic </h6>
            </div>
          </div>
          <div className="sign1">{show ? "-" : "+"}</div>
        </div>
        {FAQ.map((faq) => (
          <div className="accordian2">
            <div className="accordian-header2" onClick={handleOpen}>
              <h4>{faq.question} </h4>
              <div className="sign2" onClick={handleOpen}>{show ? "-" : "+"}</div>
            </div>
            {show && (
              <div className="accordian-body2">
                <h5>{faq.answer}</h5>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Third;
