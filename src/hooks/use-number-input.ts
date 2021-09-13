import { ChangeEvent, useEffect, useState } from "react";

export const useNumberInput = (
  initialValue: number | string,
  onChange?: (value: number | null) => void
) => {
  const [value, setValue] = useState<string | number>(initialValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value.match(/^[0-9]+$|^$/)) {
      setValue(value);
    }
  };

  useEffect(() => {
    onChange && onChange(value ? +value : null);
  }, [value]);

  return {
    value,
    setValue,
    onChange: handleChange,
  };
};
