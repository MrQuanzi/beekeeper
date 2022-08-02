import React from "react";

interface props {
  pos: number[];
}

const Cell: React.FC<props> = ({ pos }) => {
  return <span className="Cell"></span>;
};
