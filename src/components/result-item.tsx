import React from "react";
import { IResultItem } from "../interfaces/result-item.interface";

const ResultItem = ({ title, value, className }: IResultItem) => {
  return (
    <div
      className={className + " flex h-auto w-full justify-between items-center"}
    >
      <div>
        <span className="block font-bold text-white">{title}</span>
        <span className="block font-bold text-text-second">/ person</span>
      </div>

      <span className="block font-bold text-4xl text-primary-second">
        ${value.toFixed(2)}
      </span>
    </div>
  );
};

export default ResultItem;
