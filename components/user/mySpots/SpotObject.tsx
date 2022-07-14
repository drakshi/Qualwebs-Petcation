import React from "react";
import Carousel from "react-multi-carousel";
import {
  responsive,
  singleResponsiveness,
} from "../../../public/SliderResponsive";
import "react-multi-carousel/lib/styles.css";
import { strings } from "../../../public/lang/Strings";
import { useSnackbar } from 'react-simple-snackbar';
import API from "../../../api/Api";

import {useRouter} from "next/router";

type T_SPOT = {
  spot_id: number;
  id: number;
  spot_name: string;
  address: string;
  city: string;
  postal_code: number;
  created_at: string;
  overall_rate: number;
  total_review: number;
  repeat_client: number;
  images: {
    path: string;
  }[];
  spot: {
    spot_id: number;
    id: number;
    spot_name: string;
    address: string;
    city: string;
    postal_code: number;
    created_at: string;
    overall_rate: number;
    total_review: number;
    repeat_client: number;
    images: {
      path: string;
    }[];
    user_id: number;
  }
};

interface IProps {
  spot: any;
  deleteSpot?: (val: number) => void;
  updateSpot: any;
  type: number;
}

const api = new API();

const SpotObject: React.FC<IProps> = ({ spot, deleteSpot, updateSpot,  type }: IProps) => {
  const [openSnackbar] = useSnackbar();
  const router = useRouter();

  const unmarkSpot = (spot_id) => {
    api.markUnmarkSpot({spot_id}).then((res)=> {
      if(res.data.status ===  200) {
        openSnackbar(res.data.message);
        updateSpot();
      }
    }).catch((error)=>{
      openSnackbar(strings.errorUpdatingStatus);
    })
  };

  return (
      <>
        {spot.spot ? <>
          <div className="row">
            <div className="col-12 col-md-8 col-lg-8 col-xl-9">
              <div className="row">
                <div className="col-sm-6">
                  {spot.spot.images && spot.spot.images.length > 1 ? (
                      <div className="carousel slide">
                        <Carousel
                            arrows={null}
                            showDots={true}
                            swipeable={true}
                            draggable={true}
                            autoPlay={true}
                            responsive={singleResponsiveness}
                        >
                          {spot.spot.images.map((value, index) => (
                              <img
                                  key={index}
                                  className="d-block w-100"
                                  src={value.path}
                                  alt="First slide"
                              />
                          ))}
                        </Carousel>
                      </div>
                  ) : (
                      <img
                          key={"1"}
                          className="d-block w-100"
                          src={'/images/img2.jpg'}
                          alt="First slide"
                      />
                  )}
                </div>
                <div className="col-sm-6 p-left my-auto">
                  <div className="myspot-details main-padding">
                    <h6 className="mb-0 font-semibold">{spot.spot.spot_name} </h6>

                    <p className="font-12 mb-0">{spot.spot.address}</p>
                  </div>
                  <div className="myspot-details">
                    <div>
                      <h6 className="font-12 font-semibold">
                        <span className="font-normal">{strings.Availablefor}</span>
                        {/* {spot.availableFor.map((v, i) => {
                      if (i == spot.availableFor.length - 1) {
                        return v;
                      } else {
                        return v + ",";
                      }
                    })} */}
                      </h6>
                      <div className="d-flex hotel-rating spot-rate">
                        <div className="rating-star">
                          <div className="active">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="star"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="svg-inline--fa fa-star fa-w-18 fa-2x"
                            >
                              <path
                                  fill="currentColor"
                                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                              />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h6 className="mb-0 font-14 d-inline">
                            {spot.spot.overall_rate}{" "}
                            <span className="text-muted">{`(${spot.spot.total_review} ${strings.Reviews})`}</span>
                          </h6>{" "}
                          |
                          <h6 className="mb-0 font-14 d-inline">
                            {spot.spot.repeat_client ?? 0}{" "}
                            <span className="text-muted">
                          {strings.RepeatClients}
                        </span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4 col-xl-2 offset-xl-1">
              <div className="dropdown pet-drop mob-drop">
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
                  {type == 1 && <a
                      onClick={() => router.push('/user/my-spots/update-pet-spot?id=' + spot.id)}
                      className="dropdown-item"
                  >
                    {strings.Edit}
                  </a>}
                  {<a
                      onClick={() => {type == 1 ? deleteSpot(spot.id):unmarkSpot(`${spot.spot.spot_id}`)}}
                      className="dropdown-item"
                  >
                    {strings.Remove}
                  </a>}
                </div>
              </div>
            </div>
          </div>
          <hr />
        </>:<>
          <div className="row">
            <div className="col-12 col-md-8 col-lg-8 col-xl-9">
              <div className="row">
                <div className="col-sm-6">
                  {spot.images && spot.images.length > 1 ? (
                      <div className="carousel slide">
                        <Carousel
                            arrows={null}
                            showDots={true}
                            swipeable={true}
                            draggable={true}
                            autoPlay={true}
                            responsive={singleResponsiveness}
                        >
                          {spot.images.map((value, index) => (
                              <img
                                  key={index}
                                  className="d-block w-100"
                                  src={value.path}
                                  alt="First slide"
                              />
                          ))}
                        </Carousel>
                      </div>
                  ) : (
                      <img
                          key={"1"}
                          className="d-block w-100"
                          src={'/images/img2.jpg'}
                          alt="First slide"
                      />
                  )}
                </div>
                <div className="col-sm-6 p-left my-auto">
                  <div className="myspot-details main-padding">
                    <h6 className="mb-0 font-semibold">{spot.spot_name} </h6>

                    <p className="font-12 mb-0">{spot.address}</p>
                  </div>
                  <div className="myspot-details">
                    <div>
                      <h6 className="font-12 font-semibold">
                        <span className="font-normal">{strings.Availablefor}</span>
                        {/* {spot.availableFor.map((v, i) => {
                      if (i == spot.availableFor.length - 1) {
                        return v;
                      } else {
                        return v + ",";
                      }
                    })} */}
                      </h6>
                      <div className="d-flex hotel-rating spot-rate">
                        <div className="rating-star">
                          <div className="active">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="star"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="svg-inline--fa fa-star fa-w-18 fa-2x"
                            >
                              <path
                                  fill="currentColor"
                                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                              />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h6 className="mb-0 font-14 d-inline">
                            {spot.overall_rate ?? 0}{" "}
                            <span className="text-muted">{`(${spot.total_review ?? 0} ${strings.Reviews})`}</span>
                          </h6>{" "}
                          |
                          <h6 className="mb-0 font-14 d-inline">
                            {spot.repeat_client ?? 0}{" "}
                            <span className="text-muted">
                          {strings.RepeatClients}
                        </span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4 col-xl-2 offset-xl-1">
              <div className="dropdown pet-drop mob-drop">
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
                  {type == 1 && <a
                      onClick={() => router.push('/user/my-spots/update-pet-spot?id=' + spot.id)}
                      className="dropdown-item"
                  >
                    {strings.Edit}
                  </a>}
                  {<a
                      onClick={() => {type == 1 ? deleteSpot(spot.id):unmarkSpot(`${spot.spot_id}`)}}
                      className="dropdown-item"
                  >
                    {strings.Remove}
                  </a>}
                </div>
              </div>
            </div>
          </div>
          <hr/>
        </>}
      </>
  );
};

export default SpotObject;
