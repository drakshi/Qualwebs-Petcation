import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  errorOptions,
  gender,
  petSize,
  select,
  serviceData,
  successOptions,
} from "../../public/appData/AppData";
import { strings } from "../../public/lang/Strings";
import API from "../../api/Api";
import { AxiosResponse } from "axios";
import Res from "../../models/response.interface";
import I_REQUEST_DATA, {
  I_CALCULATED_AMOUNT,
} from "../../models/requestSitter.interface";
import I_PET from "../../models/pet.interface";
import { deepClone, numberInput } from "../../utils/Helper";
import Select from "react-select";
import { useSnackbar } from "react-simple-snackbar";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import { I_PET_ADDITIONAL_SERVICE } from "../../models/boardingService.interface";
import { addDays, addMonths, format, isSameDay } from "date-fns";
import Autocomplete from "react-google-autocomplete";
import I_BREED from "../../models/breed.interface";
import withAuth from "../../components/hoc/withAuth";
import moment from "moment";
import UploadFileModal from "../../components/common/UploadfileModal";
import { dataURLtoFile } from "../../utils/Helper";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import {GOOGLE_PLACES_API} from "../../api/Constants";
import {D_TRANSPORTATION, D_TRANSPORTATION_PREFERENCE} from "../../public/appData/StaticData";

const api = new API();

interface requestData {
  pet_type: number;
  pets: number[];
  pet_size_id: number;
  additional_services: number[];
  need_sitter_to_pickup: 0 | 1;
  pickup_address: {
    address1: string;
    latitude: string;
    longitude: string;
    address2: string;
    city: string;
    zip_code: string;
  };
  message: string;
  want_to_receive_media: 0 | 1;
}
export const Booking: React.FC<{}> = () => {
  const router = useRouter();
  const [openSuccess, closeSuccess] = useSnackbar(successOptions);
  const [openError, closeError] = useSnackbar(errorOptions);

  const [service, setService] = useState<select>(null);
  const [sitterName, setSitterName] = useState<string | string[]>();
  const [sitterId, setSitterId] = useState<string | string[]>();
  const [sitterPets, setSitterPets] = useState<number[]>([]);
  const [myPets, setMyPets] = useState<I_PET[]>([]);
  const [breeds, setBreeds] = useState<I_BREED[]>([]);
  const [selectedBreed, setSelectedBreed] = useState<I_BREED>();
  const [selectedImage, setSelectedImage] = useState<string>();
  const [selectedGender, setSelectedGender] = useState<any>();

  const [showTransport, setShowTransport] = useState<boolean>(false);
  const [transportPreference, setTransportPreference] = useState<any>(D_TRANSPORTATION_PREFERENCE);

  const [petDetails, setPetDetails] = useState<any>({
    pet_name: "",
    weight: "",
    age_year: "",
    age_month: "",
  });
  const [addPetView, setAddPetView] = useState<boolean>(false);
  const [additionalServices, setAdditionalServices] = useState<
    I_PET_ADDITIONAL_SERVICE[]
  >([]);
  const [cities, setCities] = useState<any>([]);
  const [calculatedAmount, setCalculatedAmount] =
    useState<I_CALCULATED_AMOUNT>(null);
  const [dates, setDates] = useState<any>({ start: undefined, end: undefined });
  const [disabledDates, setDisabledDates] = useState<Date[]>([]);
  const [errors, setErrors] = useState<any>({});
  const [pickupTime, setPickupTime] = useState({
    from: "",
    to: "",
  });
  const [dropOffTime, setDropOffTime] = useState({
    from: "",
    to: "",
  });
  const [requestData, setRequestData] = useState<requestData>({
    pet_type: undefined,
    pet_size_id: 1,
    pets: [],
    additional_services: [],
    need_sitter_to_pickup: 0,
    pickup_address: {
      address1: "",
      latitude: "",
      longitude: "",
      address2: "",
      city: "",
      zip_code: "",
    },
    message: "",
    want_to_receive_media: 0,
  });
  const [openCropper, setOpenCropper] = useState<boolean>(false);
  const [cropper, setCropper] = useState<any>();
  const [uploadedFilePath, setUploadedFilePath] = useState<any>();



  useEffect(() => {
    if (router.query.sitterId && router.query.service) {
      setSitterId(router.query.sitterId);
      setService(serviceData.find((v) => v.value == router.query.service));
      if(router.query.petType) {
        let pet = JSON.parse(router.query.petType as string);
        setRequestData({...requestData, pet_type: pet.key});
      }
      setSitterName(router.query.name);
      getCities(1);
    } else {
      router.replace("/search-sitter");
    }
  }, []);

  useEffect(() => {
    if (service) {
      petAdditionalRequest();
      petServiceAvailability();
      getBreed();
    }
  }, [service, requestData.pet_type]);


  useEffect(() => {

    if (
      service && requestData.pets &&
      requestData.pets.length > 0 &&
      requestData.pet_type != undefined
    ) {
      if(dates.from && dates.to) {
        petAmountCalculation();
      }
    }
  }, [
    requestData.pets,
    requestData.additional_services,
    requestData.need_sitter_to_pickup,
    dates,
  ]);

  const onChangeChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    let type = null;
    switch (e.target.id) {
      case "dog":
        type = 1;
        break;
      case "cat":
        type = 2;
        break;
      case "birds":
        type = 3;
        break;
      case "reptiles":
        type = 4;
        break;
      case "animals":
        type = 5;
        break;
    }
    setRequestData({ ...requestData, pet_type: type });
  };

  const onSelectPet = (value: I_PET) => {
    let reqData: requestData = deepClone(requestData);
    if (requestData.pets.includes(value.id)) {
      let index = reqData.pets.findIndex((val) => val == value.id);
      reqData.pets.splice(index, 1);
    } else {
      reqData.pets.push(value.id);
    }
    setRequestData(reqData);
  };

  const addAdditonalService = (value: I_PET_ADDITIONAL_SERVICE) => {
    let reqData: requestData = deepClone(requestData);
    if (requestData.additional_services.includes(value.id)) {
      let index = reqData.additional_services.findIndex(
        (val) => val == value.id
      );
      reqData.additional_services.splice(index, 1);
    } else {
      reqData.additional_services.push(value.id);
    }
    setRequestData(reqData);
  };

  const handlePetSizeChange = (petSize: select) => {
    setPetDetails({ ...petDetails, weight: petSize });
  };

  const onAddressTextChange = (e) => {
    let reqData: requestData = deepClone(requestData);
    reqData.pickup_address = {
      ...reqData.pickup_address,
      [e.target.name]: e.target.value,
    };
    setRequestData(reqData);
  };

  const onMessageChange = (e) => {
    let reqData: requestData = deepClone(requestData);
    reqData.message = e.target.value;
    setRequestData(reqData);
  };

  const onMediaChange = (e) => {
    let reqData: requestData = deepClone(requestData);
    reqData.want_to_receive_media = reqData.want_to_receive_media == 1 ? 0 : 1;
    setRequestData(reqData);
  };

  const handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, dates);
    let datesToCheck = getDates(range.from, range.to);
    let valid = true;
    if (range.from && range.to) {
      datesToCheck.forEach((element: Date) => {
        if (valid) {
          disabledDates.forEach((dis: Date) => {
            if (isSameDay(element, dis)) {
              valid = false;
              return;
            }
          });
        } else {
          return;
        }
      });
    }
    if (valid) {
      setDates(range);
    } else {
      openError("Can not select Range of disabled Dates");
    }
  };

  function getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
      dateArray.push(new Date(currentDate));
      currentDate = addDays(currentDate, 1);
    }
    return dateArray;
  }

  const getBreed = () => {
    let data = JSON.stringify({ pet_type: requestData.pet_type });
    api
      .getBreedWithType(data)
      .then((response: AxiosResponse<Res<I_BREED[]>>) => {
        setBreeds(response.data.response);
      })
      .catch((error) => console.log(error));
  };

  const getOptionValue = (option) => {
    return option.id;
  };

  const getOptionLabel = (option) => {
    return option.breed;
  };

  const onFileChange = (event) => {
    if (event.dataTransfer || event.target.files) {
      let files;
      if (event.dataTransfer) {
        files = event.dataTransfer.files;
      } else if (event.target) {
        files = event.target.files;
      }
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedFilePath(reader.result);
      };

      if (files[0]) {
        reader.readAsDataURL(files[0]);
        setOpenCropper(true);
      }
    }
  };

  const onTextChange = (event) => {
    setPetDetails({ ...petDetails, [event.target.name]: event.target.value });
  };

  const addPet = () => {
    const data = JSON.stringify({
      pet_type: requestData.pet_type,
      pet_image: selectedImage,
      pet_name: petDetails.pet_name,
      weight: petDetails.weight.value,
      age_year: petDetails.age_year,
      age_month: petDetails.age_month,
      breed_id: selectedBreed ? selectedBreed.id : null,
      sex: selectedGender ? selectedGender.value : null,
    });

    api
      .addPet(data)
      .then((response) => {
        petAdditionalRequest();
        setAddPetView(false);
        setPetDetails({
          pet_name: "",
          weight: "",
          age_year: "",
          age_month: "",
        });
        setSelectedGender(null);
        setSelectedBreed(null);
        setSelectedImage(null);
      })
      .catch((error) => {
        setErrors(error.response.data.errors);
        console.log(error.response.data.errors);
      });
  };

  const setSelectedAddress = (data) => {
    let newAddress = { ...requestData };
    newAddress.pickup_address.address1 = data.formatted_address;
    data.address_components.forEach((element) => {
      element.types.forEach((type) => {
        if (type == "postal_code") {
          newAddress.pickup_address.zip_code = element.long_name;
        }
        if (type == "administrative_area_level_1") {
          newAddress.pickup_address.city = element.long_name;
        }
      });
    });

    newAddress.pickup_address.latitude = `${data.geometry.location.lat()}`;
    newAddress.pickup_address.longitude = `${data.geometry.location.lng()}`;
    setRequestData(newAddress);
  };

  const petAdditionalRequest = () => {
    let data = JSON.stringify({
      pet_type: requestData.pet_type,
      sitter_id: sitterId,
      service_id: service.value,
      pets: requestData.pets,
      additional_services: requestData.additional_services,
      message: requestData.message,
      want_to_receive_media: requestData.want_to_receive_media
    });

    api
      .petAdditionalServices(data)
      .then((response: AxiosResponse<Res<I_REQUEST_DATA>>) => {
        let data = response.data.response;
        setSitterPets(data.sitter_pets);
        if (data.sitter_pets.length > 0) {
          setRequestData({
            ...requestData,
            pet_type: requestData.pet_type
              ? requestData.pet_type
              : data.sitter_pets[0],
          });
        }
        setMyPets(data.my_pets);
        setAdditionalServices(data.additional_services);
      })
      .catch((error) => console.log(error));
  };

  const petAmountCalculation = () => {
    let data = JSON.stringify({
      sitter_id: sitterId,
      service_id: service.value,
      start_date:
        dates.from && dates.to
          ? format(new Date(dates.from), "yyyy-MM-dd")
          : null,
      end_date:
        dates.from || dates.to
          ? format(new Date(dates.to || dates.from), "yyyy-MM-dd")
          : null,
      ...requestData,
    });

    api
      .petAmountCalculation(data)
      .then((response) => {
        if(response.data.status == 200) {
          setCalculatedAmount(response.data.response);
        }else {
          alert('caller')
          openError(response.data.message);
        }
      })
      .catch((error) => {
        if(error.response.data && error.response.data.message){
          openError(error.response.data.message);
        }
      });
  };

  const getCities = (id) => {
    api
      .getCities(id)
      .then((json) => {
        let data = json.data.response.map((value) => {
          return {
            label: value.name,
            value: value.id,
          };
        });
        setCities(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const petServiceAvailability = () => {
    let data = JSON.stringify({
      sitter_id: sitterId,
      service_id: service.value,
      is_available: 0,
    });
    api
      .petServiceAvailability(data)
      .then((response) => {
        let dates = response.data.response.map(
          (value) => new Date(value.Timestamp * 1000)
        );
        setDisabledDates(dates);
      })
      .catch((error) => console.log(error));
  };

  const requestSitter = () => {
    if (requestData.pet_type == undefined) {
      openError("Select Pet Type");
      return false;
    }

    if (requestData.pets.length == 0) {
      openError("Select Pets");
      return false;
    }

    if (requestData.need_sitter_to_pickup == 1) {
      if (requestData.pickup_address.address1 == "") {
        openError("Enter Address line 1");
        return false;
      } else if (requestData.pickup_address.zip_code == "") {
        openError("Enter  Zipcode");
        return false;
      }
    }

    // if (requestData.message == "") {
    //   openError("Enter Message");
    //   return false;
    // }

    let data = JSON.stringify({
      ...requestData,
      sitter_id: sitterId,
      service_id: service.value,
      drop_of: {
        date: dates ? dates.from  ? format(new Date(dates.from), "yyyy-MM-dd"):'':'',
        ...dropOffTime,
      },
      pickup: {
        date: dates ? dates.to ? format(new Date(dates.to), "yyyy-MM-dd"):'':'',
        ...pickupTime,
      },
    });

    api
      .sitterRequest(data)
      .then((json) => {
        openSuccess("Request Sent");
        setErrors({});
        router.replace({pathname:"/chat", query: {id: sitterId}});
      })
      .catch((error) => {
        if (error.response.status == 422) {
          setErrors(error.response.data.errors);
          let err = error.response.data.errors;
          if (err["drop_of.from"]) {
            openError("Invalid drop off time");
          } else if (err["drop_of.to"]) {
            openError("Invalid drop off time");
          } else if (err["pickup.from"]) {
            openError("Invalid pick up time");
          } else if (err["pickup.to"]) {
            openError("Invalid pick up time");
          }
        }
      });
  };

  const { from, to } = dates;
  const modifiers = { start: from, end: to };

  return (
    <div className="main-wrapper bottom">
      <div className="container">
        <div className="row  padding">
          <div className="col-12 col-md-12 col-lg-11 col-xl-11 mx-auto">
            <h4 className="font-semibold mb-3 d-none d-md-block d-lg-block d-xl-block">
              {`${strings.Makebookingwith} ${sitterName} for ${
                service ? service.label : ""
              }`}
            </h4>
            <div className="row">
              <div className="col-12 col-md-8 col-lg-8 col-xl-8">
                <div className="bg-white main-content m-0">
                  <h4 className="font-semibold mb-3 d-block d-md-none d-lg-none d-xl-none">
                    {strings.Makebookingwith +
                      " " +
                      (service ? service.label : "")}
                  </h4>
                  <h5 className="font-medium mb-3">{strings.Bookingfor}</h5>
                  {/*----------for mobile view----------*/}
                  <div className="d-block d-md-none d-lg-none d-xl-none">
                    <ul className="chec-radio">
                      <li className="pet-select mob-select">
                        <label className="radio-inline">
                          <input
                            type="radio"
                            id="selection"
                            name="select-pro"
                            className="pro-chx"
                            defaultValue="yes"
                            defaultChecked
                          />
                          <div className="select-radio text-center">
                            <div className="row">
                              <div className="col-10">
                                <div className="d-flex">
                                  <div className="search-sitter-img">
                                    <img
                                      src="images/dog.jpg"
                                      className="img-fluid mb-2"
                                    />
                                  </div>
                                  <div className="my-auto ml-2">
                                    <h6 className="font-title mb-1 font-medium">
                                      Milo 7yrs, 16kg
                                    </h6>
                                    <p className="font-12 mb-0">
                                      Siberian husky
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-2 my-auto">
                                <div className="booking-edit">
                                  <a href="#">Edit</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </label>
                      </li>
                    </ul>
                  </div>
                  {/*---------/for mobile view----------*/}
                  {/*---------for web------------------*/}
                  <div className="d-none d-md-block d-lg-block d-xl-block">
                    <div className="booking-for booking-check">
                      <div
                        onClick={() => {
                          sitterPets.includes(1)
                            ? null
                            : openError(
                                "Pet is not facilitated by the selected sitter "
                              );
                        }}
                        className="custom-check"
                        style={{
                          opacity: sitterPets.includes(1) ? 1 : 0.5,
                        }}
                      >
                        <label className="check ">
                          <input
                            type="radio"
                            className="class1"
                            name="is_name2"
                            id="dog"
                            checked={requestData.pet_type == 1}
                            onChange={onChangeChecked}
                            defaultValue="dog"
                            disabled={!sitterPets.includes(1)}
                          />
                          <span className="checkmark" /> Dog
                        </label>
                      </div>
                      <div
                        onClick={() => {
                          sitterPets.includes(2)
                            ? null
                            : openError(
                                "Pet is not facilitated by the selected sitter "
                              );
                        }}
                        className="custom-check"
                        style={{ opacity: sitterPets.includes(2) ? 1 : 0.5 }}
                      >
                        <label className="check ">
                          <input
                            type="radio"
                            className="class1"
                            name="is_name2"
                            onChange={onChangeChecked}
                            checked={requestData.pet_type == 2}
                            defaultValue="cat"
                            id="cat"
                            disabled={!sitterPets.includes(2)}
                          />
                          <span className="checkmark" /> Cat
                        </label>
                      </div>
                      <div
                        className="custom-check"
                        onClick={() => {
                          sitterPets.includes(3)
                            ? null
                            : openError(
                                "Pet is not facilitated by the selected sitter "
                              );
                        }}
                        style={{
                          opacity: sitterPets.includes(3) ? 1 : 0.5,
                        }}
                      >
                        <label className="check ">
                          <input
                            type="radio"
                            className="class1"
                            name="is_name2"
                            onChange={onChangeChecked}
                            checked={requestData.pet_type == 3}
                            defaultValue="birds"
                            id="birds"
                            disabled={!sitterPets.includes(3)}
                          />
                          <span className="checkmark" /> Birds
                        </label>
                      </div>
                      <div
                        className="custom-check"
                        onClick={() => {
                          sitterPets.includes(4)
                            ? null
                            : openError(
                                "Pet is not facilitated by the selected sitter "
                              );
                        }}
                        style={{
                          opacity: sitterPets.includes(4) ? 1 : 0.5,
                        }}
                      >
                        <label className="check ">
                          <input
                            type="radio"
                            className="class1"
                            name="is_name2"
                            onChange={onChangeChecked}
                            checked={requestData.pet_type == 4}
                            defaultValue="reptiles"
                            id="reptiles"
                            disabled={!sitterPets.includes(4)}
                          />
                          <span className="checkmark" /> Reptiles
                        </label>
                      </div>
                      <div
                        className="custom-check"
                        onClick={() => {
                          sitterPets.includes(5)
                            ? null
                            : openError(
                                "Pet is not facilitated by the selected sitter "
                              );
                        }}
                        style={{
                          opacity: sitterPets.includes(5) ? 1 : 0.5,
                        }}
                      >
                        <label className="check ">
                          <input
                            type="radio"
                            className="class1"
                            name="is_name2"
                            onChange={onChangeChecked}
                            checked={requestData.pet_type == 5}
                            defaultValue="animals"
                            id="animals"
                            disabled={!sitterPets.includes(5)}
                          />
                          <span className="checkmark" /> Small animals
                        </label>
                      </div>
                      {/*--------for dog -------------*/}
                      <div className="dog box" style={{ display: "block" }}>
                        <ul className="chec-radio">
                          {myPets.map((value, index) => (
                            <li key={index} className="pet-select">
                              <label className="radio-inline">
                                <input
                                  type="checkbox"
                                  key={`pet${index}`}
                                  id={`pet${index}`}
                                  name="select1"
                                  checked={requestData.pets ? requestData.pets.includes(value.id):false}
                                  onChange={() => onSelectPet(value)}
                                  className="pro-chx"
                                  defaultValue="yes"
                                />
                                <div className="select-radio text-center">
                                  <div>
                                    <div className="search-sitter-img">
                                      <img
                                        src={value.pet_image}
                                        className="img-fluid mb-2"
                                      />
                                    </div>
                                    <h6 className="font-14 mb-1 font-medium">
                                      {`${value.pet_name} ${value.age_year}yrs,\n   ${value.weight.name}`}
                                    </h6>
                                    <p className="font-12 mb-0">
                                      {value.breed.breed}
                                    </p>
                                  </div>
                                </div>
                              </label>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/*--------/for dog -------------*/}

                      {/*---------add new pets-------*/}
                      <div className="card-button mt-2">
                        <button
                          onClick={() => setAddPetView(true)}
                          className="btn btn-black"
                        >
                          Add new pets
                        </button>
                      </div>
                      <div
                        className="additional-services pickup-address"
                        id="welcomeDiv"
                        style={{ display: addPetView ? "block" : "none" }}
                      >
                        <div className="upload-doc">
                          {selectedImage ? (
                            <img className="file" src={selectedImage} />
                          ) : (
                            <div className="file">
                              + <br />
                              Upload your pet’s picture
                              <input
                                type="file"
                                name="file"
                                onChange={onFileChange}
                              />
                            </div>
                          )}
                        </div>
                        {errors.pet_image ? (
                          <span
                            style={{
                              color: "#ff0000",
                              fontSize: "12px",
                            }}
                          >
                            {"Please Select Pet Image"}
                          </span>
                        ) : null}

                        <div className="upload-doc"></div>
                        <div className="row">
                          <div className="col-12 col-md-6 col-lg-6 col-xl-5">
                            <h6 className="font-14 mb-2">
                              {strings.Name + "*"}
                            </h6>
                            <div className="form-group">
                              <input
                                className={
                                  "form-control " +
                                  (errors.pet_name ? "invalid" : "")
                                }
                                id="pet-name"
                                value={petDetails.pet_name}
                                onChange={onTextChange}
                                name="pet_name"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="col-6 col-md-6 col-lg-6 col-xl-3">
                            <h6 className="font-14 mb-2">
                              {strings.Weight + "(kgs)*"}
                            </h6>
                            <div className="form-group">
                              <Select
                                onChange={handlePetSizeChange}
                                value={petDetails.weight}
                                isSearchable={false}
                                options={petSize}
                                isMulti={false}
                              />
                            </div>
                          </div>
                          <div className="col-6 col-md-6 col-lg-6 col-xl-4">
                            <h6 className="font-14 mb-2">
                              {strings.Age + "*"}
                            </h6>
                            <div className="form-row">
                              <div className="form-group col-6 col-sm-6">
                                <input
                                  className={
                                    "form-control " +
                                    (errors.age_year ? "invalid" : "")
                                  }
                                  value={petDetails.age_year}
                                  onChange={onTextChange}
                                  id="year"
                                  maxLength={2}
                                  name="age_year"
                                  type="text"
                                  placeholder="Yr."
                                />
                              </div>
                              <div className="form-group col-6 col-sm-6">
                                <input
                                  value={petDetails.age_month}
                                  onChange={onTextChange}
                                  className={
                                    "form-control " +
                                    (errors.age_month ? "invalid" : "")
                                  }
                                  maxLength={2}
                                  id="month"
                                  name="age_month"
                                  type="text"
                                  placeholder="Mo."
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-lg-6 col-xl-8">
                            <h6 className="font-14 mb-2">
                              {strings.Bread + "*"}
                            </h6>
                            <div className="form-group">
                              <Select
                                isSearchable={true}
                                value={selectedBreed}
                                getOptionValue={getOptionValue}
                                getOptionLabel={getOptionLabel}
                                options={breeds}
                                styles={
                                  errors.breed_id
                                    ? {
                                        control: (provided) => ({
                                          ...provided,
                                          borderColor: "#ff0000",
                                        }),
                                      }
                                    : {}
                                }
                                noOptionsMessage={() =>
                                  requestData.pet_type
                                    ? "Not Found"
                                    : "Select Pet First"
                                }
                                placeholder={"Type Here to search Breed"}
                                onChange={setSelectedBreed}
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                            <h6 className="font-14 mb-2">
                              {strings.Sex + "*"}
                            </h6>
                            <Select
                              value={selectedGender}
                              onChange={setSelectedGender}
                              options={gender}
                              isSearchable={false}
                              styles={
                                errors.sex
                                  ? {
                                      control: (provided) => ({
                                        ...provided,
                                        borderColor: "#ff0000",
                                      }),
                                    }
                                  : {}
                              }
                            />
                          </div>
                        </div>
                        <div>
                          <button
                            onClick={addPet}
                            className="btn btn-primary py-2 px-3"
                          >
                            {strings.Submit}
                          </button>
                          <a
                            onClick={() => {
                              setAddPetView(false);
                              setPetDetails({
                                pet_name: "",
                                weight: "",
                                age_year: "",
                                age_month: "",
                              });
                              setSelectedGender(null);
                              setSelectedBreed(null);
                              setSelectedImage(null);
                            }}
                            className="btn link"
                          >
                            cancel
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*--------/for web------------------*/}

                  {requestData.pet_type ? (
                    <>
                      {additionalServices.length > 0 ? (
                        <>
                          <hr />
                          <div className="additional-services">
                            <h5 className="mb-3 font-medium">
                              Additional services
                            </h5>
                            <div className="booking-for">
                              {additionalServices.map((value, index) => (
                                <div key={index} className="row mb-3">
                                  <div className="col-10 col-md-8 col-lg-8 col-xl-8 grooming-details">
                                    <p className="mb-0 groom">
                                      {value.name}&nbsp;
                                      <span className="font-semibold">{`¥${value.price}`}</span>
                                    </p>
                                    <p className="mb-0 font-12">
                                      {value.description}
                                    </p>
                                  </div>
                                  <div className="col-2 col-md-4 col-lg-4 col-xl-4 alignment d-none d-md-block d-lg-block d-xl-block">
                                    <button
                                      onClick={() => addAdditonalService(value)}
                                      className="btn btn-black btn-green"
                                    >
                                      {requestData.additional_services.includes(
                                        value.id
                                      ) ? (
                                        <>
                                          <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fal"
                                            data-icon="check-circle"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            className="svg-inline--fa fa-check-circle fa-w-16 fa-2x"
                                          >
                                            <path
                                              fill="currentColor"
                                              d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z"
                                            />
                                          </svg>
                                          Added
                                        </>
                                      ) : (
                                        "Add Service"
                                      )}
                                    </button>
                                  </div>
                                  <div className="col-2 col-md-4 col-lg-4 col-xl-4 my-auto alignment d-block d-md-none d-lg-none d-xl-none">
                                    <div>
                                      <button className="btn service-icon1 active">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="check-circle"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 512 512"
                                          className="svg-inline--fa fa-check-circle fa-w-16 fa-2x"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </>
                      ) : null}
                      <hr />
                      {requestData.pets.length > 0 ? (
                        <>
                          <div className="additional-services booking-period">
                            <h5 className="mb-3 font-medium">Booking period</h5>
                            <div className="booking-for">
                              <div className="row">
                                <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                                  <DayPicker
                                    className="Selectable"
                                    numberOfMonths={1}
                                    fromMonth={new Date()}
                                    toMonth={addMonths(new Date(), 2)}
                                    selectedDays={[from, { from, to }]}
                                    modifiers={modifiers}
                                    disabledDays={[
                                      ...disabledDates,
                                      {
                                        before: new Date(),
                                      },
                                    ]}
                                    onDayClick={handleDayClick}
                                  />
                                </div>
                                <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                                  <h6 className="font-14 mb-2">
                                    {`Drop-off time * ${
                                      dates.from
                                        ? "(" +
                                          moment(dates.from).format(
                                            "yyyy-MM-DD"
                                          ) +
                                          ")"
                                        : ""
                                    }`}
                                  </h6>
                                  <div className="form-row">
                                    <div className="col-6 col-sm-6">
                                      {/* <input
                                        className={
                                          "form-control valid-control " +
                                          (errors["drop_of.from"]
                                            ? "invalid"
                                            : "")
                                        }
                                        id="drop-from"
                                        name="drop-from"
                                        type="time"
                                        onChange={(e) => {
                                          setDropOffTime({
                                            ...dropOffTime,
                                            from: e.target.value,
                                          });
                                          console.log(e.target.value);
                                        }}
                                        value={dropOffTime.from}
                                        placeholder="From"
                                      /> */}
                                      <TimePicker
                                        showSecond={false}
                                        use12Hours={true}
                                        value={
                                          dropOffTime.from
                                            ? moment(
                                                dropOffTime.from,
                                                "hh : mm A"
                                              )
                                            : undefined
                                        }
                                        onChange={(time) => {
                                          setDropOffTime({
                                            ...dropOffTime,
                                            from: moment(time).format(
                                              "hh : mm A"
                                            ),
                                          });
                                        }}
                                        format={"hh : mm A"}
                                        clearIcon={() => null}
                                      />
                                    </div>
                                    <div className="col-6 col-sm-6">
                                      {/* <input
                                        className={
                                          "form-control valid-control " +
                                          (errors["drop_of.to"]
                                            ? "invalid"
                                            : "")
                                        }
                                        id="drop-to"
                                        name="drop-to"
                                        type="time"
                                        min={dropOffTime.from + ":00"}
                                        onChange={(e) =>
                                          setDropOffTime({
                                            ...dropOffTime,
                                            to: e.target.value,
                                          })
                                        }
                                        value={dropOffTime.to}
                                        placeholder="To"
                                      /> */}
                                      <TimePicker
                                        showSecond={false}
                                        use12Hours={true}
                                        value={
                                          dropOffTime.to
                                            ? moment(
                                                dropOffTime.to,
                                                "hh : mm A"
                                              )
                                            : undefined
                                        }
                                        onChange={(time) => {
                                          setDropOffTime({
                                            ...dropOffTime,
                                            to: moment(time).format(
                                              "hh : mm A"
                                            ),
                                          });
                                        }}
                                        format={"hh : mm A"}
                                        clearIcon={() => null}
                                      />
                                    </div>
                                  </div>

                                  <h6 className="font-14 mb-2">
                                    {`Pick-up time * ${
                                      dates.to
                                        ? "(" +
                                          moment(dates.to).format(
                                            "yyyy-MM-DD"
                                          ) +
                                          ")"
                                        : ""
                                    }`}
                                  </h6>
                                  <div className="form-row">
                                    <div className="form-group col-6 col-sm-6">
                                      {/* <input
                                        className={
                                          "form-control valid-control " +
                                          (errors["pickup.from"]
                                            ? "invalid"
                                            : "")
                                        }
                                        id="pickup-from"
                                        name="pickup-from"
                                        placeholder="From"
                                        type="time"
                                        onChange={(e) => {
                                          setPickupTime({
                                            ...pickupTime,
                                            from: e.target.value,
                                          });
                                          console.log(e.target.value);
                                        }}
                                        value={pickupTime.from}
                                      /> */}
                                      <TimePicker
                                        showSecond={false}
                                        use12Hours={true}
                                        value={
                                          pickupTime.from
                                            ? moment(
                                                pickupTime.from,
                                                "hh : mm A"
                                              )
                                            : undefined
                                        }
                                        onChange={(time) => {
                                          setPickupTime({
                                            ...pickupTime,
                                            from: moment(time).format(
                                              "hh : mm A"
                                            ),
                                          });
                                        }}
                                        format={"hh : mm A"}
                                        clearIcon={() => null}
                                      />
                                    </div>
                                    <div className="form-group col-6 col-sm-6">
                                      {/* <input
                                        className={
                                          "form-control valid-control " +
                                          (errors["pickup.to"] ? "invalid" : "")
                                        }
                                        id="pickup-to"
                                        name="pickup-to"
                                        placeholder="To"
                                        type="time"
                                        onChange={(e) => {
                                          setPickupTime({
                                            ...pickupTime,
                                            to: e.target.value,
                                          });
                                        }}
                                        value={pickupTime.to}
                                      /> */}
                                      <TimePicker
                                        showSecond={false}
                                        use12Hours={true}
                                        value={
                                          pickupTime.to
                                            ? moment(pickupTime.to, "hh : mm A")
                                            : undefined
                                        }
                                        onChange={(time) => {
                                          setPickupTime({
                                            ...pickupTime,
                                            to: moment(time).format(
                                              "hh : mm A"
                                            ),
                                          });
                                        }}
                                        format={"hh : mm A"}
                                        clearIcon={() => null}
                                      />
                                    </div>
                                  </div>
                                  <button
                                    className="btn btn-black btn-green"
                                    onClick={() =>
                                      setDates({
                                        start: undefined,
                                        end: undefined,
                                      })
                                    }
                                  >
                                    Reset
                                  </button>
                                </div>
                              </div>

                              <div className="custom-check mb-1">
                                <label className="check">
                                  <input
                                    onChange={(e) =>{
                                      setRequestData({
                                        ...requestData,
                                        need_sitter_to_pickup:
                                          requestData.need_sitter_to_pickup == 1
                                            ? 0
                                            : 1,
                                      })
                                    }}
                                    checked={
                                      requestData.need_sitter_to_pickup == 1
                                    }
                                    type="checkbox"
                                    name="sitter"
                                  />
                                  <span className="checkmark" />{" "}
                                  {strings.Needsittertopickupmypets}
                                </label>
                              </div>
                            </div>
                          </div>
                          <hr />
                        </>
                      ) : null}
                    </>
                  ) : null}
                  {requestData.need_sitter_to_pickup == 1 ? (
                    <div className="additional-services pickup-address d-none d-md-block d-lg-block d-xl-block">
                      <h5 className="mb-3 font-medium">Enter pickup address</h5>
                      <div className="booking-for">
                        <div className="form-row">
                          <div className="form-group col-sm-12">
                            <label>Address line 1*</label>
                            <Autocomplete
                              className={"form-control"}
                              apiKey={GOOGLE_PLACES_API}
                              onPlaceSelected={(place) => {
                                console.log('place is', place)
                                setSelectedAddress(place);
                              }}
                              options={{
                                types: ["address"],
                                componentRestrictions: { country: "jp" },
                              }}
                              defaultValue={""}
                            />
                          </div>
                          <div className="form-group col-sm-6">
                            <label>Address line 2</label>
                            <input
                              className="form-control"
                              name="address2"
                              type="text"
                              onChange={onAddressTextChange}
                            />
                          </div>
                          <div className="form-group col-sm-6">
                            <label>City</label>
                            <div className="category-selection charge-select">
                              <input
                                className="form-control"
                                name="city"
                                value={requestData.pickup_address ? requestData.pickup_address.city:''}
                                type="text"
                                onChange={onAddressTextChange}
                              />
                            </div>
                          </div>
                          <div className="form-group col-sm-4">
                            <label htmlFor="exampleFormControlSelect1">
                              Zipcode*
                            </label>
                            <div className="category-selection charge-select">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Zipcode"
                                name="zip_code"
                                value={requestData.pickup_address ? requestData.pickup_address.zip_code:''}
                                onChange={onAddressTextChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </div>
                  ) : null}
                  <div className="additional-services pickup-address">
                    <h5 className="mb-3 font-medium">Instructions</h5>
                    <div className="booking-for">
                      <h6 className="font-14 font-normal">
                        Share some information about your pet (s) that need to
                        be taken care while sittings
                      </h6>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          id="message"
                          rows={6}
                          value={requestData.message}
                          onChange={onMessageChange}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <hr className="d-none d-md-block d-lg-block d-xl-block" />
                  <div className=" d-none d-md-block d-lg-block d-xl-block">
                    <div className="row">
                      <div className="col-12 col-md-12 col-lg-12 col-xl-6 my-auto booking-period ">
                        {/*<div className="custom-check">*/}
                        {/*  <label className="check">*/}
                        {/*    <input*/}
                        {/*      onChange={onMediaChange}*/}
                        {/*      checked={requestData.want_to_receive_media == 1}*/}
                        {/*      type="checkbox"*/}
                        {/*      name="sitter"*/}
                        {/*    />*/}
                        {/*    <span className="checkmark" /> I want to receive*/}
                        {/*    photos or videos*/}
                        {/*  </label>*/}
                        {/*</div>*/}
                      </div>
                      <div className="col-12 col-md-12 col-lg-12 col-xl-6 alignment">
                        <div className="proceed-btn">
                          <a>
                            <button
                              onClick={requestSitter}
                              className="btn btn-primary px-3"
                            >
                              Chat
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 col-xl-4 d-none d-md-block d-lg-block d-xl-block">
                <div className="bg-white main-content m-0">
                  <h5>Booking details</h5>
                  <hr />
                  <div className="boarding-details">
                    <h6 className="font-medium mb-3">
                      {service ? service.label : "" + " for"}
                    </h6>
                    {calculatedAmount
                      ? calculatedAmount.pets.map((value,index) => (
                          <div key={index} className="d-flex justify-content-between mb-3">
                            <div>
                              <p className="font-14 text-muted mb-0">
                                {value.name}
                              </p>
                            </div>
                            <div>
                              <p className="font-14 text-muted mb-0">{`¥${value.fee}`}</p>
                            </div>
                          </div>
                        ))
                      : null}
                    {calculatedAmount && calculatedAmount.custom
                      ? calculatedAmount.custom.map((value,index) => (
                          <div key={index} className="d-flex justify-content-between mb-3">
                            <div>
                              <p className="font-14 text-muted mb-0">
                                {value.name}
                              </p>
                            </div>
                            <div>
                              <p className="font-14 text-muted mb-0">{`¥${value.fee}`}</p>
                            </div>
                          </div>
                        ))
                      : null}
                    <hr />
                    <div className="d-flex justify-content-between">
                      <div>
                        <p className="font-14 font-semibold mb-0">
                          Total amount
                        </p>
                      </div>
                      <div>
                        <p className="font-14 font-semibold  mb-0">{`¥${
                          calculatedAmount ? calculatedAmount.total : "0"
                        }`}</p>
                      </div>
                    </div>
                  </div>
                  <p className="font-14 text-muted mb-0">
                    Final transportation fee will be calculated at the time of checkout,&nbsp;
                    <a onClick={()=> setShowTransport(!showTransport)} style={{textDecorationLine: 'underline'}}>{showTransport ? 'Hide starting price':'View starting price'}</a>
                  </p>
                  {showTransport && calculatedAmount.transportation.map((val,index)=>(val.status == 1 ? <div key={`transport_${index}`} className="col-12 p-0 mb-2">
                    <div className="row align-items-center mt-3">
                      <div className="col-md-3 ps-0">
                        <div className="custom-check mb-0">
                          <label className="check ">
                            {index == 0 ? 'Car': index == 1 ? 'Bus': index == 3 ? 'Train':'Walk'}
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <input disabled name="price_start_from" type={'text'} className="form-control" placeholder="amount" value={val.price_start_from}/>
                      </div>
                    </div>
                  </div>:null))}
                </div>

              </div>
            </div>
            {/*----------*/}
          </div>
        </div>
      </div>
      <div className="bg-white main-background mb-0 d-block d-md-none d-lg-none d-xl-none">
        <div className="container">
          <div className="row">
            <div className="col-12 px-0">
              <div className="d-flex justify-content-between button-design">
                <div className="proceed-btn">
                  <a href="http://159.65.142.31/petcation-design/chat-screen.html">
                    <button className="btn btn-primary">
                      <svg viewBox="0 0 512 512">
                        <path
                          fill="currentColor"
                          d="M128 216c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 384c-28.3 0-56.3-4.3-83.2-12.8l-15.2-4.8-13 9.2c-23 16.3-58.5 35.3-102.6 39.6 12-15.1 29.8-40.4 40.8-69.6l7.1-18.7-13.7-14.6C47.3 313.7 32 277.6 32 240c0-97 100.5-176 224-176s224 79 224 176-100.5 176-224 176z"
                        />
                      </svg>
                    </button>
                  </a>
                </div>
                <div className="proceed-btn">
                  <a href="http://159.65.142.31/petcation-design/payment-information.html">
                    <button className="btn btn-primary">
                      Proceed to payment
                    </button>
                  </a>
                </div>
                <div className="payment-amt">
                  <h6>{`¥${
                      calculatedAmount ? calculatedAmount.total : "0"
                  }`}</h6>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="info-circle"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="svg-inline--fa fa-info-circle fa-w-16 fa-2x"
                  >
                    <path
                      fill="currentColor"
                      d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-36 344h12V232h-12c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h48c6.627 0 12 5.373 12 12v140h12c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12h-72c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12zm36-240c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UploadFileModal
        onInitialized={(instance) => {
          setCropper(instance);
        }}
        path={uploadedFilePath}
        showModal={openCropper}
        zoomable={false}
        aspectRatio={16 / 9}
        setImage={(v) => {
          var file = dataURLtoFile(v, "image");
          const formData = new FormData();
          formData.append("image", file);
          setErrors({ ...errors, pet_image: null });
          formData.append("path", "pets");
          api
            .uploadFile(formData)
            .then((json) => {
              setSelectedImage(json.data.response);
            })
            .catch((error) => console.log(error));
        }}
        preview=".img-preview"
        guides={false}
        viewMode={1}
        dragMode="move"
        cropBoxMovable={true}
        hideModal={() => setOpenCropper(false)}
      />
    </div>
  );
};

export default withAuth(Booking);
