import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import API from "../../../../api/Api";
import {
  errorOptions, select,
  successOptions,
} from "../../../../public/appData/AppData";
import { strings } from "../../../../public/lang/Strings";
import SaveServiceView from "../SaveServiceView";
import { useSnackbar } from "react-simple-snackbar";
import {D_BOOLEAN, D_TRANSPORTATION, D_TRANSPORTATION_PREFERENCE} from "../../../../public/appData/StaticData";
import Select from "react-select";

interface I_Props {
  handleTabChange: (x: number) => void;
}

const api = new API();
const HouseCallPreference: React.FC<I_Props> = ({
  handleTabChange,
}: I_Props) => {
  const router = useRouter();
  const [success, closeSuccess] = useSnackbar(successOptions);
  const [errorSnack, closeError] = useSnackbar(errorOptions);
  const [sitterServiceId, setSitterServiceId] = useState<number>();
  const [hasFee, setHasFee] = useState<0 | 1>(0);
  const [transportationFee, setTransportationFee] = useState<string>("1000");
  const [remarks, setRemarks] = useState<string>("");

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
      .getHouseCallInfo(2)
      .then((response) => {
        let data = response.data.response;
        setRemarks(data.remarks);
        if (data.has_transportation_fee == 1) {
          setHasFee(1);
          setTransportationFee(data.transportation_fee);
        }
        setTransportPreference(data.transport_preferences);
      })
      .catch((error) => console.log(error));
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
      has_transportation_fee: hasFee,
      house_call_service_id: sitterServiceId,
      remarks: remarks,
      transport_preferences:transportPreference,
      pickup_from_client_home: pickup.value ? 1 : 0,
    };
    api
      .houseCallPreference(data)
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
                <div className="mb-3">
                  <h6 className="font-semibold font-14">Remarks</h6>
                  <textarea
                    className="form-control"
                    rows={5}
                    placeholder="Remarks"
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                    defaultValue={""}
                  />
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
      <SaveServiceView preview={7} onSave={saveServicePreference} />
    </>
  );
};

export default HouseCallPreference;
