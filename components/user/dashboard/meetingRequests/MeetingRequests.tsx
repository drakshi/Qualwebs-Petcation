
import React from "react";
import { strings } from "../../../../public/lang/Strings";
import MeetingRequestObject, {I_MEETUP_REQUEST} from "./MeetingRequestObject";
import {useEffect, useState} from "react";
import API from "../../../../api/Api";

let api = new API();

export default function MeetingRequests() {
  const [myRequest, setMyRequest] = useState<I_MEETUP_REQUEST[]>([]);
  const [incomingRequest, setIncomingRequest] = useState<I_MEETUP_REQUEST[]>([]);


  useEffect(()=>{
      getMeetupRequest(1);
      getMeetupRequest(2);
  },[])

  const getMeetupRequest = (type: number) => {
     api.getMeetupRequest(type).then((res)=>{
       if(res.data.status == 200){
         if(type == 1){
           setMyRequest(res.data.response)
         }else {
           setIncomingRequest(res.data.response)
         }
       }
     })
  }

  return (
    <div className="col-12 col-md-6 col-lg-6 col-xl-5">
      <div className="bg-white main-background pb-1">
        <div className="row">
          <div className="col-12 col-md-7 col-lg-7 col-xl-8">
            <h6 className="mb-3 font-semibold">{strings.MeetingRequests}</h6>
          </div>
          <div className="col-12 col-md-5 col-lg-5 col-xl-4 alignment">
            <div className="view-all">
              <a href="#" className="font-14">
                {strings.view}
              </a>
            </div>
          </div>
        </div>

        <div className="pay-tabs dashboard-tab mb-3">
          <ul className="nav nav-tabs mb-0" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link  active"
                id="cards-tab1"
                data-toggle="tab"
                href="#home1"
                role="tab"
              >
                {strings.Requestbyme}
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="bank-tab1"
                data-toggle="tab"
                href="#profile1"
                role="tab"
              >
                {strings.Requestforme}
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home1"
            role="tabpanel"
            aria-labelledby="home-tab1"
          >
            <div className="row">
              {myRequest.length > 0 ? myRequest.map((value, index) => (
                <MeetingRequestObject key={index} type={true} request={value} />
              )):<div className="text-center padding">
                <p className="font-13 mb-0 font-italic">{strings.noRequest}</p>
              </div>}
            </div>
          </div>

          <div
            className="tab-pane"
            id="profile1"
            role="tabpanel"
            aria-labelledby="profile-tab1"
          >
            <div className="row">
              {incomingRequest.length > 0 ? incomingRequest.map((value,index) => (
                <MeetingRequestObject key={index} type={false} request={value} updateRequest={(type)=> type ? getMeetupRequest(1):getMeetupRequest(2)} />
              )):<div className="text-center padding">
                <p className="font-13 mb-0 font-italic">{strings.noRequest}</p>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
