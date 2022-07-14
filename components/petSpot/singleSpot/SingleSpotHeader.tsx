import React, {useState} from "react";
import {strings} from "../../../public/lang/Strings";
import { useSnackbar } from 'react-simple-snackbar';
import API from "../../../api/Api";
import RatingStars from "../../common/RatingStars";
import {Modal} from "react-bootstrap";
import SpotRating from "../../common/SpotRating";

let api = new API();

export default function SingleSpotHeader(props) {
  const [openSnackbar] = useSnackbar();


  const unmarkSpot = () => {
    api.markUnmarkSpot({spot_id: props.data.id}).then((res)=> {
      if(res.data.status ===  200) {
        openSnackbar(res.data.message);
        props.updateSpot(props.data.id)
      }
    }).catch((error)=>{
      openSnackbar(strings.errorUpdatingStatus);
    })
  }

  return (
      <>
        <div className="container">
          <div className="bg-white single-spot main-background  d-block d-md-block d-lg-block d-xl-block">
            <div className="row">
              <div className="col-12 col-md-12 co-lg-12 col-xl-12">
                <div className="single-spot-info">
                  <h3 className="font-medium mb-1">{props.data ? (props.data.english_name + ' | ' +props.data.spot_name):''}</h3>
                  <p className="mb-1">{props.data ? props.data.address:''}</p>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-8 featured-details">
                      <div className="d-flex hotel-rating">
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
                          <h6 className="mb-0">
                            {props.data ? props.data.overall_rate:''} <span>({props.data ? props.data.total_review:''} {strings.reviews})</span>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4 alignment">
                      <div className="d-flex justify-content-between">
                        <div className="single-share-details">
                          <a>
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fal"
                                data-icon="share-square"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="svg-inline--fa fa-share-square fa-w-18 fa-2x"
                            >
                              <path
                                  fill="currentColor"
                                  d="M566.633 169.37L406.63 9.392C386.626-10.612 352 3.395 352 32.022v72.538C210.132 108.474 88 143.455 88 286.3c0 84.74 49.78 133.742 79.45 155.462 24.196 17.695 58.033-4.917 49.7-34.51C188.286 304.843 225.497 284.074 352 280.54V352c0 28.655 34.654 42.606 54.63 22.63l160.003-160c12.489-12.5 12.489-32.76 0-45.26zM384 352V248.04c-141.718.777-240.762 15.03-197.65 167.96C154.91 393 120 351.28 120 286.3c0-134.037 131.645-149.387 264-150.26V32l160 160-160 160zm37.095 52.186c2.216-1.582 4.298-3.323 6.735-5.584 7.68-7.128 20.17-1.692 20.17 8.787V464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h172.146c6.612 0 11.954 5.412 11.852 12.04-.084 5.446-4.045 10.087-9.331 11.396-9.462 2.343-18.465 4.974-27.074 7.914-1.25.427-2.555.65-3.876.65H48c-8.837 0-16 7.163-16 16v352c0 8.837 7.163 16 16 16h352c8.837 0 16-7.163 16-16v-50.002c0-3.905 1.916-7.543 5.095-9.812z"
                              />
                            </svg>
                            &nbsp;
                            <span className="mb-0 font-normal d-inline">Share</span>
                          </a>
                        </div>
                        {props.data ? <div className="single-share-details">

                          <a onClick={unmarkSpot}>
                            {props.data.is_favorite && <svg viewBox="0 0 512 512">
                              <path
                                  fill={"#ffc107"}
                                  d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
                              />
                            </svg>}
                            {!props.data.is_favorite && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                              <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>}
                          </a>
                          &nbsp;
                          <span className="mb-0 font-normal d-inline">Save</span>
                        </div>:null}
                        <div
                            className="single-share-details"
                            data-toggle="modal"
                            data-target="#ratings"
                        >
                          <a onClick={props.showModal}>
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fal"
                                data-icon="comment-alt-edit"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="svg-inline--fa fa-comment-alt-edit fa-w-16 fa-2x"
                            >
                              <path
                                  fill="currentColor"
                                  d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm32 352c0 17.6-14.4 32-32 32H293.3l-8.5 6.4L192 460v-76H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h384c17.6 0 32 14.4 32 32v288zM336 105.4c-12.5-12.5-32.8-12.5-45.2 0l-126.1 126c-2 2-3.4 4.5-4.2 7.3l-16 61.2c-1.4 5.5.1 11.3 4.2 15.4 3 3 7.1 4.7 11.3 4.7 1.3 0 2.7-.2 4-.5l61.2-16c2.8-.7 5.3-2.2 7.3-4.2l126.1-126.1c12.5-12.5 12.5-32.8 0-45.2L336 105.4zM213 273.6l-30.6 8 8-30.6 75-75 22.6 22.6-75 75zm97.6-97.6L288 153.4l25.4-25.4 22.6 22.6-25.4 25.4z"
                              />
                            </svg>
                            &nbsp;
                            <span className="mb-0 font-normal d-inline">
                          Provide feed back
                        </span>
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
      </>
  );
}
