import * as React from "react";

// TODO: remove?
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
    <>
      <label className="custom-label flex">
        <div className="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2">
          <input
            name={name}
            type="checkbox"
            checked={checked}
            onChange={handleChange}
            className="hidden"
          />
          <svg
            className="hidden w-4 h-4 text-green-600 pointer-events-none"
            viewBox="0 0 172 172"
          >
            <g
              fill="none"
              stroke-width="none"
              stroke-miterlimit="10"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style={{ mixBlendMode: "normal" }}
            >
              <path d="M0 172V0h172v172z" />
              <path
                d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z"
                fill="currentColor"
                stroke-width="1"
              />
            </g>
          </svg>
        </div>
        <span className="select-none text-gray-700">{labelText}</span>
      </label>
    </>
  );
}

function SwitchFilter({
  name,
  checked,
  handleChange,
}: {
  name: string;
  checked: boolean;
  handleChange: (name: string, value: any) => void;
}) {
  if (checked) {
    return (
      <span
        className="border rounded-full border-grey flex items-center cursor-pointer w-12 bg-green-500 justify-end"
        onClick={() => handleChange(name, !checked)}
      >
        <span className="rounded-full border w-6 h-6 border-grey shadow-inner bg-white shadow" />
      </span>
    );
  }

  return (
    <span
      className="border rounded-full border-grey flex items-center cursor-pointer w-12 bg-gray-500 justify-start"
      onClick={() => handleChange(name, !checked)}
    >
      <span className="rounded-full border w-6 h-6 border-grey shadow-inner bg-white shadow" />
    </span>
  );
}

function NumberFilter({
  name,
  value,
  min,
  max,
  handleChange,
}: {
  name: string;
  value: number;
  min: number;
  max: number;
  handleChange: (name: string, value: any) => void;
}) {
  // TODO: manually check min/max because <input min/max> only works in actual forms
  return (
    <>
      <div className="custom-number-input h-10 w-32">
        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
          <button
            onClick={() => handleChange(name, value - 1)}
            className=" bg-gray-400 text-gray-600 hover:text-gray-700 hover:bg-gray-500 h-full w-20 rounded-l cursor-pointer outline-none"
          >
            <span className="m-auto text-2xl font-thin">−</span>
          </button>
          <input
            name={name}
            type="number"
            min={min}
            max={max}
            value={value}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(name, event.target.value)
            }
            className="outline-none focus:outline-none text-center w-full bg-gray-400 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 outline-none"
          />
          <button
            onClick={() => handleChange(name, value + 1)}
            className="bg-gray-400 text-gray-600 hover:text-gray-700 hover:bg-gray-500 h-full w-20 rounded-r cursor-pointer"
          >
            <span className="m-auto text-2xl font-thin">+</span>
          </button>
        </div>
      </div>
    </>
  );
}

export { TextFilter, CheckboxFilter, SwitchFilter, NumberFilter };
