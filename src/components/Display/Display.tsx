import React from "react";
import "./Display.scss";

interface props {
  value: number;
}

const Display: React.FC<props> = ({ value }) => {
  return <div className="display">{value.toString().padStart(3, "0")}</div>;
};

export default Display;
