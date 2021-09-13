import React, { useState } from "react";
import InputPanel from "./input-panel";
import ResultTable from "./result-table";
import { IBillResult } from "../interfaces/bill-result.interface";
import { IInputPanelData } from "../interfaces/input-panel-data.interface";
import { Subject } from "rxjs";

interface ICalculatorProps {
  className: string;
}

const notifier$$ = new Subject<void>();

export const ResetContext = React.createContext(new Subject<void>());

const Calculator = ({ className }: Partial<ICalculatorProps>) => {
  const [result, setResult] = useState<IBillResult | null>(null);

  const onInputDataChange = ({
    billValue,
    tipValue,
    peopleAmount,
  }: IInputPanelData) => {
    console.log(billValue, tipValue, peopleAmount);
    if (billValue && tipValue && peopleAmount) {
      const tip = (billValue / 100) * tipValue;
      const total = billValue + tip;
      setResult({ total: total / peopleAmount, tipAmount: tip / peopleAmount });
    } else {
      setResult(null);
    }
  };

  const handleRest = () => {
    notifier$$.next();
  };

  return (
    <ResetContext.Provider value={notifier$$}>
      <div
        className={
          className + " bg-white rounded-2xl flex flex-col sm:flex-row gap-10"
        }
      >
        <InputPanel
          className="w-full sm:w-1/2"
          onDataChange={onInputDataChange}
        />
        <ResultTable
          className="w-full sm:w-1/2"
          result={result}
          onReset={handleRest}
        />
      </div>
    </ResetContext.Provider>
  );
};

export default Calculator;
