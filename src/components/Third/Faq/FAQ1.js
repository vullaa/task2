import React from "react";


const FAQ1 = (props) => {
  const { question, answer } = props;
  return (
    <div className="faq">
      <div className="question">{`${question}`}</div>
      <div className="question">{`${answer}`}</div>
    </div>
  );
};

export default FAQ1;
