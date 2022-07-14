import React, {useRef} from "react";
import { useEffect } from "react";
import db from "../../service/Firebase";
import { ref, onValue } from "firebase/database";
import { useState } from "react";
import {
  I_CHAT_MESSAGE,
  I_CHAT_PARTICIPANTS,
} from "../../models/chat.interface";
import Cookies from "universal-cookie";
import API from "../../api/Api";
import moment from "moment";
import Modal from "react-modal";
import "react-day-picker/lib/style.css";
import DayPickerInput from "react-day-picker/DayPickerInput";
import parseDate from "react-day-picker/moment";
import formatDate from "react-day-picker/moment";
import Autocomplete from "react-google-autocomplete";
import TimePicker from "../common/TimePicker";
import {GOOGLE_PLACES_API} from "../../api/Constants";
import UploadFileModal from "../../components/common/UploadfileModal";
import { dataURLtoFile } from "../../utils/Helper";
import {errorOptions, successOptions} from "../../public/appData/AppData";
import { useSnackbar } from "react-simple-snackbar";
import {strings} from "../../public/lang/Strings";
import Link from "next/Link";


interface I_Props {
  participants: I_CHAT_PARTICIPANTS;
}

type T_ARRANGE_MEET = {
  thread_id: string;
  date: string;
  time: string;
  location: string;
  text_message: string;
};

let initialState = {
  thread_id: "",
  date: "",
  time: "",
  location: "",
  text_message: "",
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    border: "0px",
    padding: "0",
    zIndex: 100,
    backgroundColor: "transparent",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.75)",
    zIndex: 99,
  },
};

const api = new API();
const cookies = new Cookies();
const ChatBox: React.FC<I_Props> = ({ participants }: I_Props) => {
  const [messages, setMessages] = useState<I_CHAT_MESSAGE[]>([]);
  const [message, setMessage] = useState<string>("");
  const [userId, setUserId] = useState<number>(null);
  const [isOpen, setOpen] = useState<boolean>(false);
  const [arrangeMeetData, setArrangeMeetData] =
    useState<T_ARRANGE_MEET>(initialState);
  const [time, setTime] = useState<any>({
    h: "12",
    m: "0",
    a: "AM",
  });
  const [date, setDate] = useState<Date>();
  const [location, setLocation] = useState<string>("");
  const endMessage = useRef<any>();
  const [openCropper, setOpenCropper] = useState<boolean>(false);
  const [cropper, setCropper] = useState<any>();
  const [uploadedFilePath, setUploadedFilePath] = useState<any>();
  const [selectedImage, setSelectedImage] = useState<string>();
  let imgRef = React.useRef(null);

  const [openSuccess, closeSuccess] = useSnackbar(successOptions);
  const [openError, closeError] = useSnackbar(errorOptions);
  const [errors, setErrors] = useSnackbar<any>();


  useEffect(() => {
    getMessages(participants.id);
  }, [participants]);

  useEffect(() => {
    const id = cookies.get("id");
    setUserId(id);
  }, []);

  useEffect(() => {
    if (endMessage.current) {
      endMessage.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [messages]);

  const onFileChange = (event) => {
    event.preventDefault();
    if (event.dataTransfer || event.target.files) {
      let files;
      if (event.dataTransfer) {
        files = event.dataTransfer.files;
      } else if (event.target) {
        files = event.target.files;
      }
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedFilePath(reader.result);
      };
      if (files[0]) {
        reader.readAsDataURL(files[0]);
        console.log('open cropper is', openCropper)
        setOpenCropper(true);
      }
    }
  };

  const getMessages = async (threadId) => {
    const messagesRef = ref(db, `chat_line/${threadId}`);
    onValue(messagesRef, (snapshot) => {
      var data = [];
      snapshot.forEach((element) => {
        data.push(element.val());
      });

      setMessages(data);

    });

  };

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const sendMessage = (type, data) => {
    if (message != "" || type === 2) {
      let payload = JSON.stringify({
        thread_id: participants.id,
        message: type === 2 ? data:message,
        documents: type == 2 ?  [data]:[],
      });
      setMessage("");
      api
        .sendMessage(payload)
        .then((json) => console.log(json.data.response))
        .catch((error) => console.log(error));
    }
  };

  const onModalClose = () => {
    setOpen(false);
    setTime({
      h: "12",
      m: "0",
      a: "AM",
    });
    setDate(undefined);
    setArrangeMeetData(initialState);
    setLocation(undefined);
  };

  const callArrangeMeetup = () => {
    if (date == undefined) {
      setErrors({...errors, date: "Select meeting date"});
      openError("Select meeting date");
      return false;
    }

    if (location == "") {
      setErrors({...errors, location: "Enter meeting location"});
      openError("Enter meeting location");
      return false;
    }

    if (arrangeMeetData.text_message == "") {
      setErrors({...errors, text_message: "Enter message"});
      openError("Enter message");
      return false;
    }

    let data = JSON.stringify({
      ...arrangeMeetData,
      location: location,
      time: `${time.h}:${time.m}:${time.a}`,
      date: moment(date).format("yyyy-MM-DD"),
      thread_id: participants.id,
    });

    api
      .arrangeMeetup(data)
      .then((res) => {
        setOpen(false);
      })
      .catch((error) => console.log(error));
  };


  const updateMeetupStatus = (id: number,status:number) => {
    let data = {
      meet_up_id: id,
      status: status
    }
    api
        .updateMeetupStatus(data)
        .then((res) => {
          setOpen(false);
          getMessages(participants.id);
        })
        .catch((error) => console.log(error));
  }

  const chatAction = (id, status) => {
    api
        .chatAction({thread_id: id, status: status})
        .then((json) => {

        })
        .catch((error) => console.log(error));
  };

  console.log(messages)
  return (
    <>
      <div className="col-md-6 col-lg-6 col-xl-6 col-sm-6 pd-right" id="main">
        <div className="bg-white main-background">
          <div className="chat-top-details">
            <div className="row">
              <div className="col-6 col-md-6 col-lg-4 col-xl-5">
                <div className="d-flex single-grp-details review-details">
                  <div className="user-img group-img">
                    <img src={participants.user.profile_picture} alt="..." />
                  </div>
                  <div className="grup-single-name my-auto ml-2">
                    <Link href={{ pathname: "/sitter-profile/" +participants.user.id  }}>
                    <h6 className="mb-0">
                      {participants.user.firstname +
                        " " +
                        participants.user.lastname}
                    </h6>
                    </Link>

                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-8 col-xl-7 alignment d-none d-md-none d-lg-block d-xl-block">
                <div className="d-flex justify-content-between report-details">
                  <div data-toggle="modal" data-target="#meet-up">
                    <button
                      onClick={() => setOpen(true)}
                      className="btn btn-primary chat mt-0"
                    >
                      Arrange meet up
                    </button>
                  </div>
                  <div>
                    <button className="btn btn-primary chat shade mt-0">
                      Report sitter
                    </button>
                  </div>
                  {participants.status == 1 ? <div>
                    <button onClick={()=>chatAction(participants.id, participants.status == 1 ? 0:1)} className="btn btn-primary chat shade mt-0">
                      {participants.disconnect == 0 ? 'Disconnect':'Connect'}
                    </button>
                  </div>:(participants.disconnect == 1 ?  <div>
                    <button className="btn btn-primary chat shade mt-0 bg-danger">
                    Blocked
                    </button>
                    </div>:<div>
                    <button onClick={()=>chatAction(participants.id, participants.status == 1 ? 0:1)} className="btn btn-primary chat shade mt-0">
                      Connect
                    </button>
                  </div>)}
                </div>
              </div>
              {/*------for mobile view---------------*/}
              <div className="col-6 col-md-6 d-block d-md-block d-lg-none d-xl-none">
                <div className="dropdown pet-drop">
                  <a
                    className="menu dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                    aria-expanded="false"
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
                  <div
                    className="dropdown-menu  animate slideIn"
                    x-placement="bottom-end"
                    style={{
                      position: "absolute",
                      transform: "translate3d(73px, 0px, 0px)",
                      top: 0,
                      left: 0,
                      willChange: "transform",
                    }}
                  >
                    <a href="#" className="dropdown-item">
                      Arrange meet up
                    </a>
                    <hr className="my-2" />
                    <a href="#" className="dropdown-item">
                      Report sitter
                    </a>
                    <hr className="my-2" />

                    {participants.status == 0 ? <a onClick={()=>chatAction(participants.id, participants.status == 1 ? 0:1)} className="dropdown-item">
                      Disconnect
                    </a>:(participants.disconnect == 1 ?  <a onClick={()=>chatAction(participants.id, participants.status == 1 ? 0:1)} className="dropdown-item">
                      Connect
                    </a>:<a className="dropdown-item">
                      Blocked
                    </a>)}
                  </div>
                </div>
              </div>
              {/*----------/for mobile view----------*/}
            </div>
          </div>
          <hr />
          <div className="scrollbar">
            {messages.length > 0 ? messages.map((value, index) => (
                <>
              {value.contain_request == 0 && value.contain_meet_up===0 && value.has_document == 0 && <div className="row">
                <div
                  className={`col-12 col-md-10 col-lg-10 col-xl-10 ${
                    userId == value.sender_id
                      ? "offset-lg-2 offset-md-2 offset-xl-2"
                      : ""
                  }`}
                >
                  <div
                    className={`chatbox ${
                      userId == value.sender_id
                        ? "right-chatbox"
                        : "left-chatbox"
                    }`}
                  >
                    <h6 className="font-14">{value.message}</h6>
                    <p className="mb-0 font-12">
                      {moment(
                        new Date(Number(value.send_timestamp) * 1000)
                      ).format("MMMM DD ,yyyy")}
                    </p>
                  </div>
                </div>
              </div>}
                  {value.has_document == 1 && <div className="row">
                    <div
                        className={`col-12 col-md-10 col-lg-10 col-xl-10 ${
                            userId == value.sender_id
                                ? "offset-lg-2 offset-md-2 offset-xl-2"
                                : ""
                        }`}
                    >
                      <div
                          className={`chatbox ${
                              userId == value.sender_id
                                  ? "right-chatbox"
                                  : "left-chatbox"
                          }`}
                      >
                        <img src={value.message} onClick={()=>  window.open(value.message,'_blank')}/>
                        <p className="mb-0 font-12">
                          {moment(
                              new Date(Number(value.send_timestamp) * 1000)
                          ).format("MMMM DD ,yyyy")}
                        </p>
                      </div>
                    </div>
                  </div>}
              {value.contain_meet_up ==1 && <div className={`col-12 col-md-10 col-lg-10 col-xl-10`}>
                    <div className="chatbox meeting-request">
                      <h6 className="font-14 font-semibold">{ 'Meet up requested'}</h6>
                      <p className="mb-0 font-12">{userId == value.sender_id ? 'You':(value.sender.firstname + ' ' + value.sender.lastname)}{' '}requested for meet up on</p>

                      <div className="service-date my-2">
                        <p className="mb-0 font-12"><b>Message</b></p>
                        <p className="mb-0 font-12"><span>{value.meet_up.message}</span></p>
                      </div>

                      <div className="service-date my-2">
                        <p className="mb-0 font-12"><b>Date | Time</b></p>
                        <p className="mb-0 font-12"><span>{moment(value.meet_up.date).format("DD MMM ,yyyy")} &nbsp; {value.meet_up.time}</span></p>
                      </div>

                      {userId != value.meet_up.requested_by && value.meet_up.status == 0 && <div className="meeting-btn">
                        <button onClick={()=>updateMeetupStatus(value.meet_up.id, 1)} className="btn btn-primary btn1 btn-accept" data-toggle="modal"
                                data-target="#accept">Accept
                        </button>
                        <button onClick={()=>updateMeetupStatus(value.meet_up.id, 2)} className="btn btn-primary btn1 btn-accept btn-reject" data-toggle="modal"
                                data-target="#reject">Decline
                        </button>
                      </div>}
                      {userId == value.meet_up.requested_by && value.meet_up.status == 0 && <div className="meeting-btn">
                        <button className="btn btn-primary btn1 btn-accept" data-toggle="modal"
                                data-target="#accept">Pending
                        </button>
                      </div>}
                      {value.meet_up.status == 1 && <div className="meeting-btn">
                        <button className="btn btn-primary btn1 btn-accept" data-toggle="modal"
                                data-target="#accept">Accepted
                        </button>
                      </div>}
                      {value.meet_up.status == 2 && <div className="meeting-btn">
                        <button className="btn btn-primary btn1 btn-accept" data-toggle="modal"
                                data-target="#accept">Rejected
                        </button>
                      </div>}
                    </div>
                  </div>}
                  {value.contain_request == 1 && <div className={`col-12 col-md-10 col-lg-10 col-xl-10`}>
                    <div className="chatbox meeting-request">
                      <h6 className="font-14 font-semibold">{ 'Congratulations'}</h6>
                      <p className="mb-0 font-12">Booking for {value.request.service.name} for {value.request.pets.length} {value.request.pets.length ? value.request.pets[0].pet_name:'pet'} is successfully done for YEN {value.request.total_paid_amount}.</p>

                      <div className="service-date my-2">
                        <p className="mb-0 font-12">Date | Time</p>
                        <p className="mb-0 font-12"><span>{value.request.pickup_up_date}&nbsp;{value.request.pickup_up_time_from + '-' + value.request.pickup_up_time_to}</span></p>
                      </div>
                    </div>
                  </div>}
                </>
            )):<div className="text-center padding">
              <p className="font-13 mb-0 font-italic">{strings.noMsgYet}</p>
            </div>}

            <div ref={endMessage} />
          </div>
          {participants.status == 1 ? <div className="send-msg">
            <div className="row">
              <div className="col-8 col-md-9 col-lg-9 col-xl-9 pd-right">
                <div className="send-msg-bar">
                  <input
                    className="form-control"
                    id="send-msg"
                    placeholder="Type to send message"
                    type="text"
                    value={message}
                    onChange={onTextChange}
                  />
                </div>
              </div>
              <div
                className="col-4 col-md-3 col-lg-3 col-xl-3  right-padding alignment"
                id="send-col2"
              >
                 <div className="d-flex">
                  <input className={'d-none'} ref={imgRef} type="file" name="file" onChange={onFileChange} />
                  <a onClick={()=>{imgRef.current.click();}}>
                    <div className="plus-sign">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fal"
                        data-icon="plus"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        className="svg-inline--fa fa-plus fa-w-12 fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M376 232H216V72c0-4.42-3.58-8-8-8h-32c-4.42 0-8 3.58-8 8v160H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h160v160c0 4.42 3.58 8 8 8h32c4.42 0 8-3.58 8-8V280h160c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z"
                        />
                      </svg>
                    </div>
                  </a>

                  <div className="chat-send-btn d-none d-md-none d-lg-block d-xl-block">
                    <button onClick={()=>sendMessage(1, message)} className="btn btn-primary">
                      Send
                    </button>
                  </div>
                  {/*----------for mobile view-------------*/}
                  <div className="plus-sign send-sign d-block d-md-block d-lg-none d-xl-none">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fal"
                      data-icon="paper-plane"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="svg-inline--fa fa-paper-plane fa-w-16 fa-2x"
                    >
                      <path
                        fill="currentColor"
                        d="M464 4.3L16 262.7C-7 276-4.7 309.9 19.8 320L160 378v102c0 30.2 37.8 43.3 56.7 20.3l60.7-73.8 126.4 52.2c19.1 7.9 40.7-4.2 43.8-24.7l64-417.1C515.7 10.2 487-9 464 4.3zM192 480v-88.8l54.5 22.5L192 480zm224-30.9l-206.2-85.2 199.5-235.8c4.8-5.6-2.9-13.2-8.5-8.4L145.5 337.3 32 290.5 480 32l-64 417.1z"
                      />
                    </svg>
                  </div>
                  {/*----------/for mobile view------------*/}
                </div>
              </div>
            </div>
          </div>: null}
        </div>
      </div>
      <Modal isOpen={isOpen} style={customStyles}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Arrange meet up</h5>
              <button
                type="button"
                onClick={onModalClose}
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="meetup-details">
                <form>
                  <div className="row">
                    <div className="col-sm-6">
                      <h6>Date</h6>
                      <div className="form-group">
                        <div className={"form-control"}>
                          <DayPickerInput
                            formatDate={formatDate.formatDate}
                            parseDate={parseDate.parseDate}
                            dayPickerProps={{
                              modifiers: {
                                disabled: [
                                  {
                                    before: new Date(),
                                  },
                                ],
                              },
                            }}
                            inputProps={{
                              style: {
                                border: 0,
                                background: "transparent",
                              },
                              readOnly: true,
                            }}
                            onDayChange={(date) => {
                              setErrors({...errors, date: null});
                              setDate(date)
                            }}
                            placeholder="DD/MM/YYYY"
                            format="DD/MM/yyyy"
                            value={date}

                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <h6>Time</h6>
                      <div className="form-group">
                        <TimePicker
                          value={time}
                          onChange={(value) => setTime(value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="location-details">
                    <h6>Location</h6>
                    <div className={"location-inner-details"}>
                      <div className={"d-flex justify-content-between"}>
                        <div>
                          <Autocomplete
                            className={"form-control border-0 p-0"}
                            apiKey={GOOGLE_PLACES_API}
                            onPlaceSelected={(place) => {
                              setErrors({...errors, location: null});
                              setLocation(place.formatted_address);
                            }}
                            options={{
                              types: ["address"],
                              componentRestrictions: { country: "jp" },
                            }}
                            defaultValue={location}
                          />
                        </div>
                        <div className="map-pin">
                          <a href="#">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="map-marker-alt"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 384 512"
                              className="svg-inline--fa fa-map-marker-alt fa-w-12 fa-2x"
                            >
                              <path
                                fill="currentColor"
                                d="M192 0C85.903 0 0 86.014 0 192c0 71.117 23.991 93.341 151.271 297.424 18.785 30.119 62.694 30.083 81.457 0C360.075 285.234 384 263.103 384 192 384 85.903 297.986 0 192 0zm0 464C64.576 259.686 48 246.788 48 192c0-79.529 64.471-144 144-144s144 64.471 144 144c0 54.553-15.166 65.425-144 272zm-80-272c0-44.183 35.817-80 80-80s80 35.817 80 80-35.817 80-80 80-80-35.817-80-80z"
                              />
                            </svg>
                            Pin on map
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="msg-area mt-3">
                    <h6>Message</h6>
                    <textarea
                      className={"form-control"}
                      value={arrangeMeetData.text_message}
                      onChange={(e) =>
                        setArrangeMeetData({
                          ...arrangeMeetData,
                          text_message: e.target.value,
                        })
                      }
                      rows={4}
                      defaultValue={""}
                    />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        callArrangeMeetup();
                      }}
                      className="btn btn-primary"
                    >
                      Confirm
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      {openCropper ? <UploadFileModal
          onInitialized={(instance) => {
            setCropper(instance);
          }}
          path={uploadedFilePath}
          showModal={openCropper}
          zoomable={false}
          aspectRatio={16 / 9}
          setImage={(v) => {
            setOpenCropper(false)
            var file = dataURLtoFile(v, "image");
            const formData = new FormData();
            formData.append("image", file);
            formData.append("path", "pets");
            api
                .uploadFile(formData)
                .then((json) => {

                  setOpenCropper(false)
                  setSelectedImage(json.data.response);
                  sendMessage(2,json.data.response)
                })
                .catch((error) => console.log(error));
          }}
          preview=".img-preview"
          guides={false}
          viewMode={1}
          dragMode="move"
          cropBoxMovable={true}
          hideModal={() => setOpenCropper(false)}
      />:null}
    </>
  );
};

export default ChatBox;
