import React from "react";
import { useState } from "react";
import { numberInput } from "../../../../utils/Helper";
import { useSnackbar } from "react-simple-snackbar";
import {
  errorOptions, select,
  successOptions,
} from "../../../../public/appData/AppData";
import API from "../../../../api/Api";
import SaveServiceView from "../SaveServiceView";
import { useEffect } from "react";
import { useRouter } from "next/router";
import {D_BOOLEAN, D_TRANSPORTATION, D_TRANSPORTATION_PREFERENCE} from "../../../../public/appData/StaticData";
import {strings} from "../../../../public/lang/Strings";
import Select from "react-select";

interface I_PREFERENCE {
  drop_in_visit_service_id?: number;
  visit_per_day: number;
  early_visit_provided: boolean;
  late_visit_provided: boolean;
  client_place_distance: number;
  has_transportation_fee: boolean;
  transportation_fee?: string;
  pickup_from_client_home: number,

}

const api = new API();
export const DropInPreference = ({ handleTabChange }) => {
  const router = useRouter();

  const [sitterServiceId, setSitterServiceId] = useState<number>();
  const [success, closeSuccess] = useSnackbar(successOptions);
  const [errorSnack, closeError] = useSnackbar(errorOptions);
  const [preference, setPreference] = useState<I_PREFERENCE>({
    visit_per_day: 1,
    early_visit_provided: true,
    late_visit_provided: true,
    client_place_distance: 10,
    has_transportation_fee: true,
    transportation_fee: "1",
    pickup_from_client_home: 1,

  });

  const [transportPreference, setTransportPreference] = useState<any>(D_TRANSPORTATION_PREFERENCE);
  const [show, setShow] = useState<boolean>(false);
  const [pickup, setPickup] = useState<select>(D_BOOLEAN[0]);

  useEffect(() => {
    if (router.query.serviceId) {
      console.log("prefes", router.query.serviceId);
      setSitterServiceId(Number(router.query.serviceId));
      getPreferenceInfo();
    } else {
      router.replace("/user/my-services");
    }
  }, []);

  useEffect(() => {
    setTransportPreference(transportPreference)
  }, [show]);

  const getPreferenceInfo = () => {
    api
      .getDropInVisitsInfo(2)
      .then((response) => {
        let data = response.data.response;
        setSitterServiceId(data.sitter_drop_in_visits_services_id);

        let preference = {
          ...response.data.response,
          client_place_distance: data.client_place_distance,
          early_visit_provided: data.early_visit_provided == 1 ? true : false,
          has_transportation_fee:
            data.has_transportation_fee == 1 ? true : false,
          late_visit_provided: data.late_visit_provided == 1 ? true : false,
          transport_preferences: transportPreference,
          pickup_from_client_home: pickup.value ? 1 : 0,
        };
        setTransportPreference(data.transport_preferences)
        setPreference(preference);
      })
      .catch((error) => console.log(error));
  };

  const saveServicePreference = () => {
    if (
      (preference.has_transportation_fee &&
        preference.transportation_fee == "") ||
      preference.transportation_fee == undefined
    ) {
      errorSnack("Enter Transportation Fee");
      return false;
    }

    if (
      preference.client_place_distance == NaN ||
      preference.transportation_fee == undefined
    ) {
      errorSnack("Enter Distance from Client Place");
      return false;
    }

    console.log(sitterServiceId);
    let data = JSON.stringify({
      drop_in_visit_service_id: sitterServiceId,
      visit_per_day: preference.visit_per_day,
      early_visit_provided: preference.early_visit_provided ? 1 : 0,
      late_visit_provided: preference.late_visit_provided ? 1 : 0,
      client_place_distance: preference.client_place_distance,
      has_transportation_fee: preference.has_transportation_fee ? 1 : 0,
      transport_preferences: transportPreference,
      pickup_from_client_home: pickup.value ? 1 : 0,
    });
    api
      .dropInVisitPreference(data)
      .then((response) => {
        success("Saved Successfully");
        handleTabChange(2);
      })
      .catch((error) => console.log(error));
  };

  const handlePickupChange = (data: select) => {
    setPickup(data);
  };

  const setPreferences = (e:any,selected:any,index:number) => {
    const data = selected;
    const arrData = transportPreference;
    if(e.target.name === 'status'){
      data.status = e.target.checked ? 1:0
    }else {
      data.price_start_from = e.target.value
    }
    arrData[index] = data
    setTransportPreference(arrData)
    setShow(!show)
  };

  return (
    <>
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
                How many visits can you provide per day?
              </h6>
              {/*<p class="font-12"> You can select from the options part-time & fulltime; selecting full-time means you are available all the time at home when boarding the pet.</p>*/}
              <div className="custom-check mb-2">
                <label className="check ">
                  <input
                    type="radio"
                    className="class1"
                    name="is_name2"
                    defaultValue="dog"
                    checked={preference.visit_per_day == 1}
                    onChange={() =>
                      setPreference({ ...preference, visit_per_day: 1 })
                    }
                  />
                  <span className="checkmark" />1 time
                </label>
              </div>
              <div className="custom-check mb-2">
                <label className="check ">
                  <input
                    type="radio"
                    className="class1"
                    name="is_name2"
                    defaultValue="cat"
                    checked={preference.visit_per_day == 2}
                    onChange={() =>
                      setPreference({ ...preference, visit_per_day: 2 })
                    }
                  />
                  <span className="checkmark" />2 times
                </label>
              </div>
              <div className="custom-check mb-2">
                <label className="check ">
                  <input
                    type="radio"
                    className="class1"
                    name="is_name2"
                    defaultValue="cat"
                    checked={preference.visit_per_day == 3}
                    onChange={() =>
                      setPreference({ ...preference, visit_per_day: 3 })
                    }
                  />
                  <span className="checkmark" />3 times
                </label>
              </div>
            </div>
            <div className="main-padding">
              <h6 className="font-medium font-14">
                Do you provide early or late visits
              </h6>
              <div className="custom-check mb-2">
                <label className="check ">
                  <input
                    type="radio"
                    checked={preference.early_visit_provided}
                    onChange={() =>
                      setPreference({
                        ...preference,
                        early_visit_provided: true,
                      })
                    }
                    name="visits1"
                  />
                  <span className="checkmark" />
                  Before 8 am
                </label>
              </div>
              <div className="custom-check mb-2">
                <label className="check ">
                  <input
                    type="radio"
                    name="visits2"
                    checked={!preference.early_visit_provided}
                    onChange={() =>
                      setPreference({
                        ...preference,
                        early_visit_provided: false,
                      })
                    }
                  />
                  <span className="checkmark" />
                  after 6 pm
                </label>
              </div>
            </div>
            <div className="main-padding">
              <h6 className="font-medium font-14 mb-3">
                How far from client's place can you do drop-in-visit?
              </h6>
              <div className="row">
                <div className="col-sm-3">
                  <div className="form-group mb-0">
                    <input
                      className="form-control"
                      id="distance"
                      onChange={(e) =>
                        setPreference({
                          ...preference,
                          client_place_distance: Number(e.target.value),
                        })
                      }
                      value={preference.client_place_distance}
                      placeholder="2 km"
                      maxLength={3}
                      onKeyPress={numberInput}
                    />
                    <p
                      style={{
                        position: "absolute",
                        top: 10,
                        bottom: 10,
                        right: 15,
                      }}
                    >
                      kms
                    </p>
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
              <div className="col-6 col-md-6 col-lg-6 col-xl-6">
                <h6 className="font-medium font-14 mb-3">
                  Do you charge transportation fee?
                </h6>
                <div className="custom-check mb-3">
                  <label className="check ">
                    <input
                      type="radio"
                      className="class1"
                      name="transportation"
                      checked={preference.has_transportation_fee}
                      onChange={() =>
                        setPreference({
                          ...preference,
                          has_transportation_fee: true,
                        })
                      }
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
                      name="transportation"
                      checked={!preference.has_transportation_fee}
                      onChange={() =>
                        setPreference({
                          ...preference,
                          has_transportation_fee: false,
                        })
                      }
                    />
                    <span className="checkmark" />
                    No
                  </label>
                </div>

              </div>
            </div>
            {preference.has_transportation_fee ? <div className="row">
              <div className="col-sm-12">
                <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                  <h6 className="font-medium font-14 mb-3">
                    {strings.Makebookingwith}
                  </h6>
                  {transportPreference && transportPreference.map((val,index)=>(<div key={`transport_${index}`} className="col-12 p-0 mb-2">
                    <div className="row align-items-center">
                      <div className="col-md-3 ps-0">
                        <div className="custom-check mb-0">
                          <label className="check ">
                            <input
                                type="checkbox"
                                className="class1"
                                name="status"
                                checked={val.status}
                                onChange={(e) => {setPreferences(e,val,index)}}
                            />
                            <span className="checkmark" />
                            {D_TRANSPORTATION[index].label}
                          </label>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <input name="price_start_from" type={'text'} className="form-control" placeholder="amount" value={val.price_start_from} onChange={(e)=>{setPreferences(e,val,index)}}/>
                      </div>
                    </div>
                  </div>))}
                </div>
              </div>
            </div>:null}
          </div>
        </div>
      </div>

      <SaveServiceView preview={3} onSave={saveServicePreference} />
    </>
  );
};

export default DropInPreference;
