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
  D_DISTANCE,
  D_FLEXIBILITY,
  D_FREQUENT_BREAKS,
  D_TRANSPORTATION, D_TRANSPORTATION_PREFERENCE,
} from "../../../../public/appData/StaticData";
import { strings } from "../../../../public/lang/Strings";
import SaveServiceView from "../SaveServiceView";
import { useSnackbar } from "react-simple-snackbar";

const api = new API();
const HouseSittingPreference = () => {
  const router = useRouter();
  const [success, closeSuccess] = useSnackbar(successOptions);
  const [errorSnack, closeError] = useSnackbar(errorOptions);

  const [description, setDescription] = useState<string>("");
  const [sitterServiceId, setSitterServiceId] = useState<number>();
  const [flexibility, setFlexibility] = useState<select>(D_FLEXIBILITY[0]);
  const [pickup, setPickup] = useState<select>(D_BOOLEAN[0]);
  const [atClientCite, setAtClientCite] = useState<select>(D_BOOLEAN[0]);
  const [hasFee, setHasFee] = useState<0 | 1>(0);
  const [transportationFee, setTransportationFee] = useState<string>("");
  const [frequentBreaks, setFrequentBreaks] = useState<select>(
    D_FREQUENT_BREAKS[0]
  );

  const [transportPreference, setTransportPreference] = useState<any>(D_TRANSPORTATION_PREFERENCE);
  const [show, setShow] = useState<boolean>(false);

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
      .getHouseSittingInfo(2)
      .then((response) => {
        let data = response.data.response;
        setSitterServiceId(data.sitter_boarding_service_id);
        setFlexibility(
          D_FLEXIBILITY.find((v) => v.value == data.flexibility_id)
        );
        setPickup(
          D_BOOLEAN.find((v) => v.value == data.pickup_from_client_home)
        );
        setFrequentBreaks(
          D_FREQUENT_BREAKS.find((v) => v.value == data.frequently_break_id)
        );
        setTransportPreference(data.transport_preferences);

        setAtClientCite(
          data.pet_citing_at_client_place_required == 1
            ? D_BOOLEAN[0]
            : D_BOOLEAN[1]
        );
        setDescription(data.description);
        if (data.has_transportation_fee) {
          setHasFee(1);
          setTransportationFee(data.transportation_fee);
        }
      })
      .catch((error) => console.log(error));
  };

  const handleFlexibilityChange = (data: select) => {
    setFlexibility(data);
  };

  const frequentBreakChange = (data: select) => {
    setFrequentBreaks(data);
  };

  const handleAtClientPlace = (data: select) => {
    setAtClientCite(data);
  };

  const handlePickupChange = (data: select) => {
    setPickup(data);
  };

  const onTextChange = (event) => {
    setDescription(event.target.value);
  };

  const saveServicePreference = () => {
    let data: any = {
      house_sitting_service_id: sitterServiceId,
      flexibility_id: flexibility.value,
      frequently_break_id: frequentBreaks.value,
      pet_citing_at_client_place_required: atClientCite ? 1 : 0,
      description: description,
      has_transportation_fee: hasFee,
      transport_preferences: transportPreference,
      pickup_from_client_home: pickup.value ? 1 : 0,
    };

    api
      .houseSittingPreference(data)
        .then((response) => success("Saved Successfully, please add availability"))
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
                <div className="main-padding">
                  <h6 className="font-medium font-14 mb-3">
                    Specific required for pet sitting at client’s place ?
                  </h6>
                  <div className="form-group">
                    <div className="category-selection charge-select">
                      <div
                        style={{ width: "200px" }}
                        className="custom-react-select"
                      >
                        <Select
                          isSearchable={false}
                          value={atClientCite}
                          onChange={handleAtClientPlace}
                          options={D_BOOLEAN}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <textarea
                      className="form-control w-100"
                      id="requirements"
                      rows={3}
                      value={description}
                      onChange={onTextChange}
                      placeholder={"Mention you requirements"}
                    />
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
                          onChange={(e) => setHasFee(0)}
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
      <SaveServiceView preview={2} onSave={saveServicePreference} />
    </>
  );
};

export default HouseSittingPreference;
