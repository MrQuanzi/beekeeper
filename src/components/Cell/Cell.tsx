import React from "react";
import Hive from "../../types/Hive";

interface props {
  pos: number[];
  arr: Hive[];
}

const Cell: React.FC<props> = ({ pos, arr }) => {
  return <span className="Cell"></span>;
};
