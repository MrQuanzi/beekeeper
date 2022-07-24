import React from "react";
import "./Face.scss";

interface props {
  character: string;
}

const Face: React.FC<props> = ({ character }) => {
  return <span className="face">{character}</span>;
};

export default Face;
