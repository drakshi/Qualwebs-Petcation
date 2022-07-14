import Link from "next/link";
import React from "react";
import { strings } from "../../../../public/lang/Strings";

export default function Footer(props) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3 col-lg-3 col-xl-3 col-xl-3">
            <div className="footer-description">
              <p className="font-14">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <Link href="/">
                <a className="logo-img">
                  <img src="/images/logo.png" className="img-fluid" />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2">
            <div className="footer-menu">
              <h6 className="mb-3">Company</h6>
              <ul>
                <li>
                  <a href="/static/About">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/static/Contact">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/static/Career">
                    Career
                  </a>
                </li>
                <li>
                  <a href="/static/PrivacyPolicy">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/static/Terms">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="/static/CookiePolicy">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2">
            <div className="footer-menu">
              <h6 className="mb-3">Explore</h6>
              <ul>
                <li>
                  <a href="/static/Blog">
                    Newsroom
                  </a>
                </li>
                <li>
                  <a href="/static/Safety">
                    Safety
                  </a>
                </li>
                <li>
                  <a href="/static/NewsEvents">
                    Events &amp; Update
                  </a>
                </li>
                <li>
                  <a href="/static/Help">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5">
            <div className="footer-menu">
              <h6 className="mb-3">Stay Connected</h6>
              <div className="input-group group-btn mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="your email here for offers with newsletters"
                />
                <div className="input-group-append">
                  <span className="input-group-text">Subscribe</span>
                </div>
              </div>
              <div className="mb-4">
                <a href="/user/my-spots/add-pet-spot">
                  <button className="btn btn-primary">Add Your pet spot</button>
                </a>
              </div>
              <div className="follow-details">
                <h6 className="mb-2">Follow petcation</h6>
                <ul className="list-group list-group-horizontal">
                  <li>
                    <a href="#">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="basketball-ball"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                        className="svg-inline--fa fa-basketball-ball fa-w-16 fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M248 8C111 8 0 118.9 0 256c0 137.9 111.6 248 248 248 136.2 0 248-110 248-248C496 119 385.2 8 248 8zm-13.9 447.3c-38.9-2.7-77.1-16.7-109.4-42L248 290l43 43c-29.2 35.1-48.9 77.4-56.9 122.3zm91.5-87.7l45.7 45.7c-26.1 20.5-56.1 33.6-87.2 39.3 7.3-31.1 21.6-59.9 41.5-85zm34-33.9c25-20 53.9-34.2 85.1-41.5-5.8 31.9-19.2 61.7-39.4 87.3l-45.7-45.8zm87.7-91.6c-45 8.1-87.2 27.8-122.4 57l-43-43 123.3-123.4c24.8 31.4 39.4 69.2 42.1 109.4zM139 181c-25.8 20.6-55.8 35-88.1 42.1 5.5-33 19-63.9 39.8-90.4L139 181zm-14.3-82.3C151.1 77.9 182 64.4 215 58.9c-7.1 32.3-21.5 62.3-42.1 88.1l-48.2-48.3zm140.2-41.9c39.1 3.3 75.8 17.8 106.4 41.9L248 222.1l-40.4-40.4c29.7-35.8 49.6-78.9 57.3-124.9zM48.8 273c46-7.8 89.1-27.6 124.8-57.3l40.4 40.4L90.7 379.4C66.6 348.7 52.1 312 48.8 273z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="facebook"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="svg-inline--fa fa-facebook fa-w-16 fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="youtube"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        className="svg-inline--fa fa-youtube fa-w-18 fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="twitter"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="svg-inline--fa fa-twitter fa-w-16 fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 col-md-12 col-lg-12 col-xl-12">
            <div className="d-flex">
              <div className="footer-language">
                <a href="#">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="globe"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                    className="svg-inline--fa fa-globe fa-w-16 fa-2x"
                  >
                    <path
                      fill="currentColor"
                      d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm193.2 152h-82.5c-9-44.4-24.1-82.2-43.2-109.1 55 18.2 100.2 57.9 125.7 109.1zM336 256c0 22.9-1.6 44.2-4.3 64H164.3c-2.7-19.8-4.3-41.1-4.3-64s1.6-44.2 4.3-64h167.4c2.7 19.8 4.3 41.1 4.3 64zM248 40c26.9 0 61.4 44.1 78.1 120H169.9C186.6 84.1 221.1 40 248 40zm-67.5 10.9c-19 26.8-34.2 64.6-43.2 109.1H54.8c25.5-51.2 70.7-90.9 125.7-109.1zM32 256c0-22.3 3.4-43.8 9.7-64h90.5c-2.6 20.5-4.2 41.8-4.2 64s1.5 43.5 4.2 64H41.7c-6.3-20.2-9.7-41.7-9.7-64zm22.8 96h82.5c9 44.4 24.1 82.2 43.2 109.1-55-18.2-100.2-57.9-125.7-109.1zM248 472c-26.9 0-61.4-44.1-78.1-120h156.2c-16.7 75.9-51.2 120-78.1 120zm67.5-10.9c19-26.8 34.2-64.6 43.2-109.1h82.5c-25.5 51.2-70.7 90.9-125.7 109.1zM363.8 320c2.6-20.5 4.2-41.8 4.2-64s-1.5-43.5-4.2-64h90.5c6.3 20.2 9.7 41.7 9.7 64s-3.4 43.8-9.7 64h-90.5z"
                    />
                  </svg>{" "}
                  <span>English (US)</span>
                </a>
              </div>
              <div className="footer-language">
                <a href="#">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="dollar-sign"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 288 512"
                    className="svg-inline--fa fa-dollar-sign fa-w-9 fa-2x"
                  >
                    <path
                      fill="currentColor"
                      d="M211.9 242.1L95.6 208.9c-15.8-4.5-28.6-17.2-31.1-33.5C60.6 150 80.3 128 105 128h73.8c15.9 0 31.5 5 44.4 14.1 6.4 4.5 15 3.8 20.5-1.7l22.9-22.9c6.8-6.8 6.1-18.2-1.5-24.1C240.4 74.3 210.4 64 178.8 64H176V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C60.3 64 14.9 95.8 3.1 143.6c-13.9 56.2 20.2 111.2 73 126.3l116.3 33.2c15.8 4.5 28.6 17.2 31.1 33.5C227.4 362 207.7 384 183 384h-73.8c-15.9 0-31.5-5-44.4-14.1-6.4-4.5-15-3.8-20.5 1.7l-22.9 22.9c-6.8 6.8-6.1 18.2 1.5 24.1 24.6 19.1 54.6 29.4 86.3 29.4h2.8v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48h2.5c49.2 0 94.6-31.8 106.4-79.6 13.9-56.2-20.2-111.2-73-126.3z"
                    />
                  </svg>
                  <span>USD</span>
                </a>
              </div>
            </div>
            <div className="copyright">
              <p className="font-14 mb-2">
                © petcation.com, Inc. All rights reserved.
              </p>
              <p className="font-12 mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
