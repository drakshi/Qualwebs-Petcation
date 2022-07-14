import React from "react";
import RatingStars from "../common/RatingStars";

interface IProps {
  review: {
    userImage: string;
    userName: string;
    date: string;
    time: string;
    review: string;
    rating: number;
    userImages: string[];
    userCount: number;
    sitterResponse: boolean;
    sitterReply: string;
    sitterImage: string;
    sitterName: string;
  };
}

const ReviewObject: React.FC<IProps> = (props: IProps) => {
  return (
    <div>
      <div className="user-review-details">
        <div className="row mb-2">
          <div className="col-12 col-md-6 col-lg-6 col-xl-8">
            <div className="d-flex">
              <div className="sitter-profile-img">
                <img src="images/profile.jpg" className="img-fluid" />
              </div>
              <div className="sitter-review-details ml-2 my-auto">
                <h5 className="mb-0 font-medium">{props.review.userName}</h5>
                <p className="font-12 mb-0">
                  {props.review.date + "|" + props.review.time}
                </p>
                <div className="d-flex rating-star">
                  <RatingStars rating={props.review.rating} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 col-xl-4 my-auto">
            <div className="d-flex">
              <div className="review-image">
                <div className="sm-img">
                  <img src="images/profile.jpg" className="img-fluid" />
                </div>
                <div className="sm-img">
                  <img src="images/profile.jpg" className="img-fluid" />
                </div>
                <div className="sm-img">
                  <img src="images/profile.jpg" className="img-fluid" />
                </div>
                <div className="sm-img">
                  <img src="images/profile.jpg" className="img-fluid" />
                </div>
              </div>
              <div className="more-details d-inline-block">
                <p className="mb-0">10+ more</p>
              </div>
            </div>
          </div>
        </div>
        <p className="font-14 ">{props.review.review}</p>
        {props.review.sitterResponse ? (
          <div className="row">
            <div className="col-12 col-md-11 col-lg-11 col-xl-11 offset-xl-1">
              <div className="d-flex">
                <div className="sitter-profile-img review-replay">
                  <img src="images/profile.jpg" className="img-fluid" />
                </div>
                <div className="sitter-review-details ml-2 my-auto">
                  <p className="font-12 mb-2">{props.review.sitterReply}</p>
                  <h5 className="mb-0 font-medium font-14">
                    {props.review.sitterName}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <hr />
    </div>
  );
};

export default ReviewObject;
