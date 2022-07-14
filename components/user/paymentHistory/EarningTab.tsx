import React, { createRef, useState } from "react";
import Select from "react-select";
import { strings } from "../../../public/lang/Strings";
import { useEffect } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import formatDate from "react-day-picker/moment";
import parseDate from "react-day-picker/moment";
import moment from "moment";
import Helmet from "react-helmet";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const EarningTab = ({handleFrom, handleTo, data, handleSortby}) => {
  const [from, setFrom] = useState(undefined);
  const [to, setTo] = useState(undefined);
    const userId = cookies.get("id");
  let toInput = createRef<any>();

  const showFromMonth = () => {
    if (!from) {
      return;
    }
    if (moment(to).diff(moment(from), "months") < 2) {
      toInput.current.getDayPicker().showMonth(from);
    }
  };

  const handleFromChange = (from) => {
    // Change the from date and focus the "to" input field
    handleFrom(from);
    setFrom(from);
  };

  const handleToChange = (to) => {
    handleTo(to);
    setTo(to);
  };

  useEffect(() => {
    showFromMonth();
  }, [to]);

  const noCardView = () => {
    return(
        <>
          <div className="text-center padding">
            <p className="font-12 mb-0 font-italic">No Transaction history  found!</p>
          </div>
        </>
    )
  }

  return (
    <div className="tab-content" id="myTabContent">
      <div
        className="tab-pane fade active show"
        id="earnings"
        role="tabpanel"
        aria-labelledby="earning-tab"
      >
        <div className="row">
          <div className="col-12 col-md-4 col-lg-4 col-xl-3 my-auto">
            <div className="transactions-title">
              <h6 className="mb-0">{data ? data.total:0} Transactions</h6>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-8 col-xl-9 alignment">
            <div className="row">
              <div className="InputFromTo">
                <DayPickerInput
                  value={from}
                  placeholder="From"
                  format="LL"
                  formatDate={formatDate.formatDate}
                  parseDate={parseDate.parseDate}
                  dayPickerProps={{
                    selectedDays: [from, { from, to }],
                    disabledDays: { after: to },
                    toMonth: to,
                    modifiers: { start: from, end: to },
                    numberOfMonths: 2,
                    onDayClick: () => toInput.current.getInput().focus(),
                  }}
                  onDayChange={handleFromChange}
                />
                —{" "}
                <span className="InputFromTo-to">
                  <DayPickerInput
                    ref={toInput}
                    value={to}
                    placeholder="To"
                    format="LL"
                    formatDate={formatDate.formatDate}
                    parseDate={parseDate.parseDate}
                    dayPickerProps={{
                      selectedDays: { from, to },
                      disabledDays: { before: from },
                      modifiers: { start: from, end: to },
                      month: from,
                      fromMonth: from,
                      numberOfMonths: 2,
                    }}
                    onDayChange={handleToChange}
                  />
                </span>
              </div>
              <Helmet>
                <style>{`
  .InputFromTo .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .InputFromTo .DayPicker-Day {
    border-radius: 0 !important;
  }
  .InputFromTo .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .InputFromTo .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
  .InputFromTo .DayPickerInput-Overlay {
    width: 550px;
  }
  .InputFromTo-to .DayPickerInput-Overlay {
    margin-left: -198px;
  }
`}</style>
              </Helmet>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="calendar-alt"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="svg-inline--fa fa-calendar-alt fa-w-14 fa-2x"
              >
                <path
                  fill="currentColor"
                  d="M400 64h-48V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H128V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h352c8.8 0 16 7.2 16 16v48H32v-48c0-8.8 7.2-16 16-16zm352 384H48c-8.8 0-16-7.2-16-16V192h384v272c0 8.8-7.2 16-16 16zM148 320h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 96h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm192 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12z"
                />
              </svg>
              <div className="col-12 col-md-3 col-lg-3 col-xl-3 col-sm-3 font-12">
                <Select
                    onChange={handleSortby}
                  options={[
                    { label: "Amount desc", value: 1 },
                    { label: "Amount asc", value: 2 },
                    { label: "Date of drop asc", value: 3 },
                  ]}

                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-12 col-lg-12 col-xl-12">
            <div className="trans-description">
              <p className="font-12">
                These are the earnings for your completed jobs that have
                completed the gaurantee period as a sitter. These earnings are
                available for withdrawals and can be withdrawn using the
                withdraw money button on top right.
              </p>
            </div>
          </div>
        </div>
        {data && data.data.length ?
            data.data.map((item,index)=> <div className="row pay-history">
          <div className="col-12 col-md-12 col-lg-12 col-xl-12">
            {/*<a href="http://159.65.142.31/petcation-design/reservation-details">*/}
              <div className="booking-request-details">
                <div className="booking-bg">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="row">
                        <div className="col-12 col-md-8 col-lg-9 col-xl-5">
                          <div className="d-flex justify-content-between">
                            <div className="from-details">
                              <p className="font-10 mb-0">{strings.From}</p>
                              <p className="font-12 font-semibold mb-0">
                                  {item ? (item.drop_of_date + ', ' + item.pickup_up_time_from):''}
                              </p>
                            </div>
                            <div className="to-details">
                              <p className="font-10 mb-0">{strings.To}</p>
                              <p className="font-12 font-semibold mb-0">
                                  {item ? (item.pickup_up_date + ', ' + item.drop_of_time_to):''}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-8 col-lg-3 col-xl-3 offset-xl-4 alignment">
                          <div className="d-flex justify-content-end">
                            <div className="total-details">
                              <p className="font-12 mb-0">
                                {userId && userId == item.user.id ? strings.totalPayableAmount:strings.YourExpectedEarnings}
                              </p>
                              <p className="font-12 font-semibold mb-0">¥{userId && userId == item.user.id ? item.total_paid_amount:item.sitter_earning_amount}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row listing">
                  <div className="col-xl-12">
                    <div className="row">
                      <div className="col-xl-8">
                        <div className="booking-title mt-2">
                          <h6 className="font-14 mb-1 font-medium">
                            {item.user.firstname + ' ' + item.user.lastname} - {item.service.name}
                          </h6>
                          <p className="mb-0 font-10">
                            Address: {item.user.address ? (item.user.address.house_number + ' ' + item.user.address.address + ' '  + item.user.address.city + ' ' + item.user.address.postcode):''}
                          </p>
                        </div>
                      </div>
                      <div className="col-xl-4 alignment  my-auto">
                        <div className="d-flex justify-content-between">
                          <div className="total-details">
                            <p className="font-12 mb-0">Petcation Fee</p>
                            <p className="font-12 mb-0">¥{item.petcation_fee_amount}</p>
                          </div>
                          <div className="total-details">
                            <p className="font-12 mb-0">Listing Price</p>
                            <p className="font-12 mb-0">¥{item.service_charge}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/*</a>*/}
          </div>
        </div>):noCardView()}
      </div>
    </div>
  );
};
export default EarningTab;
