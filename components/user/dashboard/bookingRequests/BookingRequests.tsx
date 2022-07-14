import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useState } from "react";
import { defaultAriaLiveMessages } from "react-select/dist/declarations/src/accessibility";
import API from "../../../../api/Api";
import I_SITTER_RESERVATION from "../../../../models/sitterReservations.interface";
import { strings } from "../../../../public/lang/Strings";
import Loader from "../../../common/Loader";
import BookingRequestObject from "./BookingRequestObject";

const api = new API();
export default function BookingRequests() {
  const router = useRouter();

  const [userReservations, setUserReservations] = useState<
    I_SITTER_RESERVATION[]
  >([]);
  const [sitterReservations, setSitterReservations] = useState<
    I_SITTER_RESERVATION[]
  >([]);
  const [uLoader, setULoader] = useState<boolean>(true);
  const [sLoader, setSLoader] = useState<boolean>(true);

  useEffect(() => {
    getUserReservations();
    getSitterReservations();
  }, []);

  const getUserReservations = () => {
    let data = JSON.stringify({
      keyword: "",
      status: 0,
    });
    api
      .getUserReservations(data, 1)
      .then((response) => {
        setUserReservations(response.data.response.data);
        setULoader(false);
      })
      .catch((error) => console.log(error));
  };

  const getSitterReservations = () => {
    let data = JSON.stringify({
      keyword: "",
      status: 0,
    });
    api
      .getSitterReservetions(data, 1)
      .then((response) => {
        setSitterReservations(response.data.response.data);
        setSLoader(false);
      })
      .catch((error) => console.log(error));
  };

  const acceptRequest = (id) => {
    let data = JSON.stringify({
      request_id: id,
      status: 1,
    });
    api
      .changeRequestStatus(data)
      .then((json) => {
        getSitterReservations();
        router.replace({
          pathname: "/user/reservation",
          query: { index: "1" },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="col-12 col-md-12 col-lg-12 col-xl-7  d-none d-md-none d-lg-block d-xl-block">
      <div className="bg-white main-background pb-1 booking-request">
        <div className="row">
          <div className="col-12 col-md-7 col-lg-7 col-xl-8">
            <h6 className="mb-3 font-semibold">
              {strings.LatestBookingRequests}
            </h6>
          </div>
          <div className="col-12 col-md-5 col-lg-5 col-xl-4 alignment">
            <div className="view-all">
              <a href="#" className="font-14">
                {strings.ViewAll}
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="pay-tabs dashboard-tab mb-3">
              <ul className="nav nav-tabs mb-0" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    id="cards-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-selected="true"
                  >
                    {strings.Bookingbyme}
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="bank-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-selected="false"
                  >
                    {strings.Bookingforme}
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade active show"
                aria-labelledby="home-tab"
                role="tabpanel"
                id="home"
              >
                {uLoader ? (
                  <Loader />
                ) : (
                    userReservations.length ?
                  userReservations.map((value, index) => (
                    <BookingRequestObject key={index} asSitter={false} request={value} />
                  )): <div className="text-center padding">
                          <p className="font-13 mb-0 font-italic">{strings.noReservation}</p>
                        </div>
                )}
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                {sLoader ? (
                  <Loader />
                ) : (
                    sitterReservations.length ?
                  sitterReservations.map((value,index) => (
                    <BookingRequestObject
                        key={index}
                      acceptRequest={acceptRequest}
                      asSitter={true}
                      request={value}
                    />
                  )): <div className="text-center padding">
                          <p className="font-13 mb-0 font-italic">{strings.noReservation}</p>
                        </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
