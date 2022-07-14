import React, { ChangeEvent } from "react";
import { strings } from "../../public/lang/Strings";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { pets, petSize } from "../../public/appData/AppData";
import "react-day-picker/lib/style.css";
import Select from "react-select";
import { addMonths } from "date-fns";
import { useState } from "react";
import AppContext from "../../utils/AppContext";
import { useContext } from "react";
import { useRouter } from "next/router";
import Autocomplete from "react-google-autocomplete";
import {GOOGLE_PLACES_API} from "../../api/Constants";

export const MainBanner: React.FC<{}> = ({}) => {
  const router = useRouter();
  const value: any = useContext(AppContext);

  const [selectedPet, setSelectedPet] = useState<any>(1);
  const [selectedSize, setSelectedSize] = useState<any>(null);
  const [selectedService, setSelectedService] = useState<any>("1");
  const [dropOffDate, setDropOffDate] = useState<any>(null);
  const [pickUpDate, setPickUpDate] = useState<any>(null);
  const [lat, setLat] = useState<any>();
  const [lng, setLng] = useState<any>();
  const [formattedAddress, setFormattedAddress] = useState<string>("");

  const onPetSelect = (event) => {
    setSelectedPet(event.target.value);
  };

  const onChangeSize = (selectedSize) => {
    setSelectedSize(selectedSize);
  };

  const onChangeService = (event) => {
    setSelectedService(event.target.value);
  };

  const onChangeDropOffDate = (date) => {
    setPickUpDate(date);
    setDropOffDate(date);
  };

  const onChangePickupDate = (date) => {
    setPickUpDate(date);
  };

  const onSearch = () => {
    let data = {
      lat: lat ? lat : "0",
      lng: lng ? lng : "0",
      pet: selectedPet,
      service: selectedService,
      petSize: selectedSize,
      checkInDate: dropOffDate ? dropOffDate : new Date(),
      checkOutDate: pickUpDate ? pickUpDate : new Date(),
      defaultValue: formattedAddress,
    };
    value.setState(data);

    console.log('search sitter data is', value)
    router.push({
      pathname: "/search-sitter",

    });
  };

  return (
    <div className="main-banner">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-12 col-lg-12 col-xl-12">
            <div className="pet-details">
              <h6 className="mb-0 text-white font-medium">
                {strings.loveCareAndAllNeedsForPets}
              </h6>
              <p className="text-white font-normal">
                {strings.bookTrustedSitters}
              </p>
            </div>

            <div className="book-details booking-for ml-0 bg-white">
              <div className="pet-info service-display">
                <p className="d-inline mb-0">{strings.yourPet}</p>
                {pets.map((item, index) => {
                  return (
                    <div key={index} className="custom-check">
                      <label className="check ">
                        <input
                          onChange={onPetSelect}
                          type="radio"
                          name="is_name1"
                          value={item.value}
                          checked={selectedPet == item.value}
                        />
                        <span className="checkmark"></span>
                        {item.label}
                      </label>
                    </div>
                  );
                })}
              </div>

              <div className="service-display mob-service-display">
                <div className="service-option">
                  <input
                    type="radio"
                    className="class2"
                    id="myradio1"
                    checked={selectedService == "1"}
                    onChange={onChangeService}
                    name="radio1"
                    value="1"
                  />
                  <label htmlFor="myradio1">
                    <div className="row">
                      <div className="col-10  col-md-12 col-lg-12 col-xl-12">
                        <div className="display-mob">
                          <div className="my-auto">
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
                              />
                            </svg>
                          </div>
                          <div className="details">
                            <h6 className="mb-0">Pet Boarding</h6>
                            <p className="mb-0 d-block d-md-none d-xl-none d-lg-none">
                              In your home
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-2 my-auto d-block d-md-none d-xl-none d-lg-none">
                        <div className="left-arrows">
                          <a href="http://159.65.142.31/petcation-design/search">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="chevron-right"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 256 512"
                              className="svg-inline--fa fa-chevron-right fa-w-8 fa-2x"
                            >
                              <path
                                fill="currentColor"
                                d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>

                <div className="service-option">
                  <input
                    type="radio"
                    className="class2"
                    id="myradio2"
                    name="radio1"
                    onChange={onChangeService}
                    checked={selectedService == "2"}
                    value="2"
                  />
                  <label htmlFor="myradio2">
                    <div className="row">
                      <div className="col-10  col-md-12 col-lg-12 col-xl-12">
                        <div className="display-mob">
                          <div className="my-auto">
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
                              />
                            </svg>
                          </div>
                          <div className="details">
                            <h6 className="mb-0">House Sitting</h6>
                            <p className="mb-0 d-block d-md-none d-lg-none d-xl-none">
                              In your home
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-2 my-auto  d-block d-md-none d-xl-none d-lg-none">
                        <div className="left-arrows">
                          <a href="http://159.65.142.31/petcation-design/search">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="chevron-right"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 256 512"
                              className="svg-inline--fa fa-chevron-right fa-w-8 fa-2x"
                            >
                              <path
                                fill="currentColor"
                                d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>

                <div className="service-option">
                  <input
                    type="radio"
                    className="class2"
                    id="myradio3"
                    name="radio1"
                    onChange={onChangeService}
                    checked={selectedService == "3"}
                    value="3"
                  />
                  <label htmlFor="myradio3">
                    <div className="row">
                      <div className="col-10  col-md-12 col-lg-12 col-xl-12">
                        <div className="display-mob">
                          <div className="my-auto">
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
                              />
                            </svg>
                          </div>
                          <div className="details">
                            <h6 className="mb-0">Drop-In Visits</h6>
                            <p className="mb-0 d-block d-md-none d-lg-none d-xl-none">
                              In your home
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-2 my-auto  d-block d-md-none d-xl-none d-lg-none">
                        <div className="left-arrows">
                          <a href="http://159.65.142.31/petcation-design/search">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="chevron-right"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 256 512"
                              className="svg-inline--fa fa-chevron-right fa-w-8 fa-2x"
                            >
                              <path
                                fill="currentColor"
                                d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>

                <div className="service-option">
                  <input
                    type="radio"
                    id="myradio4"
                    name="radio1"
                    onChange={onChangeService}
                    value="4"
                    checked={selectedService == "4"}
                  />
                  <label htmlFor="myradio4">
                    <div className="row">
                      <div className="col-10 col-md-12 col-lg-12 col-xl-12">
                        <div className="display-mob">
                          <div className="my-auto">
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
                              />
                            </svg>
                          </div>
                          <div className="details">
                            <h6 className="mb-0">Pet Day Care</h6>
                            <p className="mb-0 d-block d-md-none d-lg-none d-xl-none">
                              In your home
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-2 my-auto  d-block d-md-none d-xl-none d-lg-none">
                        <div className="left-arrows">
                          <a href="http://159.65.142.31/petcation-design/search">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="chevron-right"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 256 512"
                              className="svg-inline--fa fa-chevron-right fa-w-8 fa-2x"
                            >
                              <path
                                fill="currentColor"
                                d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>

                {selectedPet == 1 && <div className="service-option">
                  <input
                    type="radio"
                    id="myradio5"
                    name="radio1"
                    onChange={onChangeService}
                    checked={selectedService == "5"}
                    value="5"
                  />
                  <label htmlFor="myradio5">
                    <div className="row">
                      <div className="col-10  col-md-12 col-lg-12 col-xl-12">
                        <div className="display-mob">
                          <div className="my-auto">
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
                              />
                            </svg>
                          </div>
                          <div className="details">
                            <h6 className="mb-0"> Dog Wallking</h6>
                            <p className="mb-0 d-block d-md-none d-lg-none d-xl-none">
                              In your home
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-2 my-auto  d-block d-md-none d-xl-none d-lg-none">
                        <div className="left-arrows">
                          <a href="http://159.65.142.31/petcation-design/search">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="chevron-right"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 256 512"
                              className="svg-inline--fa fa-chevron-right fa-w-8 fa-2x"
                            >
                              <path
                                fill="currentColor"
                                d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>}
                {(selectedPet == 1 || selectedPet == 2 || selectedPet == 5) && <div className="service-option">
                  <input
                    type="radio"
                    id="myradio6"
                    name="radio1"
                    value="6"
                    onChange={onChangeService}
                    checked={selectedService == "6"}
                  />
                  <label htmlFor="myradio6">
                    <div className="row">
                      <div className="col-10  col-md-12 col-lg-12 col-xl-12">
                        <div className="display-mob">
                          <div className="my-auto">
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
                          <div className="details">
                            <h6 className="mb-0">Grooming</h6>
                            <p className="mb-0 d-block d-md-none d-lg-none d-xl-none">
                              In your home
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-2 my-auto  d-block d-md-none d-xl-none d-lg-none">
                        <div className="left-arrows">
                          <a href="http://159.65.142.31/petcation-design/search">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="chevron-right"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 256 512"
                              className="svg-inline--fa fa-chevron-right fa-w-8 fa-2x"
                            >
                              <path
                                fill="currentColor"
                                d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>}

                <div className="service-option">
                  <input
                    type="radio"
                    id="myradio7"
                    name="radio1"
                    onChange={onChangeService}
                    checked={selectedService == "7"}
                    value="7"
                  />
                  <label htmlFor="myradio7">
                    <div className="row">
                      <div className="col-10  col-md-12 col-lg-12 col-xl-12">
                        <div className="display-mob">
                          <div className="my-auto">
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
                              />
                            </svg>
                          </div>
                          <div className="details">
                            <h6 className="mb-0">House call</h6>
                            <p className="mb-0 d-block d-md-none d-lg-none d-xl-none">
                              In your home
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-2 my-auto  d-block d-md-none d-xl-none d-lg-none">
                        <div className="left-arrows">
                          <a href="http://159.65.142.31/petcation-design/search">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="chevron-right"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 256 512"
                              className="svg-inline--fa fa-chevron-right fa-w-8 fa-2x"
                            >
                              <path
                                fill="currentColor"
                                d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <div className="row content-margin">
                <div className="col-12 col-md-9 col-xl-9 col-xl-9 pd-right">
                  <div className="pet-content">
                    <div className="row">
                      <div className="col-12 col-md-3 col-lg-3 col-xl-3">
                        <div className="form-group mb-0">
                          <label className="mb-0">Zipcode/city/area</label>
                          <Autocomplete
                            style={{
                              border: 0,
                              background: "transparent",
                              width: "100%",
                            }}
                            apiKey={GOOGLE_PLACES_API}
                            onPlaceSelected={(place) => {
                              console.log('place dat is', place.geometry.location)
                              setFormattedAddress(place.formatted_address);
                              setLat(`${place.geometry.location.lat()}`);
                              setLng(`${place.geometry.location.lng()}`);
                            }}
                            options={{
                              componentRestrictions: { country: "jp" },
                            }}
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-3 col-lg-3 col-xl-3">
                        <div className="date-picker checkdate">
                          <label className="mb-0 ml-2">{"Start Date"}</label>
                          <div className="form-group">
                            <div className="input-group date btn-calendar">
                              <DayPickerInput
                                inputProps={{
                                  style: {
                                    border: 0,
                                    background: "transparent",
                                  },
                                  readOnly: true,
                                }}
                                dayPickerProps={{
                                  modifiers: {
                                    disabled: [
                                      {
                                        before: new Date(),
                                        after: addMonths(new Date(), 2),
                                      },
                                    ],
                                  },
                                }}
                                placeholder="YYYY-MM-DD"
                                format="DD/MM/YYYY"
                                value={dropOffDate}
                                onDayChange={onChangeDropOffDate}
                              />

                              <span className="input-group-append">
                                <button className="btn" type="button"></button>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {selectedService == "1" || selectedService == "2" ? (
                        <div className="col-12 col-md-3 col-lg-3 col-xl-3">
                          <div className="form-group mb-0">
                            <label className="mb-0 ml-2">End Date</label>
                            <div className="input-group date btn-calendar">
                              <DayPickerInput
                                inputProps={{
                                  style: {
                                    border: 0,
                                    background: "transparent",
                                  },
                                  readOnly: true,
                                }}
                                dayPickerProps={{
                                  modifiers: {
                                    disabled: [
                                      {
                                        before: dropOffDate
                                          ? dropOffDate
                                          : new Date(),
                                        after: addMonths(new Date(), 2),
                                      },
                                    ],
                                  },
                                }}
                                placeholder="YYYY-MM-DD"
                                format="DD/MM/YYYY"
                                value={pickUpDate}
                                onDayChange={onChangePickupDate}
                              />
                              <span className="input-group-append">
                                <button className="btn" type="button"></button>
                              </span>
                            </div>
                          </div>
                        </div>
                      ) : null}
                      {console.log('selected service is', selectedService)}
                      { (selectedPet == 4 || selectedPet == 5) ? null:(selectedService != "6") && <div className="col-12 col-md-3 col-lg-3 col-xl-3">
                        <div className="form-group mb-0">
                          <label className="mb-0">Pet size</label>
                          <div className="category-selection pet-selection">
                            <Select
                              instanceId={"selectSize"}
                              onChange={onChangeSize}
                              options={petSize}
                              value={selectedSize}
                              className="mySelect"
                              styles={{
                                option: (provided, state) => ({
                                  ...provided,
                                }),

                                control: (provided, state) => {
                                  if (state.isFocused) {
                                    console.log("called");
                                    return {
                                      ...provided,
                                      borderColor: "#20847e",
                                      boxShadow: "#20847e",
                                      "&:hover": {
                                        borderColor: "#20847e",
                                        boxShadow: "#20847e",
                                      },
                                    };
                                  } else {
                                    return {
                                      ...provided,
                                    };
                                  }
                                },
                                singleValue: (provided, state) => {
                                  return { ...provided };
                                },
                              }}
                            />
                          </div>
                        </div>
                      </div>}
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-3 col-lg-3 col-xl-3 d-none d-md-block d-lg-block d-xl-block pd-left search-btn">
                  <button onClick={onSearch} className="btn btn-primary">
                    Search
                  </button>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3 pd-left search-btn d-block d-md-none d-lg-none d-xl-none">
                  <a href="http://159.65.142.31/petcation-design/search.html">
                    <button className="btn btn-primary">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fal"
                        data-icon="search"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="svg-inline--fa fa-search fa-w-16 fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M508.5 481.6l-129-129c-2.3-2.3-5.3-3.5-8.5-3.5h-10.3C395 312 416 262.5 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c54.5 0 104-21 141.1-55.2V371c0 3.2 1.3 6.2 3.5 8.5l129 129c4.7 4.7 12.3 4.7 17 0l9.9-9.9c4.7-4.7 4.7-12.3 0-17zM208 384c-97.3 0-176-78.7-176-176S110.7 32 208 32s176 78.7 176 176-78.7 176-176 176z"
                        ></path>
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
