import React from "react";
import { strings } from "../../../../public/lang/Strings";
import {I_SINGLE_SITTER} from "../../../../models/sitter.interface";
import moment from "moment";
import { useSnackbar } from "react-simple-snackbar";
import { errorOptions, successOptions } from "../../../../public/appData/AppData";
import API from "../../../../api/Api";

export type I_USER = {
 id: number;
 firstname: string;
 lastname: string;
 profile_image: string;
    address: {
        id: number;
        live_in_house: number;
        non_smoking_household: number;
        no_children_present: number;
        fenced_yard: number;
        dog_other_pets: number;
    }
}

export type I_MEETUP_REQUEST = {
  chat_line_id: number;
  chat_thread_id: number;
  date: string;
  time: string;
  id: number;
  location: string;
  message: string;
  requested_by: I_USER;
  requested_for: I_USER;
  status: number;
};

interface IProps {
  request: I_MEETUP_REQUEST;
  type: boolean;
  updateRequest?: any
}

let api = new API();

const MeetingRequestObject: React.FC<IProps> = ({ request, type,updateRequest }: IProps) => {
  const [openSuccess, closeSuccess] = useSnackbar(successOptions);
  const [openError, closeError] = useSnackbar(errorOptions);


  const updateMeetupStatus = (id: number,status:number) => {
    let data = {
      meet_up_id: id,
      status: status
    }
    api
        .updateMeetupStatus(data)
        .then((res) => {
             if(res.data.status == 200){
                  openSuccess('Successfully updated status');
                   updateRequest(type);
             }else {
                  openError('Error updating status');
             }
        })
        .catch((error) => openError('Error updating status'));
  }

  return (
    <div className="col-12 col-md-6 col-lg-6 col-xl-12">
      <div className="booking-request-details request-padding">
        <div className="d-flex">
          <div className="meeting-day text-center">
            <div>
              <p className="text-white mb-0 font-8">{moment(request.date).format("ddd, DD'MMM YYYY")}</p>
              <p className="text-white mb-0 font-8">{request.time}</p>
            </div>
          </div>
          <div>
            <div className="row">
              <div className="col-9 col-md-8 col-lg-8 col-xl-8">
                <div className="meeting-details ml-2">
                  <h6 className="mb-0 font-12 font-medium">
                    {request.message}
                  </h6>
                  <p className="font-10">
                    {strings.Client + ":"} <span>{type ? (request.requested_for.firstname + ' ' + request.requested_for.lastname):(request.requested_by.firstname + ' ' + request.requested_by.lastname)}</span>
                  </p>
                </div>
              </div>
              <div className="col-3 col-md-4 col-lg-4 col-xl-4 column-left alignment">
                <div>
                  {!type ? (
                      request.status == 0 ?
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
                              className=""
                            ></path>
                          </svg>
                        </div>
                      </a>
                      <div className="dropdown-menu animate slideIn">
                        <a onClick={()=> updateMeetupStatus(request.id, 1)} className="dropdown-item">
                          {strings.Accept}
                        </a>
                        <hr className="my-2" />
                        <a onClick={()=> updateMeetupStatus(request.id, 2)} className="dropdown-item">
                          {strings.Reject}
                        </a>
                      </div>
                    </div>: null
                  ) : (
                    <div className="dropdown pet-drop">
                      <a
                        className="menu dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                        aria-expanded="true"
                      >
                        <div className="ellipse tick-icon">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="check"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="svg-inline--fa fa-check fa-w-16 fa-2x"
                          >
                            <path
                              fill="currentColor"
                              d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <p className="mb-0 font-10 ml-2">
              {strings.Meetat + ":" + request.location}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MeetingRequestObject;
