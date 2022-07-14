import React from "react";
import { strings } from "../../../public/lang/Strings";

const RequestView = ({ onAccept, onReject, data, request, onPayment }) => {
  let status = data.status;
  let paymentDone =  data.paymentDone;

  return (
    <div className="d-flex justify-content-end pr-1 accept-details">
      {status===0 && <div>
        <button
          className="btn btn-primary btn1 btn-accept btn-reject"
          data-toggle="modal"
          data-target="#reject"
          onClick={onReject}
        >
          {strings.Reject}
        </button>
        <button
          className="btn btn-primary btn1 btn-accept"
          data-toggle="modal"
          data-target="#accept"
          onClick={onAccept}
        >
          {strings.Accept}
        </button>
      </div>}
      {
        status === 1 && request && <button
            className="btn btn-gray btn1"
            data-toggle="modal"
            data-target="#accept"
        >
          {strings.Pending}
        </button>
      }
      {
        status === 1 && !request && data.payment_status===0  && <button
            className="btn btn-primary btn1 btn-accept"
            data-toggle="modal"
            data-target="#btn btn-primary btn1 btn-accept"
            onClick={onPayment}
        >
          {strings.pay}
        </button>
      }
      {
        status === 1 && !request && data.payment_status===1  && <button
            className="btn btn-primary btn1 btn-accept"
            data-toggle="modal"
            data-target="#btn btn-primary btn1 btn-accept"
        >
          {strings.paymentDone}
        </button>
      }
      {
        status === 2 &&  <button
            className="btn btn-primary btn1 btn-danger"
            data-toggle="modal"
            data-target="#rejected"
        >
          {strings.Rejected}
        </button>
      }
    </div>
  );
};
export default RequestView;
