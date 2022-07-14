import React from "react";
import { strings } from "../../public/lang/Strings";
import Link from "next/link";


type IProps = {
  name: string;
  location: string;
  distance: string;
  responseRate: number;
  online: boolean;
  petTakenCare: number;
  happyCustomers: number;
  rehireRate: number;
  experience: number;
  rating: number;
  review: number;
  profile_pic: string;
  responseWithin: string;
  jobCompletion: number;
  isFavorite: number;
  isVerified: number;
  hide_address: number;
  markUnmark?: any;
  id: number;
  serviceId: string;
  onAvailableClick: any;
};
const SitterProfileHeader: React.FC<IProps> = (props: IProps) => {
console.log(props.review);
  return (
    <div className="bg-white single-spot main-background">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-8 col-xl-9">
          <div className="row">
            <div className="col-12 col-md-3 col-lg-3 col-xl-2">
              <div className="user-profile-img">
                <img src={props.profile_pic} />
              </div>
            </div>
            <div className="col-12 col-md-9 col-lg-9 col-xl-10">
              <div className="user-profile-details">
                <div className="d-flex">
                  <div>
                    <h3 className="font-semibold mb-1">{props.name}</h3>
                  </div>
                  <div className="my-auto ml-3">
                    <img src="/images/icons2.png" />{" "}
                    <span>{props.isVerified===1 ? strings.PetcationVerified:strings.PetcationNotVerified}</span>
                  </div>
                </div>
                {props.hide_address===1 ? null:<div className="main-padding">
                  <p className="text-muted font-14 mb-0">
                    <span>{props.location}</span> |{" "}
                    <span>
                      {props.distance +
                        "  " +
                        strings.Kmsfromyourcurrentlocation}
                    </span>
                  </p>
                </div>}
                <div className="d-flex justify-content-between">
                  <div className="rate-details">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fal"
                      data-icon="check-double"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="svg-inline--fa fa-check-double fa-w-14 fa-2x"
                    >
                      <path
                        fill="currentColor"
                        d="M444.96 159l-12.16-11c-2.03-2.67-4.72-4-8.11-4s-6.08 1.33-8.11 4L131.77 428 31.42 329c-2.03-2.67-4.72-4-8.11-4s-6.08 1.33-8.11 4L3.04 340C1.01 342.67 0 345.67 0 349s1.01 6 3.04 8l120.62 119c2.69 2.67 5.57 4 8.62 4s5.92-1.33 8.62-4l304.07-300c2.03-2 3.04-4.67 3.04-8s-1.02-6.33-3.05-9zM127.17 284.03c2.65 2.65 5.48 3.97 8.47 3.97s5.82-1.32 8.47-3.97L365.01 63.8c1.99-2 2.99-4.65 2.99-7.96s-1-6.29-2.99-8.94l-11.96-10.93c-1.99-2.65-4.64-3.97-7.97-3.97s-5.98 1.32-7.97 3.97L135.14 236.34l-72.25-72.03c-1.99-2.65-4.64-3.97-7.97-3.97s-5.98 1.32-7.97 3.97l-11.96 10.93C33 177.89 32 180.87 32 184.18s1 5.96 2.99 7.95l92.18 91.9z"
                        className=""
                      ></path>
                    </svg>
                    <p className="d-inline font-14">
                      &nbsp;{props.responseRate + "%" + strings.responserate}
                    </p>
                  </div>
                  <div className="rate-details">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="clock"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="svg-inline--fa fa-clock fa-w-16 fa-2x"
                    >
                      <path
                        fill="currentColor"
                        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
                        className=""
                      ></path>
                    </svg>
                    <p className="d-inline font-14">&nbsp;Responds within {props.responseWithin}</p>
                  </div>
                  <div className="rate-details">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="camera"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="svg-inline--fa fa-camera fa-w-16 fa-2x"
                    >
                      <path
                        fill="currentColor"
                        d="M342.7 144H464v288H48V144h121.3l24-64h125.5l23.9 64zM324.3 32h-131c-20 0-37.9 12.4-44.9 31.1L136 96H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48h-88l-14.3-38c-5.8-15.7-20.7-26-37.4-26zM256 408c-66.2 0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120zm0-192c-39.7 0-72 32.3-72 72s32.3 72 72 72 72-32.3 72-72-32.3-72-72-72z"
                        className=""
                      ></path>
                    </svg>
                    <p className="d-inline font-14">&nbsp;{props.jobCompletion}% Jobs with pics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 col-lg-4 col-xl-3 my-auto">
          <div className="d-flex">
            <div>
              <div className="contact-now instant-button">
                <Link
                    href={{
                      pathname: "/booking",
                      query: {
                        sitterId: props.id,
                        name: props.name,
                        service: props.serviceId
                      },
                    }}
                    as={"/booking"}
                >
                  <button className="btn btn-primary">Contact now</button>
                </Link>
                {/*<button className="btn btn-primary">Instant Book</button>*/}
              </div>
              <div className="text-center availability">
                <a onClick={props.onAvailableClick} className="font-14">
                  {strings.Seeavailability}
                </a>
              </div>
            </div>

            <div>
              <div className="d-flex profile-share-icon">
                <a onClick={props.markUnmark}>
                  {props.isFavorite&& <svg viewBox="0 0 512 512">
                    <path
                        fill={"#ffc107"}
                        d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
                    />
                  </svg>}
                  {!props.isFavorite && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>}
                </a>
                <div className="profile-share-drop">
                  <div className="dropdown">
                    <a
                      className="dropdown-toggle"
                      href="#"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"

                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="share"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="svg-inline--fa fa-share fa-w-16 fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"
                          className=""
                        ></path>
                      </svg>
                    </a>
                    <div className="dropdown-menu">
                      <p>Share this profile</p>
                      <div className="py-3">
                        <a className="dropdown-item" href="#">
                          <img src="/images/social-img4.png" /> via email
                        </a>
                        <hr />
                        <a className="dropdown-item" href="#">
                          <img src="/images/social-img3.png" /> via whatsapp
                        </a>
                        <hr />
                        <a className="dropdown-item" href="#">
                          {" "}
                          <img src="/images/social-img2.png" /> via line
                        </a>
                        <hr />
                        <a className="dropdown-item" href="#">
                          {" "}
                          <img src="/images/social-img1.png" /> via messenger
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-xl-7">
          <div className="d-flex justify-content-between">
            {/*<div className="sitter-availability">*/}
            {/*  <svg*/}
            {/*    aria-hidden="true"*/}
            {/*    focusable="false"*/}
            {/*    data-prefix="far"*/}
            {/*    data-icon="clock"*/}
            {/*    role="img"*/}
            {/*    xmlns="http://www.w3.org/2000/svg"*/}
            {/*    viewBox="0 0 512 512"*/}
            {/*    className="svg-inline--fa fa-clock fa-w-16 fa-2x"*/}
            {/*  >*/}
            {/*    <path*/}
            {/*      fill="currentColor"*/}
            {/*      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"*/}
            {/*      className=""*/}
            {/*    ></path>*/}
            {/*  </svg>*/}
            {/*  <p className="font-12 mb-0">{strings.Onlinenow}</p>*/}
            {/*</div>*/}
            <div className="sitter-availability">
              <h3 className="mb-0 font-semibold">{props.petTakenCare}</h3>
              <p className="font-12 mb-0">{strings.Petstakencare}</p>
            </div>
            <div className="sitter-availability">
              <h3 className="mb-0 font-semibold">
                {props.happyCustomers + "%"}
              </h3>
              <p className="font-12 mb-0">{strings.HappyCustomers}</p>
            </div>
            <div className="sitter-availability">
              <h3 className="mb-0 font-semibold">{props.rehireRate + "%"}</h3>
              <p className="font-12 mb-0">{strings.Rehirerate}</p>
            </div>
            {/*<div className="sitter-availability">*/}
            {/*  <h3 className="mb-0 font-semibold">{props.experience + "yrs"}</h3>*/}
            {/*  <p className="font-12 mb-0">{strings.Experience}</p>*/}
            {/*</div>*/}
          </div>
        </div>
        <div className="col-xl-3 offset-xl-2 featured-details my-auto">
          <div className="d-flex justify-content-end hotel-rating sitter-rating">
            <div className="rating-star">
              <div className={"active"}>
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
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-0">
                {props.rating}{" "}
                <span className="font-14 font-normal">
                  {"(" + props.review + " reviews)"}
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitterProfileHeader;
