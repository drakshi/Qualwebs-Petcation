import React, { useEffect, useState } from "react";
import Link from "next/link";
import { strings } from "../../../../public/lang/Strings";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
import { useContext } from "react";
import AppContext from "../../../../utils/AppContext";
import {deleteCookie} from "../../../../utils/Helper";
import {EventEmitter} from "../../../../public/EventEmitter";

const cookies = new Cookies();

export default function TopBar() {
  const router = useRouter();
  const value = useContext(AppContext);
  const [token, setToken] = useState();
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setToken(cookies.get("token"));
      setFirstName(cookies.get("firstname"));
      setLastName(cookies.get("lastname"));
    }
  });


  useEffect(() => {
    EventEmitter.subscribe('updateUserDetail',()=>{
      setToken(cookies.get("token"));
      setFirstName(cookies.get("firstname"));
      setLastName(cookies.get("lastname"));
    })
  }, []);



  const handleNavigation = (id) => {
    let data = {
      lat: "0",
      lng: "0",
      pet: null,
      service: id,
      petSize: null,
      checkInDate: new Date(),
      checkOutDate: new Date(),
      defaultValue: "",
    };
    value.setState(data);

    router.push({
      pathname: "/search-sitter",
    });
  };

  const logout = async () => {
    await deleteCookie('id');
    await deleteCookie('token');
    await deleteCookie('email');
    await deleteCookie('phone_number');
    await deleteCookie('profile_picture');
    await deleteCookie('firstname');
    await deleteCookie('lastname');
    await setToken(null);
    await setFirstName(null);
    await setLastName(null);

    await router.push('/');
  };

  return (
    <div>
      {token == null ? (
        <>
          <div
            id="header"
            className="header d-none d-md-none d-lg-block d-xl-block "
          >
            <div className="container-fluid">
              <nav className="navbar navbar-expand-lg">
                <Link href="/">
                  <a className="navbar-brand logo">
                    <img src="/images/logo.png" />
                  </a>
                </Link>
                <button
                  className="navbar-toggler collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                      <div className="search-bar">
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
                        <Link
                          className="nav-link d-inline"
                          href="/search-sitter"
                        >
                          {strings.searchSitter}
                        </Link>
                      </div>
                    </li>
                    <li className="nav-item">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="paw"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="svg-inline--fa fa-paw fa-w-16 fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z"
                        ></path>
                      </svg>
                      <Link href="/signup">
                        <a className="nav-link d-inline">
                          {strings.becomeASitter}
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <form className="form-inline">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link href="/signup">
                          <a className="nav-link d-inline">{strings.signUp}</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/signin">
                          <a className="nav-link d-inline">{strings.signIn}</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link d-inline"
                          href="http://159.65.142.31/petcation-design/help-centre.html"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fal"
                            data-icon="question-circle"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="svg-inline--fa fa-question-circle fa-w-16 fa-2x"
                          >
                            <path
                              fill="currentColor"
                              d="M256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28zm7.67-24h-16c-6.627 0-12-5.373-12-12v-.381c0-70.343 77.44-63.619 77.44-107.408 0-20.016-17.761-40.211-57.44-40.211-29.144 0-44.265 9.649-59.211 28.692-3.908 4.98-11.054 5.995-16.248 2.376l-13.134-9.15c-5.625-3.919-6.86-11.771-2.645-17.177C185.658 133.514 210.842 116 255.67 116c52.32 0 97.44 29.751 97.44 80.211 0 67.414-77.44 63.849-77.44 107.408V304c0 6.627-5.373 12-12 12zM256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8z"
                              className=""
                            ></path>
                          </svg>
                          {strings.help}
                        </a>
                      </li>
                      <li className="nav-item">
                        <div className="dropdown services language">
                          <a
                            className="dropdown-toggle"
                            href="#"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            En
                          </a>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <a className="dropdown-item" href="#">
                              En
                            </a>
                          </div>
                        </div>
                      </li>
                      <li
                        className="nav-item"
                        data-toggle="modal"
                        data-target="#sidebar"
                      >
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fal"
                          data-icon="bars"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="svg-inline--fa fa-bars fa-w-14 fa-2x"
                        >
                          <path
                            fill="currentColor"
                            d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"
                          ></path>
                        </svg>
                      </li>
                    </ul>
                  </form>
                </div>
              </nav>
            </div>
          </div>
          <div
            id="mob-header"
            className="header d-block d-md-block d-lg-none d-xl-none"
          >
            <div className="container">
              <div className="row">
                <div className="col-1 col-md-1 my-auto">
                  <div
                    className="mob-bar"
                    data-toggle="modal"
                    data-target="#sidebar"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="bars"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="svg-inline--fa fa-bars fa-w-14 fa-2x"
                    >
                      <path
                        fill="currentColor"
                        d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="col-6 col-md-7 my-auto">
                  <Link href="/">
                    <a className="navbar-brand logo">
                      <img src="/images/logo.png" />
                    </a>
                  </Link>
                </div>
                <div className="col-4 col-md-4 mob-col my-auto">
                  <Link href="/signup">
                    <a>
                      <div className="user-login">
                        <img src="/images/user.png" className="img-fluid" />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            id="header"
            className="header d-none d-md-none d-lg-block d-xl-block"
          >
            <div className="container">
              <nav className="navbar navbar-expand-lg">
                <Link href="/">
                  <a className="navbar-brand logo">
                    <img src="/images/logo.png" />
                  </a>
                </Link>
                <button
                  className="navbar-toggler collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span />
                  <span />
                  <span />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                      <div className="search-bar">
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
                          />
                        </svg>
                        <Link href="/search-sitter">
                          <a className="nav-link d-inline">Search Sitter</a>
                        </Link>
                      </div>
                    </li>
                    <li className="nav-item">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="paw"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="svg-inline--fa fa-paw fa-w-16 fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z"
                        />
                      </svg>
                      <Link href="/user/my-services">
                        <a className="nav-link d-inline">Become a Sitter</a>
                      </Link>
                    </li>
                    {/*<li className="nav-item">
                      <div className="dropdown services">
                        <a
                          className="dropdown-toggle"
                          href="#"
                          id="dropdownMenuButton1"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Our Services
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <a
                            className="dropdown-item"
                            onClick={() => handleNavigation("1")}
                          >
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
                                className
                              />
                            </svg>
                            Pet Boarding
                          </a>
                          <a
                            className="dropdown-item"
                            onClick={() => handleNavigation("2")}
                          >
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
                                className
                              />
                            </svg>
                            House sitting
                          </a>
                          <a
                            className="dropdown-item"
                            onClick={() => handleNavigation("3")}
                          >
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
                              />
                            </svg>
                            Drop-in-visits
                          </a>
                          <a
                            className="dropdown-item"
                            onClick={() => handleNavigation("4")}
                          >
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
                                className
                              />
                            </svg>
                            Pet day care
                          </a>
                          <a
                            className="dropdown-item"
                            onClick={() => handleNavigation("5")}
                          >
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
                                className
                              />
                            </svg>
                            Dog walking
                          </a>
                          <a
                            className="dropdown-item"
                            onClick={() => handleNavigation("6")}
                          >
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
                            House call
                          </a>
                          <a
                            className="dropdown-item"
                            onClick={() => handleNavigation("7")}
                          >
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
                                className
                              />
                            </svg>
                            Grooming
                          </a>
                        </div>
                      </div>
                    </li>*/}
                  </ul>
                  <form className="form-inline">
                    <ul className="navbar-nav">
                      <li className="nav-item counting">
                        <p className="d-inline" href="#">
                          ¥ 0
                        </p>
                      </li>
                      <li className="nav-item">
                        <div className="dropdown services">
                          <a
                            href="#"
                            id="dropdownMenuButton1"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            style={{paddingRight:"5px"}}
                          >
                            {"  " + firstname + " " + lastname}
                          </a>
                          <a
                            className="dropdown-toggle"
                            href="#"
                            id="dropdownMenuButton1"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                          </a>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton2"
                          >
                            <Link href={"/user/dashboard"}>
                              <a className="dropdown-item">
                                {strings.Dashboard}
                              </a>
                            </Link>
                            <Link href="/user/my-profile">
                              <a className="dropdown-item">
                                {strings.Myprofile}
                              </a>
                            </Link>
                            <Link href="/user/reservation?index=1">
                              <a className="dropdown-item">
                                {strings.Reservations}
                              </a>
                            </Link>
                            <Link href="/user/points-coupon">
                              <a className="dropdown-item">
                                Points &amp; Coupon
                              </a>
                            </Link>
                            <a
                              onClick={logout}
                              className="dropdown-item"
                            >
                              Logout
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item">
                        <div className="dropdown message">
                          <a href="/chat">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fal"
                              data-icon="envelope"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              className="svg-inline--fa fa-envelope fa-w-16 fa-2x"
                            >
                              <path
                                fill="currentColor"
                                d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z"
                              />
                            </svg>
                            <span></span>
                          </a>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link d-inline"
                          href="http://159.65.142.31/petcation-design/help-centre.html"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fal"
                            data-icon="question-circle"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="svg-inline--fa fa-question-circle fa-w-16 fa-2x"
                          >
                            <path
                              fill="currentColor"
                              d="M256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28zm7.67-24h-16c-6.627 0-12-5.373-12-12v-.381c0-70.343 77.44-63.619 77.44-107.408 0-20.016-17.761-40.211-57.44-40.211-29.144 0-44.265 9.649-59.211 28.692-3.908 4.98-11.054 5.995-16.248 2.376l-13.134-9.15c-5.625-3.919-6.86-11.771-2.645-17.177C185.658 133.514 210.842 116 255.67 116c52.32 0 97.44 29.751 97.44 80.211 0 67.414-77.44 63.849-77.44 107.408V304c0 6.627-5.373 12-12 12zM256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8z"
                              className
                            />
                          </svg>
                          Help
                        </a>
                      </li>
                    </ul>
                  </form>
                </div>
              </nav>
            </div>
          </div>

          <div
            id="mob-header"
            className="header d-block d-md-block d-lg-none d-xl-none"
          >
            <div className="container">
              <div className="row">
                <div className="col-1 col-md-1 my-auto">
                  <div
                    className="mob-bar"
                    data-toggle="modal"
                    data-target="#sidebar"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="bars"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="svg-inline--fa fa-bars fa-w-14 fa-2x"
                    >
                      <path
                        fill="currentColor"
                        d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
                        className
                      />
                    </svg>
                  </div>
                </div>
                <div className="col-6 col-md-7 my-auto">
                  <div className="heading ml-2">
                    <h6 className="mb-0">My Services</h6>
                  </div>
                </div>
                <div className="col-4 col-md-4 mob-col my-auto">
                  <div
                    className="user-login"
                    data-toggle="modal"
                    data-target="#filter"
                  >
                    <img src="images/marie.png" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-filter">
            <div
              className="sidebar-modal modal left fade filter-modal show"
              id="filter"
              role="dialog"
              aria-hidden="true"
              style={{ display: "none" }}
            >
              <div className="modal-dialog modal-sm" role="document">
                <div className="modal-content">
                  <div className="modal-body p-0 main-wrapper">
                    <div className="row">
                      <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="profile-header">
                          <div className="close-button">
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">×</span>
                            </button>
                          </div>
                          <div className="profile-user-img">
                            <img src="images/marie.png" className="img-fluid" />
                          </div>
                          <div className="modal-profile-details text-center">
                            <div className="verified-img">
                              <img src="images/icons2.png" />
                            </div>
                            <h5 className="font-semibold mb-0">
                              {firstname + ' ' + lastname}
                            </h5>
                            <p className="my-1 font-14">{''}</p>
                          </div>
                        </div>
                        <div className="bg-white main-background profile-sidebar">
                          <div className="sidebar-design">
                            <ul>
                              <li>
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
                                        className
                                      />
                                    </svg>
                                    {strings.Dashboard}
                                    <div className="angle">
                                      <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fal"
                                        data-icon="angle-right"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 192 512"
                                        className="svg-inline--fa fa-angle-right fa-w-6 fa-2x"
                                      >
                                        <path
                                          fill="currentColor"
                                          d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"
                                          className
                                        />
                                      </svg>
                                    </div>
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <a href="http://159.65.142.31/petcation-design/sitter-reservation.html">
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
                                      className
                                    />
                                  </svg>
                                  Reservations
                                  <div className="angle">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fal"
                                      data-icon="angle-right"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 192 512"
                                      className="svg-inline--fa fa-angle-right fa-w-6 fa-2x"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"
                                        className
                                      />
                                    </svg>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="http://159.65.142.31/petcation-design/sitter-profile(basic-info).html">
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
                                      className
                                    />
                                  </svg>
                                  My profile
                                  <div className="angle">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fal"
                                      data-icon="angle-right"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 192 512"
                                      className="svg-inline--fa fa-angle-right fa-w-6 fa-2x"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"
                                        className
                                      />
                                    </svg>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="http://159.65.142.31/petcation-design/my-pets.html">
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
                                      className
                                    />
                                  </svg>
                                  My Pet(s)
                                  <div className="angle">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fal"
                                      data-icon="angle-right"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 192 512"
                                      className="svg-inline--fa fa-angle-right fa-w-6 fa-2x"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"
                                        className
                                      />
                                    </svg>
                                  </div>
                                </a>
                              </li>
                              <li className="active">
                                <a href="http://159.65.142.31/petcation-design/sitter(services).html">
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
                                      className
                                    />
                                  </svg>
                                  My Services
                                  <div className="angle">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fal"
                                      data-icon="angle-right"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 192 512"
                                      className="svg-inline--fa fa-angle-right fa-w-6 fa-2x"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"
                                        className
                                      />
                                    </svg>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="http://159.65.142.31/petcation-design/favourite-sitters.html">
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
                                      className
                                    />
                                  </svg>
                                  Favourite Sitters
                                  <div className="angle">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fal"
                                      data-icon="angle-right"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 192 512"
                                      className="svg-inline--fa fa-angle-right fa-w-6 fa-2x"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"
                                        className
                                      />
                                    </svg>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="http://159.65.142.31/petcation-design/sitter(my-spot).html">
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
                                      className
                                    />
                                  </svg>
                                  My spots
                                  <div className="angle">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fal"
                                      data-icon="angle-right"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 192 512"
                                      className="svg-inline--fa fa-angle-right fa-w-6 fa-2x"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"
                                        className
                                      />
                                    </svg>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="http://159.65.142.31/petcation-design/password-security.html">
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
                                      className
                                    />
                                  </svg>
                                  Password &amp; Security
                                  <div className="angle">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fal"
                                      data-icon="angle-right"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 192 512"
                                      className="svg-inline--fa fa-angle-right fa-w-6 fa-2x"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"
                                        className
                                      />
                                    </svg>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="http://159.65.142.31/petcation-design/payment-payouts(card).html">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="money-bill-wave"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 512"
                                    className="svg-inline--fa fa-money-bill-wave fa-w-20 fa-2x"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M320 160.55c-44.18 0-80 43.16-80 96.41 0 53.24 35.81 96.41 80 96.41 44.17 0 80-43.15 80-96.41 0-53.25-35.82-96.41-80-96.41zM621.16 54.46C582.37 38.19 543.55 32 504.75 32c-123.17-.01-246.33 62.34-369.5 62.34-30.89 0-61.76-3.92-92.65-13.72-3.47-1.1-6.95-1.62-10.35-1.62C15.04 79 0 92.32 0 110.81v317.26c0 12.63 7.23 24.6 18.84 29.46C57.63 473.81 96.45 480 135.25 480c123.17 0 246.34-62.35 369.51-62.35 30.89 0 61.76 3.92 92.65 13.72 3.47 1.1 6.95 1.62 10.35 1.62 17.21 0 32.25-13.32 32.25-31.81V83.93c-.01-12.64-7.24-24.6-18.85-29.47zM592 322.05c-26.89 3.4-48.58 23.31-54.38 49.48-10.8-.92-21.56-1.88-32.87-1.88-67.56 0-133.13 16.59-196.53 32.64C247.86 417.57 190.85 432 135.25 432c-8.02 0-15.85-.32-23.51-.94-1.42-34.23-29.29-61.61-63.73-61.61V192.69c31.07 0 56.93-22.25 62.74-51.75 8.14.51 16.08 1.4 24.51 1.4 67.56 0 133.12-16.59 196.52-32.64C392.13 94.43 449.14 80 504.75 80c10.84 0 21.22.78 31.42 1.91.85 31.96 24.87 57.84 55.83 61.76v178.38z"
                                      className
                                    />
                                  </svg>
                                  Payments &amp; payouts
                                  <div className="angle">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fal"
                                      data-icon="angle-right"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 192 512"
                                      className="svg-inline--fa fa-angle-right fa-w-6 fa-2x"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"
                                        className
                                      />
                                    </svg>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="http://159.65.142.31/petcation-design/payment-history.html">
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
                                      className
                                    />
                                  </svg>
                                  Payment history
                                  <div className="angle">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fal"
                                      data-icon="angle-right"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 192 512"
                                      className="svg-inline--fa fa-angle-right fa-w-6 fa-2x"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"
                                        className
                                      />
                                    </svg>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="http://159.65.142.31/petcation-design/sitter(global-prefrence).html">
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
                                      className
                                    />
                                  </svg>
                                  Global preferences
                                  <div className="angle">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fal"
                                      data-icon="angle-right"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 192 512"
                                      className="svg-inline--fa fa-angle-right fa-w-6 fa-2x"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"
                                        className
                                      />
                                    </svg>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="http://159.65.142.31/petcation-design/points-coupon.html">
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
                                      className
                                    />
                                  </svg>
                                  Points &amp; coupon
                                  <div className="angle">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fal"
                                      data-icon="angle-right"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 192 512"
                                      className="svg-inline--fa fa-angle-right fa-w-6 fa-2x"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"
                                        className
                                      />
                                    </svg>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <div
        className="sidebar-modal modal left fade"
        id="sidebar"
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog modal-sm" role="document">
          <div className="modal-content">
            <div className="modal-header border-0 py-3">
              <h5 className="text-white font-medium mb-0">{strings.explore}</h5>
              <div className="close-button">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
            </div>
            <div className="modal-body">
              <div className="sidebar-menu">
                <h6 className="font-12 font-medium text-white">
                  {strings.company}
                </h6>
                <ul>
                  <li>
                    <a href="#">{strings.aboutUs}</a>
                  </li>
                  <li>
                    <a href="#">{strings.contact}</a>
                  </li>
                  <li>
                    <a href="#">{strings.career}</a>
                  </li>
                  <li>
                    <a href="#">{strings.privacyPolicy}</a>
                  </li>
                  <li>
                    <a href="#">{strings.termsOfUser}</a>
                  </li>
                  <li>
                    <a href="#">{strings.cookiePolicy}</a>
                  </li>
                </ul>
                <hr className="black-border" />

                <h6 className="font-12 font-medium text-white">
                  {strings.explore}
                </h6>
                <ul>
                  <li>
                    <a href="#">{strings.petSpots}</a>
                  </li>
                  <li>
                    <a href="#">{strings.blogs}</a>
                  </li>
                  <li>
                    <a href="#">{strings.faqs}</a>
                  </li>
                  <li>
                    <a href="#">{strings.safety}</a>
                  </li>
                  <li>
                    <a href="#">{strings.newsAndSafety}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
