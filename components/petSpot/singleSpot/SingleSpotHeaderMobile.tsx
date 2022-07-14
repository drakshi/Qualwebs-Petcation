import React from "react";
import {strings} from "../../../public/lang/Strings";

export default function SingleSpotHeaderMobile(props) {
  return (
    <div className="bg-white main-background pl-0 d-block d-md-none d-lg-none d-xl-none">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 co-lg-12 col-xl-12">
            <div className="single-spot-info">
              <h3 className="font-medium mb-1">{props.data ? (props.data.english_name + ' | ' + props.data.spot_name):''}</h3>
              <p className="mb-1">{props.data ? props.data.address:''}</p>
              <div className="row">
                <div className="col-7 featured-details my-auto">
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
                <div className="col-5 pr-0">
                  <div className="d-flex justify-content-end vector-icon">
                    <div className="ellipse">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="map-marker-alt"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        className="svg-inline--fa fa-map-marker-alt fa-w-12 fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                        />
                      </svg>
                    </div>
                    <div className="ellipse">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="upload"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        className="svg-inline--fa fa-upload fa-w-18 fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M528 288H384v-32h64c42.6 0 64.2-51.7 33.9-81.9l-160-160c-18.8-18.8-49.1-18.7-67.9 0l-160 160c-30.1 30.1-8.7 81.9 34 81.9h64v32H48c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V336c0-26.5-21.5-48-48-48zm-400-80L288 48l160 160H336v160h-96V208H128zm400 256H48V336h144v32c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48v-32h144v128zm-40-64c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24z"
                        />
                      </svg>
                    </div>
                    <div className="ellipse">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="heart"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="svg-inline--fa fa-heart fa-w-16 fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
                        />
                      </svg>
                    </div>
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
