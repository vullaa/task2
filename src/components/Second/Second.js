import React, { useState } from "react";
import "./Second.css";

function Second() {
 
  const [show, setShow] = useState(false);
  const handleOpen = () => {
    setShow(!show);
  };

  return (
    <div className="app">
      <div className="accordian">
        <div className="accordian-header" onClick={handleOpen}>
          <div>Why park a domain name in Parkname ?</div>
          <div className="sign">{show ? '-' : '+'}</div>
        </div>

        {show && (
          <div className="accordian-body">
            Parkname is the leading industry standard for domain name parking and monetization services.
             We offer a wide variety of services to help you achieve success.
          </div>
        )}
      </div>
    </div>
  );
}

export default Second;
