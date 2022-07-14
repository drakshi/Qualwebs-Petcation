import Link from "next/link";
import { strings } from "../../public/lang/Strings";

export default function BecomePetSitter(props) {
  return (
    <div className="booking-sitter">
      <div className="padding">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 col-xl-5">
              <div className="partner-images">
                <div className="row">
                  <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 my-auto">
                    <div className="images-width">
                      <img src="images/home-img1.png" className="img-fluid" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <div className="images-width">
                      <img src="images/home-img2.png" className="img-fluid" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <div className="images-width">
                      <img src="images/home-img3.png" className="img-fluid" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 mt-3">
                    <div className="images-width">
                      <img src="images/home-img4.png" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-6 col-xl-6 offset-xl-1">
              <div className="main-title partner-title mb-0">
                <h2 className="font-semibold">
                  {strings.wannaBePartnerWithUs}
                </h2>
                <p className="mb-0">{strings.whatEverPetServiceYouProvide}</p>
              </div>

              <div className="partner-details">
                <div className="verified-details">
                  <div className="d-flex verifi-inner-info">
                    <div className="partner-icons">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fal"
                        data-icon="shield-check"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="svg-inline--fa fa-shield-check fa-w-16 fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM262.2 478.8c-4 1.6-8.4 1.6-12.3 0C152 440 48 304 48 128c0-6.5 3.9-12.3 9.8-14.8l192-80c3.9-1.6 8.4-1.6 12.3 0l192 80c6 2.5 9.9 8.3 9.8 14.8.1 176-103.9 312-201.7 350.8zm136.2-325c-4.7-4.7-12.3-4.7-17-.1L218 315.8l-69-69.5c-4.7-4.7-12.3-4.7-17-.1l-8.5 8.5c-4.7 4.7-4.7 12.3-.1 17l85.9 86.6c4.7 4.7 12.3 4.7 17 .1l180.5-179c4.7-4.7 4.7-12.3.1-17z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p className="mb-0 font-medium">
                        {strings.s100Verifiedjobs}
                      </p>
                    </div>
                  </div>
                  <div className="d-flex verifi-inner-info">
                    <div className="partner-icons">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fal"
                        data-icon="shield-check"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="svg-inline--fa fa-shield-check fa-w-16 fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM262.2 478.8c-4 1.6-8.4 1.6-12.3 0C152 440 48 304 48 128c0-6.5 3.9-12.3 9.8-14.8l192-80c3.9-1.6 8.4-1.6 12.3 0l192 80c6 2.5 9.9 8.3 9.8 14.8.1 176-103.9 312-201.7 350.8zm136.2-325c-4.7-4.7-12.3-4.7-17-.1L218 315.8l-69-69.5c-4.7-4.7-12.3-4.7-17-.1l-8.5 8.5c-4.7 4.7-4.7 12.3-.1 17l85.9 86.6c4.7 4.7 12.3 4.7 17 .1l180.5-179c4.7-4.7 4.7-12.3.1-17z"
                          className=""
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p className="mb-0 font-medium">
                        {strings.Easyprofileverifications}
                      </p>
                    </div>
                  </div>
                  <div className="d-flex verifi-inner-info">
                    <div className="partner-icons">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fal"
                        data-icon="shield-check"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="svg-inline--fa fa-shield-check fa-w-16 fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM262.2 478.8c-4 1.6-8.4 1.6-12.3 0C152 440 48 304 48 128c0-6.5 3.9-12.3 9.8-14.8l192-80c3.9-1.6 8.4-1.6 12.3 0l192 80c6 2.5 9.9 8.3 9.8 14.8.1 176-103.9 312-201.7 350.8zm136.2-325c-4.7-4.7-12.3-4.7-17-.1L218 315.8l-69-69.5c-4.7-4.7-12.3-4.7-17-.1l-8.5 8.5c-4.7 4.7-4.7 12.3-.1 17l85.9 86.6c4.7 4.7 12.3 4.7 17 .1l180.5-179c4.7-4.7 4.7-12.3.1-17z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p className="mb-0 font-medium">
                        {strings.Instantpayouts}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="list-btn">
                  <Link href={props.id ? "/user/my-services":'/signin'}>
                    <a href="javascript:void(0)">
                      <button className="btn btn-primary btn-list">
                        {"List your Services"}
                      </button>
                    </a>
                  </Link>
                </div>

                <div className="sitter-btn">
                  <Link href={props.id ? "/user/my-services":'/signin'}>
                    <a href="javascript:void(0)">
                      <button className="btn btn-primary btn-gray">
                        {strings.Becomeapetsitter}
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
