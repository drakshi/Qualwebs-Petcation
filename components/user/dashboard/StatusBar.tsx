import { strings } from "../../../public/lang/Strings";
import React from "react";

type states = {
  bookingForMe: number;
  pBookingForMe: number;
  bookingByMe: number;
  pBookingByMe: number;
  totalEarning: number;
  pTotalEarning: number;
  totalReferral: number;
  pTotalReferral: number;
};

interface IProps {
  states: states;
}

const StatusBar: React.FC<IProps> = ({ states }: IProps) => {
  return (
    <div className="row dash-row">
      <div className="col-md-4 col-lg-4 col-xl-3 dash-col">
        <div className="bg-white main-background">
          <div className="week-details">
            <div>
              <div className="total-booking d-none d-md-block d-lg-block d-xl-block">
                <p className="font-14 mb-2">{strings.Bookingbyme}</p>
              </div>
              <div className="total-booking d-block d-md-none d-lg-none d-xl-none">
                <p className="font-14 mb-2">{strings.Bookingbyme}</p>
              </div>
            </div>
            <div className="total-number">
              <div className="display">
                <div>
                  <h3 className=" font-semibold">{states.bookingByMe}</h3>
                </div>
                <div className="dropdown">
                  <a
                    className="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {strings.Week}
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <a className="dropdown-item" href="#">
                      {strings.Week}
                    </a>
                  </div>
                </div>
              </div>
              <p className="green mb-0 font-10">{`+${states.pBookingByMe}% from yesterday`}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4 col-lg-4 col-xl-3 dash-col">
        <div className="bg-white main-background">
          <div className="week-details">
            <div>
              <div className="total-booking d-none d-md-block d-lg-block d-xl-block">
                <p className="font-14 mb-2">{strings.Bookingforme}</p>
              </div>
              <div className="total-booking d-block d-md-none d-lg-none d-xl-none">
                <p className="font-14 mb-2">{strings.Bookingforme}</p>
              </div>
            </div>
            <div className="total-number">
              <div className="display">
                <div>
                  <h3 className=" font-semibold">{states.bookingForMe}</h3>
                </div>
                <div className="dropdown">
                  <a
                    className="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Week
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <a className="dropdown-item" href="#">
                      Week
                    </a>
                  </div>
                </div>
              </div>
              <p className="green mb-0 font-10">{`+${states.pBookingForMe}% from yesterday`}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4 col-lg-4 col-xl-3 dash-col">
        <div className="bg-white main-background">
          <div className="week-details">
            <div>
              <div className="total-booking d-none d-md-block d-lg-block d-xl-block">
                <p className="font-14 mb-2">{strings.TotalEarnings}</p>
              </div>
              <div className="total-booking d-block d-md-none d-lg-none d-xl-none">
                <p className="font-14 mb-2">{strings.TotalEarnings}</p>
              </div>
            </div>
            <div className="total-number">
              <div className="display">
                <div>
                  <h3 className=" font-semibold">
                    {"¥" + states.totalEarning}
                  </h3>
                </div>
                <div className="dropdown">
                  <a
                    className="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Monthly
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <a className="dropdown-item" href="#">
                      Week
                    </a>
                  </div>
                </div>
              </div>
              <p className="red mb-0 font-10">{`${states.pTotalEarning}% from last month`}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4 col-lg-4 col-xl-3 dash-col">
        <div className="bg-white main-background">
          <div className="week-details">
            <div>
              <div className="total-booking d-none d-md-block d-lg-block d-xl-block">
                <p className="font-14 mb-2">{strings.TotalReferral}</p>
              </div>
              <div className="total-booking d-block d-md-none d-lg-none d-xl-none">
                <p className="font-14 mb-2">{strings.TotalReferral}</p>
              </div>
            </div>
            <div className="total-number">
              <div className="display">
                <div>
                  <h3 className=" font-semibold">
                    {" "}
                    {"¥" + states.totalReferral}
                  </h3>
                </div>
                <div className="dropdown">
                  <a
                    className="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Day
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <a className="dropdown-item" href="#">
                      Week
                    </a>
                  </div>
                </div>
              </div>
              <p className="green mb-0 font-10">{`${states.pTotalReferral}% from last month`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
