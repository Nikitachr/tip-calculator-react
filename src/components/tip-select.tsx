import React, { useEffect, useState } from "react";
import { TDefaultTips } from "../types/default-tips.type";
import AmountInput from "./amount-input";
import { useNumberInput } from "../hooks/use-number-input";
import { useResetNotifier } from "../hooks/use-reset-notifier";

export interface ITipSelectProps {
  className?: string;
  defaultTips: TDefaultTips;
  onTipChange?: (value: number | null) => void;
}

const TipSelect = ({
  className,
  defaultTips,
  onTipChange,
}: ITipSelectProps) => {
  const onReset = () => {
    setActiveTip(null);
    customTipInput.setValue("");
  };

  useResetNotifier(onReset);

  const [activeTip, setActiveTip] = useState<number | null>(null);
  const customTipInput = useNumberInput("");

  useEffect(() => {
    onTipChange &&
      onTipChange(
        activeTip || (customTipInput.value ? +customTipInput.value : null)
      );
  }, [activeTip, customTipInput.value]);

  const handleInputFocus = () => {
    setActiveTip(null);
  };

  return (
    <div className={className + " grid grid-rows-2 grid-cols-3 gap-4"}>
      {defaultTips.map((el) => {
        return (
          <button
            key={el}
            className={
              "bg-primary rounded-md text-white text-xl font-bold " +
              (activeTip === el ? "bg-primary-second text-primary" : "")
            }
            onClick={() => setActiveTip(el)}
          >{`${el}%`}</button>
        );
      })}
      <AmountInput
        placeholder="Custom"
        {...customTipInput}
        onFocus={handleInputFocus}
      />
    </div>
  );
};

TipSelect.propTypes = {};

export default TipSelect;
