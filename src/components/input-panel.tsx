import React from "react";
import dollar from "../assets/icons/icon-dollar.svg";
import person from "../assets/icons/icon-person.svg";
import AmountInput from "./amount-input";
import TipSelect from "./tip-select";
import { TDefaultTips } from "../types/default-tips.type";
import { useNumberInput } from "../hooks/use-number-input";
import { IInputPanelData } from "../interfaces/input-panel-data.interface";
import { useResetNotifier } from "../hooks/use-reset-notifier";

interface IInputPanelProps {
  className: string;
  onDataChange: (value: IInputPanelData) => void;
}

let inputPanelState: IInputPanelData = {
  billValue: null,
  tipValue: null,
  peopleAmount: null,
};

const defaultTips: TDefaultTips = [5, 10, 15, 25, 50];

const InputPanel = ({ className, onDataChange }: IInputPanelProps) => {
  const onReset = () => {
    billInput.setValue("");
    peopleAmountInput.setValue("");
  };

  useResetNotifier(onReset);

  const onBillChange = (value: number | null) => {
    inputPanelState = { ...inputPanelState, billValue: value };
    onDataChange(inputPanelState);
  };

  const onPeopleAmountChange = (value: number | null) => {
    inputPanelState = { ...inputPanelState, peopleAmount: value };
    onDataChange(inputPanelState);
  };

  const onTipChange = (value: number | null) => {
    inputPanelState = { ...inputPanelState, tipValue: value };
    onDataChange(inputPanelState);
  };

  const handleTipChange = (value: number | null) => {
    onTipChange(value);
  };

  const billInput = useNumberInput("", onBillChange);
  const peopleAmountInput = useNumberInput("", onPeopleAmountChange);

  return (
    <div className={className}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <span className="text-base font-bold text-text">Bill</span>
          <AmountInput
            icon={<img src={dollar} width="10px" height="16px" alt="" />}
            className="w-full h-12"
            {...billInput}
          />
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-base font-bold text-text">Select Tip %</span>
          <TipSelect
            className="w-full h-28"
            defaultTips={defaultTips}
            onTipChange={handleTipChange}
          />
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-base font-bold text-text">
            Number of People
          </span>
          <AmountInput
            icon={<img src={person} width="10px" height="16px" alt="" />}
            className="w-full h-12"
            {...peopleAmountInput}
          />
        </div>
      </div>
    </div>
  );
};

InputPanel.propTypes = {};

export default InputPanel;
