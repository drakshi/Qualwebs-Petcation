import React from "react";
import { requestsArray } from "../../../../public/appData/AppData";
import { strings } from "../../../../public/lang/Strings";
import BookingRequestMobileObject from "./BookingRequestMobileObject";

const BookingRequestMobile = () => {
  return (
    <div className="d-block d-md-block d-lg-none d-xl-none">
      <div className="row">
        <div className="col-9">
          <h6 className="mb-0 font-semibold">
            {strings.LatestBookingRequests}
          </h6>
        </div>
        <div className="col-3 alignment">
          <div className="view-all">
            <a
              href="http://159.65.142.31/petcation-design/sitter-reservation.html"
              className="font-14"
            >
              {strings.ViewAll}
            </a>
          </div>
        </div>
      </div>
      <div className="pay-tabs dashboard-tab mb-3">
        <ul className="nav nav-tabs mb-0" id="myTab4" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link  active"
              id="mob-home-tab1"
              data-toggle="tab"
              href="#mob-home1"
              role="tab"
            >
              {strings.Bookingforme}
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="mob-profile-tab1"
              data-toggle="tab"
              href="#mob-profile1"
              role="tab"
            >
              {strings.Bookingforme}
            </a>
          </li>
        </ul>
      </div>
      <div className="tab-content" id="myTabContent4">
        {/*-------------mobile tab1---------------*/}
        <div
          className="tab-pane fade show active"
          id="mob-home1"
          role="tabpanel"
          aria-labelledby="mob-home-tab1"
        >
          <div className="row dash-row">
            {requestsArray.map((value) => (
              <BookingRequestMobileObject request={value} />
            ))}
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="mob-profile1"
          role="tabpanel"
          aria-labelledby="mob-profile-tab1"
        >
          <div className="row dash-row">
            {requestsArray.map((value) => (
              <BookingRequestMobileObject request={value} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingRequestMobile;
