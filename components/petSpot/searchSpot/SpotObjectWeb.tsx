import React from "react";
import Link from 'next/link';
import { useSnackbar } from 'react-simple-snackbar';

import {strings} from "../../../public/lang/Strings";
import API from "../../../api/Api";



let api = new API();

export default function SpotObjectWeb(props) {

  const [openSnackbar] = useSnackbar();

  const handleBookmarkSpot = () => {
    api.markUnmarkSpot({spot_id: props.data.id}).then((res)=> {
      if(res.data.status ===  200) {
        openSnackbar(res.data.message);
        props.updateSpots();
      }
    }).catch((error)=>{
      openSnackbar(strings.errorUpdatingStatus);
    })
  }


  return (
    <div className="bg-white search-background">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-5 col-xl-5">
          <div className="fav-img">
            <img src={props.data.images.length ? props.data.images[0].path:'' } className="img-fluid" />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-7 col-xl-7 pd-left">
          <div className="search-sitter-content">
            <div className="row mb-2">
              <div className="col-12 col-md-9 col-lg-9 col-xl-9">
                <div className="search-spot-title">
                  <Link href={`/pet-spots/${props.data.id}`}>
                  <h6 className="mb-1">{props.data.spot_name}</h6>
                  </Link>
                  <p className="mb-0 font-12">{props.data.address}</p>
                </div>
                <div className="household-details">
                  {props.data.user.live_in_house == 1 && <p className="mb-0 font-12 d-inline">Is an apartment</p>}
                  {props.data.user.non_smoking_household == 1 && <p className="mb-0 font-12 d-inline">Non-smoking Household</p>}
                  {props.data.user.fenced_yard == 1 && <p className="mb-0 font-12 d-inline">Has fenced yard</p>}
                  {props.data.user.dog_other_pets == 1 && <p className="mb-0 font-12 d-inline">Does not have a yard</p>}
                </div>
              </div>
              <div className="col-2 col-md-3 col-lg-3 col-xl-3">
                <div className="d-flex profile-share-icon">
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
                          />
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
                            <img src="/images/social-img2.png" /> via line
                          </a>
                          <hr />
                          <a className="dropdown-item" href="#">
                            <img src="/images/social-img1.png" /> via messenger
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a onClick={handleBookmarkSpot}>
                      {props.data.is_favorite && <svg viewBox="0 0 512 512">
                        <path
                            fill={"#ffc107"}
                            d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
                        />
                      </svg>}
                      {!props.data.is_favorite && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row my-2">
              <div className="col-10 col-md-9 col-lg-9 col-xl-9">
                <div className="d-flex">
                  <div className="search-sitter-img justify-content-center align-items-center">
                    <img src={props.data.user.profile_picture} className="img-fluid" />
                  </div>
                  <div className="search-sitter-details my-auto">
                    <h6 className="mb-1 d-inline">{props.data.user.firstname + ' ' + props.data.user.lastname}</h6>
                    <p className="font-12 mb-0">
                      Available for <b></b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-9 col-lg-9 col-xl-9">
                <div className="d-flex featured-details">
                  <div className="d-flex hotel-rating">
                    <div className="rating-star ">
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
                    <div className="my-auto">
                      <h6 className="mb-0  font-semibold">
                        {props.data.overall_rate}
                        <span className="text-muted font-normal font-12">
                          ({props.data.total_review} reviews)
                        </span>
                      </h6>
                    </div>
                  </div>
                  <div className="text-muted px-2">|</div>
                  <div className="my-auto">
                    <h6 className="mb-0 font-semibold">
                      0&nbsp;
                      <span className="text-muted font-normal font-12">
                        Repeat Clients
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

  );
}
