import React, { useRef } from "react";


const About = () => {
    return (
        <>
            <div className="main-page">
                <div className="main-wrapper mt-0">
                    {/*-------1st section----*/}
                    <div className=" mb-4">
                        <img src="/images/banner.png" className="img-fluid" alt="" />
                    </div>
                    {/*-------/1st section----*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                                {/*-------2nd section----*/}
                                <div className="bg-white main-background">
                                    <div className="about-details">
                                        <h5 className="font-semibold font-20 mb-3">About Petcation</h5>
                                        <p className="font-14">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                            irure dolor in reprehenderit in voluptate velit esse cillum
                                            dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                            ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                            ea commodo consequat.
                                        </p>
                                        <p className="font-14">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                        <p className="font-14">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                        <p className="font-14">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                </div>
                                {/*-------/2nd section----*/}
                                {/*-------3rd section----*/}
                                <div className="bg-white main-background">
                                    <div className="million-service">
                                        <h5 className="font-semibold font-20">
                                            Loving pet care in your neighborhood
                                        </h5>
                                        <div className="row">
                                            <div className="col-6 col-md-3 col-lg-3 col-xl-3">
                                                <div className="about-us-content">
                                                    <div className="about-img">
                                                        <svg
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fad"
                                                            data-icon="user-check"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 640 512"
                                                            className="svg-inline--fa fa-user-check fa-w-20 fa-2x"
                                                        >
                                                            <g className="fa-group">
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M636.6 159.6a12 12 0 0 1-.1 16.8L495.2 316.6a11.86 11.86 0 0 1-16.8-.1l-81.7-82.3a11.86 11.86 0 0 1 .1-16.8l28.1-27.9a11.86 11.86 0 0 1 16.8.1l45.5 45.8 104.8-104a11.86 11.86 0 0 1 16.8.1z"
                                                                    className="fa-secondary"
                                                                />
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M224 256A128 128 0 1 0 96 128a128 128 0 0 0 128 128zm89.6 32h-16.7a174.08 174.08 0 0 1-145.8 0h-16.7A134.43 134.43 0 0 0 0 422.4V464a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48v-41.6A134.43 134.43 0 0 0 313.6 288z"
                                                                    className="fa-primary"
                                                                />
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p className="state-label mb-0">
                                                        Verified reviews by pet parents
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3 col-lg-3 col-xl-3">
                                                <div className="about-us-content">
                                                    <div className="about-img">
                                                        <svg
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fas"
                                                            data-icon="address-card"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 576 512"
                                                            className="svg-inline--fa fa-address-card fa-w-18 fa-2x"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-352 96c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H86.4C74 384 64 375.4 64 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2zM512 312c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"
                                                                className=""
                                                            />
                                                        </svg>
                                                    </div>
                                                    <p className="state-label mb-0">
                                                        Sitter background or identity checks
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3 col-lg-3 col-xl-3">
                                                <div className="about-us-content">
                                                    <div className="about-img">
                                                        <svg
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fas"
                                                            data-icon="handshake"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 640 512"
                                                            className="svg-inline--fa fa-handshake fa-w-20 fa-2x"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"
                                                                className=""
                                                            />
                                                        </svg>
                                                    </div>
                                                    <p className="state-label mb-0">
                                                        Meet &amp; Greets to find the perfect fit
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3 col-lg-3 col-xl-3">
                                                <div className="about-us-content">
                                                    <div className="about-img">
                                                        <svg
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="far"
                                                            data-icon="user-check"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 640 512"
                                                            className="svg-inline--fa fa-user-check fa-w-20 fa-2x"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M637 161.1l-19.1-19.2c-4-4.1-10.6-4.1-14.6 0L500.2 245.6l-47.4-47.7c-4-4.1-10.6-4.1-14.6 0L419 217.1c-4 4.1-4 10.6 0 14.7l73.8 74.3c4 4.1 10.6 4.1 14.6 0L637 175.8c4-4 4-10.6 0-14.7zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96zm89.6 256c-28.8 0-42.4 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464z"
                                                                className=""
                                                            />
                                                        </svg>
                                                    </div>
                                                    <p className="state-label mb-0">
                                                        Reservation protection for every booking
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3 col-lg-3 col-xl-3">
                                                <div className="about-us-content">
                                                    <div className="about-img">
                                                        <svg
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fas"
                                                            data-icon="user-headset"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 448 512"
                                                            className="svg-inline--fa fa-user-headset fa-w-14 fa-2x"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M320 352h-23.1a174.08 174.08 0 0 1-145.8 0H128A128 128 0 0 0 0 480a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32 128 128 0 0 0-128-128zM48 224a16 16 0 0 0 16-16v-16c0-88.22 71.78-160 160-160s160 71.78 160 160v16a80.09 80.09 0 0 1-80 80h-32a32 32 0 0 0-32-32h-32a32 32 0 0 0 0 64h96a112.14 112.14 0 0 0 112-112v-16C416 86.13 329.87 0 224 0S32 86.13 32 192v16a16 16 0 0 0 16 16zm160 0h32a64 64 0 0 1 55.41 32H304a48.05 48.05 0 0 0 48-48v-16a128 128 0 0 0-256 0c0 40.42 19.1 76 48.35 99.47-.06-1.17-.35-2.28-.35-3.47a64.07 64.07 0 0 1 64-64z"
                                                                className=""
                                                            />
                                                        </svg>
                                                    </div>
                                                    <p className="state-label mb-0">
                                                        24/7 support for pet parents and sitters
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3 col-lg-3 col-xl-3">
                                                <div className="about-us-content">
                                                    <div className="about-img">
                                                        <svg
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="far"
                                                            data-icon="user-check"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 640 512"
                                                            className="svg-inline--fa fa-user-check fa-w-20 fa-2x"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M637 161.1l-19.1-19.2c-4-4.1-10.6-4.1-14.6 0L500.2 245.6l-47.4-47.7c-4-4.1-10.6-4.1-14.6 0L419 217.1c-4 4.1-4 10.6 0 14.7l73.8 74.3c4 4.1 10.6 4.1 14.6 0L637 175.8c4-4 4-10.6 0-14.7zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96zm89.6 256c-28.8 0-42.4 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464z"
                                                                className=""
                                                            />
                                                        </svg>
                                                    </div>
                                                    <p className="state-label mb-0">
                                                        Vet advice for sitters during bookings
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3 col-lg-3 col-xl-3">
                                                <div className="about-us-content">
                                                    <div className="about-img">
                                                        <svg
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fas"
                                                            data-icon="users-cog"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 640 512"
                                                            className="svg-inline--fa fa-users-cog fa-w-20 fa-2x"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M610.5 341.3c2.6-14.1 2.6-28.5 0-42.6l25.8-14.9c3-1.7 4.3-5.2 3.3-8.5-6.7-21.6-18.2-41.2-33.2-57.4-2.3-2.5-6-3.1-9-1.4l-25.8 14.9c-10.9-9.3-23.4-16.5-36.9-21.3v-29.8c0-3.4-2.4-6.4-5.7-7.1-22.3-5-45-4.8-66.2 0-3.3.7-5.7 3.7-5.7 7.1v29.8c-13.5 4.8-26 12-36.9 21.3l-25.8-14.9c-2.9-1.7-6.7-1.1-9 1.4-15 16.2-26.5 35.8-33.2 57.4-1 3.3.4 6.8 3.3 8.5l25.8 14.9c-2.6 14.1-2.6 28.5 0 42.6l-25.8 14.9c-3 1.7-4.3 5.2-3.3 8.5 6.7 21.6 18.2 41.1 33.2 57.4 2.3 2.5 6 3.1 9 1.4l25.8-14.9c10.9 9.3 23.4 16.5 36.9 21.3v29.8c0 3.4 2.4 6.4 5.7 7.1 22.3 5 45 4.8 66.2 0 3.3-.7 5.7-3.7 5.7-7.1v-29.8c13.5-4.8 26-12 36.9-21.3l25.8 14.9c2.9 1.7 6.7 1.1 9-1.4 15-16.2 26.5-35.8 33.2-57.4 1-3.3-.4-6.8-3.3-8.5l-25.8-14.9zM496 368.5c-26.8 0-48.5-21.8-48.5-48.5s21.8-48.5 48.5-48.5 48.5 21.8 48.5 48.5-21.7 48.5-48.5 48.5zM96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm224 32c1.9 0 3.7-.5 5.6-.6 8.3-21.7 20.5-42.1 36.3-59.2 7.4-8 17.9-12.6 28.9-12.6 6.9 0 13.7 1.8 19.6 5.3l7.9 4.6c.8-.5 1.6-.9 2.4-1.4 7-14.6 11.2-30.8 11.2-48 0-61.9-50.1-112-112-112S208 82.1 208 144c0 61.9 50.1 112 112 112zm105.2 194.5c-2.3-1.2-4.6-2.6-6.8-3.9-8.2 4.8-15.3 9.8-27.5 9.8-10.9 0-21.4-4.6-28.9-12.6-18.3-19.8-32.3-43.9-40.2-69.6-10.7-34.5 24.9-49.7 25.8-50.3-.1-2.6-.1-5.2 0-7.8l-7.9-4.6c-3.8-2.2-7-5-9.8-8.1-3.3.2-6.5.6-9.8.6-24.6 0-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h255.4c-3.7-6-6.2-12.8-6.2-20.3v-9.2zM173.1 274.6C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"
                                                                className=""
                                                            />
                                                        </svg>
                                                    </div>
                                                    <p className="state-label mb-0">
                                                        A team of trust and safety experts
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3 col-lg-3 col-xl-3">
                                                <div className="about-us-content">
                                                    <div className="about-img">
                                                        <svg
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fas"
                                                            data-icon="book-open"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 576 512"
                                                            className="svg-inline--fa fa-book-open fa-w-18 fa-2x"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"
                                                                className=""
                                                            />
                                                        </svg>
                                                    </div>
                                                    <p className="state-label mb-0">
                                                        Ongoing sitter education resources
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*-------/3rd section----*/}
                                <div className="bg-white main-background">
                                    <div className="about-details">
                                        <h5 className="font-semibold font-20 mb-3">About Petcation</h5>
                                        <p className="font-14">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                            irure dolor in reprehenderit in voluptate velit esse cillum
                                            dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                            ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                            ea commodo consequat.
                                        </p>
                                        <p className="font-14">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-6 col-xl-6 mx-auto">
                                            <div className="about-img1 text-center">
                                                <img src="/images/petimg1.jpg" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*<div class="bg-white main-background">
 <div class="million-service">
   <h5 class="font-semibold font-20">Good pets. Good people.</h5>
    <div class="row">
      <div class="col-12 col-md-3 col-lg-3 col-xl-3">
        <div class="about-us-content">
            <div class="about-img"><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="briefcase" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-briefcase fa-w-16 fa-2x"><path fill="currentColor" d="M464 128H352V56c0-13.26-10.74-24-24-24H184c-13.26 0-24 10.74-24 24v72H48c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zM192 64h128v64H192V64zm288 368c0 8.82-7.18 16-16 16H48c-8.82 0-16-7.18-16-16V288h160v40c0 13.25 10.75 24 24 24h80c13.25 0 24-10.75 24-24v-40h160v144zM224 320v-32h64v32h-64zm256-64H32v-80c0-8.82 7.18-16 16-16h416c8.82 0 16 7.18 16 16v80z" class=""></path></svg></div>
          <p class="state-label mb-0">Boarding</p>
        </div>
      </div>

      <div class="col-12 col-md-3 col-lg-3 col-xl-3">
        <div class="about-us-content">
           <div class="about-img"><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="home-lg-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-home-lg-alt fa-w-18 fa-2x"><path fill="currentColor" d="M573.48 219.91L310.6 8a35.85 35.85 0 0 0-45.19 0L2.53 219.91a6.71 6.71 0 0 0-1 9.5l14.2 17.5a6.82 6.82 0 0 0 9.6 1L64 216.72V496a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V216.82l38.8 31.29a6.83 6.83 0 0 0 9.6-1l14.19-17.5a7.14 7.14 0 0 0-1.11-9.7zM240 480V320h96v160zm240 0H368V304a16 16 0 0 0-16-16H224a16 16 0 0 0-16 16v176H96V190.92l187.71-151.4a6.63 6.63 0 0 1 8.4 0L480 191z" class=""></path></svg></div>
          <p class="state-label mb-0">House Sitting</p>
        </div>
      </div>

      <div class="col-12 col-md-3 col-lg-3 col-xl-3">
        <div class="about-us-content">
            <div class="about-img"><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="dog-leashed" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-dog-leashed fa-w-18 fa-2x"><path fill="currentColor" d="M544,112v64a64,64,0,0,1-64,64H448V480a32,32,0,0,1-32,32H352a32,32,0,0,1-32-32V384H224v96a32,32,0,0,1-32,32H128a32,32,0,0,1-32-32V320a95,95,0,0,1,13.46-48.26A80,80,0,0,1,32,192a16,16,0,0,1,32,0,48.05,48.05,0,0,0,48,48h27.05A95.48,95.48,0,0,1,192,224h79.94L34.88,26.45a8,8,0,0,1-1-11.27L44.11,2.88a8,8,0,0,1,11.27-1L304,209V48a16,16,0,0,1,16.12-16,15.67,15.67,0,0,1,11.2,4.72L358.6,64h69.62c10.92,0,23.74,7.93,28.62,17.69L464,96h64A16,16,0,0,1,544,112ZM288,256H192a64.07,64.07,0,0,0-64,64V480h64V352h96Zm128,26.48-96-24V352h32V480h64ZM512,128H444.22l-16-32H345.34L336,86.66V229.52l80,20V208h64a32,32,0,0,0,32-32Zm-96,0a16,16,0,1,1-16-16A16,16,0,0,1,416,128Z" class=""></path></svg></div>
          <p class="state-label mb-0">Dog Walking
      </p>
        </div>
      </div>

      <div class="col-12 col-md-3 col-lg-3 col-xl-3">
        <div class="about-us-content">
            <div class="about-img"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="pennant" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-pennant fa-w-18 fa-2x"><path fill="currentColor" d="M542.3 183.5c-21.9 4.8-104.7 14.1-246.4-62.8-74.6-40.4-137.5-50.4-186.7-48C121.5 33.7 90.9 0 56 0 25.1 0 0 25.1 0 56c0 22.3 13.2 41.4 32 50.4V504c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8v-75.6c80.8-54.3 156.4-55.7 165.8-56.2 28.2-1.4 74.5-5.9 135.1-19 4.4-1 109-24.5 188.9-124.7 16.1-20.2-1.5-50.3-27.5-45zM370.8 306.3c-57.5 12.4-101 16.6-127.4 18-69.6 3.5-125.6 26.3-163.4 47.9V124c44.1-8.6 109.6-6.3 193 38.9 101.4 54.9 177 69.8 225.9 71.5-61.8 56.6-127.4 71.7-128.1 71.9z" class=""></path></svg></div>
          <p class="state-label mb-0">Drop-in Visits</p>
        </div>
      </div>

      <div class="col-12 col-md-3 col-lg-3 col-xl-3">
        <div class="about-us-content">
            <div class="about-img"><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="cloud-sun-rain" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-cloud-sun-rain fa-w-20 fa-2x"><path fill="currentColor" d="M298.2 418.1c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.4-7.7 1.7-17.4-6-21.8zM192 140c26.4 0 48 20 51.1 45.6 4.8-3.6 9.8-6.9 15.1-9.9 1.5-8.4 3.9-16.5 6.8-24.3-14.3-25.7-41.5-43.4-73-43.4-46.2 0-83.7 37.6-83.7 83.8s37.5 83.8 83.7 83.8c.3 0 .6-.1.9-.1 1.1-11.4 3.7-22.4 7.7-32.8-2.8.5-5.6.9-8.5.9-28.5 0-51.7-23.2-51.7-51.7-.1-28.6 23.1-51.9 51.6-51.9zm-31.7 151.7c-3.6-5.3-9.9-8.1-16.4-6.8l-56 11.1L99 240c1.2-6.4-1.4-12.8-6.8-16.4l-47.4-31.8L92.2 160c5.4-3.6 8-10.1 6.8-16.4l-11.1-56 56 11.1c6.5 1.3 12.8-1.4 16.4-6.8L192 44.4l31.8 47.5c3.6 5.3 10 8.1 16.4 6.8L319.6 83c8.7-1.7 14.3-10.1 12.6-18.8-1.7-8.7-10.3-14.5-18.8-12.6l-68.9 13.6-39.2-58.5c-5.9-8.9-20.6-8.9-26.6 0l-39.1 58.5-69-13.7c-5.3-1.1-10.7.6-14.4 4.4-3.8 3.8-5.4 9.2-4.4 14.5l13.7 69-58.4 39.1c-4.4 3-7.1 7.9-7.1 13.3 0 5.3 2.7 10.3 7.1 13.3l58.4 39.1-13.7 69c-1 5.3.6 10.7 4.4 14.5 3.8 3.8 9 5.5 14.4 4.4l68.9-13.7 39.1 58.5c3.1 4.6 8.2 7.1 13.3 7.1 3.1 0 6.2-.9 8.9-2.7 7.3-4.9 9.3-14.9 4.4-22.2l-44.9-67.4zm329.9 126.4c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.4-7.7 1.7-17.4-6-21.8zm85.1-220.8C570 158.2 536.5 128 496 128c-8.6 0-17 1.4-25.2 4.3C451.1 109.4 422.6 96 392 96c-56.5 0-102.7 45.3-104 101.6-37.8 13.3-64 49.3-64 90.4 0 52.9 43.1 96 96 96h224c52.9 0 96-43.1 96-96 0-41.3-26.6-77.6-64.7-90.7zM560 208.8zM544 352H320c-35.3 0-64-28.7-64-64 0-30.6 21.8-57 52-62.8l14.5-2.8-2-18c-.2-1.5-.4-2.9-.4-4.4 0-39.7 32.3-72 72-72 24.3 0 46.8 12.2 60.2 32.8l8.1 12.4 13-7.1c32.7-17.8 70.7 8.2 70.8 40.4l-.2 16.2 12.8 2.6c29.8 6 51.3 32.3 51.3 62.7-.1 35.3-28.8 64-64.1 64zm42.2 66.1c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.4-7.7 1.7-17.4-6-21.8zm-192 0c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.4-7.7 1.7-17.4-6-21.8z" class=""></path></svg></div>
          <p class="state-label mb-0">Pet Day Care</p>
        </div>
      </div>

      <div class="col-12 col-md-3 col-lg-3 col-xl-3">
        <div class="about-us-content">
            <div class="about-img"><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="cut" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-cut fa-w-14 fa-2x"><path fill="currentColor" d="M249.52 256L446.83 58.83a3.996 3.996 0 0 0 0-5.65c-12.5-12.5-32.76-12.5-45.25 0L224.06 230.56l-48.64-48.61C185.88 166.57 192 148 192 128c0-53.02-42.98-96-96-96S0 74.98 0 128s42.98 96 96 96c20.01 0 38.58-6.12 53.96-16.6l48.63 48.6-48.63 48.6C134.58 294.12 116.01 288 96 288c-53.02 0-96 42.98-96 96s42.98 96 96 96 96-42.98 96-96c0-20-6.12-38.57-16.58-53.95l48.64-48.61 177.52 177.38c12.5 12.5 32.76 12.5 45.25 0a3.996 3.996 0 0 0 0-5.65L249.52 256zM96 192c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64zm0 256c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z" class=""></path></svg></div>
          <p class="state-label mb-0">Grooming</p>
        </div>
      </div>

      <div class="col-12 col-md-3 col-lg-3 col-xl-3">
        <div class="about-us-content">
         <div class="about-img"><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="briefcase" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-briefcase fa-w-16 fa-2x"><path fill="currentColor" d="M464 128H352V56c0-13.26-10.74-24-24-24H184c-13.26 0-24 10.74-24 24v72H48c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zM192 64h128v64H192V64zm288 368c0 8.82-7.18 16-16 16H48c-8.82 0-16-7.18-16-16V288h160v40c0 13.25 10.75 24 24 24h80c13.25 0 24-10.75 24-24v-40h160v144zM224 320v-32h64v32h-64zm256-64H32v-80c0-8.82 7.18-16 16-16h416c8.82 0 16 7.18 16 16v80z" class=""></path></svg></div>
          <p class="state-label mb-0">House Call</p>
        </div>
      </div>





    </div>
 </div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default About;
