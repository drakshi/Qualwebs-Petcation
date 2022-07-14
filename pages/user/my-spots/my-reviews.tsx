import React from "react";
import Select from "react-select";
import User from "..";
import RatingStars from "../../../components/common/RatingStars";
import { reviews, select, serviceData } from "../../../public/appData/AppData";
import { strings } from "../../../public/lang/Strings";

interface IState {
  selectedSortBy: select;
  selectedCategory: select;
  selectedCities: select;
}

export default class MyReviews extends React.Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = {
      selectedSortBy: null,
      selectedCategory: null,
      selectedCities: null,
    };
    this.handleSortSelection = this.handleSortSelection.bind(this);
    this.handleCategorySelection = this.handleCategorySelection.bind(this);
    this.handleCitySelection = this.handleCitySelection.bind(this);
  }

  handleSortSelection(data: select) {
    this.setState({
      selectedSortBy: data,
    });
  }

  handleCategorySelection(data: select) {
    this.setState({
      selectedCategory: data,
    });
  }
  handleCitySelection(data: select) {
    this.setState({
      selectedCities: data,
    });
  }

  sortDropdownStyles = {
    option: (provided, state) => ({
      ...provided,
      fontSize: 14,
    }),

    control: (provided) => ({
      ...provided,
      width: 140,
    }),
    singleValue: (provided, state) => {
      return { ...provided, fontSize: 12, color: "#383838", fontWeight: "500" };
    },
  };

  render() {
    return (
      <div className="col-12 col-md-12 col-lg-8 col-xl-8">
        <div className="bg-white main-background p-0">
          <div className="pt-3 px-3">
            <h5 className="font-semibold mb-0 font-20">{`My Reviews (32)`}</h5>
          </div>
          <div className="sort-filter review-filter">
            <div className="content-margin">
              <div className="d-flex">
                <div className="my-auto d-none d-md-block d-lg-block d-xl-block">
                  <h6 className="sort-by mb-0">{strings.Sortby}</h6>
                </div>
                <div className="row">
                  <div className="col-4 col-sm-4">
                    <div className="dropdown">
                      <Select
                        instanceId={"1"}
                        onChange={this.handleSortSelection}
                        isSearchable={false}
                        placeholder="Sort By"
                        styles={this.sortDropdownStyles}
                        value={this.state.selectedSortBy}
                        options={serviceData}
                      />
                    </div>
                  </div>
                  <div className="col-4 col-sm-4">
                    <div className="dropdown">
                      <Select
                        instanceId={"2"}
                        onChange={this.handleCategorySelection}
                        isSearchable={false}
                        placeholder="Categories"
                        styles={this.sortDropdownStyles}
                        value={this.state.selectedCategory}
                        options={serviceData}
                      />
                    </div>
                  </div>
                  <div className="col-4 col-sm-4">
                    <div className="dropdown">
                      <Select
                        instanceId={"3"}
                        onChange={this.handleCitySelection}
                        isSearchable={false}
                        placeholder="All cities"
                        styles={this.sortDropdownStyles}
                        value={this.state.selectedCities}
                        options={serviceData}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="review-content px-3">
            <div className="scrollbar" id="style-8">
              <div className="force-overflow">
                {reviews.map((value, index) => (
                  <div key={`c${index}`}>
                    <div className="row">
                      <div className="col-3 col-md-2 col-lg-2 col-xl-2 pr-0">
                        <div className="fav-img">
                          <img src={value.image} className="img-fluid" />
                        </div>
                      </div>
                      <div className="col-9 col-md-10 col-lg-10 col-xl-10">
                        <div className="row">
                          <div className="col-12 col-md-9 col-lg-9 col-xl-9">
                            <h6>{value.name}</h6>
                            <div className="d-flex">
                              <div className="fav-details review-details">
                                <div className="d-flex rating-star">
                                  <RatingStars rating={value.rating} />
                                  <div className="rating-points">
                                    <h6 className="mb-0 font-14">
                                      {value.rating}
                                    </h6>
                                  </div>
                                </div>
                              </div>
                              <div className="friendly-hotel m-0 d-none d-md-block d-lg-block d-xl-block">
                                <h6 className="mb-0 d-inline-block">
                                  {value.place}
                                </h6>
                                <p className="mb-0 d-inline-block">
                                  {value.address}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-3 col-lg-3 col-xl-3 d-none d-md-block d-lg-block d-xl-block  review-icon">
                            <div className="vector-icon" >
                              <div
                                className="ellipse"
                                data-toggle="modal"
                                data-target="#review"
                                onClick={()=>console.log("edit")}
                              >
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fal"
                                  data-icon="pencil"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                  className="svg-inline--fa fa-pencil fa-w-16 fa-2x"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M493.255 56.236l-37.49-37.49c-24.993-24.993-65.515-24.994-90.51 0L12.838 371.162.151 485.346c-1.698 15.286 11.22 28.203 26.504 26.504l114.184-12.687 352.417-352.417c24.992-24.994 24.992-65.517-.001-90.51zm-95.196 140.45L174 420.745V386h-48v-48H91.255l224.059-224.059 82.745 82.745zM126.147 468.598l-58.995 6.555-30.305-30.305 6.555-58.995L63.255 366H98v48h48v34.745l-19.853 19.853zm344.48-344.48l-49.941 49.941-82.745-82.745 49.941-49.941c12.505-12.505 32.748-12.507 45.255 0l37.49 37.49c12.506 12.506 12.507 32.747 0 45.255z"
                                  />
                                </svg>
                              </div>
                              <div className="ellipse">
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fal"
                                  data-icon="trash-alt"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 448 512"
                                  className="svg-inline--fa fa-trash-alt fa-w-14 fa-2x"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M296 432h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zm-160 0h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zM440 64H336l-33.6-44.8A48 48 0 0 0 264 0h-80a48 48 0 0 0-38.4 19.2L112 64H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h24v368a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V96h24a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8zM171.2 38.4A16.1 16.1 0 0 1 184 32h80a16.1 16.1 0 0 1 12.8 6.4L296 64H152zM384 464a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V96h320zm-168-32h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8z"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row d-none d-md-block d-lg-block d-xl-block">
                          <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                            <p className="mb-0 font-14">{value.review}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-block d-md-none d-lg-none d-xl-none">
                      <div className="row mt-2">
                        <div className="col-8">
                          <div className="friendly-hotel m-0">
                            <h6 className="mb-0 d-inline-block">
                              {value.name}
                            </h6>
                            <p className="mb-0 d-inline-block">
                              {value.address}
                            </p>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="vector-icon">
                            <div
                              className="ellipse"
                              data-toggle="modal"
                              data-target="#review"
                            >
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fal"
                                data-icon="pencil"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="svg-inline--fa fa-pencil fa-w-16 fa-2x"
                              >
                                <path
                                  fill="currentColor"
                                  d="M493.255 56.236l-37.49-37.49c-24.993-24.993-65.515-24.994-90.51 0L12.838 371.162.151 485.346c-1.698 15.286 11.22 28.203 26.504 26.504l114.184-12.687 352.417-352.417c24.992-24.994 24.992-65.517-.001-90.51zm-95.196 140.45L174 420.745V386h-48v-48H91.255l224.059-224.059 82.745 82.745zM126.147 468.598l-58.995 6.555-30.305-30.305 6.555-58.995L63.255 366H98v48h48v34.745l-19.853 19.853zm344.48-344.48l-49.941 49.941-82.745-82.745 49.941-49.941c12.505-12.505 32.748-12.507 45.255 0l37.49 37.49c12.506 12.506 12.507 32.747 0 45.255z"
                                />
                              </svg>
                            </div>
                            <div className="ellipse">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fal"
                                data-icon="trash-alt"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                className="svg-inline--fa fa-trash-alt fa-w-14 fa-2x"
                              >
                                <path
                                  fill="currentColor"
                                  d="M296 432h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zm-160 0h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zM440 64H336l-33.6-44.8A48 48 0 0 0 264 0h-80a48 48 0 0 0-38.4 19.2L112 64H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h24v368a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V96h24a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8zM171.2 38.4A16.1 16.1 0 0 1 184 32h80a16.1 16.1 0 0 1 12.8 6.4L296 64H152zM384 464a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V96h320zm-168-32h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                          <p className="mb-0 mt-2 font-14">{value.review}</p>
                        </div>
                      </div>
                    </div>

                    {index == reviews.length - 1 ? null : <hr />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  static getLayout(page) {
    return <User>{page}</User>;
  }
}
