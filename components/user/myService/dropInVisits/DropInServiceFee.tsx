import Select from "react-select";
import React, { useEffect, useState } from "react";
import { strings } from "../../../../public/lang/Strings";
import {
  I_BOARDING_SERVICE,
  I_BOARDING_SERVICE_PET,
  I_PET_ADDITIONAL_SERVICE,
} from "../../../../models/boardingService.interface";
import {
  durations,
  errorOptions,
  petSize,
  select,
  serviceFeeObject,
  successOptions,
} from "../../../../public/appData/AppData";
import {
  deepClone,
  getDropInServiceObject,
  getPercent,
  getServiceObject,
} from "../../../../utils/Helper";
import SaveServiceView from "../SaveServiceView";
import AdditonalServiceSidebar from "../AdditionalServiceSidebar";
import API from "../../../../api/Api";
import { useSnackbar } from "react-simple-snackbar";
import { useRouter } from "next/router";
import { AxiosResponse } from "axios";
import Res from "../../../../models/response.interface";
import {
  I_DROP_IN_SERVICE,
  I_DROP_IN_SERVICE_PET,
} from "../../../../models/dropInService.interface";

type input = React.ChangeEvent<HTMLInputElement>;
const api = new API();

interface I_Props {
  handleTabChange: (x: number) => void;
}

const DropInServiceFee: React.FC<I_Props> = ({ handleTabChange }: I_Props) => {
  const router = useRouter();

  const [sitterServiceId, setSitterServiceId] = useState<number>();
  const [service, setService] = useState<I_DROP_IN_SERVICE_PET[]>([]);
  const [holidayCharges, setHolidayCharges] = useState<string>("0");
  const [cancellationPolicy, setCancellationPolicy] = useState<number>(1);
  const [sideBarData, setSideBarData] = useState<I_DROP_IN_SERVICE_PET>();
  const [errors, setErrors] = useState<any>({});
  const [openSnackbar, closeSnackbar] = useSnackbar(successOptions);
  const [openError, closeError] = useSnackbar(errorOptions);
  const [activeService, setActiveService] = useState({
    dog: false,
    cat: false,
    birds: false,
    reptile: false,
    smallAnimals: false,
  });

  useEffect(() => {
    if (router.query.serviceId) {
      setSitterServiceId(Number(router.query.serviceId));
      getServiceInfo();
    } else {
      router.replace("/user/my-services");
    }
  }, []);

  const getServiceInfo = () => {
    api
      .getDropInVisitsInfo(1)
      .then((response: AxiosResponse<Res<I_DROP_IN_SERVICE>>) => {
        setService(response.data.response.service_pets);
        setHolidayCharges(`${response.data.response.holiday_extra_charges}`);
        setCancellationPolicy(response.data.response.cancellation_policy);
        let data = response.data.response.service_pets;
        let object = { ...activeService };
        for (let i = 0; i < data.length; i++) {
          switch (data[i].pet_type) {
            case 1:
              object.dog = true;
              break;
            case 2:
              object.cat = true;
              break;
            case 3:
              object.birds = true;
              break;
            case 4:
              object.reptile = true;
              break;
            case 5:
              object.smallAnimals = true;
              break;
          }
        }
        setActiveService({ ...activeService, ...object });
      })

      .catch((error) => console.log(error));
  };

  const getIndexById = (id) => {
    let serviceData = [...service];
    return serviceData.findIndex((value) => value.pet_type == id);
  };

  const onChange = (event: input) => {
    switch (event.target.name) {
      case "dog":
        setActiveService({ ...activeService, dog: event.target.checked });
        addPetService(event.target.checked, 1);
        break;
      case "cat":
        setActiveService({ ...activeService, cat: event.target.checked });
        addPetService(event.target.checked, 2);
        break;
      case "birds":
        setActiveService({ ...activeService, birds: event.target.checked });
        addPetService(event.target.checked, 3);
        break;
      case "reptile":
        setActiveService({ ...activeService, reptile: event.target.checked });
        addPetService(event.target.checked, 4);
        break;
      case "smallAnimals":
        setActiveService({
          ...activeService,
          smallAnimals: event.target.checked,
        });
        addPetService(event.target.checked, 5);
        break;
    }
  };

  const removePetService = (id) => {
    let serviceData = [...service];
    serviceData.splice(getIndexById(id), 1);

    setService(serviceData);
  };

  const addPetService = (boolean, id) => {
    if (boolean) {
      setService([...service, getDropInServiceObject(id)]);
    } else {
      removePetService(id);
    }
  };

  const onPetSizeChange = (data: select, id: number, index: number) => {
    let serviceData = [...service];
    serviceData[getIndexById(id)].fees[index].pet_size_id = data.key;
    setService(serviceData);
  };

  const onDurationChange = (data: select, id: number, index: number) => {
    let serviceData = [...service];
    serviceData[getIndexById(id)].fees[index].duration = data.value;
    setService(serviceData);
  };

  const getFeesFromService = (id) => {
    let serviceData = [...service];
    if (getIndexById(id) != -1) {
      return serviceData[getIndexById(id)].fees;
    }
    return [];
  };

  const addPetServiceFees = (id) => {
    let serviceData = [...service];
    var selectedSize = null;
    petSize.forEach((size) => {
      let hasIt = serviceData[getIndexById(id)].fees.some(
        (fees) => fees.pet_size_id == size.value
      );
      if (hasIt == false) {
        selectedSize = size.value;
      }
    });
    if (selectedSize) {
      serviceData[getIndexById(id)].fees.push({
        ...serviceFeeObject,
        pet_size_id: selectedSize,
        duration: 30,
      });
      setService(serviceData);
    } else {
      openError("Cannot add more");
    }
  };

  const increaseCapacity = (id, index) => {
    let serviceData = JSON.parse(JSON.stringify(service));
    let mIndex = getIndexById(id);
    serviceData[mIndex].fees[index].capacity =
      serviceData[mIndex].fees[index].capacity + 1;
    setService(serviceData);
  };

  const decreaseCapacity = (id, index) => {
    let serviceData: I_DROP_IN_SERVICE_PET[] = JSON.parse(
      JSON.stringify(service)
    );
    let mIndex = getIndexById(id);

    if (serviceData[mIndex].fees[index].capacity > 1) {
      serviceData[mIndex].fees[index].capacity =
        serviceData[mIndex].fees[index].capacity - 1;
    }
    setService(serviceData);
  };

  const onChargeChange = (id, index, e: input) => {
    let serviceData: I_DROP_IN_SERVICE_PET[] = deepClone(service);
    serviceData[getIndexById(id)].fees[index].service_charge = e.target.value;
    serviceData[getIndexById(id)].fees[index].earning_amount = getPercent(
      e.target.value
    )
      .toFixed(0)
      .toString();

    setService(serviceData);
  };

  const onTextChange = (e: input) => {
    switch (e.target.name) {
      case "holidayCharges":
        if (e.target.value !== "-" && e.target.value !== "e") {
          setHolidayCharges(e.target.value);
        }

        break;
    }
  };

  const changeCancellationPolicy = (e: input) => {
    switch (e.target.id) {
      case "flexible":
        setCancellationPolicy(1);
        break;
      case "moderate":
        setCancellationPolicy(2);
        break;
      case "strict":
        setCancellationPolicy(3);
        break;
    }
  };

  const deletePetServiceFee = (id: number, index: number) => {
    let serviceData: I_DROP_IN_SERVICE_PET[] = deepClone(service);
    serviceData[getIndexById(id)].fees.splice(index, 1);
    setService(serviceData);
  };

  const addAdditionalService = (id: number, data: I_PET_ADDITIONAL_SERVICE) => {
    let serviceData: I_DROP_IN_SERVICE_PET[] = deepClone(service);
    serviceData[getIndexById(id)].custom_services.push(data);
    setService(serviceData);
    setSideBarData(serviceData[getIndexById(id)]);
  };

  const removeAdditonalService = (id: number, index: number) => {
    let serviceData: I_DROP_IN_SERVICE_PET[] = deepClone(service);
    serviceData[getIndexById(id)].custom_services.splice(index, 1);
    setService(serviceData);
    setSideBarData(serviceData[getIndexById(id)]);
  };

  const filterPetSize = (id: number) => {
    let serviceData = [...service];
    return petSize.filter((size) => {
      let hasIt = serviceData[getIndexById(id)].fees.some(
        (fees) => fees.pet_size_id == size.value
      );
      return !hasIt;
    });
  };

  const validateData = () => {
    service.forEach((value, index) => {
      value.fees.forEach((mValue, mIndex) => {
        if (Number(mValue.service_charge) < 10) {
          return false;
        }
      });
    });

    return true;
  };
  const saveServiceAndFee = () => {
    let payload: any = {
      service_pets: service,
      holiday_extra_charges: holidayCharges,
      cancellation_policy: cancellationPolicy,
    };

    if (service.length > 0) {
      if (validateData) {
        payload.drop_in_visit_service_id = sitterServiceId;
        api
          .dropInVisitsServiceFee(JSON.stringify(payload))
          .then((response) => {
            openSnackbar("Saved successfully");
            handleTabChange(1);
          })
          .catch((error) => console.log(error));
      }
    } else {
      openError("Add Atleast one service");
    }
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
          <div className="fees-content my-3">
            <p className="font-semibold text-muted font-14 mb-0">
              {strings.whatEverPetServiceYouProvide}
            </p>
            <p className="mb-0 font-12">{strings.boardingServicedescription}</p>
            <div className="booking-for">
              <div className="row  service-charges">
                <div className="col-12 col-md-10 col-lg-10 col-xl-10">
                  <div className="custom-check mb-2">
                    <label className="check ">
                      <input
                        type="checkbox"
                        className="class1"
                        name="dog"
                        defaultValue="dog1"
                        checked={activeService.dog}
                        onChange={onChange}
                      />
                      <span className="checkmark" />
                      Dog
                    </label>
                  </div>
                  <div
                    className="hidden"
                    id="hidden_fields_one"
                    style={activeService.dog ? {} : { display: "none" }}
                  >
                    {getFeesFromService(1).map((value, index) => (
                      <div key={index} className="row mt-2">
                        <div className="col-6 col-md-3 col-lg-3 col-xl-3">
                          <div className="d-flex justify-content-between mb-2">
                            <div>
                              <p className="font-12 mb-0">Capacity</p>
                            </div>
                            <div className="help-tip">
                              <p>lorem ipsum</p>
                            </div>
                          </div>
                          <div className="num-block skin-2">
                            <div className="num-in">
                              <span
                                onClick={() => decreaseCapacity(1, index)}
                                className="minus"
                              />
                              <input
                                id={`dog${index}`}
                                key={index}
                                type="text"
                                readOnly={true}
                                className="in-num"
                                value={value.capacity}
                              />
                              <span
                                onClick={() => increaseCapacity(1, index)}
                                className="plus"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-6 col-md-3 col-lg-3 col-xl-3">
                          <div className="d-flex justify-content-between mb-2">
                            <div>
                              <p className="font-12 mb-0">Pet size</p>
                            </div>
                            <div className="help-tip">
                              <p>lorem ipsum</p>
                            </div>
                          </div>
                          <div className="form-group mb-0">
                            <div className="category-selection charge-select">
                              <Select
                                onChange={(data) =>
                                  onPetSizeChange(data, 1, index)
                                }
                                options={filterPetSize(1)}
                                value={petSize.find(
                                  (v) => value.pet_size_id == v.key
                                )}
                                isSearchable={false}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-6 col-md-3 col-lg-3 col-xl-3">
                          <div className="d-flex justify-content-between mb-2">
                            <div>
                              <p className="font-12 mb-0">Duration</p>
                            </div>
                            <div className="help-tip">
                              <p>lorem ipsum</p>
                            </div>
                          </div>
                          <div className="form-group mb-0">
                            <div className="category-selection charge-select">
                              <Select
                                onChange={(data) =>
                                  onDurationChange(data, 1, index)
                                }
                                options={durations}
                                value={durations.find(
                                  (v) => value.duration == v.value
                                )}
                                isSearchable={false}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-6 col-md-3 col-lg-3 col-xl-3">
                          <div className="d-flex justify-content-between mb-2">
                            <div>
                              <p className="font-12 mb-0">Charges x 1</p>
                            </div>
                            <div className="help-tip">
                              <p>lorem ipsum</p>
                            </div>
                          </div>
                          <div className="form-group mb-0">
                            <input
                              className={
                                "form-control valid-control " +
                                (Number(value.service_charge) < 10
                                  ? "invalid"
                                  : "")
                              }
                              placeholder="0"
                              type="number"
                              onChange={(e) => onChargeChange(1, index, e)}
                              value={value.service_charge}
                              min={"10"}
                              onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                  event.preventDefault();
                                }
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-6 col-md-3 col-lg-3 col-xl-2">
                          <div className="d-flex justify-content-between mb-2">
                            <div>
                              <p className="font-12 mb-0">Earnings</p>
                            </div>
                            <div className="help-tip">
                              <p>lorem ipsum</p>
                            </div>
                          </div>
                          <div className="earning-details">
                            <p className="font-14 mb-0">{`¥${value.earning_amount}`}</p>
                          </div>
                        </div>
                        {getFeesFromService(1).length != 1 ? (
                          <div className="col-4 col-md-1 col-lg-1 col-xl-1 my-auto">
                            <div className="delete-icon">
                              <svg
                                onClick={() => deletePetServiceFee(1, index)}
                                viewBox="0 0 448 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    ))}
                    <button
                      onClick={() => addPetServiceFees(1)}
                      className="a btn btn-primary add-more-btn"
                    >
                      + Add more
                    </button>
                    <div data-toggle="modal" data-target="#services">
                      <a
                        onClick={() => setSideBarData(service[getIndexById(1)])}
                        href="#"
                        className="font-10 text-muted"
                      >
                        + Want to add optional services &amp; charges along with
                        Dog boarding?
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row  service-charges">
                <div className="col-12 col-md-10 col-lg-10 col-xl-10">
                  <div className="custom-check mb-2">
                    <label className="check ">
                      <input
                        type="checkbox"
                        name="cat"
                        checked={activeService.cat}
                        onChange={onChange}
                      />
                      <span className="checkmark" />
                      Cat
                    </label>
                  </div>
                  <div
                    className="hidden"
                    style={activeService.cat ? {} : { display: "none" }}
                  >
                    {getFeesFromService(2).map((value, index) => (
                      <div key={index} className="row mt-2">
                        <div className="col-6 col-md-3 col-lg-3 col-xl-3">
                          <div className="d-flex justify-content-between mb-2">
                            <div>
                              <p className="font-12 mb-0">Capacity</p>
                            </div>
                            <div className="help-tip">
                              <p>lorem ipsum</p>
                            </div>
                          </div>
                          <div className="num-block skin-2">
                            <div className="num-in">
                              <span
                                onClick={() => decreaseCapacity(2, index)}
                                className="minus"
                              />
                              <input
                                id={`cat${index}`}
                                key={index}
                                type="text"
                                readOnly={true}
                                className="in-num"
                                value={value.capacity}
                              />
                              <span
                                onClick={() => increaseCapacity(2, index)}
                                className="plus"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-6 col-md-3 col-lg-3 col-xl-3">
                          <div className="d-flex justify-content-between mb-2">
                            <div>
                              <p className="font-12 mb-0">Pet size</p>
                            </div>
                            <div className="help-tip">
                              <p>lorem ipsum</p>
                            </div>
                          </div>
                          <div className="form-group mb-0">
                            <div className="category-selection charge-select">
                              <Select
                                onChange={(data) =>
                                  onPetSizeChange(data, 2, index)
                                }
                                options={filterPetSize(2)}
                                value={petSize.find(
                                  (v) => value.pet_size_id == v.key
                                )}
                                isSearchable={false}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-6 col-md-3 col-lg-3 col-xl-3">
                          <div className="d-flex justify-content-between mb-2">
                            <div>
                              <p className="font-12 mb-0">Charges x 1</p>
                            </div>
                            <div className="help-tip">
                              <p>lorem ipsum</p>
                            </div>
                          </div>
                          <div className="form-group mb-0">
                            <input
                              className={
                                "form-control valid-control " +
                                (Number(value.service_charge) < 10
                                  ? "invalid"
                                  : "")
                              }
                              placeholder="0"
                              type="number"
                              onChange={(e) => onChargeChange(2, index, e)}
                              value={value.service_charge}
                              min={"10"}
                              onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                  event.preventDefault();
                                }
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-6 col-md-3 col-lg-3 col-xl-2">
                          <div className="d-flex justify-content-between mb-2">
                            <div>
                              <p className="font-12 mb-0">Earnings</p>
                            </div>
                            <div className="help-tip">
                              <p>lorem ipsum</p>
                            </div>
                          </div>
                          <div className="earning-details">
                            <p className="font-14 mb-0">{`¥${value.earning_amount}`}</p>
                          </div>
                        </div>
                        {getFeesFromService(2).length != 1 ? (
                          <div className="col-4 col-md-1 col-lg-1 col-xl-1 my-auto">
                            <div className="delete-icon">
                              <svg
                                onClick={() => deletePetServiceFee(2, index)}
                                viewBox="0 0 448 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    ))}
                    <button
                      onClick={() => addPetServiceFees(2)}
                      className="a btn btn-primary add-more-btn"
                    >
                      + Add more
                    </button>
                    <div data-toggle="modal" data-target="#services">
                      <a
                        onClick={() => setSideBarData(service[getIndexById(2)])}
                        href="#"
                        className="font-10 text-muted"
                      >
                        + Want to add optional services &amp; charges along with
                        Dog boarding?
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*--------/cat-----------*/}

              <div className="row  service-charges">
                <div className="col-12 col-md-10 col-lg-10 col-xl-10">
                  <div className="custom-check mb-2">
                    <label className="check ">
                      <input
                        type="checkbox"
                        name="birds"
                        checked={activeService.birds}
                        onChange={onChange}
                      />
                      <span className="checkmark" />
                      Birds
                    </label>
                  </div>
                  <div
                    className="hidden"
                    style={activeService.birds ? {} : { display: "none" }}
                  >
                    {getFeesFromService(3).map((value, index) => (
                      <div key={index} className="row mt-2">
                        <div className="col-6 col-md-3 col-lg-3 col-xl-3">
                          <div className="d-flex justify-content-between mb-2">
                            <div>
                              <p className="font-12 mb-0">Capacity</p>
                            </div>
                            <div className="help-tip">
                              <p>lorem ipsum</p>
                            </div>
                          </div>
                          <div className="num-block skin-2">
                            <div className="num-in">
                              <span
                                onClick={() => decreaseCapacity(3, index)}
                                className="minus"
                              />
                              <input
                                id={`cat${index}`}
                                key={index}
                                type="text"
                                readOnly={true}
                                className="in-num"
                                value={value.capacity}
                              />
                              <span
                                onClick={() => increaseCapacity(3, index)}
                                className="plus"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-6 col-md-3 col-lg-3 col-xl-3">
                          <div className="d-flex justify-content-between mb-2">
                            <div>
                              <p className="font-12 mb-0">Pet size</p>
                            </div>
                            <div className="help-tip">
                              <p>lorem ipsum</p>
                            </div>
                          </div>
                          <div className="form-group mb-0">
                            <div className="category-selection charge-select">
                              <Select
                                onChange={(data) =>
                                  onPetSizeChange(data, 3, index)
                                }
                                options={filterPetSize(3)}
                                value={petSize.find(
                                  (v) => value.pet_size_id == v.key
                                )}
                                isSearchable={false}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-6 col-md-3 col-lg-3 col-xl-3">
                          <div className="d-flex justify-content-between mb-2">
                            <div>
                              <p className="font-12 mb-0">Charges x 1</p>
                            </div>
                            <div className="help-tip">
                              <p>lorem ipsum</p>
                            </div>
                          </div>
                          <div className="form-group mb-0">
                            <input
                              className={
                                "form-control valid-control " +
                                (Number(value.service_charge) < 10
                                  ? "invalid"
                                  : "")
                              }
                              placeholder="0"
                              type="number"
                              onChange={(e) => onChargeChange(3, index, e)}
                              value={value.service_charge}
                              min={"10"}
                              onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                  event.preventDefault();
                                }
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-6 col-md-3 col-lg-3 col-xl-2">
                          <div className="d-flex justify-content-between mb-2">
                            <div>
                              <p className="font-12 mb-0">Earnings</p>
                            </div>
                            <div className="help-tip">
                              <p>lorem ipsum</p>
                            </div>
                          </div>
                          <div className="earning-details">
                            <p className="font-14 mb-0">{`¥${value.earning_amount}`}</p>
                          </div>
                        </div>
                        {getFeesFromService(3).length != 1 ? (
                          <div className="col-4 col-md-1 col-lg-1 col-xl-1 my-auto">
                            <div className="delete-icon">
                              <svg
                                onClick={() => deletePetServiceFee(3, index)}
                                viewBox="0 0 448 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    ))}
                    <button
                      onClick={() => addPetServiceFees(3)}
                      className="a btn btn-primary add-more-btn"
                    >
                      + Add more
                    </button>
                    <div data-toggle="modal" data-target="#services">
                      <a
                        onClick={() => setSideBarData(service[getIndexById(3)])}
                        href="#"
                        className="font-10 text-muted"
                      >
                        + Want to add optional services &amp; charges along with
                        Dog boarding?
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*--------/birds-----------*/}
              {/*--------Reptiles-----------*/}
              <div className="row  service-charges">
                <div className="col-12 col-md-10 col-lg-10 col-xl-10">
                  <div className="custom-check mb-2">
                    <label className="check ">
                      <input
                        type="checkbox"
                        name="reptile"
                        checked={activeService.reptile}
                        onChange={onChange}
                      />
                      <span className="checkmark" />
                      Reptiles
                    </label>
                  </div>
                  <div
                    className="hidden"
                    style={activeService.reptile ? {} : { display: "none" }}
                  >
                    {getFeesFromService(4).map((value, index) => (
                      <div key={index} className="row mt-2">
                        <div className="col-6 col-md-3 col-lg-3 col-xl-3">
                          <div className="d-flex justify-content-between mb-2">
                            <div>
                              <p className="font-12 mb-0">Capacity</p>
                            </div>
                            <div className="help-tip">
                              <p>lorem ipsum</p>
                            </div>
                          </div>
                          <div className="num-block skin-2">
                            <div className="num-in">
                              <span
                                onClick={() => decreaseCapacity(4, index)}
                                className="minus"
                              />
                              <input
                                id={`cat${index}`}
                                key={index}
                                type="text"
                                readOnly={true}
                                className="in-num"
                                value={value.capacity}
                              />
                              <span
                                onClick={() => increaseCapacity(4, index)}
                                className="plus"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-6 col-md-3 col-lg-3 col-xl-3">
                          <div className="d-flex justify-content-between mb-2">
                            <div>
                              <p className="font-12 mb-0">Pet size</p>
                            </div>
                            <div className="help-tip">
                              <p>lorem ipsum</p>
                            </div>
                          </div>
                          <div className="form-group mb-0">
                            <div className="category-selection charge-select">
                              <Select
                                onChange={(data) =>
                                  onPetSizeChange(data, 4, index)
                                }
                                options={filterPetSize(4)}
                                value={petSize.find(
                                  (v) => value.pet_size_id == v.key
                                )}
                                isSearchable={false}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-6 col-md-3 col-lg-3 col-xl-3">
                          <div className="d-flex justify-content-between mb-2">
                            <div>
                              <p className="font-12 mb-0">Charges x 1</p>
                            </div>
                            <div className="help-tip">
                              <p>lorem ipsum</p>
                            </div>
                          </div>
                          <div className="form-group mb-0">
                            <input
                              className={
                                "form-control valid-control " +
                                (Number(value.service_charge) < 10
                                  ? "invalid"
                                  : "")
                              }
                              placeholder="0"
                              type="number"
                              onChange={(e) => onChargeChange(4, index, e)}
                              value={value.service_charge}
                              min={"10"}
                              onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                  event.preventDefault();
                                }
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-6 col-md-3 col-lg-3 col-xl-2">
                          <div className="d-flex justify-content-between mb-2">
                            <div>
                              <p className="font-12 mb-0">Earnings</p>
                            </div>
                            <div className="help-tip">
                              <p>lorem ipsum</p>
                            </div>
                          </div>
                          <div className="earning-details">
                            <p className="font-14 mb-0">{`¥${value.earning_amount}`}</p>
                          </div>
                        </div>
                        {getFeesFromService(4).length != 1 ? (
                          <div className="col-4 col-md-1 col-lg-1 col-xl-1 my-auto">
                            <div className="delete-icon">
                              <svg
                                onClick={() => deletePetServiceFee(4, index)}
                                viewBox="0 0 448 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    ))}
                    <button
                      onClick={() => addPetServiceFees(4)}
                      className="a btn btn-primary add-more-btn"
                    >
                      + Add more
                    </button>
                    <div data-toggle="modal" data-target="#services">
                      <a
                        onClick={() => setSideBarData(service[getIndexById(4)])}
                        href="#"
                        className="font-10 text-muted"
                      >
                        + Want to add optional services &amp; charges along with
                        Dog boarding?
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row  service-charges">
                <div className="col-12 col-md-10 col-lg-10 col-xl-10">
                  <div className="custom-check mb-2">
                    <label className="check ">
                      <input
                        checked={activeService.smallAnimals}
                        onChange={onChange}
                        type="checkbox"
                        name="smallAnimals"
                      />
                      <span className="checkmark" />
                      Small animals
                    </label>
                  </div>
                  <div
                    className="hidden"
                    style={
                      activeService.smallAnimals ? {} : { display: "none" }
                    }
                  >
                    {getFeesFromService(5).map((value, index) => (
                      <div key={index} className="row mt-2">
                        <div className="col-6 col-md-3 col-lg-3 col-xl-3">
                          <div className="d-flex justify-content-between mb-2">
                            <div>
                              <p className="font-12 mb-0">Capacity</p>
                            </div>
                            <div className="help-tip">
                              <p>lorem ipsum</p>
                            </div>
                          </div>
                          <div className="num-block skin-2">
                            <div className="num-in">
                              <span
                                onClick={() => decreaseCapacity(5, index)}
                                className="minus"
                              />
                              <input
                                id={`cat${index}`}
                                key={index}
                                type="text"
                                readOnly={true}
                                className="in-num"
                                value={value.capacity}
                              />
                              <span
                                onClick={() => increaseCapacity(5, index)}
                                className="plus"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-6 col-md-3 col-lg-3 col-xl-3">
                          <div className="d-flex justify-content-between mb-2">
                            <div>
                              <p className="font-12 mb-0">Pet size</p>
                            </div>
                            <div className="help-tip">
                              <p>lorem ipsum</p>
                            </div>
                          </div>
                          <div className="form-group mb-0">
                            <div className="category-selection charge-select">
                              <Select
                                onChange={(data) =>
                                  onPetSizeChange(data, 5, index)
                                }
                                options={filterPetSize(5)}
                                value={petSize.find(
                                  (v) => value.pet_size_id == v.key
                                )}
                                isSearchable={false}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-6 col-md-3 col-lg-3 col-xl-3">
                          <div className="d-flex justify-content-between mb-2">
                            <div>
                              <p className="font-12 mb-0">Charges x 1</p>
                            </div>
                            <div className="help-tip">
                              <p>lorem ipsum</p>
                            </div>
                          </div>
                          <div className="form-group mb-0">
                            <input
                              className={
                                "form-control valid-control " +
                                (Number(value.service_charge) < 10
                                  ? "invalid"
                                  : "")
                              }
                              placeholder="0"
                              type="number"
                              onChange={(e) => onChargeChange(5, index, e)}
                              value={value.service_charge}
                              min={"10"}
                              onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                  event.preventDefault();
                                }
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-6 col-md-3 col-lg-3 col-xl-2">
                          <div className="d-flex justify-content-between mb-2">
                            <div>
                              <p className="font-12 mb-0">Earnings</p>
                            </div>
                            <div className="help-tip">
                              <p>lorem ipsum</p>
                            </div>
                          </div>
                          <div className="earning-details">
                            <p className="font-14 mb-0">{`¥${value.earning_amount}`}</p>
                          </div>
                        </div>
                        {getFeesFromService(5).length != 1 ? (
                          <div className="col-4 col-md-1 col-lg-1 col-xl-1 my-auto">
                            <div className="delete-icon">
                              <svg
                                onClick={() => deletePetServiceFee(5, index)}
                                viewBox="0 0 448 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    ))}
                    <button
                      onClick={() => addPetServiceFees(5)}
                      className="a btn btn-primary add-more-btn"
                    >
                      + Add more
                    </button>
                    <div data-toggle="modal" data-target="#services">
                      <a
                        onClick={() => setSideBarData(service[getIndexById(5)])}
                        href="#"
                        className="font-10 text-muted"
                      >
                        + Want to add optional services &amp; charges along with
                        Dog boarding?
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="extra-charge">
            <p className="font-semibold text-muted font-14 mb-0">
              Would you like to charge extra when providing boarding service
              during holidays?
            </p>
            <p className="mb-0 font-12">
              Enter value (in %) by which you would want prices to increase
              during holidays in below box.Look at list of holidays here.
            </p>
            <div className="d-flex service-charges">
              <div className="charge-input">
                <input
                  value={holidayCharges}
                  onChange={onTextChange}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  type="number"
                  min={0}
                  maxLength={3}
                  max={100}
                  name="holidayCharges"
                  className={
                    "form-control valid-control " +
                    (errors.holiday_extra_charges ? "invalid" : " ")
                  }
                  id="charge"
                  placeholder={"0"}
                />
              </div>
              <div className="ml-3">
                <p className="font-12 mb-0">
                  Range you can <br />
                  increase is 0 to 100%
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="fees-content my-3">
            <p className="font-semibold text-muted font-14 mb-0">
              Cacellation policy
            </p>
            <p className="mb-0 font-12">
              Select cancellation policy for this service, user will see the
              same at the time of booking
            </p>
            <div className="booking-for">
              <div className="row">
                <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                  <div className="row  service-charges">
                    <div className="custom-check">
                      <label className="check  mb-2">
                        <input
                          type="radio"
                          id="flexible"
                          checked={cancellationPolicy == 1}
                          onChange={changeCancellationPolicy}
                          name="is_name1"
                        />
                        <span className="checkmark" />
                        {strings.Flexible}
                      </label>
                      <p className="font-12">
                        For boarding and house sitting: You'll get a full refund
                        if you cancel before the stay begins. If you cancel
                        after the stay or walk begins, you'll get a 50% refund
                        for the first seven cancelled days and a 100% refund for
                        any additional cancelled days.
                      </p>
                      <p className="font-12 mb-0">
                        For walks, day care and drop-in visits: You’ll get a
                        full refund if you cancel before the day’s service is
                        delivered
                      </p>
                    </div>
                  </div>
                  {/*--------/Flexible-----------*/}
                  {/*--------Flexible-----------*/}
                  <div className="row  service-charges">
                    <div className="custom-check">
                      <label className="check mb-2">
                        <input
                          type="radio"
                          name="is_name1"
                          id="moderate"
                          checked={cancellationPolicy == 2}
                          onChange={changeCancellationPolicy}
                        />
                        <span className="checkmark" />
                        {strings.Moderate}
                      </label>
                      <p className="font-12 mb-2">
                        You cancel within 48 hours of booking
                      </p>
                      <p className="font-12  mb-2">
                        You haven’t already cancelled 3 reservations in the last
                        12 months.
                      </p>
                      <p className="font-12  mb-2">
                        The reservation you’re cancelling doesn’t overlap with
                        another reservation in your account When refund, any
                        promo code (coupon) and points will be available to use
                        immediately.
                      </p>
                      <p className="font-12  mb-0">
                        You'll get a full refund if you cancel by 12:00 noon 3
                        days before the stay begins (12:00 noon is determined by
                        your sitter's time zone). If you cancel after 12:00 noon
                        3 days before the stay begins, you'll get a 50% refund
                        for the first seven cancelled days and a 100% refund for
                        any additional cancelled days.
                      </p>
                    </div>
                  </div>
                  {/*--------/Flexible-----------*/}
                  {/*--------Flexible-----------*/}
                  <div className="row  service-charges">
                    <div className="custom-check">
                      <label className="check mb-2">
                        <input
                          type="radio"
                          name="is_name1"
                          id="strict"
                          checked={cancellationPolicy == 3}
                          onChange={changeCancellationPolicy}
                        />
                        <span className="checkmark" />
                        Strict
                      </label>
                      <p className="font-12 mb-2">
                        You'll get a full refund if you cancel by 12:00 noon one
                        week before the stay begins (12:00 noon is determined by
                        your sitter's time zone). If you cancel after 12:00 noon
                        one week before the stay begins, you'll get a 50% refund
                        for the first seven cancelled days and a 100% refund for
                        any additional day
                      </p>
                    </div>
                  </div>
                  {/*--------/Flexible-----------*/}
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <SaveServiceView preview={3} onSave={saveServiceAndFee} />

      <AdditonalServiceSidebar
        data={sideBarData}
        addData={addAdditionalService}
        removeData={removeAdditonalService}
      />
    </>
  );
};

export default DropInServiceFee;
