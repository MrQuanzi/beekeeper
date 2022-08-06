import React from "react";
import { CellState, CellValue, Emoji } from "../../types/types";
import "./Button.scss";

interface props {
  row: number;
  col: number;
  state: CellState;
  value: CellValue;
}

const Button: React.FC<props> = ({ row, col, state, value }) => {
  const renderContent = (): React.ReactNode => {
    if (state === CellState.flagged) {
      return (
        <span role="img" aria-label="flag">
          {Emoji.flag}
        </span>
      );
    } else if (state === CellState.visible) {
      if (value === CellValue.bomb) {
        return (
          <span role="img" aria-label="bee">
            {Emoji.bee}
          </span>
        );
      } else {
        return (
          <span className="num" role="img" aria-label={`${value}`}>
            <strong>{value}</strong>
          </span>
        );
      }
    }
    return null;
  };

  return (
    <div className={`Button ${state === CellState.visible ? "visible" : ""}`}>
      {renderContent()}
    </div>
  );
};

export default Button;
