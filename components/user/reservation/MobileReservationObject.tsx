import React from "react";
import { strings } from "../../../public/lang/Strings";
import ContactView from "./ContactView";
import I_SITTER_RESERVATION from "../../../models/sitterReservations.interface";

interface IProps {
  data: I_SITTER_RESERVATION;
  request: boolean;
  asSitter: boolean;
  changeRequestStatus:any
}

const MobileReservationObject: React.FC<IProps> = ({
  data,
  request,
                                                     asSitter,
                                                     changeRequestStatus
}: IProps) => {
  return (
    <div className="col-12">
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
              {asSitter ? ((data.sitter ? data.sitter.firstname + ' ' + data.sitter.lastname:'') + " | " + strings.Client + ":" + (data.user ? data.user.firstname + ' ' + data.user.lastname:'')):
                  ((data.user ? data.user.firstname + ' ' + data.user.lastname:'') + " | " + strings.Client + ":" + (data.sitter ? data.sitter.firstname + ' ' + data.sitter.lastname:''))}
            </h6>
            <p className="font-10">{strings.Address + ":" + (asSitter ? data.user ? data.user.address.address:'':data.sitter ? data.sitter.address.address:'')}</p>
          </div>
        </div>
        <div className="d-flex justify-content-between my-2">
          <div className="from-details">
            <p className="font-10 mb-0">{strings.From}</p>
            <p className="font-12 font-semibold mb-0">{data.drop_of_date + ' ' + data.drop_of_time_from}</p>
          </div>
          <div className="to-details">
            <p className="font-10 mb-0">{strings.To}</p>
            <p className="font-12 font-semibold mb-0">{data.pickup_up_date + ' ' + data.pickup_up_time_to}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="total-details">
              <p className="font-10 mb-0">{strings.Total}</p>
              <p className="font-12 font-semibold mb-0">
                {"¥" + data.total_paid_amount} <span className="paid">Paid</span>
              </p>
            </div>
          </div>
          <div className="col-6 my-auto">
            <div className="d-flex justify-content-end vector-icon">
              {data.status===0 && <div>
                <button
                    className="btn btn-primary btn1 btn-accept btn-reject"
                    data-toggle="modal"
                    data-target="#reject"
                    onClick={()=> changeRequestStatus(data.id, 2)}
                >
                  {strings.Reject}
                </button>
                <button
                    className="btn btn-primary btn1 btn-accept"
                    data-toggle="modal"
                    data-target="#accept"
                    onClick={()=>changeRequestStatus(data.id, 1)}
                >
                  {strings.Accept}
                </button>
              </div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileReservationObject;
