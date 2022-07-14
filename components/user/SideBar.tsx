import React, { useEffect } from "react";
import { strings } from "../../public/lang/Strings";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import IDashboard from "../../models/dashboard.interface";
import Loader from "../common/Loader";
import API from "../../api/Api";
import UploadFileModal from "../common/UploadfileModal";
import { dataURLtoFile } from "../../utils/Helper";
import {EventEmitter} from '../../public/EventEmitter';
import  {useSnackbar} from 'react-simple-snackbar';
import {errorOptions, successOptions} from "../../public/appData/AppData";

interface I_PROPS {
  dashboard: IDashboard;
  getDashboard: () => void;
}

const api = new API();
function SideBar({ dashboard, getDashboard }: I_PROPS) {
  const router = useRouter();
  const [route, setRoute] = useState(router.pathname);
  const [openCropper, setOpenCropper] = useState<boolean>(false);
  const [cropper, setCropper] = useState<any>();
  const [uploadedFilePath, setUploadedFilePath] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false)


  const [openSuccess, closeSuccess] = useSnackbar(successOptions);
  const [openError, closeError] = useSnackbar(errorOptions);

  useEffect(() => {
    setRoute(router.pathname);
  }, [router]);

  useEffect(() => {
    EventEmitter.subscribe('updateUserDetail',()=> getDashboard())
  }, []);

  const onFileChange = (event) => {
    if (event.dataTransfer || event.target.files) {
      let files;
      if (event.dataTransfer) {
        files = event.dataTransfer.files;
      } else if (event.target) {
        files = event.target.files;
      }
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedFilePath(reader.result);
      };
      if (files[0]) {
        reader.readAsDataURL(files[0]);
        setOpenCropper(true);
      }
    }
  };

  return (
    <div className="col-12 col-md-4 col-lg-4 col-xl-4 column">
      {dashboard == null ? (
        <Loader />
      ) : (
        <div className="bg-white main-background">
          <div className="row">
            <div className="col-sm-3">
              <div className="user-profile-img my-profile-img ">
                <div className=" upload-doc file">
                  {loading ? <Loader />:<img src={dashboard.profile_picture} />}
                  <input
                    style={{ width: "80px", height: "80px", opacity: 0 }}
                    type="file"
                    name="file"
                    onChange={onFileChange}
                  />

                </div>
              </div>
            </div>
            <div className="col-sm-9 my-auto">
              <div className="my-profile-details ml-3">
                <h5 className="font-semibold mb-0">
                  {dashboard.firstname + " " + dashboard.lastname}
                </h5>
                <p className="my-1 font-14">
                  {dashboard.address
                    ? dashboard.address.address.length > 35
                      ? dashboard.address.address.substr(0, 35) + "..."
                      : dashboard.address.address
                    : ""}
                </p>
                {dashboard.is_verified ? <div className="verified-img">
                  <img src="/images/icons2.png" />
                  <span className="font-10">{strings.PetcationVerified}</span>
                </div>:null}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="bg-white main-background p-0">
        <div className="sidebar-design">
          <ul>
            <li className={route == "/user/dashboard" ? "active" : ""}>
              <Link href="/user/dashboard">
                <a>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="tachometer-slowest"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="svg-inline--fa fa-tachometer-slowest fa-w-18 fa-2x"
                  >
                    <path
                      fill="currentColor"
                      d="M288 288c-22.35 0-41.96 11.49-53.41 28.84l-101.87-20.38c-13.06-2.77-25.66 5.83-28.25 18.83s5.81 25.64 18.81 28.23L225.69 364c1.45 7.1 3.64 13.91 7.18 19.99h110.25c5.5-9.45 8.88-20.28 8.88-32 0-35.34-28.65-63.99-64-63.99zm0-256C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm212.27 400H75.73C57.56 397.63 48 359.12 48 320 48 187.66 155.66 80 288 80s240 107.66 240 240c0 39.12-9.56 77.63-27.73 112z"
                    ></path>
                  </svg>
                  {strings.Dashboard}
                </a>
              </Link>
            </li>

            <li
              className={route.startsWith("/user/reservation") ? "active" : ""}
            >
              <Link
                href={{ pathname: "/user/reservation/", query: { index: "1" } }}
              >
                <a>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="ticket-alt"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="svg-inline--fa fa-ticket-alt fa-w-18 fa-2x"
                  >
                    <path
                      fill="currentColor"
                      d="M424 160H152c-13.255 0-24 10.745-24 24v144c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V184c0-13.255-10.745-24-24-24zm-8 160H160V192h256v128zm128-96h32V112c0-26.51-21.49-48-48-48H48C21.49 64 0 85.49 0 112v112h32c17.673 0 32 14.327 32 32s-14.327 32-32 32H0v112c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V288h-32c-17.673 0-32-14.327-32-32s14.327-32 32-32zm0 96v80c0 8.823-7.177 16-16 16H48c-8.823 0-16-7.177-16-16v-80c35.29 0 64-28.71 64-64s-28.71-64-64-64v-80c0-8.823 7.177-16 16-16h480c8.823 0 16 7.177 16 16v80c-35.29 0-64 28.71-64 64s28.71 64 64 64z"
                      className=""
                    ></path>
                  </svg>
                  {strings.Reservations}
                </a>
              </Link>
              {route.startsWith("/user/reservation") ? (
                <ul className="spot-side">
                  <li className={router.query.index == "1" ? "active" : ""}>
                    <Link
                      href={{
                        pathname: "/user/reservation/",
                        query: { index: "1" },
                      }}
                    >
                      <a className="dropdown-item">
                        {strings.Sitterreservations}
                      </a>
                    </Link>
                  </li>
                  <li className={router.query.index == "2" ? "active" : ""}>
                    <Link
                      href={{
                        pathname: "/user/reservation/",
                        query: { index: "2" },
                      }}
                    >
                      <a className="dropdown-item">
                        {strings.Clientreservations}
                      </a>
                    </Link>
                  </li>
                </ul>
              ) : null}
            </li>

            <li className={route == "/user/my-profile" ? "active" : ""}>
              <Link href="/user/my-profile">
                <a>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="user-alt"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="svg-inline--fa fa-user-alt fa-w-16 fa-2x"
                  >
                    <path
                      fill="currentColor"
                      d="M384 336c-40.6 0-47.6-1.5-72.2 6.8-17.5 5.9-36.3 9.2-55.8 9.2s-38.3-3.3-55.8-9.2c-24.6-8.3-31.5-6.8-72.2-6.8C57.3 336 0 393.3 0 464v16c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-16c0-70.7-57.3-128-128-128zm80 128H48c0-21.4 8.3-41.5 23.4-56.6C86.5 392.3 106.6 384 128 384c41.1 0 41-1.1 56.8 4.2 23 7.8 47 11.8 71.2 11.8 24.2 0 48.2-4 71.2-11.8 15.8-5.4 15.7-4.2 56.8-4.2 44.1 0 80 35.9 80 80zM256 320c88.4 0 160-71.6 160-160S344.4 0 256 0 96 71.6 96 160s71.6 160 160 160zm0-272c61.8 0 112 50.2 112 112s-50.2 112-112 112-112-50.2-112-112S194.2 48 256 48z"
                      className=""
                    ></path>
                  </svg>{" "}
                  {strings.Myprofile}
                </a>
              </Link>
            </li>

            <li className={route.startsWith("/user/my-pets") ? "active" : ""}>
              <Link href="/user/my-pets">
                <a>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="dog"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="svg-inline--fa fa-dog fa-w-18 fa-2x"
                  >
                    <path
                      fill="currentColor"
                      d="M576,104v48a88.09,88.09,0,0,1-88,88h-8V480a32,32,0,0,1-32,32H368a32,32,0,0,1-32-32V384H208v96a32,32,0,0,1-32,32H96a32,32,0,0,1-32-32V312a118.82,118.82,0,0,1,7.88-41.63A88,88,0,0,1,0,184a24,24,0,0,1,48,0,40,40,0,0,0,40,40h15.06c21.38-19.69,49.66-32,80.94-32H304V16c0-14.25,17.22-21.39,27.31-11.31L358.59,32l-.12.15c.53,0,1-.15,1.53-.15h76.22a55.65,55.65,0,0,1,50.09,31l.53,1H536A40,40,0,0,1,576,104ZM432,268.73,317.06,240H184a72.09,72.09,0,0,0-72,72V464h48V336H384V464h48ZM528,112H457.16L443.38,84.42A8,8,0,0,0,436.22,80H360a8,8,0,0,0-8,8V199.26l80,20V192h56a40,40,0,0,0,40-40Zm-96,0a16,16,0,1,1-16-16A16,16,0,0,1,432,112Z"
                      className=""
                    ></path>
                  </svg>{" "}
                  {strings.Mypets}
                </a>
              </Link>
            </li>

            <li
              className={route.startsWith("/user/my-services") ? "active" : ""}
            >
              <Link href="/user/my-services">
                <a>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="user-cog"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    className="svg-inline--fa fa-user-cog fa-w-20 fa-2x"
                  >
                    <path
                      fill="currentColor"
                      d="M628.3 358.3l-16.5-9.5c.8-8.5.8-17.1 0-25.6l16.6-9.5c9.5-5.5 13.8-16.7 10.5-27-7.2-23.4-19.9-45.4-36.7-63.5-7.4-8.1-19.3-9.9-28.7-4.4l-16.5 9.5c-7-5-14.4-9.3-22.2-12.8v-19c0-11-7.5-20.3-18.2-22.7-23.9-5.4-49.3-5.4-73.2 0-10.7 2.4-18.2 11.8-18.2 22.7v19c-7.8 3.5-15.2 7.8-22.2 12.8l-16.5-9.5c-9.5-5.5-21.3-3.7-28.7 4.4-16.7 18.1-29.4 40.1-36.7 63.4-3.3 10.4 1.2 21.8 10.6 27.2l16.5 9.5c-.8 8.5-.8 17.1 0 25.6l-16.6 9.5c-9.3 5.4-13.8 16.9-10.5 27.1 7.2 23.4 19.9 45.4 36.7 63.5 7.4 8 19.2 9.8 28.7 4.4l16.5-9.5c7 5 14.4 9.3 22.2 12.8v19c0 11 7.5 20.3 18.2 22.7 12 2.7 24.3 4 36.6 4s24.7-1.3 36.6-4c10.7-2.4 18.2-11.8 18.2-22.7v-19c7.8-3.5 15.2-7.8 22.2-12.8l16.5 9.5c9.4 5.4 21.3 3.6 28.7-4.4 16.7-18.1 29.4-40.1 36.7-63.4 3.3-10.4-1.2-21.9-10.6-27.3zm-51.6 7.2l29.4 17c-5.2 14.3-13 27.8-22.8 39.5l-29.4-17c-21.4 18.3-24.5 20.1-51.1 29.5v34c-15.1 2.6-30.6 2.6-45.6 0v-34c-26.9-9.5-30.2-11.7-51.1-29.5l-29.4 17c-9.8-11.8-17.6-25.2-22.8-39.5l29.4-17c-4.9-26.8-5.2-30.6 0-59l-29.4-17c5.2-14.3 13-27.7 22.8-39.5l29.4 17c21.4-18.3 24.5-20.1 51.1-29.5v-34c15.1-2.5 30.7-2.5 45.6 0v34c26.8 9.5 30.2 11.6 51.1 29.5l29.4-17c9.8 11.8 17.6 25.2 22.8 39.5l-29.4 17c4.9 26.8 5.2 30.6 0 59zm-96.7-94c-35.6 0-64.5 29-64.5 64.5s28.9 64.5 64.5 64.5 64.5-29 64.5-64.5-28.9-64.5-64.5-64.5zm0 97c-17.9 0-32.5-14.6-32.5-32.5s14.6-32.5 32.5-32.5 32.5 14.6 32.5 32.5-14.6 32.5-32.5 32.5zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96zM48 480c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 19.2 0 38-3.3 56.5-8.7.5-11.6 1.8-23 4.2-34-8.9 2.7-30.1 10.7-60.7 10.7-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h337c-16-8.6-30.6-19.5-43.5-32H48z"
                      className=""
                    ></path>
                  </svg>
                  {strings.MyServices}
                </a>
              </Link>
            </li>

            <li>
              <Link href="/user/favourite-sitter">
                <a>
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
                      className=""
                    ></path>
                  </svg>{" "}
                  {strings.FavouriteSitters}
                </a>
              </Link>
            </li>

            <li className={route.startsWith("/user/my-spots") ? "active" : ""}>
              <Link href="/user/my-spots">
                <a>
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
                    ></path>
                  </svg>
                  {strings.Myspots}
                </a>
              </Link>
              {route.startsWith("/user/my-spots") ? (
                <ul className="spot-side">
                  <Link href="/user/favorite-spots">
                    <li className={route == "/user/my-spots" ? "active" : ""}>
                      <a className="dropdown-item">{strings.MyFavourites}</a>
                    </li>
                  </Link>
                  <Link href="/user/my-spots/my-reviews">
                    <li
                      className={
                        route == "/user/my-spots/my-reviews" ? "active" : ""
                      }
                    >
                      <a className="dropdown-item">{strings.MyReviews}</a>
                    </li>
                  </Link>
                </ul>
              ) : null}
            </li>
            <li
              className={
                route.startsWith("/user/password-security") ? "active" : ""
              }
            >
              <Link href="/user/password-security">
                <a>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="shield-check"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="svg-inline--fa fa-shield-check fa-w-16 fa-2x"
                  >
                    <path
                      fill="currentColor"
                      d="M163.2 230.5c-4.7-4.7-12.3-4.7-17-.1l-22.7 22.5c-4.7 4.7-4.7 12.3-.1 17l90.8 91.5c4.7 4.7 12.3 4.7 17 .1l172.6-171.2c4.7-4.7 4.7-12.3.1-17l-22.5-22.7c-4.7-4.7-12.3-4.7-17-.1L223 290.7zM466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256 464C158.5 423.4 64 297.3 64 128l192-80 192 80c0 173.8-98.4 297-192 336z"
                    ></path>
                  </svg>
                  {strings.PasswordAndSecurity}
                </a>
              </Link>
            </li>

            <li
              className={
                route.startsWith("/user/payments-and-payouts") ? "active" : ""
              }
            >
              <Link href="/user/payments-and-payouts">
                <a>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="money-bill-wave"
                    role="img"
                    xmlns="http://www.w3./2000/svg"
                    viewBox="0 0 640 512"
                    className="svg-inline--fa fa-money-bill-wave fa-w-20 fa-2x"
                  >
                    <path
                      fill="currentColor"
                      d="M320 160.55c-44.18 0-80 43.16-80 96.41 0 53.24 35.81 96.41 80 96.41 44.17 0 80-43.15 80-96.41 0-53.25-35.82-96.41-80-96.41zM621.16 54.46C582.37 38.19 543.55 32 504.75 32c-123.17-.01-246.33 62.34-369.5 62.34-30.89 0-61.76-3.92-92.65-13.72-3.47-1.1-6.95-1.62-10.35-1.62C15.04 79 0 92.32 0 110.81v317.26c0 12.63 7.23 24.6 18.84 29.46C57.63 473.81 96.45 480 135.25 480c123.17 0 246.34-62.35 369.51-62.35 30.89 0 61.76 3.92 92.65 13.72 3.47 1.1 6.95 1.62 10.35 1.62 17.21 0 32.25-13.32 32.25-31.81V83.93c-.01-12.64-7.24-24.6-18.85-29.47zM592 322.05c-26.89 3.4-48.58 23.31-54.38 49.48-10.8-.92-21.56-1.88-32.87-1.88-67.56 0-133.13 16.59-196.53 32.64C247.86 417.57 190.85 432 135.25 432c-8.02 0-15.85-.32-23.51-.94-1.42-34.23-29.29-61.61-63.73-61.61V192.69c31.07 0 56.93-22.25 62.74-51.75 8.14.51 16.08 1.4 24.51 1.4 67.56 0 133.12-16.59 196.52-32.64C392.13 94.43 449.14 80 504.75 80c10.84 0 21.22.78 31.42 1.91.85 31.96 24.87 57.84 55.83 61.76v178.38z"
                    ></path>
                  </svg>
                  {strings.PaymentsAndpayouts}
                </a>
              </Link>
            </li>

            <li
              className={
                route.startsWith("/user/payment-history") ? "active" : ""
              }
            >
              <Link href="/user/payment-history">
                <a>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="history"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="svg-inline--fa fa-history fa-w-16 fa-2x"
                  >
                    <path
                      fill="currentColor"
                      d="M504 255.532c.252 136.64-111.182 248.372-247.822 248.468-64.014.045-122.373-24.163-166.394-63.942-5.097-4.606-5.3-12.543-.443-17.4l16.96-16.96c4.529-4.529 11.776-4.659 16.555-.395C158.208 436.843 204.848 456 256 456c110.549 0 200-89.468 200-200 0-110.549-89.468-200-200-200-55.52 0-105.708 22.574-141.923 59.043l49.091 48.413c7.641 7.535 2.305 20.544-8.426 20.544H26.412c-6.627 0-12-5.373-12-12V45.443c0-10.651 12.843-16.023 20.426-8.544l45.097 44.474C124.866 36.067 187.15 8 256 8c136.811 0 247.747 110.781 248 247.532zm-167.058 90.173l14.116-19.409c3.898-5.36 2.713-12.865-2.647-16.763L280 259.778V116c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v168.222l88.179 64.13c5.36 3.897 12.865 2.712 16.763-2.647z"
                    ></path>
                  </svg>
                  {strings.Paymenthistory}
                </a>
              </Link>
            </li>

            <li className={route == "/user/global-preference" ? "active" : ""}>
              <Link href="/user/global-preference">
                <a>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="globe-europe"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                    className="svg-inline--fa fa-globe-europe fa-w-16 fa-2x"
                  >
                    <path
                      fill="currentColor"
                      d="M184 119.2c0-7-5.7-12.7-12.7-12.7h-.1c-3.4 0-6.6 1.3-8.9 3.7l-28.5 28.5c-2.4 2.4-3.7 5.6-3.7 8.9v.1c0 7 5.7 12.7 12.7 12.7h18c3.4 0 6.6-1.3 8.9-3.7l10.5-10.5c2.4-2.4 3.7-5.6 3.7-8.9v-18.1zM248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm48 458.4V432c0-26.5-21.5-48-48-48h-20.2c-3.9 0-13.1-3.1-16.2-5.4l-22.2-16.7c-3.4-2.5-5.4-6.6-5.4-10.8v-23.9c0-4.7 2.5-9.1 6.5-11.6l42.9-25.7c2.1-1.3 4.5-1.9 6.9-1.9h31.2c3.2 0 6.3 1.2 8.8 3.2l52.2 44.8h30.2l17.3 17.3c9.5 9.5 22.1 14.7 35.5 14.7h16.8c-29.9 49.1-78.7 85.3-136.3 98.4zM448.5 336h-32.9c-4.8 0-9.5-1.9-12.9-5.3l-17.3-17.3c-6-6-14.1-9.4-22.6-9.4h-18.3l-43.2-37.1c-8.2-7.1-18.7-10.9-29.6-10.9h-31.2c-8.2 0-16.3 2.2-23.4 6.5l-42.9 25.7c-13.7 8.2-22.1 23-22.1 39v23.9c0 14.3 6.7 27.8 18.2 36.4l22.2 16.7c8.6 6.5 24.6 11.8 35.4 11.8h20.2c8.8 0 16 7.2 16 16v39.2c-5.3.4-10.6.8-16 .8-119.1 0-216-96.9-216-216 0-118.9 96.5-215.6 215.3-216L232 51.1c-10.2 7.7-16 19.2-16 31.4v23.2c0 6.4 3.1 17 5.9 22.3-.8 2.1-21.1 15-24.6 18.5-8.6 8.6-13.3 20-13.3 32.1V195c0 25 20.4 45.4 45.4 45.4h25.3c11 0 21.2-3.9 29.2-10.6 3.9 1.4 8.2 2.1 12.6 2.1h13.4c25.6 0 32.2-20.2 36.1-21.5 5.1 9.1 13.5 16.2 23.5 19.5-4.3 14.2-.9 30.3 10.1 41.6l18.2 19.1c8.7 8.9 20.6 13.9 32.7 13.9h27.7c-2.4 10.8-5.7 21.3-9.7 31.5zm-17.8-63.6c-3.6 0-7.1-1.5-9.6-4L402.6 249a9.93 9.93 0 0 1 .1-14c12.6-12.6 10.5-8.6 10.5-17.8 0-2.5-1-4.9-2.8-6.7l-7.9-7.9c-1.8-1.8-4.2-2.8-6.7-2.8h-13.4c-8.5 0-12.6-10.3-6.7-16.2l7.9-7.3c1.8-1.8 4.2-2.8 6.7-2.8h8.3c5.2 0 9.5-4.2 9.5-9.5v-10.2c0-5.2-4.2-9.5-9.5-9.5h-28.2c-7.4 0-13.4 6-13.4 13.4v5.6c0 5.8-3.7 10.9-9.2 12.7l-26.5 8.8c-4.3 1.4-4.6 5-4.6 8.2 0 3.7-3 6.7-6.7 6.7h-13.4c-3.7 0-6.7-3-6.7-6.7 0-8.4-12.5-8.6-15.3-3-9 12.4-11.5 18.2-19.9 18.2h-25.3c-7.4 0-13.4-6-13.4-13.4v-16.4c0-3.6 1.4-7 3.9-9.5 19.5-14 29.6-17.6 29.6-31.5 0-2.9 1.8-5.5 4.6-6.4l33.6-11.2c1.4-.5 2.7-1.2 3.7-2.3L313.9 95c5-5 3.5-14.9-6.7-14.9h-17.4L276.4 99v6.7c0 3.7-3 6.7-6.7 6.7h-15c-3.7 0-6.7-3-6.7-6.7V82.5c0-2.1 1-4.1 2.7-5.4l44-31.9C391.4 66.7 464 153 464 256c0 5.5-.4 11-.8 16.4h-32.5z"
                    ></path>
                  </svg>
                  {strings.Globalpreferences}
                </a>
              </Link>
            </li>

            <li>
              <Link href="/user/points-coupon">
                <a>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="tags"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    className="svg-inline--fa fa-tags fa-w-20 fa-2x"
                  >
                    <path
                      fill="currentColor"
                      d="M625.941 293.823L421.823 497.941c-18.746 18.746-49.138 18.745-67.882 0l-.36-.36L592 259.882 331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882zm-128 0L293.823 497.941C284.451 507.314 272.166 512 259.882 512c-12.284 0-24.569-4.686-33.941-14.059L14.059 286.059A48 48 0 0 1 0 252.118V48C0 21.49 21.49 0 48 0h204.118a47.998 47.998 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882zM464 259.882L252.118 48H48v204.118l211.886 211.878L464 259.882zM144 96c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"
                      className=""
                    ></path>
                  </svg>
                  {strings.PointsAndcoupon}
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <UploadFileModal
        onInitialized={(instance) => {
          setCropper(instance);
        }}
        path={uploadedFilePath}
        showModal={openCropper}
        zoomable={false}
        aspectRatio={1}
        setImage={(v) => {
          setLoading(true);
          var file = dataURLtoFile(v, "image");
          const formData = new FormData();
          formData.append("profile_pic", file);
          api
            .uploadProfilePicture(formData)
            .then((json) => {
              openSuccess('Successfully uploaded image')
              getDashboard();
              setLoading(false);
            })
            .catch((error) => {setLoading(false);});
        }}
        preview=".img-preview"
        guides={false}
        viewMode={1}
        dragMode="move"
        cropBoxMovable={true}
        hideModal={() => setOpenCropper(false)}
      />
    </div>
  );
}

export default SideBar;
