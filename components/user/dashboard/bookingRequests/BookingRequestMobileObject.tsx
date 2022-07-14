import React from "react";
import { Props } from "react-select";
import { strings } from "../../../../public/lang/Strings";

type request = {
  from: string;
  to: string;
  total: string;
  name: string;
  service: string;
  address: string;
};

interface IProps {
  request: request;
}
const BookingRequestMobileObject: React.FC<IProps> = ({ request }: IProps) => {
  return (
    <div className="col-12 dash-col dash-col1">
      <div
        className="booking-request-details request-padding"
        style={{ borderRadius: 0 }}
      >
        <div className="d-flex">
          <div className="search-sitter-img">
            <img src="/images/marie.png" className="img-fluid" />
          </div>
          <div className="booking-title mt-2">
            <h6 className="font-14 mb-0 font-medium">
              {request.name + " - " + request.service}
            </h6>
            <p className="font-10">{`${strings.Address}: ${request.address}`}</p>
          </div>
        </div>
        <div className="d-flex justify-content-between my-2">
          <div className="from-details">
            <p className="font-10 mb-0">{strings.From}</p>
            <p className="font-12 font-semibold mb-0">{request.from}</p>
          </div>
          <div className="to-details">
            <p className="font-10 mb-0">{strings.To}</p>
            <p className="font-12 font-semibold mb-0">{request.to}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="total-details">
              <p className="font-10 mb-0">{strings.Total}</p>
              <p className="font-12 font-semibold mb-0">¥350</p>
            </div>
          </div>
          <div className="col-8 my-auto">
            <div className="row">
              <div className="col-8">
                <button className="btn btn-primary btn1">
                  {strings.Accept}
                </button>
              </div>
              <div className="col-4">
                <div className="dropdown pet-drop">
                  <a
                    className="menu dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                    aria-expanded="true"
                  >
                    <div className="ellipse">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fal"
                        data-icon="ellipsis-h"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        className="svg-inline--fa fa-ellipsis-h fa-w-10 fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M192 256c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm88-32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-240 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"
                        />
                      </svg>
                    </div>
                  </a>
                  <div className="dropdown-menu animate slideIn">
                    <a href="#" className="dropdown-item">
                      {strings.Edit}
                    </a>
                    <hr className="my-2" />
                    <a href="#" className="dropdown-item">
                      {strings.Remove}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingRequestMobileObject;
