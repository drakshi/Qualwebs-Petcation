import { useRouter } from "next/router";
import React, {useEffect, useRef, useState} from "react";
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

interface I_Props {
  serviceId: number;
  handleTabChange: (x: number) => void;
}

const api = new API();
const ServicePreference: React.FC<I_Props> = ({
  serviceId,
  handleTabChange,
}: I_Props) => {
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
  const [hasFee, setHasFee] = useState<0 | 1>(0);
  const [transportationFee, setTransportationFee] = useState<string>("1000");
  const [frequentBreaks, setFrequentBreaks] = useState<select>(
    D_FREQUENT_BREAKS[0]
  );
  const [transportPreference, setTransportPreference] = useState<any>(D_TRANSPORTATION_PREFERENCE);
  const [show, setShow] = useState<boolean>(false)



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
    var call;
    switch (serviceId) {
      case 1:
        call = api.getBoardingInfo(2);
        break;
      case 4:
        call = api.getPetDayCareInfo(2);
    }
    call
      .then((response) => {
        let data = response.data.response;
        setFlexibility(
          D_FLEXIBILITY.find((v) => v.value == data.flexibility_id)
        );
        setPickup(
          D_BOOLEAN.find((v) => v.value == data.pickup_from_client_home)
        );
        setFrequentBreaks(
          D_FREQUENT_BREAKS.find((v) => v.value == data.frequently_break_id)
        );
        setTransportaion(
          D_TRANSPORTATION.find((v) => v.value == data.transportation_id)
        );
        setDistance(D_DISTANCE.find((v) => v.value == data.travel_distance));
        setTransportPreference(data.transport_preferences);

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

  const handlePickupChange = (data: select) => {
    setPickup(data);
  };

  const handleTransportation = (data: select) => {
    setTransportaion(data);
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

  const saveServicePreference = () => {
    let data: any = {
      boarding_service_id: sitterServiceId,
      flexibility_id: flexibility.value,
      frequently_break_id: frequentBreaks.value,
      pickup_from_client_home: pickup.value ? 1 : 0,
      has_transportation_fee: hasFee,
      transport_preferences: transportPreference,
    };
    var call;
    switch (serviceId) {
      case 1:
        data.boarding_service_id = sitterServiceId;
        call = api.boardingPreference(data);
        break;
      case 4:
        data.day_care_service_id = sitterServiceId;
        call = api.petDayCarePreference(data);
        break;
    }
    call
      .then((response) => {
        success("Saved Successfully");
        handleTabChange(2);
      })
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

                  <div className="col-sm-6">
                    <div className="col-12 col-md-12 col-lg-12 col-xl-12">
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
                            <input name="price_start_from" type={'text'} className="form-control" placeholder="amount" value={val.price_start_from} onChange={(e)=>{
                                setPreferences(e, val, index)
                            }} onKeyPress={(event) => {
                              if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}  />
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
      <SaveServiceView preview={serviceId} onSave={saveServicePreference} />
    </>
  );
};

export default ServicePreference;
