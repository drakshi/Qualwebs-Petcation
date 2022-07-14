import React, { useEffect, useState } from "react";
import API from "../../../api/Api";
import { strings } from "../../../public/lang/Strings";
import { useSnackbar } from "react-simple-snackbar";
import { errorOptions, successOptions } from "../../../public/appData/AppData";
import Autocomplete from "react-google-autocomplete";
import MyMapComponent from "./Map";
import LocalityInfo from "./LocalityInfo";
import {GOOGLE_PLACES_API} from "../../../api/Constants";

interface IState {
  house_number: string;
  address: string;
  city: string;
  postcode: string;
  hide_address: boolean;
  latitude: string;
  longitude: string;
}

let initialState = {
  house_number: "",
  address: "",
  city: "",
  postcode: "",
  country_id: null,
  hide_address: false,
  latitude: null,
  longitude: null,
};

interface I_PROPS {
  address: any;
  locality: any;
}

type T_LAT_LNG = {
  lat: number;
  lng: number;
};

const api = new API();
const AddressInfo: React.FC<I_PROPS> = (props) => {
  const [openSuccess, closeSuccess] = useSnackbar(successOptions);
  const [openError, closeError] = useSnackbar(errorOptions);
  const [address, setAddress] = useState<IState>(
    props.address ? props.address : initialState
  );
  const [latlng, setLatLng] = useState<T_LAT_LNG>(null);
  const [errors, setErrors] = useState<any>({});

  useEffect(() => {
    if (props.address) {
      setAddress(props.address);
      if (props.address.map_latitude) {
        setLatLng({
          lat: Number(props.address.map_latitude),
          lng: Number(props.address.map_longitude),
        });
      }
    }
  }, [props.address]);

  const onTextChange = (event) => {
    setAddress({ ...address, [event.target.name]: event.target.value });
  };

  const saveAddress = (locality: any) => {
    setErrors({});
    let data = JSON.stringify({
      ...address,
      hide_address: address.hide_address ? 1 : 0,
      map_latitude: latlng ? latlng.lat : null,
      map_longitude: latlng ? latlng.lng : null,
        ...locality
    });
    api
      .saveAddress(data)
      .then((json) => {
        openSuccess("Saved Successfully");
      })
      .catch((error) => {
        if (error.response.status == 422) {
          setErrors(error.response.data.errors);
          if (error.response.data.errors.description) {
            openError(error.response.data.errors.description);
          }
        }
      });
  };


  const setSelectedAddress = (data) => {
    let newAddress = { ...address };
    newAddress.address = data.formatted_address;
    data.address_components.forEach((element) => {
      element.types.forEach((type) => {
        if (type == "postal_code") {
          newAddress.postcode = element.long_name;
        }
        if (type == "administrative_area_level_1") {
          newAddress.city = element.long_name;
        }
      });
    });

    newAddress.latitude = `${data.geometry.location.lat()}`;
    newAddress.longitude = `${data.geometry.location.lng()}`;
    setLatLng({
      lat: data.geometry.location.lat(),
      lng: data.geometry.location.lng(),
    });
    setAddress(newAddress);
    console.log(newAddress);
  };

  const setSelectedLatLng = (data) => {
    setLatLng({
      lat: data.geometry.location.lat(),
      lng: data.geometry.location.lng(),
    });
  };

  return (
    <>
      <div className="pay-tabs">
        <div className="basic-info">
          <div className="row">
            <div className="col-6 col-md-12 col-lg-12 col-xl-12 my-auto">
              <div className="basic-details">
                <h5 className="font-semibold py-3">{strings.AddressInfo}</h5>
              </div>
            </div>
            <div className="col-6 alignment my-auto">
              <div className="basic-btn d-block d-md-none d-lg-none d-xl-none">
                <button className="btn btn-primary btn1 btn-edit">
                  {strings.Edit}
                </button>
                <button className="btn btn-primary btn1">{strings.Save}</button>
              </div>
            </div>
          </div>
          <hr className="d-block d-md-none d-lg-none d-xl-none" />
          <div className="row">
            <div className="col-12 col-md-6 col-lg-5 col-xl-5 my-auto">
              <div className="basic-info-details">
                <p className="mb-0">{strings.HomeAddressLine}</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-5 col-xl-5">
              <div className="basic-info-details">
                <Autocomplete
                  className={
                    "form-control mb-0 " + (errors.address ? "invalid" : "")
                  }
                  apiKey={GOOGLE_PLACES_API}
                  onPlaceSelected={(place) => {
                    setSelectedAddress(place);
                  }}
                  options={{
                    types: ["address"],
                    componentRestrictions: { country: "jp" },
                  }}
                  defaultValue={address.address}
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12 col-md-6 col-lg-5 col-xl-5 my-auto">
              <div className="basic-info-details">
                <p className="mb-0">{strings.AptHouseNo}</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-5 col-xl-5">
              <div className="basic-info-details">
                <input
                  type="text"
                  className={
                    "form-control mb-0 " +
                    (errors.house_number ? "invalid" : "")
                  }
                  name="house_number"
                  placeholder="House No."
                  value={address.house_number}
                  onChange={onTextChange}
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12 col-md-6 col-lg-5 col-xl-5 my-auto">
              <div className="basic-info-details">
                <p className="mb-0">{strings.City}</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-5 col-xl-5">
              <div className="basic-info-details">
                <div className="basic-info-details">
                  <input
                    type="text"
                    className={
                      "form-control mb-0 " + (errors.city ? "invalid" : "")
                    }
                    placeholder="City"
                    name="city"
                    onChange={onTextChange}
                    value={address.city}
                  />
                </div>
              </div>
            </div>
          </div>
          <hr />

          <div className="row">
            <div className="col-12 col-md-6 col-lg-5 col-xl-5 my-auto">
              <div className="basic-info-details">
                <p className="mb-0">{strings.ZIPpostalpostcode}</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-5 col-xl-5">
              <div className="basic-info-details">
                <input
                  type="text"
                  className={
                    "form-control mb-0 " + (errors.postcode ? "invalid" : "")
                  }
                  name="postcode"
                  onChange={onTextChange}
                  placeholder="Post Code"
                  value={address.postcode}
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="custom-check mt-4">
            <label className="check ">
              <input
                checked={address.hide_address}
                onChange={(e) =>
                  setAddress({ ...address, hide_address: e.target.checked })
                }
                type="checkbox"
                name="is_name1"
              />
              <span className="checkmark" />
              Hide my exact address when showing my profile to the client, I
              understand the locality needs to show.
            </label>
          </div>
          <hr />
          <div className="basic-details">
            <h5 className="font-semibold">Search Location on Map</h5>
          </div>
          <Autocomplete
            className={"form-control mb-4 "}
            apiKey={GOOGLE_PLACES_API}
            onPlaceSelected={(place) => {
              setSelectedLatLng(place);
            }}
            options={{
              types: ["address"],
              componentRestrictions: { country: "jp" },
            }}
          />
          <MyMapComponent
            bootstrapURLKeys={{
              key: GOOGLE_PLACES_API,
              language: "en",
            }}
            onChangeLatLng={(e) => {
              setLatLng({ lat: e.latLng.lat(), lng: e.latLng.lng() });
            }}
            draggable={true}
            isMarkerShown
            latlng={latlng}
            googleMapURL={`https://maps.google.com/maps/api/js?key=${GOOGLE_PLACES_API}&amp;libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>
      <LocalityInfo callApi={saveAddress} locality={props.locality} />
    </>
  );
};

export default AddressInfo;
