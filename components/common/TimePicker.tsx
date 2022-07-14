import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Select from "react-select";

const hours = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
  { label: "7", value: "7" },
  { label: "8", value: "8" },
  { label: "9", value: "9" },
  { label: "10", value: "10" },
  { label: "11", value: "11" },
  { label: "12", value: "12" },
];
const minutes = [
  { label: "00", value: "00" },
  { label: "10", value: "10" },
  { label: "20", value: "20" },
  { label: "30", value: "30" },
  { label: "40", value: "40" },
  { label: "50", value: "50" },
];

const meridiem = [
  { label: "AM", value: "AM" },
  { label: "PM", value: "PM" },
];

const sortDropdownStyles = {
  option: (provided, state) => ({
    ...provided,
    fontSize: 12,
  }),

  control: (provided) => ({
    ...provided,
    width: 70,
    margin: 2,
  }),
  singleValue: (provided, state) => {
    return { ...provided, fontSize: 12, color: "#383838", fontWeight: "500" };
  },
};

const TimePicker = ({ value, onChange }) => {
  const [valueState, setValueState] = useState({
    h: "1",
    m: "0",
    a: "AM",
  });

  useEffect(() => {
    if (value) {
      setValueState(value);
    }
  }, [value]);

  return (
    <div className="row">
      <Select
        isSearchable={false}
        options={hours}
        value={hours.find((e) => e.value == valueState.h)}
        styles={sortDropdownStyles}
        onChange={(v) => onChange({ ...valueState, h: v.value })}
      />
      <Select
        isSearchable={false}
        options={minutes}
        value={minutes.find((e) => e.value == valueState.m)}
        styles={sortDropdownStyles}
        onChange={(v) => onChange({ ...valueState, m: v.value })}
      />
      <Select
        isSearchable={false}
        options={meridiem}
        value={meridiem.find((e) => e.value == valueState.a)}
        styles={sortDropdownStyles}
        onChange={(v) => onChange({ ...valueState, a: v.value })}
      />
    </div>
  );
};

export default TimePicker;
