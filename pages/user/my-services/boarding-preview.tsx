import Link from "next/link";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import User from "..";
import API from "../../../api/Api";
import { pets } from "../../../public/appData/AppData";
import {
  D_DISTANCE,
  D_FLEXIBILITY,
  D_FREQUENT_BREAKS,
  D_TRANSPORTATION,
} from "../../../public/appData/StaticData";

const api = new API();
export default function BoardingPreview() {
  const [data, setData] = useState<any>();

  const getServicePreference = () => {
   let data =  D_TRANSPORTATION.find(
        (v) =>
            v.value ==
            data.boarding_service_preferences.transportation_id
    )
    return data ? data.label:''
  }

  const getServiceDistance = () => {
   let distance = D_DISTANCE.find(
        (v) =>
            v.value ==
            data.boarding_service_preferences.travel_distance
    )
    return distance ? distance.label:''
  }

  useEffect(() => {
    api
      .getBoardingPreview()
      .then((res) => {
        setData(res.data.response);
      })
      .catch((error) => {});
  }, []);
  if (data) {
    return (
      <div className="col-12 col-md-8 col-lg-8 col-xl-8 column1">
        <div className=" single-service">
          <div className="service-title mb-2">
            <h5 className="font-20  mb-0 font-semibold">
              Boarding service Preview
            </h5>
          </div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/user/my-services">
                  <a href="javascript:void(0)">
                    <i className="fas fa-angle-left" /> All services
                  </a>
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link href="/user/my-services">
                  <a href="javascript:void(0)">
                    <i className="fas fa-angle-left" /> Manage Service
                  </a>
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Preview
              </li>
            </ol>
          </nav>
        </div>
        {/*---------------services and fees------------------*/}
        <div className="bg-white main-background">
          <div className="service-title mb-2">
            <h6 className="preview-head">Service &amp; Fee : </h6>
            <p className="font-semibold text-muted font-14 mb-0">
              What pets would you prefer for this service?
            </p>
            <p className="mb-0 font-12">
              Select the pets you will be willing to service for night boarding.
            </p>
          </div>
          <div className="row">
            {data.boarding_service_fee.service_pets.map((v) => (
              <div className="col-4 col-md-2 col-lg-2 col-xl-2">
                <div className="preview-details">
                  <h6 className="mb-0 font-medium">
                    {pets.find((value) => value.value == v.pet_type).label}
                  </h6>
                </div>
              </div>
            ))}
          </div>
          <hr />
          <div className="extra-charge">
            <p className="font-semibold text-muted font-14 mb-0">
              Would you like to charge extra when providing boarding service
              during holidays?
            </p>
            <p className="mb-2 font-12">
              Enter value (in %) by which you would want prices to increase
              during holidays in below box. Look at list of holidays here.
            </p>
            <div className="preview-details">
              <h6 className="mb-0 font-medium">
                Range{" "}
                <span>{data.boarding_service_fee.holiday_extra_charges}%</span>
              </h6>
            </div>
          </div>
          <hr />
          <div className="fees-content my-3">
            <p className="font-semibold text-muted font-14 mb-0">
              Cacellation policy{" "}
            </p>
            <p className="mb-0 font-12">
              Select cancellation policy for this service, user will see the
              same at the time of booking
            </p>
            <div className="booking-for">
              <div className="row">
                <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                  {data.boarding_service_fee.cancellation_policy == 1 ? (
                    <div className="row  service-charges">
                      <div className="custom-check ml-3">
                        <h6 className="font-medium mb-2">Flexible</h6>
                        <p className="font-12">
                          For boarding and house sitting: You'll get a full
                          refund if you cancel before the stay begins. If you
                          cancel after the stay or walk begins, you'll get a 50%
                          refund for the first seven cancelled days and a 100%
                          refund for any additional cancelled days.
                        </p>
                        <p className="font-12 mb-0">
                          For walks, day care and drop-in visits: You’ll get a
                          full refund if you cancel before the day’s service is
                          delivered
                        </p>
                      </div>
                    </div>
                  ) : data.boarding_service_fee.cancellation_policy == 2 ? (
                    <div className="row  service-charges">
                      <div className="custom-check ml-3">
                        <h6 className="font-medium mb-2">Moderate</h6>
                        <p className="font-12">
                          You cancel within 48 hours of booking
                        </p>
                        <p className="font-12 mb-0">
                          You haven’t already cancelled 3 reservations in the
                          last 12 months.
                        </p>
                        <p className="font-12 mb-0">
                          The reservation you’re cancelling doesn’t overlap with
                          another reservation in your account When refund, any
                          promo code (coupon) and points will be available to
                          use immediately.
                        </p>
                        <p className="font-12 mb-0">
                          You'll get a full refund if you cancel by 12:00 noon 3
                          days before the stay begins (12:00 noon is determined
                          by your sitter's time zone). If you cancel after 12:00
                          noon 3 days before the stay begins, you'll get a 50%
                          refund for the first seven cancelled days and a 100%
                          refund for any additional cancelled days.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="row  service-charges">
                      <div className="custom-check ml-3">
                        <h6 className="font-medium mb-2">Strict</h6>
                        <p className="font-12">
                          You'll get a full refund if you cancel by 12:00 noon
                          one week before the stay begins (12:00 noon is
                          determined by your sitter's time zone). If you cancel
                          after 12:00 noon one week before the stay begins,
                          you'll get a 50% refund for the first seven cancelled
                          days and a 100% refund for any additional day
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white main-background">
          <div className="service-title mb-2">
            <h6 className="preview-head">Prefrences : </h6>
            <div className="main-padding pb-2">
              <h6 className="font-semibold text-muted font-14 mb-0">
                Your availability while pet is at boarding
              </h6>
              <p className="font-12 mb-2">
                You can select from the options part-time &amp; fulltime;
                selecting full-time means you are available all the time at home
                when boarding the pet.
              </p>
              <h6 className="mb-0 font-medium">
                {
                  D_FLEXIBILITY.find(
                    (value) =>
                      data.boarding_service_preferences.flexibility_id ==
                      value.value
                  ).label
                }
              </h6>
            </div>
            <hr />
            <div className="main-padding pb-2">
              <h6 className="font-semibold text-muted font-14 mb-0">
                When hosting pets in your home, how frequently can you provide
                breaks?
              </h6>
              <p className="font-12 mb-2">
                When hosting pets in your home, how frequently can you provide
                potty breaks, or walks, or feeds in case.
              </p>
              <h6 className="mb-0 font-medium">
                {
                  D_FREQUENT_BREAKS.find(
                    (value) =>
                      data.boarding_service_preferences.frequently_break_id ==
                      value.value
                  ).label
                }
              </h6>
            </div>
            <hr />
            <div className="main-padding pb-2">
              <h6 className="font-semibold text-muted font-14 mb-2">
                Can you pickup pet from client’s place?
              </h6>
              <h6 className="font-medium">
                {data.boarding_service_preferences.pickup_from_client_home == 1
                  ? "Yes"
                  : "No"}
              </h6>
              <div className="d-flex pet-pickup-details">
                <div className="mr-5 font-14">
                  <p className="font-15 mb-2 mr-5"> By what means?</p>
                  <h6 className="mb-0 font-14 font-medium">
                    {console.log('D_TRANSPORTATION', D_TRANSPORTATION, data.boarding_service_preferences)}
                    {()=>getServicePreference()}
                  </h6>
                </div>
                <div>
                  <p className="font-15 mb-2 mr-5">How far?</p>
                  <h6 className="mb-0 font-14 font-medium">
                    {()=>getServiceDistance()}
                  </h6>
                </div>
              </div>
            </div>
            <hr />
            <div className="main-padding pb-2">
              <h6 className="font-semibold text-muted font-14 mb-2">
                Do you charge transportation fee?
              </h6>
              <h6 className="font-medium">
                {data.boarding_service_preferences.has_transportation_fee == 1
                  ? "Yes"
                  : "No"}
              </h6>
              {data.boarding_service_preferences.has_transportation_fee == 1 ? (
                <div className="d-flex pet-pickup-details">
                  <div className="mr-5 font-14">
                    <p className="font-15 mb-2 mr-5"> transportation fee</p>
                    <h6 className="mb-0 font-14 font-medium">{`￥${data.boarding_service_preferences.transportation_fee}`}</h6>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="bg-white main-background">
          <div className="service-title mb-2">
            <h6 className="preview-head">Discount : </h6>
            <div className="main-padding pb-2">
              <h5 className="font-semibold">
                Special discount for your guests
              </h5>
              {data.boarding_service_discount.first_booking_offered == 1 ? (
                <div className="discount-check">
                  <div className="custom-check">
                    <label className="check pl-0">
                      <h6>20% off on first booking with you</h6>
                      <p className="font-12 mb-0">
                        Allow 20% of on booking amount for the first time
                        guests. This offers can attract new guests and help you
                        to earn more points and reviews
                      </p>
                    </label>
                  </div>
                </div>
              ) : (
                <div className="discount-check">
                  <div className="custom-check">
                    <label className="check pl-0">
                      <h6>No Offers on this service</h6>
                      <p className="font-12 mb-0">
                        Allow 20% of on booking amount for the first time
                        guests. This offers can attract new guests and help you
                        to earn more points and reviews
                      </p>
                    </label>
                  </div>
                </div>
              )}
            </div>
            <hr />
            <div className="main-padding pb-2">
              <div className="stay-discount">
                <h5>Length-of-stay discount</h5>
                <p className="font-12">
                  Allow 20% of on booking amount for the first time guests. This
                  offers can attract new guests and help you to earn more points
                  and reviews
                </p>
                <div className="weekly-discount mb-4">
                  <h6 className="text-muted font-14 font-semibold">
                    {`Weekly discount : ${data.boarding_service_discount.weekly_discount_percentage}%`}
                  </h6>
                </div>
                <div className="weekly-discount mb-3">
                  <h6 className="text-muted font-14 font-semibold">
                    {` Monthly discount : ${data.boarding_service_discount.monthly_discount_percentage}%`}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

BoardingPreview.getLayout = function (page) {
  return <User>{page}</User>;
};
