import React from "react";

const Button = ({handleButton}) => {
  return (
    <div className="wrapper_btn">
      <button className="btn_" onClick={() => handleButton()}>
        Troque o fundo
      </button>
    </div>
  );
};

export default Button;
