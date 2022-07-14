import React from "react";
import "react-day-picker/lib/style.css";
import DayPickerInput from "react-day-picker/DayPickerInput";
import parseDate from "react-day-picker/moment";
import formatDate from "react-day-picker/moment";
import YearMonthForm from "./YearMonthForm";
import { useState } from "react";
interface I_PROPS {
  before: boolean;
  onChangeDate: (date) => void;
  startRange: Date | null;
  endRange: Date | null;
  captionElement: boolean;
  value: Date | null;
  disabled?: boolean;
}

export default function Calendar(props: I_PROPS) {
  let {
    before,
    onChangeDate,
    startRange,
    endRange,
    captionElement,
    value,
    disabled,
  } = props;
  let [month, setMonth] = useState(new Date());

  const handleYearMonthChange = (month) => {
    setMonth(month);
  };
  return (
    <DayPickerInput
      formatDate={formatDate.formatDate}
      parseDate={parseDate.parseDate}
      dayPickerProps={{
        modifiers: {
          disabled: [
            {
              after: before ? new Date() : endRange ? endRange : null,
              before: startRange ? startRange : null,
            },
          ],
        },
        month: month,
        captionElement: captionElement
          ? ({ date, localeUtils }) => (
              <YearMonthForm
                  isDob={false}
                before={before}
                startRange={startRange}
                endRange={endRange}
                date={date ? date : new Date()}
                localeUtils={localeUtils}
                onChange={handleYearMonthChange}
              />
            )
          : undefined,
      }}
      inputProps={{
        style: {
          border: 0,
          background: "transparent",
        },
        disabled: disabled ? true : false,
        readOnly: true,
      }}
      placeholder="DD/MM/YYYY"
      format="DD/MM/YYYY"
      value={value}
      onDayChange={onChangeDate}
    />
  );
}
