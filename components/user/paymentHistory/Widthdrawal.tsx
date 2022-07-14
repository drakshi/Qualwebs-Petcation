import React from "react";
import Select from "react-select";

const Widthdrawal = () => {
  return (
    <div className="tab-content" id="myTabContent">
      <div
        className="tab-pane fade active show"
        id="withdrawals"
        role="tabpanel"
        aria-labelledby="withdrawals-tab"
      >
        <div className="row">
          <div className="col-12 col-md-4 col-lg-4 col-xl-6 my-auto">
            <div className="transactions-title">
              <h6 className="mb-0">15 Transactions</h6>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-8 col-xl-6 alignment">
            {/*------date range filter and sort by-------*/}
            <div className="row">
              {/*---for date range------*/}
              <div className="col-12 col-md-8 col-lg-8 col-xl-8 col-sm-8 pd-right">
                <div className="reportrange">
                  <span>7-12-2021 / 5-01-2022</span>
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
                </div>
              </div>
              {/*---/for date range------*/}
              <div className="col-sm-4">
                <div className="form-group sort-select">
                  <Select
                    options={[
                      { label: "~ ¥ 999", value: 1 },
                      { label: "¥ 1,000 ~ ¥ 1,999", value: 2 },
                      { label: "¥ 2,000 ~ ¥ 2,999", value: 3 },
                      { label: "¥ 3,000 ~ ¥ 3,999", value: 4 },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-12 col-lg-12 col-xl-12">
            <div className="trans-description">
              <p className="font-12">
                These are the withdrawals requested by you, if you have any
                questions you can contact support.
              </p>
            </div>
          </div>
        </div>
        <div className="responsive-table processed-details">
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <p className="mb-0">31/12/2021</p>
                </td>
                <td>
                  <h6 className="mb-0">Processed via paypal on 01/02/2021</h6>
                </td>
                <td>
                  <h6 className="font-semibold mb-0">JPY100</h6>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="mb-0">31/12/2021</p>
                </td>
                <td>
                  <h6 className="mb-0">Processed via paypal on 01/02/2021</h6>
                </td>
                <td>
                  <h6 className="font-semibold mb-0">JPY100</h6>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="mb-0">31/12/2021</p>
                </td>
                <td>
                  <h6 className="mb-0">Processed via paypal on 01/02/2021</h6>
                </td>
                <td>
                  <h6 className="font-semibold mb-0">JPY100</h6>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Widthdrawal;
