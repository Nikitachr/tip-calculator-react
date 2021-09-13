import React from "react";
import { IBillResult } from "../interfaces/bill-result.interface";
import ResultItem from "../components/result-item";

interface IResultTableProps {
  className: string;
  result: IBillResult | null;
  onReset: any;
}

const ResultTable = ({
  className,
  result = null,
  onReset,
}: Partial<IResultTableProps>) => {
  const disabled = !(!!result?.total && !!result.tipAmount);

  return (
    <div
      className={className + " bg-primary p-10 h-full grid gap-y-8 rounded-2xl"}
    >
      <ResultItem title="Tip Amount" value={result?.tipAmount || 0} />
      <ResultItem title="Total" value={result?.total || 0} />
      <button
        disabled={disabled}
        onClick={onReset}
        className={
          (disabled
            ? "bg-disabled hover:bg-disabled cursor-not-allowed"
            : "bg-primary-second hover:bg-hover cursor-pointer") +
          " block w-full h-12 mb-0 bg-primary-second rounded text-primary justify-self-end font-bold mt-14"
        }
      >
        RESET
      </button>
    </div>
  );
};

export default ResultTable;
