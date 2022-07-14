import User from ".";
import "react-day-picker/lib/style.css";
import DayPickerInput from "react-day-picker/DayPickerInput";
import ReservationView from "../../components/user/reservation/ReservationView";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Reservation() {
  const router = useRouter();

  const [currentTab, setCurrentTab] = useState(0);
  const [reservationFor, setReservationFor] = useState<string>("1");

  // useEffect(() => {
  //   setReservationFor(`${router.query.index}`);
  //   setCurrentTab(0);
  // }, []);

  useEffect(() => {
    setReservationFor(`${router.query.index}`);
    setCurrentTab(0);
  }, [router.query]);

  return (
    <div className="col-12 col-md-8 col-lg-8 col-xl-8 column1">
      <div className="bg-white main-background pending-request">
        <div className="pay-tabs">
          <ul className="nav nav-tabs mb-0" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className={"nav-link " + (currentTab == 0 ? "active" : "")}
                id="request-tab"
                data-toggle="tab"
                href="#request"
                role="tab"
                onClick={() => setCurrentTab(0)}
              >
                Pending Request
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className={"nav-link " + (currentTab == 1 ? "active" : "")}
                id="booking-tab"
                data-toggle="tab"
                href="#booking"
                role="tab"
                onClick={() => setCurrentTab(1)}
              >
                Accepted
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className={"nav-link " + (currentTab == 3 ? "active" : "")}
                id="booking-tab"
                data-toggle="tab"
                href="#booking"
                role="tab"
                onClick={() => setCurrentTab(3)}
              >
                Upcoming Bookings
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className={"nav-link " + (currentTab == 4 ? "active" : "")}
                id="past-tab"
                data-toggle="tab"
                href="#past"
                role="tab"
                onClick={() => setCurrentTab(4)}
              >
                Past
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className={"nav-link " + (currentTab == 2 ? "active" : "")}
                id="cancelled-tab"
                data-toggle="tab"
                href="#cancelled"
                role="tab"
                onClick={() => setCurrentTab(2)}
              >
                Cancelled
              </a>
            </li>
          </ul>
        </div>

        <ReservationView type={currentTab} reservationFor={reservationFor} />
      </div>
    </div>
  );
}

Reservation.getLayout = function getLayout(page) {
  return <User>{page}</User>;
};
