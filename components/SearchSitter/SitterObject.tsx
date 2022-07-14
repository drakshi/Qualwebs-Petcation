import Link from "next/link";
import { I_SEARCH_SITTER } from "../../models/searchSitter.interface";
import {strings} from "../../public/lang/Strings";
import API from "../../api/Api";
import React from "react";
import {errorOptions, successOptions} from "../../public/appData/AppData";
import {useSnackbar} from 'react-simple-snackbar';

interface I_PROPS {
  props: I_SEARCH_SITTER;
  serviceId: any;
  getSitter: any;
  petType: any;

}

let api = new API();

const SitterObject: React.FC<I_PROPS> = ({ props, serviceId, getSitter, petType }: I_PROPS) => {
  const [openSuccess, closeSuccess] = useSnackbar(successOptions);
  const [openError, closeError] = useSnackbar(errorOptions);

  const getTrimmedAddress = (address: string) => {
    if (address.length > 12) {
      let newString = address.substring(0, 12) + "...";
      return newString;
    } else {
      return address;
    }
  };

 const handleBookmarkSitter = () => {
    api.markUnmarkSitter({sitter_id: props.id}).then((res)=> {
      if(res.data.status ===  200) {
        if (props.is_favorite) {
          openSuccess(strings.unmarkSitter);
        } else {
          openSuccess(strings.bookmarkSitter);

        }
        getSitter()
      }
    }).catch((error)=>{
      console.log('eror is', error)
        //openSnackbar(strings.errorUpdatingStatus);
    })
  }


  return (
    <div className="bg-white search-background">
      <div className="search-sitter-content">
        <div className="row mb-2">
          <Link href={{ pathname: "/sitter-profile/" + props.id }}>
            <div className="col-12 col-md-6 col-lg-6 col-xl-7">
              <div className="d-flex">
                <div className="search-sitter-img">
                  <img
                    src={props.profile_picture}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="search-sitter-details my-auto">
                  <h6 className="mb-1">
                    {props.firstname + " " + props.lastname}
                  </h6>
                  <p className="font-12 mb-0">
                    {props.address ? props.address.hide_address == 0 ?
                      getTrimmedAddress(props.address.address) +
                        " " +
                        props.address.city +
                        " ," +
                        props.address.postcode
                      : "":""}
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <div className="col-12 col-md-6 col-lg-6 col-xl-5 my-auto">
            <div className="d-flex profile-share-icon">
              <div className="profile-share-drop">
                <div className="dropdown">
                  <a onClick={handleBookmarkSitter}>
                    {props.is_favorite && <svg viewBox="0 0 512 512">
                      <path
                          fill={"#ffc107"}
                          d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
                      />
                    </svg>}
                    {!props.is_favorite && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>}
                  </a>
                  <div className="dropdown-menu">
                    <a href="#" className="shares">
                      Share this profile
                    </a>
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
                      <hr />
                      <a className="dropdown-item" href="#">
                        <img src="/images/social-img1.png" /> Copy link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
        <Link href={{ pathname: "/sitter-profile/" + props.id }}>
          <>
            <div className="row mb-2">
              <div className="col-xl-9">
                <div className="household-details">
                  {props.address.live_in_house == 1 ? (
                    <p className="mb-0 font-12 d-inline">Is an apartment</p>
                  ) : null}
                  {props.address.non_smoking_household == 1 ? (
                    <p className="mb-0 font-12 d-inline">
                      Non-smoking Household
                    </p>
                  ) : null}
                  {props.address.dog_other_pets == 1 ? (
                    <p className="mb-0 font-12 d-inline">Has no dogs</p>
                  ) : null}
                  {props.address.fenced_yard ? (
                    <p className="mb-0 font-12 d-inline">
                      Does not have a yard
                    </p>
                  ) : null}
                  {props.address.dog_other_pets == 1 ? (
                      <p className="mb-0 font-12 d-inline">Has pet.</p>
                  ) : null}
                </div>
              </div>
              <div className="col-xl-3 p-left">
                <div className="contact-now">
                  <Link
                    href={{
                      pathname: "/booking",
                      query: {
                        sitterId: props.id,
                        service: serviceId,
                        name: props.firstname + " " + props.lastname,
                        petType: JSON.stringify(petType)
                      },
                    }}
                    as={"/booking"}
                  >
                    <button className="btn btn-primary">Contact now</button>
                  </Link>
                </div>
                <div className="view-details">
                  <Link href={{ pathname: "/sitter-profile/" + props.id, query: {serviceId: serviceId} }}>
                    View details
                  </Link>
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
                            className=""
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="my-auto">
                      <h6 className="mb-0  font-semibold">
                        {props.overall_rate}
                        <span className="text-muted font-normal font-12">
                          {`(${props.total_review} reviews)`}
                        </span>
                      </h6>
                    </div>
                  </div>
                  <div className="text-muted px-2">|</div>
                  <div className="my-auto">
                    <h6 className="mb-0 font-semibold">
                      0
                      <span className="text-muted font-normal font-12">
                        {' '}Repeat Clients
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-3 col-xl-3 my-auto p-left">
                <div>
                  <h6 className="mb-0  font-semibold">
                    {`¥${props.price}`}
                    <span className="text-muted font-normal font-12">
                      / night
                    </span>
                  </h6>
                </div>
              </div>
            </div>
          </>
        </Link>
      </div>
    </div>
  );
};

export default (SitterObject);
