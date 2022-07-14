import Link from "next/link";
import { strings } from "../../public/lang/Strings";

export default function Services() {
  return (
    <div className="booking-sitter">
      <div className="padding">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-8 col-lg-8 col-xl-8 mx-auto">
              <div className="text-center main-title">
                <h2 className="font-semibold">{strings.yaaPetLovers}</h2>
                <p className="mb-0">{strings.weMadeItSuperEasyTitle}</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-sm-6 col-lg-6 col-xl-5">
              <div className="main-padding">
                <div className="row">
                  <div className="col-auto my-auto">
                    <div className="icons">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fal"
                        data-icon="briefcase"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="svg-inline--fa fa-briefcase fa-w-16 fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M464 128H352V56c0-13.26-10.74-24-24-24H184c-13.26 0-24 10.74-24 24v72H48c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zM192 64h128v64H192V64zm288 368c0 8.82-7.18 16-16 16H48c-8.82 0-16-7.18-16-16V288h160v40c0 13.25 10.75 24 24 24h80c13.25 0 24-10.75 24-24v-40h160v144zM224 320v-32h64v32h-64zm256-64H32v-80c0-8.82 7.18-16 16-16h416c8.82 0 16 7.18 16 16v80z"
                          className=""
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="col">
                    <div className="boarding-details">
                      <h6 className="font-semibold">{strings.petBoarding}</h6>
                      <p className="mb-0 font-14">
                        {strings.weMadeItSuperEazyPetBoarding}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="main-padding">
                <div className="row">
                  <div className="col-auto my-auto">
                    <div className="icons">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fal"
                        data-icon="home-lg-alt"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        className="svg-inline--fa fa-home-lg-alt fa-w-18 fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M573.48 219.91L310.6 8a35.85 35.85 0 0 0-45.19 0L2.53 219.91a6.71 6.71 0 0 0-1 9.5l14.2 17.5a6.82 6.82 0 0 0 9.6 1L64 216.72V496a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V216.82l38.8 31.29a6.83 6.83 0 0 0 9.6-1l14.19-17.5a7.14 7.14 0 0 0-1.11-9.7zM240 480V320h96v160zm240 0H368V304a16 16 0 0 0-16-16H224a16 16 0 0 0-16 16v176H96V190.92l187.71-151.4a6.63 6.63 0 0 1 8.4 0L480 191z"
                          className=""
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="col">
                    <div className="boarding-details">
                      <h6 className="font-semibold">{strings.houseSitting}</h6>
                      <p className="mb-0 font-14">
                        {strings.weMadeItSuperEazyPetBoarding}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="main-padding">
                <div className="row">
                  <div className="col-auto my-auto">
                    <div className="icons">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="pennant"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        className="svg-inline--fa fa-pennant fa-w-18 fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M542.3 183.5c-21.9 4.8-104.7 14.1-246.4-62.8-74.6-40.4-137.5-50.4-186.7-48C121.5 33.7 90.9 0 56 0 25.1 0 0 25.1 0 56c0 22.3 13.2 41.4 32 50.4V504c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8v-75.6c80.8-54.3 156.4-55.7 165.8-56.2 28.2-1.4 74.5-5.9 135.1-19 4.4-1 109-24.5 188.9-124.7 16.1-20.2-1.5-50.3-27.5-45zM370.8 306.3c-57.5 12.4-101 16.6-127.4 18-69.6 3.5-125.6 26.3-163.4 47.9V124c44.1-8.6 109.6-6.3 193 38.9 101.4 54.9 177 69.8 225.9 71.5-61.8 56.6-127.4 71.7-128.1 71.9z"
                          className=""
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="col">
                    <div className="boarding-details">
                      <h6 className="font-semibold">{strings.dropInVisits}</h6>
                      <p className="mb-0 font-14">
                        {strings.weMadeItSuperEazyPetBoarding}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="main-padding">
                <div className="row">
                  <div className="col-auto my-auto">
                    <div className="icons">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fal"
                        data-icon="cloud-sun-rain"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                        className="svg-inline--fa fa-cloud-sun-rain fa-w-20 fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M298.2 418.1c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.4-7.7 1.7-17.4-6-21.8zM192 140c26.4 0 48 20 51.1 45.6 4.8-3.6 9.8-6.9 15.1-9.9 1.5-8.4 3.9-16.5 6.8-24.3-14.3-25.7-41.5-43.4-73-43.4-46.2 0-83.7 37.6-83.7 83.8s37.5 83.8 83.7 83.8c.3 0 .6-.1.9-.1 1.1-11.4 3.7-22.4 7.7-32.8-2.8.5-5.6.9-8.5.9-28.5 0-51.7-23.2-51.7-51.7-.1-28.6 23.1-51.9 51.6-51.9zm-31.7 151.7c-3.6-5.3-9.9-8.1-16.4-6.8l-56 11.1L99 240c1.2-6.4-1.4-12.8-6.8-16.4l-47.4-31.8L92.2 160c5.4-3.6 8-10.1 6.8-16.4l-11.1-56 56 11.1c6.5 1.3 12.8-1.4 16.4-6.8L192 44.4l31.8 47.5c3.6 5.3 10 8.1 16.4 6.8L319.6 83c8.7-1.7 14.3-10.1 12.6-18.8-1.7-8.7-10.3-14.5-18.8-12.6l-68.9 13.6-39.2-58.5c-5.9-8.9-20.6-8.9-26.6 0l-39.1 58.5-69-13.7c-5.3-1.1-10.7.6-14.4 4.4-3.8 3.8-5.4 9.2-4.4 14.5l13.7 69-58.4 39.1c-4.4 3-7.1 7.9-7.1 13.3 0 5.3 2.7 10.3 7.1 13.3l58.4 39.1-13.7 69c-1 5.3.6 10.7 4.4 14.5 3.8 3.8 9 5.5 14.4 4.4l68.9-13.7 39.1 58.5c3.1 4.6 8.2 7.1 13.3 7.1 3.1 0 6.2-.9 8.9-2.7 7.3-4.9 9.3-14.9 4.4-22.2l-44.9-67.4zm329.9 126.4c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.4-7.7 1.7-17.4-6-21.8zm85.1-220.8C570 158.2 536.5 128 496 128c-8.6 0-17 1.4-25.2 4.3C451.1 109.4 422.6 96 392 96c-56.5 0-102.7 45.3-104 101.6-37.8 13.3-64 49.3-64 90.4 0 52.9 43.1 96 96 96h224c52.9 0 96-43.1 96-96 0-41.3-26.6-77.6-64.7-90.7zM560 208.8zM544 352H320c-35.3 0-64-28.7-64-64 0-30.6 21.8-57 52-62.8l14.5-2.8-2-18c-.2-1.5-.4-2.9-.4-4.4 0-39.7 32.3-72 72-72 24.3 0 46.8 12.2 60.2 32.8l8.1 12.4 13-7.1c32.7-17.8 70.7 8.2 70.8 40.4l-.2 16.2 12.8 2.6c29.8 6 51.3 32.3 51.3 62.7-.1 35.3-28.8 64-64.1 64zm42.2 66.1c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.4-7.7 1.7-17.4-6-21.8zm-192 0c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.4-7.7 1.7-17.4-6-21.8z"
                          className=""
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="col">
                    <div className="boarding-details">
                      <h6 className="font-semibold">{strings.petDayCare}</h6>
                      <p className="font-14">
                        {strings.weMadeItSuperEazyPetBoarding}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="main-padding">
                <div className="row">
                  <div className="col-auto my-auto">
                    <div className="icons">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fal"
                        data-icon="dog-leashed"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        className="svg-inline--fa fa-dog-leashed fa-w-18 fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M544,112v64a64,64,0,0,1-64,64H448V480a32,32,0,0,1-32,32H352a32,32,0,0,1-32-32V384H224v96a32,32,0,0,1-32,32H128a32,32,0,0,1-32-32V320a95,95,0,0,1,13.46-48.26A80,80,0,0,1,32,192a16,16,0,0,1,32,0,48.05,48.05,0,0,0,48,48h27.05A95.48,95.48,0,0,1,192,224h79.94L34.88,26.45a8,8,0,0,1-1-11.27L44.11,2.88a8,8,0,0,1,11.27-1L304,209V48a16,16,0,0,1,16.12-16,15.67,15.67,0,0,1,11.2,4.72L358.6,64h69.62c10.92,0,23.74,7.93,28.62,17.69L464,96h64A16,16,0,0,1,544,112ZM288,256H192a64.07,64.07,0,0,0-64,64V480h64V352h96Zm128,26.48-96-24V352h32V480h64ZM512,128H444.22l-16-32H345.34L336,86.66V229.52l80,20V208h64a32,32,0,0,0,32-32Zm-96,0a16,16,0,1,1-16-16A16,16,0,0,1,416,128Z"
                          className=""
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="col">
                    <div className="boarding-details">
                      <h6 className="font-semibold">{strings.dogWalking}</h6>
                      <p className="mb-0 font-14">
                        {strings.weMadeItSuperEazyPetBoarding}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="main-padding">
                <div className="row">
                  <div className="col-auto my-auto">
                    <div className="icons">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fal"
                        data-icon="briefcase"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="svg-inline--fa fa-briefcase fa-w-16 fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M464 128H352V56c0-13.26-10.74-24-24-24H184c-13.26 0-24 10.74-24 24v72H48c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zM192 64h128v64H192V64zm288 368c0 8.82-7.18 16-16 16H48c-8.82 0-16-7.18-16-16V288h160v40c0 13.25 10.75 24 24 24h80c13.25 0 24-10.75 24-24v-40h160v144zM224 320v-32h64v32h-64zm256-64H32v-80c0-8.82 7.18-16 16-16h416c8.82 0 16 7.18 16 16v80z"
                          className=""
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="col">
                    <div className="boarding-details">
                      <h6 className="font-semibold">{strings.houseCall}</h6>
                      <p className="mb-0 font-14">
                        {strings.weMadeItSuperEazyPetBoarding}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="main-padding">
                <div className="row">
                  <div className="col-auto my-auto">
                    <div className="icons">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fal"
                        data-icon="cut"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="svg-inline--fa fa-cut fa-w-14 fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M249.52 256L446.83 58.83a3.996 3.996 0 0 0 0-5.65c-12.5-12.5-32.76-12.5-45.25 0L224.06 230.56l-48.64-48.61C185.88 166.57 192 148 192 128c0-53.02-42.98-96-96-96S0 74.98 0 128s42.98 96 96 96c20.01 0 38.58-6.12 53.96-16.6l48.63 48.6-48.63 48.6C134.58 294.12 116.01 288 96 288c-53.02 0-96 42.98-96 96s42.98 96 96 96 96-42.98 96-96c0-20-6.12-38.57-16.58-53.95l48.64-48.61 177.52 177.38c12.5 12.5 32.76 12.5 45.25 0a3.996 3.996 0 0 0 0-5.65L249.52 256zM96 192c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64zm0 256c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z"
                          className=""
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="col">
                    <div className="boarding-details">
                      <h6 className="font-semibold">{strings.grooming}</h6>
                      <p className="mb-0 font-14">
                        {strings.weMadeItSuperEazyPetBoarding}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-6 col-xl-5  offset-xl-2">
              <div className="security-details mb-4">
                <div className="d-flex">
                  <div className="security-icons my-auto">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="shield-alt"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="svg-inline--fa fa-shield-alt fa-w-16 fa-2x"
                    >
                      <path
                        fill="currentColor"
                        d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"
                        className=""
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-0 font-semibold pl-4 text-white">
                      {strings.bookWithProfessionalPetSitter}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="verified-details">
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
                          className=""
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="col my-auto">
                    <div className="verified-sitters">
                      <h6 className="mb-1 font-semibold">
                        {strings.verifiedPetSitters}
                      </h6>
                      <p className="mb-0 font-14">
                        {strings.AllSitterPassABasicCheck}
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
                          className=""
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="col  my-auto">
                    <div className="verified-sitters">
                      <h6 className="mb-1 font-semibold">
                        {strings.knowSitterPersonally}
                      </h6>
                      <p className="mb-0 font-14">
                        {strings.AllSittersProvide}
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
                          className=""
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="col my-auto">
                    <div className="verified-sitters">
                      <h6 className="mb-1 font-semibold">
                        {strings.CertifiedPetSitters}
                      </h6>
                      <p className="mb-0 font-14">
                        {strings.AllSittersHaveAnimalCertifications}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="my-4 sitter-btn">
                  <Link href="/search-sitter">
                    <button className="btn btn-primary py-3">
                      {strings.bookYourPetcationSitter}
                    </button>
                  </Link>
                </div>

                <div className="row">
                  <div className="col-auto my-auto">
                    <img src="images/sitter.png" className="img-fluid" />
                  </div>

                  <div className="col guarantee-info">
                    <h6 className="mb-1 font-semibold">
                      {strings.petcationGuarantee}
                    </h6>
                    <p className="mb-0 font-14">
                      {strings.AllServicesBookedOnPetcation}
                    </p>
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
