import React from "react";
import {
  I_CHAT_BOOKING,
  I_CHAT_PARTICIPANTS,
} from "../../models/chat.interface";
import API from "../../api/Api";
import { useEffect } from "react";
import { AxiosResponse } from "axios";
import Res from "../../models/response.interface";
import { useState } from "react";
import moment from "moment";
import Cookies from "universal-cookie";;
import TransportFeeModal from "../common/TransporFeeModal";
import { useSnackbar } from 'react-simple-snackbar';
import {FailureOptions, SuccessOptions} from "../../api/Constants";
import {strings} from "../../public/lang/Strings";
import {useRouter} from "next/router";
import {errorOptions} from "../../public/appData/AppData";


interface I_Props {
  participants: I_CHAT_PARTICIPANTS;
}

const api = new API();
const ChatBooking: React.FC<I_Props> = ({ participants }: I_Props) => {
  const [chatBooking, setChatBooking] = useState<I_CHAT_BOOKING[]>([]);
  const [user, setUser] = useState<any>();
  const cookies = new Cookies();
  const userId = cookies.get("id");
  const fName = cookies.get("firstname");
  const lName = cookies.get("lastname");
  const profilePic = cookies.get("profile_picture");

  const [showModal, setShowModal] = useState<any>();
  const [bookingId, setBookingId] = useState<any>();

  const [bankAdded, setBankAdded] = useState<boolean>(false);

    const [openError, closeError] = useSnackbar(errorOptions);

  const [openSnackbar] = useSnackbar();
  const router = useRouter()


  useEffect(() => {
    if (participants.id) {
      getThreadBooking();
    }
  }, [participants]);


  useEffect(() => {
      getBankAccounts();
  }, []);

  useEffect(() => {
    setUser({id: userId, firstname: fName,lastname: lName,profile_picture: profilePic})
  }, [fName, lName, userId,profilePic]);

  const getBankAccounts = () => {
    api
        .getAllBankAccount()
        .then((json) => {
          if(json.data.response && json.data.response.length){
            setBankAdded(true);
          }
        })
        .catch((error) => {
          console.log('error is ', error)
        });
  }

  //API call to get booking details
  const getThreadBooking = () => {
    api
      .getThreadBooking(participants.id)
      .then((res: AxiosResponse<Res<I_CHAT_BOOKING[]>>) => {
        if(res.data.status===200) {
          setChatBooking(res.data.response);
         // setUser(res.data.response[0] ? res.data.response[0].user : null);
        }else {
          setChatBooking(res.data.response);
        }
      })
      .catch((error) => console.log(error));
  };


  //Button Laebel
  const getButtonLabel  = (chatBooking) => {
    if(!user){
       return
    }
    if(chatBooking.booking_user_id == userId){
      if(chatBooking.status === 0){
        return 'Request pending'
      } else if(chatBooking.status === 1){
        return 'Request accepted'
      } else if(chatBooking.status === 2){
        return 'Request rejected'
      }
    }else {
      if(chatBooking.status === 0){
        return 'Accept Request'
      } else if(chatBooking.status === 1){
        return 'Request accepted'
      }
      else if(chatBooking.status === 2){
        return 'Request rejected'
      }
    }
  }

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
            updateBookingStatus({id: bookingId},  1)
          })
          .catch((error) => console.log(error));
    }
  }

  //API call to update booking status
  const updateBookingStatus = (value,action) => {
      api
          .updateRequestStatus({request_id: value.id, status: action})
          .then((res) => {
            if (res.data.status === 200) {
              openSnackbar(res.data.message)
              getThreadBooking();
            } else {
              openSnackbar(res.data.message)
            }
          })
          .catch((error) => {
            console.log('error', error)
          });
  }

  return (
    <div className="col-md-6 col-lg-3 col-xl-3 col-sm-3">
      {user ? (
          <div className="bg-white main-background d-none d-md-block d-lg-block d-xl-block">
            <div className="row">
              <div className="col-auto">
                <div className="sitter-profile-img">
                  <img src={user.profile_picture} className="img-fluid" />
                </div>
              </div>
              <div className="col my-auto review-column">
                <div className=" sitter-review-details">
                  <h5 className="mb-0 font-medium">
                    {user.firstname + " " + user.lastname}
                  </h5>
                  <p className="font-12 my-1 d-none d-md-block d-lg-block d-xl-block">
                    {user.address?.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
      ) : null}
      <div className="bg-white main-background d-none d-md-block d-lg-block d-xl-block right-scrl scrollbar">
        <div className="actions-details">
          <h6 className="font-medium mb-1">Actions</h6>
          <p className="font-14 mb-0">
            To book this sitter for you request you can confirm payment. This
            will confirm your booking and sitter will be notified for the same
            too.
          </p>
        </div>
        <hr />
        {chatBooking.map((value,index) => (
          <>
            <div key={index} className="booking-edit">
              <h6 className="font-medium mb-1 d-inline-block">
                Booking details
              </h6>
              {/*<a>Edit</a>*/}
              <p className="font-14 mb-1">{`${value.service.name} for`}</p>
              <div className="dog-boarding">
                {value.pets.map((pet) => (
                  <p className="mb-1 font-12">
                    {`${pet.pet_name} | ${pet.breed.breed} | ${pet.age_year} YRS | ${pet.weight}kgs`}
                  </p>
                ))}
              </div>
              <div className="address mb-2">
                <a href="#">{value.user.address?.address}</a>
              </div>
              <div className="from-date">
                <h6 className="font-12 font-normal mb-1">
                  From :
                  <span className="text-muted">{`${value.drop_of_date} | ${value.drop_of_time_from}`}</span>
                </h6>
                <h6 className="font-12 font-normal mb-2">
                  To :
                  <span className="text-muted">{`${value.pickup_up_date} | ${value.pickup_up_time_from}`}</span>
                </h6>
                <h6 className="font-12 font-normal mb-0">
                  Posted on : {moment(value.created_at).format("DD MMM yyyy")}
                </h6>
              </div>
            </div>
            <div className="mt-3 mb-3 row">
              <div className={"col"}>
                <h6 className="font-12 font-normal mb-0">
                  Transportation fee : {value.amend_amount}
                </h6>
              </div>
              <div className={"col"}>
                <h6 className="font-12 font-normal mb-0">
                  Service fee : {value.total_paid_amount}
                </h6>
              </div>
              <div className={"col"}>
                <h6 className="font-12 font-normal mb-0">
                </h6>
              </div>
            </div>
            <div className="mt-3 mb-3">
              {userId == value.booking_user_id && (<>
                {value.status==0 && <a>
                  <button className="btn btn-primary confirm-btn mr-1">
                    {getButtonLabel(value)}
                  </button>
                </a>}
                  {value.payment_status==0 && value.status==1 && <a>
                <button onClick={()=>{router.push({
                  pathname: "/payment",
                  query: {id:value.id}
                })}}  className="btn btn-primary confirm-btn mr-1">
                  {strings.pay}
                </button>
              </a>}
              <a>
                <button onClick={()=>updateBookingStatus(value,2)}  className="btn btn-primary confirm-btn">
                  Withdraw request
                </button>
              </a>
              </>)}
              {userId !=value.booking_user_id &&
              <div>

              {(getButtonLabel(value) == 'Request accepted') && <a>
                <button onClick={()=>updateBookingStatus(value,1)} className="btn btn-primary confirm-btn mr-1">
                  {strings.acceptedByYou}
                </button>
              </a>}
              {(getButtonLabel(value) == 'Accept Request') &&
                  value.amend_amount == '0.00' &&
              <a>
                <button onClick={()=>{
                    if(bankAdded){
                        setBookingId(value.id)
                        setShowModal(true)
                    }else {
                        openError('Please add your bank account details, before accepting the booking.')
                    }
                }} className="btn btn-primary confirm-btn mr-1">
                  Add transport fee
                </button>
              </a>}
                {(getButtonLabel(value) == 'Accept Request') &&
                value.amend_amount != '0.00' &&
                <a>
                  <button onClick={()=>updateBookingStatus(value,1)} className="btn btn-primary confirm-btn">
                    {getButtonLabel(value)}
                  </button>
                </a>}
              </div>
              }
            </div>
            <hr />
          </>
        ))}
      </div>

      <TransportFeeModal id={bookingId} showModal={showModal} hideModal={()=>setShowModal(false)} handleAddCharge={(amount)=> handleAddCharge(amount)}/>
    </div>
  );
};

export default ChatBooking;
