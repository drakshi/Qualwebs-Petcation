import React from "react";
import { strings } from "../../public/lang/Strings";

type IProps = {
  name: string;
  city: string;
  rating: number;
  image: string;
};

const SitterSliderObject: React.FC<IProps> = (props: IProps) => {
  return (
    <div
      style={{ width: "247.5px", marginRight: "40px" }}
      className="owl-item "
    >
      <div className="slider-item">
        <div className="slider-img">
          <img src="images/dog_runs.png" className="img-fluid" />
        </div>
        <div className="slider-content p-2">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
              <div className="exp-sitter-details mt-1">
                <h6 className="mb-2 font-14 font-semibold">{props.name}</h6>
                <p className="mb-0 font-10">{props.city}</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-6 alignment">
              <div className="exp-sitter-details">
                <div className="d-flex">
                  <div className="my-auto">
                    <p className="mb-0 pr-2 font-12">{props.rating}</p>
                  </div>
                  <div className="d-flex rating-star">
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
                          className=""
                        ></path>
                      </svg>
                    </div>
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
                          className=""
                        ></path>
                      </svg>
                    </div>
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
                          className=""
                        ></path>
                      </svg>
                    </div>
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
                          className=""
                        ></path>
                      </svg>
                    </div>
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
                          className=""
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="mb-0 font-12">{strings.Reviews}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="view-profile-btn">
          <a href="http://159.65.142.31/petcation-design/sitter-profile(as%20a%20user).html">
            <button className="btn btn-primary w-100">
              {strings.ViewProfile}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SitterSliderObject;
