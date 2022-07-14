import React, {useState} from "react";
import I_SITTER_RESERVATION from "../../../models/sitterReservations.interface";
import { strings } from "../../../public/lang/Strings";
import ContactView from "./ContactView";
import RequestView from "./RequestView";
import {AxiosResponse} from "axios";
import Res from "../../../models/response.interface";
import {I_CHAT_BOOKING} from "../../../models/chat.interface";
import { useSnackbar } from 'react-simple-snackbar';
import API from "../../../api/Api";
import TransportFeeModal from "../../common/TransporFeeModal";
import { useRouter } from "next/router";
import {Modal} from "react-bootstrap";
import {numberInput} from "../../../utils/Helper";

type reservationObject = {
  image: string;
  from: string;
  to: string;
  paymentStatus: string;
  total: string;
  name: string;
  clientName: string;
  address: string;
};

interface IProps {
  data: I_SITTER_RESERVATION;
  request: boolean;
  asSitter: boolean;
  changeRequestStatus: (id, status) => void;
}

let api = new API();

const ReservationObject: React.FC<IProps> = ({
  data,
  request,
  asSitter,
  changeRequestStatus,
}: IProps) => {
  const key = asSitter ? "user" : "sitter";

  const [showModal, setShowModal] = useState(false);
  const [bookingId, setBookingId] = useState<any>();
  const [cancelModal, setCancelModal] = useState(false);



  const [openSnackbar] = useSnackbar();
  const router = useRouter()

  //Api call for add transport fee
  const handleAddCharge = (amount) => {
    if(!amount){
      openSnackbar("Enter amount")
    }else {
      api
          .addTransportChargeRequest({request_id: bookingId, amount: amount})
          .then((res: AxiosResponse<Res<I_CHAT_BOOKING[]>>) => {
            openSnackbar(res.data.message)
            setShowModal(false)
            changeRequestStatus(data.id, 1)
          })
          .catch((error) => console.log(error));
    }
  }

  const onAccept = () => {
    if(data.amend_amount == '0.00'){
      setShowModal(true);
    }else {
      changeRequestStatus(data.id, 1);
    }

  };

  const onReject = () => {
    changeRequestStatus(data.id, 2);
  };

  const onPayment = () => {
    router.push({
      pathname: "/payment",
      query: {id:data.id}
    });
  };

  const onCancelRequest = () => {
      setCancelModal(true);
  };

  return (
      <>
    <div className="booking-request-details">
      <div className="booking-bg">
        <div className="image1">
          <a href={`/sitter-profile/${data.sitter ? data.sitter.id:''}`}>
            <img src={asSitter ? (data.user ? data.user.profile_picture:''):(data.sitter ? data.sitter.profile_picture:'')} />
          </a>
        </div>
        <div className="row">
          <div className="col-xl-10 offset-xl-2 pd-left">
            <div className="row">
              <div className="col-12 col-md-8 col-lg-9 col-xl-6 pd-left">
                <div className="d-flex justify-content-between">
                  <div className="from-details">
                    <p className="font-10 mb-0">{strings.From}</p>
                    <p className="font-12 font-semibold mb-0">
                      {data.drop_of_date}
                    </p>
                  </div>
                  <div className="to-details">
                    <p className="font-10 mb-0">{strings.To}</p>
                    <p className="font-12 font-semibold mb-0">
                      {data.pickup_up_date}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-8 col-lg-3 col-xl-3 offset-xl-3 alignment">
                <div className="d-flex justify-content-between">
                  <div className="total-details pr-4">
                    <p className="font-10 mb-0">{strings.status}</p>
                    <p className="font-12 font-semibold mb-0">
                      {
                        data.status == 0 ? strings.Pending
                            :(data.status == 1 && data.payment_status === 0) ? request ? strings.acceptedBySitter: strings.paymentPending
                            :(data.status == 1 && data.payment_status === 1) ? strings.paymentDone
                            : data.status == 2 ? strings.Rejected:  <ContactView data={data} />
                      }
                    </p>
                  </div>
                  <div className="total-details">
                    <p className="font-10 mb-0">{strings.Total}</p>
                    <p className="font-12 font-semibold mb-0">
                      {"¥ " + data.total_paid_amount}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-10 offset-xl-2 pd-left">
          <div className="row">
            <div className="col-xl-8 pd-left">
              <div className="booking-title mt-2">
                {asSitter ? <h6 className="font-14 mb-1 font-medium">
                  {(data.user ? (data.user.firstname + ' ' + data.user.lastname):'') + " - " + data.service.name}
                </h6>:<h6 className="font-14 mb-1 font-medium">
                  {(data.sitter ? (data.sitter.firstname + ' ' + data.sitter.lastname):'') + " - " + data.service.name}
                </h6>}
                {asSitter && <p className="mb-0 font-10">
                  {data.user ? (
                    <p className="font-10">
                      {`${
                        strings.Address +
                        ":" +
                        (data.user ? data.user.address.address:'') +
                        " " +
                        (data.user ? data.user.address.city:'') +
                        " " +
                        (data.user ? data.user.address.postcode:'')
                      }`}
                    </p>
                  ) : null}
                </p>}
                {!asSitter && <p className="mb-0 font-10">
                  {data.sitter ? (
                      <p className="font-10">
                        {`${
                            strings.Address +
                            ":" +
                            (data.sitter ? data.sitter.address.address:'') +
                            " " +
                            (data.sitter ? data.sitter.address.city:'') +
                            " " +
                            (data.sitter ? data.sitter.address.postcode:'')
                        }`}
                      </p>
                  ) : null}
                </p>}
              </div>
            </div>
            <div className="col-xl-4  my-auto">
              {
                data.status == 0 ? request ? <RequestView onPayment={onPayment} request={request} data={data} onAccept={onAccept} onReject={onReject} />:<ContactView data={data} />
                :data.status == 1 ? request ? <RequestView onPayment={onPayment}  request={request} data={data} onAccept={onAccept} onReject={onReject} />: ((data.payment_status == 0 && asSitter) ? null:<RequestView onPayment={onPayment}  request={request} data={data} onAccept={onAccept} onReject={onReject} />)
                : data.status == 2 ? request ? <ContactView data={data} />: <ContactView data={data} />:  <ContactView data={data} />
              }
            </div>
            {data.status == 1 &&  !asSitter && <div className="col-xl-4  my-auto">
              <div className="d-flex justify-content-end pr-1 accept-details">
                <button
                    className="btn btn-primary btn1 btn-accept bg-danger border-danger"
                    data-toggle="modal"
                    data-target="#reject"
                    onClick={()=>setCancelModal(true)}
                >
                  {strings.Cancel}
                </button>
              </div>
            </div>}
          </div>
        </div>
      </div>
    </div>
        <Modal
            show={cancelModal}
            id="settings"
            className="modal-child"
            aria-labelledby="settings"
            tabIndex="-1"
            scrollable
        >
          <Modal.Header className="p-3">
            <Modal.Title as="h4" className="fw-medium">
             Are you sure you want to cancel current request
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-3">
            <div className="col-12 form-details">
              <div className="bg-white main-background policy">
                <h5 className="font-semibold mb-3 font-20">
                  {strings.BoardingCancellationpolicy}
                </h5>
                {data.cancellation_policy == 1 && <>
                  <li>You’ll get a full refund if you cancel before the day’s service is
                    delivered.
                  </li>
                  <li>If you cancel after the stay or walk begins, you'll get a 50% refund for
                    the first seven cancelled days and a 100% refund for any additional
                    cancelled days.
                  </li>
                </>
                }
                {data.cancellation_policy == 2 && <>
                  <li>You cancel within 48 hours of booking.</li>
                  <li>The reservation you’re cancelling doesn’t overlap with another
                    reservation in your account When refund, any promo code (coupon) and
                    points will be available to use immediately.
                  </li>
                  <li>If you cancel after 12:00 noon 3 days before the stay begins, you'll get
                    a 50% refund for the first seven cancelled days and a 100% refund for
                    any additional cancelled days.
                  </li>
                </>
                }
                {data.cancellation_policy == 3 && <>
                  <li>If you cancel after 12:00 noon one week before the stay begins, you'll
                    get a 50% refund for the first seven cancelled days and a 100% refund
                    for any additional day.
                  </li>
                  <li>If you cancel after 12:00 noon one week before the stay begins, you'll
                    get a 50% refund for the first seven cancelled days and a 100% refund
                    for any additional day.
                  </li>
                </>
                }
              </div>

            </div>
            <hr />
            <div className="d-flex justify-content-between flex-row">
              <button
                  style={{ zIndex: 1000 }}
                  onClick={onCancelRequest}
                  className="btn btn-primary float-end"
              >
                {strings.Confirm}
              </button>
              <button
                  style={{ zIndex: 1000 }}
                  onClick={()=>setCancelModal(false)}
                  className="btn float-end"
              >
                {strings.Cancel}
              </button>
            </div>
          </Modal.Body>
        </Modal>
      <TransportFeeModal id={bookingId} showModal={showModal} hideModal={()=>setShowModal(false)} handleAddCharge={(amount)=> handleAddCharge(amount)}/>
  </>
  );
};

export default ReservationObject;
