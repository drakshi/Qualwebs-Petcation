import React from 'react';
import User from ".";
import BookingRequests from "../../components/user/dashboard/bookingRequests/BookingRequests";
import MeetingRequests from "../../components/user/dashboard/meetingRequests/MeetingRequests";
import Portfolio from "../../components/user/dashboard/Portfolio";
import NewsFeed from "../../components/user/dashboard/NewsFeed";
import { sitterStates } from "../../public/appData/AppData";
import BookingRequestMobile from "../../components/user/dashboard/bookingRequests/BookingRequestMobile";
import StatusBar from "../../components/user/dashboard/StatusBar";

export default function Dashboard() {
  return (
    <div className="col-12 col-md-8 col-lg-8 col-xl-8 column1">
      <StatusBar states={sitterStates}/>
      <BookingRequestMobile />
      <div className="row">
        <BookingRequests />
        <MeetingRequests />
      </div>
      <Portfolio />
      <div className="points-details mb-4">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-8 col-xl-9">
            <div className="invitions mb-3">
              <h4 className="font-semibold">WELCOME TO PETCATION </h4>
              <h5>Let’s make a day special for you pets</h5>
            </div>
            <div className="gift-card">
              <h5 className="font-semibold">Get a discount coupon of</h5>
              <h5 className="font-medium mb-0">
                {" "}
                <span className="font-semibold">¥3000</span> on completion of
                friend’s first service
              </h5>
            </div>
          </div>
          <div className="col-12 col-md-3 col-lg-3 col-xl-3">
            <div className="book-now text-center">
              <p className="mb-0 font-14">
                ¥500 <br />
                Off on first nooking
              </p>
              <button className="btn btn-yellow">Book now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="earn-background">
        <div className="earn-section">
          <p className="mb-0 font-14 text-white">
            Earn a <span className="font-semibold">¥3000 COUPON</span> for
            inviting other petsitter to join the platform.
          </p>
        </div>

        <div className="row email-row">
          <div className="col-xl-7">
            <div className="input-group group-btn">
              <input
                type="text"
                className="form-control bg-white"
                placeholder="Please enter email here for your referrals "
              />
              <div className="input-group-append">
                <span className="input-group-text email">Invite via email</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="input-group-text email">
              <a href="#">Invite via twitter</a>
            </div>
          </div>
        </div>

        <div className="copy-url">
          <div className="d-flex">
            <div className="referral-details my-auto">
              <h6 className="font-12 font-semibold mb-0 my-auto">
                OR copy below referral URL and share
              </h6>
            </div>
            <div className="refferal-link">
              <a href="#" className="font-10">
                https://www.qualwebs.com/referral-56345654YWJK{" "}
              </a>
              <span className="font-12">Copy URL by clicking here</span>
            </div>
          </div>
          <p className="font-10 mb-0">
            *Referred friend must have created their Petcation account through
            your referral link either sent via email or from the above copy and
            should finish one job in order for you to recieve giftcard.
          </p>
        </div>
      </div>
      <NewsFeed />
    </div>
  );
}

Dashboard.getLayout = function getLayout(page) {
  return <User>{page}</User>;
};
