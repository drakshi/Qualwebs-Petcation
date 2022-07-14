import React from "react";
import { useState } from "react";
import { strings } from "../../../public/lang/Strings";
import { numberInput } from "../../../utils/Helper";
import Autocomplete from "react-google-autocomplete";
import { useEffect } from "react";
import MyMapComponent from "../myProfile/Map";
import {GOOGLE_PLACES_API} from "../../../api/Constants";

interface I_State {
  spot_name: string;
  english_name: string;
  phone_number: string;
  address: string;
  postal_code: string;
  city: string;
  latitude: string;
  longitude: string;
}

export default function SpotBasicInfo(props) {
  const [errors, setErrors] = useState<any>({});
  const [address, setAddress] = useState<any>({});
  const [basicDetails, setBasicDetails] = useState<I_State>({
    spot_name: "",
    english_name: "",
    phone_number: "",
    address: "",
    postal_code: "",
    city: "",
    latitude: "0",
    longitude: "0",
  });

  useEffect(() => {
    if (props.data) {
      setBasicDetails({ ...props.data });
    }
  }, [props]);

  useEffect(() => {
    if (address.address) {
      setBasicDetails({ ...basicDetails, ...address });
    }
  }, [address]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBasicDetails({ ...basicDetails, [e.target.name]: e.target.value });
    if (Object.keys(errors).includes(e.target.name)) {
      let newValue = { ...errors };
      delete newValue[e.target.name];
      setErrors(newValue);
    }
  };

  function setSelectedAddress(data) {
    var newAddress = { ...address };

    newAddress.address = data.formatted_address;
    data.address_components.forEach((element) => {
      element.types.forEach((type) => {
        if (type == "postal_code") {
          newAddress.postal_code = element.long_name;
        }
        if (type == "administrative_area_level_1") {
          newAddress.city = element.long_name;
        }
      });
    });
    newAddress.latitude = `${data.geometry.location.lat()}`;
    newAddress.longitude = `${data.geometry.location.lng()}`;
    setAddress(newAddress);
  }

  const onSubmit = () => {
    setErrors({});
    if (basicDetails.spot_name == "") {
      setErrors({ ...errors, spot_name: true });
      return false;
    }

    if (basicDetails.english_name == "") {
      setErrors({ ...errors, english_name: true });
      return false;
    }

    if (
      basicDetails.phone_number == "" ||
      basicDetails.phone_number.length < 8
    ) {
      setErrors({ ...errors, phone_number: true });
      return false;
    }

    if (basicDetails.address == "") {
      setErrors({ ...errors, address: true });
      return false;
    }

    if (basicDetails.postal_code == "") {
      setErrors({ ...errors, postal_code: true });
      return false;
    }

    if (basicDetails.city == "") {
      setErrors({ ...errors, city: true });
      return false;
    }

    props.updateBasicInfo({ ...basicDetails });
    props.changePage(3);
  };
  return (
    <div className="select-spot-category content-padding">
      <h5 className="font-semibold">
        {strings.basicinfo} <span className="sign">*</span>
      </h5>
      <div className="booking-for">
        <h6 className="font-medium mb-1">Add a business</h6>
        <p className="font-12">
          *Please not this business page will not appear in search until it has
          been approved by our moderators.
        </p>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <div className="info-form">
              <form>
                <div className="form-group">
                  <label>Spot Name*</label>
                  <input
                    className={
                      "form-control " + (errors.spot_name ? "invalid" : "")
                    }
                    name="spot_name"
                    placeholder="京都ハウス"
                    type="text"
                    value={basicDetails.spot_name}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <label>English name</label>
                  <input
                    className={
                      "form-control " + (errors.english_name ? "invalid" : "")
                    }
                    name="english_name"
                    placeholder="name"
                    type="text"
                    value={basicDetails.english_name}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <label>Phone number</label>
                  <input
                    className={
                      "form-control " + (errors.phone_number ? "invalid" : "")
                    }
                    id="phone-no"
                    name="phone_number"
                    value={basicDetails.phone_number}
                    onChange={onChange}
                    type="text"
                    placeholder="Phone Number"
                    maxLength={11}
                    onKeyPress={numberInput}
                  />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <Autocomplete
                    className={
                      "form-control " + (errors.address ? "invalid" : "")
                    }
                    apiKey={GOOGLE_PLACES_API}
                    onPlaceSelected={setSelectedAddress}
                    options={{
                      types: ["address"],
                      componentRestrictions: { country: "jp" },
                    }}
                    defaultValue={basicDetails.address}
                  />
                </div>
                <div className="form-group">
                  <label>Postal code</label>
                  <input
                    className={
                      "form-control " + (errors.postal_code ? "invalid" : "")
                    }
                    id="postal-cdde"
                    type="text"
                    placeholder="code"
                    value={basicDetails.postal_code}
                    onChange={onChange}
                    name="postal_code"
                  />
                </div>

                <div className="form-group">
                  <div className="category-selection charge-select">
                    <label>City</label>
                    <input
                      className={
                        "form-control " + (errors.city ? "invalid" : "")
                      }
                      id="city"
                      placeholder="Koyoto House"
                      type="text"
                      name="city"
                      value={basicDetails.city}
                      onChange={onChange}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            {basicDetails.latitude ? <MyMapComponent
              bootstrapURLKeys={{
                key: GOOGLE_PLACES_API,
                language: "en",
              }}
              draggable={false}
              onChangeLatLng={(e) => {}}
              isMarkerShown
              latlng={[{
                lat: Number(basicDetails.latitude),
                lng: Number(basicDetails.longitude),
              },{
                lat: Number(basicDetails.latitude),
                lng: Number(basicDetails.longitude),
              }]}
               googleMapURL={`https://maps.google.com/maps/api/js?key=${GOOGLE_PLACES_API}&amp;libraries=geometry,drawing,places`}
               loadingElement={<div style={{ height: `100%` }} />}
               containerElement={<div style={{ height: `400px` }} />}
               mapElement={<div style={{ height: `100%` }} />}
            />:null}
          </div>
        </div>
      </div>
      <div className="modal-footer px-0 pb-0 justify-content-end">
        <button className="btn btn-primary btn1 btn-edit">
          back
        </button>
        <button onClick={() => onSubmit()} className="btn btn-primary">
          Save &amp; proceed
        </button>
      </div>
    </div>
  );
}
