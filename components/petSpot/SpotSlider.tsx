import React, { useRef } from "react";
import { strings } from "../../public/lang/Strings";
import { petSpotsSlider } from "../../public/SliderResponsive";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import {I_USER} from "../user/dashboard/meetingRequests/MeetingRequestObject";

export interface I_SPOT {
  id: number;
  user_id: number;
  category_id: number;
  spot_name: string;
  postal_code: number;
  city: string;
  address: string;
  overall_rate: number;
  total_review: number;
  images: {
    path: string;
  }[];
  user?: I_USER;
}

export default function SpotSlider({ spots }: { spots: I_SPOT[] }) {
  var carousel = useRef(null);
  return (
    <div className="padding">
      <div className="container">
        <div className="bg-white main-section">
          <div className="row">
            <div className="col-12 col-md-10 col-lg-10 col-xl-10">
              <div className="main-title feature-title">
                <h2 className="font-semibold">{strings.FeaturedSpots}</h2>
                <p className="mb-0">{strings.Youcanfindspotsinplaces}</p>
              </div>
            </div>
            <div className="col-12 col-md-2 col-lg-2 col-xl-2 mt-auto">
              {/*<div className="total-number d-none d-md-block d-lg-block d-xl-block">*/}
              {/*  <p>1/3</p>*/}
              {/*</div>*/}
            </div>
          </div>
          <div className="row carousel-slider">
            <div className="col-12 col-md-12 col-lg-12 col-xl-12">
              <div
                className="owl-carousel owl-loaded owl-drag"
                id="featured-slider"
              >
                {spots && <Carousel
                  ref={carousel}
                  swipeable={true}
                  draggable={false}
                  autoPlay={false}
                  showDots={false}
                  ssr={true}
                  renderDotsOutside={false}
                  arrows={false}
                  className={"owl-carousel"}
                  responsive={petSpotsSlider}
                >
                  {spots.map((value,index) => (
                    <div
                        key={'spots+'+ index}
                      className="owl-item active"
                      style={{ width: 338, marginRight: 10, marginLeft: 10 }}
                    >
                      <Link href={`/pet-spots/${value.id}`}>
                      <div className="featured-details">
                          <div className="mb-3 spot-img">
                            <img
                              src={value.images ? value.images.length ? value.images[0].path: '': ''}
                              className="img-fluid"
                            />
                          </div>
                        <div className="d-flex hotel-rating mb-1">
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
                            <h5 className="mb-0">
                              {value.overall_rate}
                              <span className="text-muted">{`(${value.total_review} reviews)`}</span>
                            </h5>
                          </div>
                        </div>
                        <div className="room-details">
                          <p className="mb-0">{value.spot_name}</p>
                          <p className="mb-0">{value.city}</p>
                        </div>
                      </div>
                      </Link>
                    </div>
                  ))}
                </Carousel>}
                <div className="owl-nav disabled">
                  <div className="owl-prev">
                    <div className="prev">
                      <svg
                        onClick={() => carousel.current.previous()}
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fal"
                        data-icon="arrow-circle-left"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="svg-inline--fa fa-arrow-circle-left fa-w-16 fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zM256 472c-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216zm-12.5-92.5l-115.1-115c-4.7-4.7-4.7-12.3 0-17l115.1-115c4.7-4.7 12.3-4.7 17 0l6.9 6.9c4.7 4.7 4.7 12.5-.2 17.1L181.7 239H372c6.6 0 12 5.4 12 12v10c0 6.6-5.4 12-12 12H181.7l85.6 82.5c4.8 4.7 4.9 12.4.2 17.1l-6.9 6.9c-4.8 4.7-12.4 4.7-17.1 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="owl-next">
                    <div className="next">
                      <svg
                        onClick={() => carousel.current.next()}
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fal"
                        data-icon="arrow-circle-right"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="svg-inline--fa fa-arrow-circle-right fa-w-16 fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zM256 40c118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216zm12.5 92.5l115.1 115c4.7 4.7 4.7 12.3 0 17l-115.1 115c-4.7 4.7-12.3 4.7-17 0l-6.9-6.9c-4.7-4.7-4.7-12.5.2-17.1l85.6-82.5H140c-6.6 0-12-5.4-12-12v-10c0-6.6 5.4-12 12-12h190.3l-85.6-82.5c-4.8-4.7-4.9-12.4-.2-17.1l6.9-6.9c4.8-4.7 12.4-4.7 17.1 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="owl-dots disabled" />
              </div>
              <div className="slider_nav"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
