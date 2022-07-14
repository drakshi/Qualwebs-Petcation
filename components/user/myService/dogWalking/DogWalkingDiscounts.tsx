import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { strings } from "../../../../public/lang/Strings";
import { useSnackbar } from "react-simple-snackbar";
import {
  errorOptions,
  successOptions,
} from "../../../../public/appData/AppData";
import SaveServiceView from "../SaveServiceView";
import API from "../../../../api/Api";
import { deepClone, numberInput } from "../../../../utils/Helper";

const api = new API();
type T_DISCOUNT = {
  number_of_bookings: number;
  discount_percentage: number;
};

const DogWalkingDiscounts: React.FC<{}> = () => {
  const router = useRouter();
  const [success, closeSuccess] = useSnackbar(successOptions);
  const [errorSnack, closeError] = useSnackbar(errorOptions);
  const [sitterServiceId, setSitterServiceId] = useState<number>();
  const [firstOffered, setFirstOffered] = useState<boolean>(true);
  const [discounts, setDiscounts] = useState<T_DISCOUNT[]>([
    { discount_percentage: 0, number_of_bookings: 1 },
  ]);

  useEffect(() => {
    if (router.query.serviceId) {
      setSitterServiceId(Number(router.query.serviceId));
      getDiscountInfo();
    } else {
      router.replace("/user/my-services");
    }
  }, []);

  const getDiscountInfo = () => {
    api
      .getDogWalkingInfo(3)
      .then((response) => {
        let data = response.data.response;
        setDiscounts(data.offers);
        setFirstOffered(data.first_booking_offered == 1 ? true : false);
      })
      .catch((error) => console.log(error));
  };

  const saveDiscount = () => {
    let data: any = {
      pet_walking_service_id: sitterServiceId,
      first_booking_offered: firstOffered ? 1 : 0,
      discounts: discounts,
    };

    api
      .dogWalkingDiscount(data)
        .then((response) => success("Saved Successfully, please add availability"))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div
        className="tab-pane fade active show"
        id="contact"
        role="tabpanel"
        aria-labelledby="contact-tab"
      >
        <div className="preferences-details">
          <div className="booking-for">
            <h5 className="font-semibold">
              {strings.Specialdiscountforyourguests}
            </h5>
            <div className="discount-check">
              <div className="custom-check">
                <label className="check ">
                  <input
                    type="radio"
                    className="class1"
                    name="discount"
                    checked={firstOffered}
                    onChange={() => setFirstOffered(true)}
                  />
                  <span className="checkmark" />
                  <h6>{strings.offonfirstbookingwithyou}</h6>
                  <p className="font-12">{strings.Allowofonbookingamount}</p>
                </label>
              </div>
            </div>
            <div className="discount-check">
              <div className="custom-check">
                <label className="check ">
                  <input
                    type="radio"
                    className="class1"
                    name="discount"
                    checked={!firstOffered}
                    onChange={(e) => setFirstOffered(false)}
                  />
                  <span className="checkmark" />
                  <h6>{strings.Noofferonthisservice}</h6>
                  <p className="font-12">{strings.Allowofonbookingamount}</p>
                </label>
              </div>
            </div>
            <hr />
            <div className="stay-discount">
              <h5>Discount on number of days for a service</h5>
              {discounts.map((value, index) => (
                <div className="row">
                  <div className="col-6 col-md-3 col-lg-3 col-xl-3">
                    <div className="weekly-discount mb-2">
                      <div className="d-flex justify-content-between">
                        <div>
                          <h6 className="text-muted font-14 mb-0 font-semibold">
                            Booking
                          </h6>
                        </div>
                        <div className="help-tip">
                          <p>lorem ipsum</p>
                        </div>
                      </div>
                      <input
                        className="form-control mb-1 w-100"
                        type="number"
                        id="weekly-discount"
                        name="discount"
                        placeholder="No. of bookings"
                        value={value.number_of_bookings}
                        onKeyPress={numberInput}
                        onChange={(e) => {
                          let data = deepClone(discounts);
                          data[index].number_of_bookings = Number(
                            e.target.value
                          );
                          setDiscounts(data);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-md-3 col-lg-3 col-xl-3">
                    <div className="weekly-discount mb-2">
                      <h6 className="text-muted font-14 font-semibold">
                        Discount
                      </h6>
                      <input
                        className={
                          "form-control mb-1 w-100 " +
                          (value.discount_percentage > 100 ? "invalid" : "")
                        }
                        id="weekly-discount"
                        name="discount"
                        type="number"
                        placeholder="20%"
                        maxLength={3}
                        value={value.discount_percentage}
                        onKeyPress={numberInput}
                        onChange={(e) => {
                          let data = deepClone(discounts);
                          data[index].discount_percentage = Number(
                            e.target.value
                          );
                          setDiscounts(data);
                        }}
                      />
                    </div>
                  </div>
                  {discounts.length != 1 ? (
                    <div
                      onClick={() => {
                        let data = deepClone(discounts);
                        data.splice(index, 1);
                        setDiscounts(data);
                      }}
                      className="col-4 col-md-1 col-lg-1 col-xl-1 my-auto"
                    >
                      <div className="delete-icon">
                        <svg viewBox="0 0 448 512">
                          <path
                            fill="currentColor"
                            d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"
                          />
                        </svg>
                      </div>
                    </div>
                  ) : null}
                </div>
              ))}
              <div className="append-elements1" />
              <button
                onClick={() =>
                  setDiscounts([
                    ...discounts,
                    { discount_percentage: 0, number_of_bookings: 1 },
                  ])
                }
                className="one btn btn-primary add-more-btn"
              >
                + Add more
              </button>
            </div>
          </div>
        </div>
      </div>
      <SaveServiceView preview={5} onSave={saveDiscount} />
    </>
  );
};

export default DogWalkingDiscounts;
