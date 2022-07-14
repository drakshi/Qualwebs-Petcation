import { strings } from "../../public/lang/Strings";
import ReviewObject from "./ReviewObject";
import React, { useState } from "react";
import {
  reviewObjectData,
  reviewStateData,
} from "../../public/appData/AppData";

type ReviewState = {
  rating: number;
  cleanliness: number;
  accuracy: number;
  communication: number;
  location: number;
  checkIn: number;
  value: number;
};

const Reviews = (props) => {
  console.log('props.data', props.data)
  const [reviewState, setReviewState] = useState<ReviewState>(reviewStateData);

  return (
    <div className="bg-white main-background">
      <h5 className="font-semibold font-20 mb-3">{strings.Reviews}</h5>

      <div className="basic-info">
        <div className="row">
          <div className="col-12 col-md-3 col-lg-3 col-xl-3">
            <div className="overall-ratings">
              <div>
                <h4 className="font-semibold">{reviewState.rating}</h4>
                <p className="mb-0 font-14 font-semibold text-white">
                  {strings.Overallrating}
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-9 col-lg-9 col-xl-9">
            <div className="ratings-score">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="score score1">
                    <div className="score-details">
                      <h6 className="mb-0">
                        {strings.Cleanliness}
                        <span>{reviewState.cleanliness + "/ 5"}</span>
                      </h6>
                    </div>
                    <div className="score-bar">
                      <div className="rSlider">
                        <span
                          className="slide"
                          style={{
                            width: `${reviewState.cleanliness * 20}%`,
                          }}
                        ></span>
                        <input id="range" type="range" min="0" max="5" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="score score1">
                    <div className="score-details">
                      <h6 className="mb-0">
                        {strings.Accuracy}
                        <span>{reviewState.accuracy + " / 5"}</span>
                      </h6>
                    </div>
                    <div className="score-bar">
                      <div className="rSlider">
                        <span
                          className="slide"
                          style={{ width: `${reviewState.accuracy * 20}%` }}
                        ></span>
                        <input id="range" type="range" min="0" max="5" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="score score1">
                    <div className="score-details">
                      <h6 className="mb-0">
                        {strings.Communication}
                        <span>{reviewState.communication + "/ 5"}</span>
                      </h6>
                    </div>
                    <div className="score-bar">
                      <div className="rSlider">
                        <span
                          className="slide"
                          style={{
                            width: `${reviewState.communication * 20}%`,
                          }}
                        ></span>
                        <input id="range" type="range" min="0" max="5" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="score score1">
                    <div className="score-details">
                      <h6 className="mb-0">
                        {strings.Location}{" "}
                        <span>{reviewState.location + "/ 5"}</span>
                      </h6>
                    </div>
                    <div className="score-bar">
                      <div className="rSlider">
                        <span
                          className="slide"
                          style={{ width: `${reviewState.location * 20}%` }}
                        ></span>
                        <input id="range" type="range" min="0" max="5" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="score score1 mb-0">
                    <div className="score-details">
                      <h6 className="mb-0">
                        {strings.Check_in}{" "}
                        <span>{reviewState.checkIn + "/ 5"}</span>
                      </h6>
                    </div>
                    <div className="score-bar">
                      <div className="rSlider">
                        <span
                          className="slide"
                          style={{ width: `${reviewState.checkIn * 20}%` }}
                        ></span>
                        <input id="range" type="range" min="0" max="5" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="score score1 mb-0">
                    <div className="score-details">
                      <h6 className="mb-0">
                        {strings.Value}{" "}
                        <span>{reviewState.value + " / 5"}</span>
                      </h6>
                    </div>
                    <div className="score-bar">
                      <div className="rSlider">
                        <span
                          className="slide"
                          style={{ width: `${reviewState.value * 20}%` }}
                        ></span>
                        <input id="range" type="range" min="0" max="5" />
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
      <div className="sitter-review-section">
        {/*<ReviewObject review={reviewObjectData} />*/}
        <div className="read-more">
          <a href="#">+ Read more reviews</a>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
