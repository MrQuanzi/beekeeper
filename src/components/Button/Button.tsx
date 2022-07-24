import React from "react";
import Face from "../Face/Face";
import "./Button.scss";

const Button: React.FC = (props) => {
  return (
    <div className="button">
      <Face character={"😎"}></Face>
    </div>
  );
};

export default Button;
