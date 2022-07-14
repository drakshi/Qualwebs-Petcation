import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { valueTernary } from "react-select/dist/declarations/src/utils";
import API from "../../../api/Api";
import { D_SERVICE_AND_AMENITIES } from "../../../public/appData/StaticData";
import { strings } from "../../../public/lang/Strings";
interface IState {
  available_pets: number[];
  reservation_type_id: number;
  reservation_info: string;
  smoking_cessation_id: number;
  smoking_cessation_info: string;
  parking_id: number;
  parking_info: string;
  service_amenities_id: number[];
  services: number[];
  service_amenities_info: string;
  language_id: number[];
  languages: number[];
  language_info: string;
  homepage: string;
  facebook_url: string;
  instagram_url: string;
  twitter_url: string;
  remark: string;
}
const api = new API();
export default function SpotDetailedInfo(props: any) {
  const [amenities, setAmenities] = useState<IState>({
    available_pets: [],
    reservation_type_id: 1,
    reservation_info: "",
    smoking_cessation_id: 1,
    smoking_cessation_info: "",
    parking_id: 1,
    parking_info: "",
    service_amenities_id: [1],
    services: [],
    service_amenities_info: "",
    language_id: [1],
    languages: [],
    language_info: "",
    homepage: "",
    facebook_url: "",
    instagram_url: "",
    twitter_url: "",
    remark: "",
  });
  const [reservationTypes, setReservationTypes] = useState([]);
  const [smokingCessions, setSmokingCessions] = useState<any>([]);
  const [parking, setParking] = useState<any>([]);
  const [langauges, setLanguage] = useState<any>([]);

  useEffect(() => {
    getReservationTypes();
    getSmokingCession();
    getParkings();
    getLanguages();
  }, []);

  useEffect(() => {

    if (props.data) {
      let aminity = props.data;
      aminity.service_amenities_id = aminity.services.map((val)=> val.service_id)
      aminity.language_id = aminity.languages.map((val)=> val.language_id)
      setAmenities(aminity);
    }
  }, [props.data]);

  const onChange = (e: any) => {
    setAmenities({ ...amenities, [e.target.name]: e.target.value });
  };

  const getReservationTypes = () => {
    api
      .getReservationTypes()
      .then((res) => {
        setReservationTypes(res.data.response);
      })
      .catch((error) => {});
  };

  const getSmokingCession = () => {
    api
      .getSmokingCession()
      .then((res) => {
        setSmokingCessions(res.data.response);
      })
      .catch((error) => {});
  };

  const getParkings = () => {
    api
      .getParking()
      .then((res) => {
        setParking(res.data.response);
      })
      .catch((error) => {});
  };

  const getLanguages = () => {
    api
      .getLangauges()
      .then((res) => {
        setLanguage(res.data.response);
      })
      .catch((error) => {});
  };

  const onSubmit = () => {
    let data = JSON.stringify(amenities);
    let amenity = JSON.parse(data)
    delete amenity.services;
    delete  amenity.languages;
    delete  amenity.id;
    delete  amenity.user_spot_id;
    props.updateAmenities(amenity);
    props.changePage(6);
  };

  return (
    <div className="select-spot-category content-padding">
      <h5 className="font-semibold mb-3">{strings.DetailedinfoAmenities}</h5>
      <div className="booking-for">
        <div className="reservation-details">
          <h6 className="font-medium">{strings.Reservations}</h6>
          {reservationTypes.map((value, index) => (
            <div key={index} className="custom-check mb-3">
              <label className="check ">
                <input
                  type="radio"
                  className="class1"
                  defaultValue="dog"
                  onChange={() =>
                    setAmenities({
                      ...amenities,
                      reservation_type_id: value.id,
                    })
                  }
                  checked={value.id == amenities.reservation_type_id}
                />
                <span className="checkmark" />
                {value.name}
              </label>
            </div>
          ))}
          <h6 className="font-medium mb-2">Remark on reservations</h6>
          <div className="form-group">
            <textarea
              className="form-control"
              rows={6}
              id="trasnport"
              itemType="text"
              placeholder="Time when telephone reservations are possible [Weekdays 11: 00-21:00]
                           Please let us know if you are late
                           Cancellation fee is 20% of the reservation course fee"
              value={amenities.reservation_info}
              onChange={onChange}
              name="reservation_info"
            />
          </div>
        </div>
        <hr />
        <div className="reservation-details">
          <h6 className="font-medium">Smoking cessation / smoking</h6>
          <p className="font-12 mb-0">
            Please select “No smoking / smoking” in the space where you can eat
            and drink
          </p>
          <p className="font-12">
            * If there is a smoking room or smoking area other than where you
            can eat and drink, please enter it in the remark column.
          </p>
          <div className="payment-method">
            <div className="row mb-2">
              <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                {smokingCessions.map((value, index) => (
                  <div key={index} className="custom-check">
                    <label className="check ">
                      <input
                        type="radio"
                        className="class1"
                        checked={value.id == amenities.smoking_cessation_id}
                        onChange={() =>
                          setAmenities({
                            ...amenities,
                            smoking_cessation_id: value.id,
                          })
                        }
                      />
                      <span className="checkmark" />
                      {value.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="form-group mb-0 mt-2">
              <input
                className="form-control"
                placeholder="Example There is a smoking room"
                id="service-charge"
                value={amenities.smoking_cessation_info}
                onChange={onChange}
                name="smoking_cessation_info"
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="reservation-details">
          <h6 className="font-medium">Parking</h6>
          <div className="payment-method">
            <div className="row mb-2">
              <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                {parking.map((value, index) => (
                  <div key={index} className="custom-check">
                    <label className="check ">
                      <input
                        type="radio"
                        className="class1"
                        onChange={() =>
                          setAmenities({ ...amenities, parking_id: value.id })
                        }
                        checked={value.id == amenities.parking_id}
                        defaultValue="dog"
                      />
                      <span className="checkmark" />
                      {value.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="form-group mb-0 mt-2">
              <input
                className="form-control"
                placeholder="Example 10 cars, with coin parking nearby"
                id="coin-parking"
                value={amenities.parking_info}
                onChange={onChange}
                name={"parking_info"}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="reservation-details">
          <h6 className="font-medium">Service &amp; Amenities</h6>
          <div className="payment-method">
            <div className="row mb-2">
              <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                {D_SERVICE_AND_AMENITIES.map((value, index) => (
                    <div key={index} className="custom-check">
                      <label className="check ">
                        <input
                            multiple
                            type="checkbox"
                            className="class1"
                            checked={amenities.service_amenities_id ? amenities.service_amenities_id.filter((val)=> val == value.id).length > 0  ? true: false : false}
                            onChange={(e) => {
                              let amenity = JSON.stringify(amenities);
                              let a = JSON.parse(amenity);
                              if(!e.target.checked){
                                a.service_amenities_id = a.service_amenities_id.filter((val)=> val != value.id)
                                setAmenities(a);
                              }else {
                                setAmenities({
                                  ...a,
                                  service_amenities_id: [...a.service_amenities_id, value.id],
                                })
                              }
                            }}
                            defaultValue="dog"
                        />
                        <span className="checkmark" />
                        {value.name}
                      </label>
                    </div>
                ))}
              </div>
            </div>
            <div className="form-group mb-0 mt-2">
              <input
                className="form-control"
                placeholder="Example Has pool for pets, has pet gromming facility"
                id="coin-parking"
                value={amenities.service_amenities_info}
                onChange={onChange}
                name="service_amenities_info"
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="reservation-details">
          <h6 className="font-medium">Languages</h6>
          <div className="payment-method">
            <div className="row mb-2">
              <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                {langauges.map((value, index) => (
                  <div key={index} className="custom-check">
                    <label className="check ">
                      <input
                          multiple
                        type="checkbox"
                        className="class1"
                          checked={amenities.language_id ? amenities.language_id.filter((val)=> val == value.id).length > 0  ? true: false : false}
                          onChange={(e) => {
                            let amenity = JSON.stringify(amenities);
                            let a = JSON.parse(amenity);
                            if(!e.target.checked){
                              a.language_id = a.language_id.filter((val)=> val != value.id)
                              setAmenities(a);
                            }else {
                              setAmenities({
                                ...a,
                                language_id: [...a.language_id, value.id],
                              })
                            }
                          }}
                        defaultValue="dog"
                      />
                      <span className="checkmark" />
                      {value.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="form-group mb-0 mt-2">
              <input
                className="form-control"
                placeholder="Example  Russian, Korean, Turkish"
                id="coin-parking"
                value={amenities.language_info}
                name="language_info"
                onChange={onChange}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="reservation-details">
          <h6 className="font-medium">Hompage</h6>
          <div className="form-group mb-0">
            <input
              className="form-control"
              onChange={onChange}
              value={amenities.homepage}
              name="homepage"
              placeholder="https://"
              type="url"
            />
          </div>
        </div>
        <hr />
        <div className="reservation-details">
          <h6 className="font-medium">Official account</h6>
          <div className="row mb-2">
            <div className="col-sm-3 my-auto">
              <div className="fb-icon">
                <img src="/images/facebook.png" className="img-fluid" />
                Facebook
              </div>
            </div>
            <div className="col-sm-9">
              <input
                className="form-control"
                placeholder="Please enter the following URL"
                type="url"
                onChange={onChange}
                value={amenities.facebook_url}
                name="facebook_url"
              />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm-3 my-auto">
              <div className="fb-icon">
                <img src="/images/twitter.png" className="img-fluid" />
                Twitter
              </div>
            </div>
            <div className="col-sm-9">
              <input
                className="form-control"
                placeholder="Please enter the following URL"
                type="url"
                onChange={onChange}
                value={amenities.twitter_url}
                name="twitter_url"
              />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm-3 my-auto">
              <div className="fb-icon">
                <img src="/images/instagram.png" className="img-fluid" />
                Instagram
              </div>
            </div>
            <div className="col-sm-9">
              <input
                className="form-control"
                placeholder="Please enter the following URL"
                type="url"
                onChange={onChange}
                value={amenities.instagram_url}
                name="instagram_url"
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="reservation-details">
          <h6 className="font-medium">Remarks</h6>
          <div className="form-group">
            <textarea
              className="form-control"
              rows={6}
              id="trasnport"
              onChange={onChange}
              value={amenities.remark}
              name="remark"
              typeof="text"
              placeholder="Example Pet can only sit on the terrace"
            />
          </div>
        </div>
      </div>
      <div className="modal-footer px-0 pb-0 justify-content-between">
        <button className="btn btn-primary btn1 btn-edit">
          back
        </button>
        <a onClick={() => onSubmit()}>
          <button className="btn btn-primary">Save &amp; proceed</button>
        </a>
      </div>
    </div>
  );
}
