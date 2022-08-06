import React from "react";
import "./Face.scss";

interface props {
  char: string;
}

const Face: React.FC<props> = ({ char }) => {
  return (
    <span className="Face">
      <span role="img" aria-label="face">
        {char}
      </span>
    </span>
  );
};

export default Face;
