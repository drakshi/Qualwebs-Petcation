import { strings } from "../../public/lang/Strings";

export default function PetcationForPetsitters() {
  return (
    <div className="booking-sitter">
      <div className="padding">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-8 col-lg-8 col-xl-8 mx-auto">
              <div className="text-center main-title">
                <h2 className="font-semibold">
                  {strings.petcationForPetSitters}
                </h2>
                <p className="mb-0">{strings.searchAndConnectWithTrusted}</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 col-xl-5">
              <div className="verified-details m-0">
                <div className="row mb-3">
                  <div className="col-auto">
                    <div className="verified-icons">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="search"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="svg-inline--fa fa-search fa-w-16 fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="col my-auto">
                    <div className="verified-sitters color">
                      <h6 className="mb-1 font-semibold">
                        {strings.findAVerifiedPetSitter}
                      </h6>
                      <p className="mb-0 font-14">
                        {strings.searchAndFindExperiencedLocal}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row  mb-3">
                  <div className="col-auto">
                    <div className="verified-icons">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fal"
                        data-icon="calendar-check"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="svg-inline--fa fa-calendar-check fa-w-14 fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M400 64h-48V12c0-6.627-5.373-12-12-12h-8c-6.627 0-12 5.373-12 12v52H128V12c0-6.627-5.373-12-12-12h-8c-6.627 0-12 5.373-12 12v52H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zM48 96h352c8.822 0 16 7.178 16 16v48H32v-48c0-8.822 7.178-16 16-16zm352 384H48c-8.822 0-16-7.178-16-16V192h384v272c0 8.822-7.178 16-16 16zm-66.467-194.937l-134.791 133.71c-4.7 4.663-12.288 4.642-16.963-.046l-67.358-67.552c-4.683-4.697-4.672-12.301.024-16.985l8.505-8.48c4.697-4.683 12.301-4.672 16.984.024l50.442 50.587 117.782-116.837c4.709-4.671 12.313-4.641 16.985.068l8.458 8.527c4.672 4.709 4.641 12.313-.068 16.984z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="col my-auto">
                    <div className="verified-sitters color">
                      <h6 className="mb-1 font-semibold">
                        {strings.arrangeAMeetGreet}
                      </h6>
                      <p className="mb-0 font-14">
                        {strings.getToKnowYourSitter}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row  mb-3">
                  <div className="col-auto">
                    <div className="verified-icons">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="shield-alt"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="svg-inline--fa fa-shield-alt fa-w-16 fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M256 409.6V100l-142.9 59.5c8.4 116.2 65.2 202.6 142.9 250.1zM466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256 464C158.5 423.4 64 297.3 64 128l192-80 192 80c0 173.8-98.4 297-192 336z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="col my-auto">
                    <div className="verified-sitters color">
                      <h6 className="mb-1 font-semibold">
                        {strings.bookSafelyOnlinePayments}
                      </h6>
                      <p className="mb-0 font-14">
                        {strings.bookYourSitterThroughOurSafeOnline}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row  mb-3">
                  <div className="col-auto">
                    <div className="verified-icons">
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
                          className=""
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="col my-auto">
                    <div className="verified-sitters color">
                      <h6 className="mb-1 font-semibold">
                        {strings.properUpdates}
                      </h6>
                      <p className="mb-0 font-14">
                        {strings.onceJobCompletesYouCanRate}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row  mb-3">
                  <div className="col-auto">
                    <div className="verified-icons">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="star"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        className="svg-inline--fa fa-star fa-w-18 fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                          className=""
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="col  my-auto">
                    <div className="verified-sitters color">
                      <h6 className="mb-1 font-semibold">
                        {strings.ratingAndReviews}
                      </h6>
                      <p className="mb-0 font-14">
                        {strings.bookYourSitterThroughOurSafeOnline}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-6  offset-xl-1">
              <div className="image">
                <img src="images/main-img.png" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
