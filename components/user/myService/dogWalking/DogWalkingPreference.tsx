import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import API from "../../../../api/Api";
import {
  errorOptions,
  select,
  successOptions,
} from "../../../../public/appData/AppData";
import {
  D_BOOLEAN,
  D_TRANSPORTATION, D_TRANSPORTATION_PREFERENCE,
  D_WALK_COUNT,
} from "../../../../public/appData/StaticData";
import { strings } from "../../../../public/lang/Strings";
import SaveServiceView from "../SaveServiceView";
import { useSnackbar } from "react-simple-snackbar";

interface I_Props {
  handleTabChange: (x: number) => void;
}

const api = new API();
const DogWalkingPreference: React.FC<I_Props> = ({
  handleTabChange,
}: I_Props) => {
  const router = useRouter();
  const [success, closeSuccess] = useSnackbar(successOptions);
  const [errorSnack, closeError] = useSnackbar(errorOptions);

  const [sitterServiceId, setSitterServiceId] = useState<number>();
  const [count, setCount] = useState<select>(D_WALK_COUNT[0]);
  const [applyCharges, setApplyCharges] = useState<select>(D_BOOLEAN[0]);
  const [hasFee, setHasFee] = useState<0 | 1>(0);
  const [transportationFee, setTransportationFee] = useState<string>("1000");
  const [extraCharges, setExtraCharges] = useState<string>("10");
  const [extend, setExtend] = useState<select>(D_BOOLEAN[0]);

  const [transportPreference, setTransportPreference] = useState<any>(D_TRANSPORTATION_PREFERENCE);
  const [show, setShow] = useState<boolean>(false);
  const [pickup, setPickup] = useState<select>(D_BOOLEAN[0]);

  useEffect(() => {
    if (router.query.serviceId) {
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
      .getDogWalkingInfo(2)
      .then((response) => {
        let data = response.data.response;
        setCount(D_WALK_COUNT.find((v) => v.value == data.dogs_walk_together));
        setApplyCharges(
          D_BOOLEAN.find((v) => v.value == data.extended_charges_applied)
        );
        setExtend(D_BOOLEAN.find((v) => v.value == data.extend_walk));
        setApplyCharges(
          D_BOOLEAN.find((v) => v.value == data.extended_charges_applied)
        );

        setPickup(
            D_BOOLEAN.find((v) => v.value == data.pickup_from_client_home)
        );


        setTransportPreference(data.transport_preferences)

        if (data.extended_charges_applied == 1) {
          setExtraCharges(data.extended_price_per_mint);
        }
        if (data.has_transportation_fee == 1) {
          setHasFee(1);
          setTransportationFee(data.transportation_fee);
        }
      })
      .catch((error) => console.log(error));
  };

  const handleCountChange = (data: select) => {
    setCount(data);
  };

  const extendChange = (data: select) => {
    setExtend(data);
  };

  const applyChargesChange = (data: select) => {
    setApplyCharges(data);
    setExtraCharges("0");
  };

  const handlePickupChange = (data: select) => {
    setPickup(data);
  };

  const saveServicePreference = () => {
    if (
      (hasFee && transportationFee == "") ||
      (hasFee && transportationFee == undefined)
    ) {
      errorSnack("Enter Transportation Fee");
      return false;
    }

    let data: any = {
      dogs_walk_together: count.value,
      extend_walk: extend.value ? 1 : 0,
      extended_charges_applied: applyCharges.value ? 1 : 0,
      extended_price_per_mint: extraCharges,
      has_transportation_fee: hasFee,
      pickup_from_client_home: pickup.value ? 1 : 0,
      transport_preferences: transportPreference,
      pet_walking_service_id: sitterServiceId,
    };
    api
      .dogWalkingPreference(data)
      .then((response) => {
        success("Saved Successfully");
        handleTabChange(2);
      })
      .catch((error) => console.log(error));
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
                    Capacity at one time
                  </h6>
                  <p className="font-12">
                    How may Dogs you can take for walk together
                  </p>
                  <div className="form-group">
                    <div className="category-selection charge-select">
                      <div
                        style={{ width: "200px" }}
                        className="custom-react-select"
                      >
                        <Select
                          onChange={handleCountChange}
                          value={count}
                          options={D_WALK_COUNT}
                          isSearchable={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main-padding">
                  <h6 className="font-medium font-14">
                    {
                      "Would you allow to extend walk timings if asked after reaching client’s place?"
                    }
                  </h6>
                  <p className="font-12"></p>
                  <div className="form-group">
                    <div className="category-selection charge-select">
                      <div
                        style={{ width: "200px" }}
                        className="custom-react-select"
                      >
                        <Select
                          options={D_BOOLEAN}
                          value={extend}
                          onChange={extendChange}
                          isSearchable={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <h6 className="font-medium font-14 mb-3">
                      {"Addition charges for extending time"}
                    </h6>
                    <div className="form-group">
                      <div className="category-selection charge-select">
                        <div
                          style={{ width: "200px" }}
                          className="custom-react-select"
                        >
                          <Select
                            options={D_BOOLEAN}
                            value={applyCharges}
                            onChange={applyChargesChange}
                            isSearchable={false}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {applyCharges.value ? (
                    <div className="col-sm-3">
                      <h6 className="font-medium font-14 mb-3">
                        {"Extra charges"}
                      </h6>
                      <div className="form-group">
                        <div className="category-selection charge-select">
                          <div>
                            <div>
                              <input
                                className="form-control mb-3"
                                type="number"
                                id="amount"
                                name="amount"
                                value={extraCharges}
                                onKeyPress={(event) => {
                                  if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                  }
                                }}
                                onChange={(e) =>
                                  setExtraCharges(e.target.value)
                                }
                                placeholder="￥ 1000"
                              ></input>
                              <p
                                style={{
                                  position: "absolute",
                                  top: 10,
                                  bottom: 10,
                                  right: 30,
                                }}
                              >
                                ￥
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
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
                      {strings.Doyouchargetransportationfee}
                    </h6>
                    <div className="custom-check mb-3">
                      <label className="check ">
                        <input
                          type="radio"
                          className="class1"
                          name="fee"
                          value={1}
                          checked={hasFee == 1}
                          onChange={(e) => setHasFee(1)}
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
                          name="fee"
                          value={0}
                          checked={hasFee == 0}
                          onChange={(e) => {
                            setTransportationFee("0");
                            setHasFee(0);
                          }}
                        />
                        <span className="checkmark" />
                        No
                      </label>
                    </div>

                  </div>
                </div>
                {hasFee ? <div className="row">
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
        </div>
      </div>
      <SaveServiceView preview={5} onSave={saveServicePreference} />
    </>
  );
};

export default DogWalkingPreference;
