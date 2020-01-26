import * as React from "react";

function TextFilter({
  labelText,
  name,
  value,
  handleChange,
}: {
  labelText: string;
  name: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label>
      {labelText}
      <input name={name} type="text" value={value} onChange={handleChange} />
    </label>
  );
}

function CheckboxFilter({
  labelText,
  name,
  checked,
  handleChange,
}: {
  labelText: string;
  name: string;
  checked: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label>
      {labelText}
      <input
        name={name}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
    </label>
  );
}

function NumberFilter({
  labelText,
  name,
  value,
  min,
  max,
  handleChange,
}: {
  labelText: string;
  name: string;
  value: number;
  min: number;
  max: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label>
      {labelText}
      <input
        name={name}
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
    </label>
  );
}

export { TextFilter, CheckboxFilter, NumberFilter };
