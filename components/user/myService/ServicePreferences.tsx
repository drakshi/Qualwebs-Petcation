import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import API from "../../../api/Api";
import { U_BOARDING_PET_SERVICE_FEE } from "../../../api/Constants";
import {
  errorOptions,
  select,
  successOptions,
} from "../../../public/appData/AppData";
import {
  D_BOOLEAN,
  D_DISTANCE,
  D_FLEXIBILITY,
  D_FREQUENT_BREAKS,
  D_TRANSPORTATION,
} from "../../../public/appData/StaticData";
import { strings } from "../../../public/lang/Strings";
import SaveServiceView from "./SaveServiceView";
import { useSnackbar } from "react-simple-snackbar";

const api = new API();
const ServicePreferences = () => {
  const router = useRouter();
  const [success, closeSuccess] = useSnackbar(successOptions);
  const [errorSnack, closeError] = useSnackbar(errorOptions);

  const [transportation, setTransportaion] = useState<select>(
    D_TRANSPORTATION[0]
  );
  const [sitterServiceId, setSitterServiceId] = useState<number>();
  const [flexibility, setFlexibility] = useState<select>(D_FLEXIBILITY[0]);
  const [pickup, setPickup] = useState<select>(D_BOOLEAN[0]);
  const [distance, setDistance] = useState<select>(D_DISTANCE[0]);
  const [hasFee, setHasFee] = useState<boolean>(false);
  const [transportationFee, setTransportationFee] = useState<string>("");
  const [frequentBreaks, setFrequentBreaks] = useState<select>(
    D_FREQUENT_BREAKS[0]
  );

  useEffect(() => {
    if (router.query.serviceId) {
      setSitterServiceId(Number(router.query.serviceId));
    } else {
      router.replace("/user/my-services");
    }
  }, []);

  const handleFlexibilityChange = (data: select) => {
    setFlexibility(data);
  };

  const frequentBreakChange = (data: select) => {
    setFrequentBreaks(data);
  };

  const handlePickupChange = (data: select) => {
    setPickup(data);
  };

  const handleTransportation = (data: select) => {
    setTransportaion(data);
  };

  const handleDistance = (data: select) => {
    setDistance(data);
  };

  const saveServicePreference = () => {
    if ((hasFee && transportationFee == "") || transportationFee == undefined) {
      errorSnack("Enter Transportation Fee");
      return false;
    }

    let data = JSON.stringify({
      boarding_service_id: sitterServiceId,
      flexibility_id: flexibility.value,
      frequently_break_id: frequentBreaks.value,
      pickup_from_client_home: pickup.value,
      transportation_id: transportation.value,
      travel_distance: distance.value,
      has_transportation_fee: hasFee,
      transportation_fee: transportationFee,
    });
    api
      .boardingPreference(data)
        .then((response) => success("Saved Successfully, please add availability"))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade active show"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div
            className="tab-pane fade active show"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div className="booking-for">
              <div className="preferences-details">
                <div className="main-padding">
                  <h6 className="font-semibold font-14">
                    {strings.Youravailabilitywhilepetisatboarding}
                  </h6>
                  <p className="font-12">
                    {strings.Youcanselectfromtheoptionsparts}
                  </p>
                  <div className="form-group">
                    <div className="category-selection charge-select">
                      <div
                        style={{ width: "200px" }}
                        className="custom-react-select"
                      >
                        <Select
                          onChange={handleFlexibilityChange}
                          value={flexibility}
                          options={D_FLEXIBILITY}
                          isSearchable={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main-padding">
                  <h6 className="font-medium font-14">
                    {
                      strings.whenhostingpetsinyourhomehowfrequentlycanyouprovidebreaks
                    }
                  </h6>
                  <p className="font-12">
                    {strings.howfrequentlycanyouprovidepottybreaks}
                  </p>
                  <div className="form-group">
                    <div className="category-selection charge-select">
                      <div
                        style={{ width: "200px" }}
                        className="custom-react-select"
                      >
                        <Select
                          options={D_FREQUENT_BREAKS}
                          value={frequentBreaks}
                          onChange={frequentBreakChange}
                          isSearchable={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <h6 className="font-medium font-14 mb-3">
                      {strings.Canyoupickuppetfromclientplace}
                    </h6>
                    <div className="form-group">
                      <div className="category-selection charge-select">
                        <div
                          style={{ width: "200px" }}
                          className="custom-react-select"
                        >
                          <Select
                            options={D_BOOLEAN}
                            value={pickup}
                            onChange={handlePickupChange}
                            isSearchable={false}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <h6 className="font-medium font-14 mb-3">By what means?</h6>
                    <div className="form-group">
                      <div className="category-selection charge-select">
                        <div
                          style={{ width: "160px  " }}
                          className="custom-react-select"
                        >
                          <Select
                            options={D_TRANSPORTATION}
                            onChange={handleTransportation}
                            value={transportation}
                            isSearchable={false}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <h6 className="font-medium font-14 mb-3">How far?</h6>
                    <div className="form-group">
                      <div className="category-selection charge-select">
                        <div
                          style={{ width: "160px" }}
                          className="custom-react-select"
                        >
                          <Select
                            options={D_DISTANCE}
                            onChange={handleDistance}
                            value={distance}
                            isSearchable={false}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                    <h6 className="font-medium font-14 mb-3">
                      {strings.Doyouchargetransportationfee}
                    </h6>
                    <div className="custom-check mb-3">
                      <label className="check ">
                        <input
                          type="radio"
                          className="class1"
                          name="is_name2"
                          checked={hasFee}
                          onChange={(e) => setHasFee(true)}
                        />
                        <span className="checkmark" />
                        Yes
                      </label>
                    </div>
                    <div className="custom-check mb-3">
                      <label className="check ">
                        <input
                          type="radio"
                          className="class1"
                          name="is_name2"
                          checked={!hasFee}
                          onChange={(e) => setHasFee(false)}
                        />
                        <span className="checkmark" />
                        No
                      </label>
                    </div>
                    <div
                      className="capacity dog box"
                      style={
                        hasFee ? { display: "block" } : { display: "none" }
                      }
                    >
                      <div className="row">
                        <div className="col-12 col-md-5 col-lg-5 col-xl-5">
                          <div>
                            <div>
                              <input
                                className="form-control mb-3"
                                type="number"
                                id="amount"
                                name="amount"
                                value={transportationFee}
                                onKeyPress={(event) => {
                                  if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                  }
                                }}
                                onChange={(e) =>
                                  setTransportationFee(e.target.value)
                                }
                                placeholder="￥ 1000"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SaveServiceView onSave={saveServicePreference} preview={saveServicePreference} />
    </>
  );
};

export default ServicePreferences;
