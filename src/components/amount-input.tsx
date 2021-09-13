import React, { ChangeEvent, useEffect, useRef } from "react";
import { useFocus } from "../hooks/use-focus";

interface IAmountInputProps {
  icon: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
  value: number | string;
  placeholder: string;
  className: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
}

const AmountInput = ({
  className,
  icon,
  onChange,
  value,
  placeholder,
  onBlur,
  onFocus,
}: Partial<IAmountInputProps>) => {
  const ref = useRef<HTMLInputElement>(null);
  const focus = useFocus(ref);

  useEffect(() => {
    focus ? onFocus && onFocus() : onBlur && onBlur();
  }, [focus]);

  return (
    <div
      className={
        className +
        " bg-input rounded-md px-4 py-2 flex items-center box-border " +
        (focus ? "border-primary-second border-2" : "")
      }
    >
      {icon}
      <input
        ref={ref}
        className="bg-transparent w-full outline-none text-right text-lg font-bold text-input-text"
        type="text"
        placeholder={placeholder || "0"}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

AmountInput.propTypes = {};

export default AmountInput;
