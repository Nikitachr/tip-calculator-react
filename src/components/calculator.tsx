import React from "react";
import { Subject } from "rxjs";

import InputPanel from "./input-panel";
import ResultTable from "./result-table";
import { useCalculatorFacade } from '../hooks/use-calculator-facade';

interface ICalculatorProps {
  className: string;
}

export const ResetContext = React.createContext(new Subject<void>());

const Calculator = ({ className }: Partial<ICalculatorProps>) => {
  const [result, calculateResult, notifier$$, handleReset] = useCalculatorFacade();

  return (
    <ResetContext.Provider value={notifier$$}>
      <div
        className={
          className + " bg-white rounded-2xl flex flex-col sm:flex-row gap-10"
        }
      >
        <InputPanel
          className="w-full sm:w-1/2"
          onDataChange={calculateResult}
        />
        <ResultTable
          className="w-full sm:w-1/2"
          result={result}
          onReset={handleReset}
        />
      </div>
    </ResetContext.Provider>
  );
};

export default Calculator;
