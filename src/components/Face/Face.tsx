import React from "react";
import "./Face.scss";

interface props {
  char: string;
}

const Face: React.FC<props> = ({ char }) => {
  return <span className="Face">{char}</span>;
};

export default Face;
