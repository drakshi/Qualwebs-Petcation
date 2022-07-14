import React from "react";
import I_SITTER_RESERVATION from "../../../../models/sitterReservations.interface";
import { strings } from "../../../../public/lang/Strings";

interface IProps {
  request: I_SITTER_RESERVATION;
  asSitter: boolean;
  acceptRequest?: (id: number) => void;
}

const BookingRequestObject: React.FC<IProps> = ({
  request,
  asSitter,
  acceptRequest,
}: IProps) => {
  const key = asSitter ? "user" : "sitter";
  return (
    <div className="booking-request-details">
      <div className="booking-bg">
        <div className="image1">
          <img src={request[key].profile_picture} />
        </div>

        <div className="row">
          <div className="col-xl-9 offset-xl-3 p-left">
            <div className="row">
              <div className="col-12 col-md-8 col-lg-9 col-xl-8">
                <div className="d-flex justify-content-between">
                  <div className="from-details">
                    <p className="font-10 mb-0">{strings.From}</p>
                    <p className="font-12 font-semibold mb-0">
                      {request.drop_of_date}
                    </p>
                  </div>
                  <div className="to-details">
                    <p className="font-10 mb-0">{strings.To}</p>
                    <p className="font-12 font-semibold mb-0">
                      {request.pickup_up_date}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-8 col-lg-3 col-xl-4 alignment">
                <div className="total-details">
                  <p className="font-10 mb-0">{strings.Total}</p>
                  <p className="font-12 font-semibold mb-0">
                    {"¥" + request.total_paid_amount}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-9 offset-xl-3 p-left">
          <div className="row">
            <div className="col-xl-9">
              <div className="booking-title mt-2">
                <h6 className="font-14 mb-0 font-medium">
                  {request[key].firstname + " - " + request.service.name}
                </h6>
                {request[key].address ? (
                  <p className="font-10">
                    {`${
                      strings.Address +
                      ":" +
                      request[key].address.address +
                      " " +
                      request[key].address.city.name +
                      " " +
                      request[key].address.postcode
                    }`}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="col-xl-3">
              <div className="d-flex justify-content-end pr-1 accept-details">
                {asSitter ? (
                  <div>
                    <button
                      onClick={() => acceptRequest(request.id)}
                      className="btn btn-primary btn1"
                    >
                      {strings.Accept}
                    </button>
                  </div>
                ) : (
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
                          ></path>
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
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingRequestObject;
