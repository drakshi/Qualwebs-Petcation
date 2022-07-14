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
import {confirmAlert} from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';



const api = new API();

interface I_Props {
  serviceId: number;
}
const ServiceDiscount: React.FC<I_Props> = ({ serviceId }: I_Props) => {
  const router = useRouter();
  const [success, closeSuccess] = useSnackbar(successOptions);
  const [errorSnack, closeError] = useSnackbar(errorOptions);
  const [sitterServiceId, setSitterServiceId] = useState<number>();
  const [firstOffered, setFirstOffered] = useState<boolean>(true);
  const [weeklyDiscount, setWeeklyDiscount] = useState<string>("0");
  const [monthlyDiscount, setMonthlyDiscount] = useState<string>("0");

  useEffect(() => {
    if (router.query.serviceId) {
      setSitterServiceId(Number(router.query.serviceId));
      getDiscountInfo();
    } else {
      router.replace("/user/my-services");
    }
  }, []);

  const getDiscountInfo = () => {
    var call;
    switch (serviceId) {
      case 1:
        call = api.getBoardingInfo(3);
        break;
      case 2:
        call = api.getHouseSittingInfo(3);
        break;
    }
    call
      .then((response) => {
        let data = response.data.response;
        setSitterServiceId(data.sitter_boarding_service_id);
        setFirstOffered(data.first_booking_offered == 1 ? true : false);
        setWeeklyDiscount(`${data.weekly_discount_percentage}`);
        setMonthlyDiscount(`${data.monthly_discount_percentage}`);
      })
      .catch((error) => console.log(error));
  };

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "monthly":
        setMonthlyDiscount(e.target.value);
        break;
      case "weekly":
        setWeeklyDiscount(e.target.value);
        break;
    }
  };

  const saveDiscount = () => {
    if (weeklyDiscount == "" || Number(weeklyDiscount) > 100) {
      errorSnack("Invalid Weekly Discount");
      return false;
    }

    if (monthlyDiscount == "" || Number(monthlyDiscount) > 100) {
      errorSnack("Invalid Monthly Discount");
      return false;
    }

    let data: any = {
      first_booking_offered: firstOffered ? 1 : 0,
      weekly_discount_percentage: Number(weeklyDiscount),
      monthly_discount_percentage: Number(monthlyDiscount),
    };

    var call;
    switch (serviceId) {
      case 1:
        data.boarding_service_id = sitterServiceId;
        call = api.boardingDiscount(data);
        break;
      case 2:
        data.house_sitting_service_id = sitterServiceId;
        call = api.houseSittingDiscount(data);
        break;
    }
    call
      .then((response) => {
        success("Saved Successfully, please add availability")
        confirmAlert({
          title: strings.addAvailability,
          message: '',
          buttons: [
            {
              label: 'Yes',
              onClick: () => {
                router.push({pathname:'/user/my-profile', query: {selectedIndex : 3}})
              }
            },
            {
              label: 'No',
              onClick: () => {}
            }
          ]
        });
      })
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
                    name="is_name2"
                    defaultValue="dog"
                    checked={firstOffered}
                    onChange={(e) => setFirstOffered(true)}
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
                    name="is_name2"
                    checked={!firstOffered}
                    onChange={(e) => setFirstOffered(false)}
                    defaultValue="dog"
                  />
                  <span className="checkmark" />
                  <h6>{strings.Noofferonthisservice}</h6>
                  <p className="font-12">{strings.Allowofonbookingamount}</p>
                </label>
              </div>
            </div>
            <hr />
            <div className="stay-discount">
              <h5>{strings.Lengthofstaydiscount}</h5>
              <p className="font-12">{strings.Allowofonbookingamount}</p>
              <div className="weekly-discount mb-4">
                <h6 className="text-muted font-14 font-semibold">
                  {strings.Weeklydiscount}
                </h6>
                <input
                  className={
                    "form-control mb-3 valid-control " +
                    (weeklyDiscount.length > 3 ||
                    Number(weeklyDiscount) > 100 ||
                    weeklyDiscount == ""
                      ? "invalid"
                      : "")
                  }
                  id="weekly-discount"
                  type="number"
                  maxLength={3}
                  min={0}
                  max={100}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  name="weekly"
                  onChange={onChangeText}
                  value={weeklyDiscount}
                />
                <h6 className="font-normal tip">Tip: 21%</h6>
                <p className="font-12 mb-0">
                  {strings.Thisdiscountwillapplytoanyreservation}
                </p>
              </div>
              <div className="weekly-discount mb-3">
                <h6 className="text-muted font-14 font-semibold">
                  {strings.Monthlydiscount}
                </h6>
                <input
                  className={
                    "form-control mb-3 valid-control " +
                    (monthlyDiscount.length > 3 ||
                    Number(monthlyDiscount) > 100 ||
                    monthlyDiscount == ""
                      ? "invalid"
                      : "")
                  }
                  id="weekly-discount"
                  name="monthly"
                  type="number"
                  maxLength={3}
                  min={0}
                  max={100}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  onChange={onChangeText}
                  value={monthlyDiscount}
                />
                <h6 className="font-normal tip">Tip: 49%</h6>
                <p className="font-12 mb-0">
                  {strings.Thisdiscountwillapplytoanyreservation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SaveServiceView preview={serviceId} onSave={saveDiscount} />
    </>
  );
};

export default ServiceDiscount;
