import React from "react";

function YearMonthForm({
  date,
  localeUtils,
  onChange,
  before,
  startRange = null,
  endRange = null, isDob
}) {
  const months = localeUtils.getMonths();
  const currentYear = new Date(before ? 0 : null).getFullYear();
  const fromMonth = startRange ? startRange : new Date(currentYear, 0);
  const toMonth = endRange
    ? endRange
    : before
    ? new Date()
    : new Date(new Date().getFullYear() + 10, 11);

  const years = [];
  for (let i = fromMonth.getFullYear(); i <= toMonth.getFullYear(); i += 1) {
    if(isDob && i<(toMonth.getFullYear()-12)){
      years.push(i);
    }else if(!isDob) {
      years.push(i);
    }
  }

  const handleChange = function handleChange(e) {
    const { year, month } = e.target.form;
    onChange(new Date(year.value, month.value));
  };

  return (
    <form className="DayPicker-Caption">
      <select name="month" onChange={handleChange} value={date.getMonth()}>
        {months.map((month, i) => (
          <option key={month} value={i}>
            {month}
          </option>
        ))}
      </select>
      <select name="year" onChange={handleChange} value={date.getFullYear()}>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </form>
  );
}

export default YearMonthForm;
