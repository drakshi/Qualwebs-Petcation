import Select from "react-select";
import React, { useState } from "react";
import { strings } from "../../../public/lang/Strings";
import { I_BOARDING_SERVICE_PET } from "../../../models/boardingService.interface";

const ServiceAndFee = () => {
  const [service, setService] = useState<I_BOARDING_SERVICE_PET[]>([]);
  const [activeService, setActiveService] = useState({
    dog: false,
    cat: false,
    birds: false,
    reptile: false,
    smallAnimals: false,
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case "dog":
        setActiveService({ ...activeService, dog: event.target.checked });
        addPetService(event.target.checked, 1);
        break;
    }
  };

  const getServiceObject = (id) => {
    return {
      pet_type: id,
      fees: [
        {
          capacity: 0,
          pet_size_id: 0,
          service_charge: "0",
          earning_amount: "0",
        },
      ],
    };
  };

  const removePetService = (id) => {
    let serviceData = [...service];
    let index = serviceData.findIndex((value) => value.pet_type == id);
    serviceData.splice(index, 1);
    setService(serviceData);
  };

  const addPetService = (boolean, id) => {
    if (boolean) {
      setService([...service, getServiceObject(id)]);
    } else {
      removePetService(id);
    }
  };

  return (
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
                      defaultChecked={false}
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
                  <div className="row">
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
                          <span className="minus" />
                          <input
                            type="text"
                            className="in-num"
                            defaultValue={1}
                            readOnly
                          />
                          <span className="plus" />
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
                          <Select isSearchable={false} />
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
                          className="form-control"
                          placeholder="¥100"
                          type="number"
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
                        <p className="font-14 mb-0">¥85</p>
                      </div>
                    </div>
                  </div>
                  <div data-toggle="modal" data-target="#services">
                    <a href="#" className="font-10 text-muted">
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
                      defaultChecked={false}
                      checked={activeService.dog}
                      onChange={onChange}
                    />
                    <span className="checkmark" />
                    Cat
                  </label>
                </div>
                <div
                  className="hidden"
                  id="hidden_fields_one"
                  style={activeService.cat ? { display: "none" } : {}}
                >
                  <div className="row">
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
                          <span className="minus" />
                          <input
                            type="text"
                            className="in-num"
                            defaultValue={1}
                            readOnly
                          />
                          <span className="plus" />
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
                          <Select isSearchable={false} />
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
                          className="form-control"
                          placeholder="¥100"
                          type="number"
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
                        <p className="font-14 mb-0">¥85</p>
                      </div>
                    </div>
                  </div>
                  <div data-toggle="modal" data-target="#services">
                    <a href="#" className="font-10 text-muted">
                      + Want to add optional services &amp; charges along with
                      Dog boarding?
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*--------/cat-----------*/}
            {/*--------birds-----------*/}
            <div className="row  service-charges">
              <div className="col-12 col-md-10 col-lg-10 col-xl-10">
                <div className="custom-check mb-2">
                  <label className="check ">
                    <input
                      type="checkbox"
                      name="is_name1"
                      defaultChecked={true}
                    />
                    <span className="checkmark" />
                    Birds
                  </label>
                </div>
                <div className="capacity">
                  <div className="row">
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
                          <span className="minus" />
                          <input
                            type="text"
                            className="in-num"
                            defaultValue={1}
                            readOnly
                          />
                          <span className="plus" />
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
                          <Select isSearchable={false} />
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
                          className="form-control"
                          placeholder="¥100"
                          type="number"
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
                        <p className="font-14 mb-0">¥85</p>
                      </div>
                    </div>
                  </div>
                  <div data-toggle="modal" data-target="#services">
                    <a href="#" className="font-10 text-muted">
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
                    <input type="checkbox" name="is_name1" />
                    <span className="checkmark" />
                    Reptiles
                  </label>
                </div>
                <div className="capacity">
                  <div className="row">
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
                          <span className="minus" />
                          <input
                            type="text"
                            className="in-num"
                            defaultValue={1}
                            readOnly
                          />
                          <span className="plus" />
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
                          <Select isSearchable={false} />
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
                          className="form-control"
                          placeholder="¥100"
                          type="number"
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
                        <p className="font-14 mb-0">¥85</p>
                      </div>
                    </div>
                  </div>
                  <div data-toggle="modal" data-target="#services">
                    <a href="#" className="font-10 text-muted">
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
                    <input type="checkbox" name="is_name1" />
                    <span className="checkmark" />
                    Small animals
                  </label>
                </div>
                <div className="capacity">
                  <div className="row">
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
                          <span className="minus" />
                          <input
                            type="text"
                            className="in-num"
                            defaultValue={1}
                            readOnly
                          />
                          <span className="plus" />
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
                          <Select isSearchable={false} />
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
                          className="form-control"
                          placeholder="¥100"
                          type="number"
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
                        <p className="font-14 mb-0">¥85</p>
                      </div>
                    </div>
                  </div>
                  <div data-toggle="modal" data-target="#services">
                    <a href="#" className="font-10 text-muted">
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
            Enter value (in %) by which you would want prices to increase during
            holidays in below box.Look at list of holidays here.
          </p>
          <div className="d-flex service-charges">
            <div className="charge-input">
              <input className="form-control" id="charge" placeholder={"10"} />
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
            Cacellation policy{" "}
          </p>
          <p className="mb-0 font-12">
            Select cancellation policy for this service, user will see the same
            at the time of booking
          </p>
          <div className="booking-for">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                {/*--------Flexible-----------*/}
                <div className="row  service-charges">
                  <div className="custom-check">
                    <label className="check  mb-2">
                      <input
                        type="radio"
                        name="is_name1"
                        defaultChecked={true}
                      />
                      <span className="checkmark" />
                      Flexible
                    </label>
                    <p className="font-12">
                      For boarding and house sitting: You'll get a full refund
                      if you cancel before the stay begins. If you cancel after
                      the stay or walk begins, you'll get a 50% refund for the
                      first seven cancelled days and a 100% refund for any
                      additional cancelled days.
                    </p>
                    <p className="font-12 mb-0">
                      For walks, day care and drop-in visits: You’ll get a full
                      refund if you cancel before the day’s service is delivered
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
                        defaultChecked={true}
                      />
                      <span className="checkmark" />
                      Flexible
                    </label>
                    <p className="font-12 mb-2">
                      You cancel within 48 hours of booking{" "}
                    </p>
                    <p className="font-12  mb-2">
                      You haven’t already cancelled 3 reservations in the last
                      12 months.
                    </p>
                    <p className="font-12  mb-2">
                      The reservation you’re cancelling doesn’t overlap with
                      another reservation in your account When refund, any promo
                      code (coupon) and points will be available to use
                      immediately.{" "}
                    </p>
                    <p className="font-12  mb-0">
                      You'll get a full refund if you cancel by 12:00 noon 3
                      days before the stay begins (12:00 noon is determined by
                      your sitter's time zone). If you cancel after 12:00 noon 3
                      days before the stay begins, you'll get a 50% refund for
                      the first seven cancelled days and a 100% refund for any
                      additional cancelled days.
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
                        defaultChecked={true}
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

      <div
        className="tab-pane fade"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <div className="booking-for">
          <div className="preferences-details">
            <div className="main-padding">
              <h6 className="font-semibold font-14">
                Your availability while pet is at boarding
              </h6>
              <p className="font-12">
                {" "}
                You can select from the options part-time &amp; fulltime;
                selecting full-time means you are available all the time at home
                when boarding the pet.
              </p>
              <div className="form-group">
                <div className="category-selection charge-select">
                  <div className="dropdown bootstrap-select form-control mySelect">
                    <select className="form-control mySelect" tabIndex={-98}>
                      <option>Fulltime</option>
                    </select>
                    <button
                      type="button"
                      className="btn dropdown-toggle btn-light"
                      data-toggle="dropdown"
                      role="combobox"
                      aria-owns="bs-select-4"
                      aria-haspopup="listbox"
                      aria-expanded="false"
                      title="Fulltime"
                    >
                      <div className="filter-option">
                        <div className="filter-option-inner">
                          <div className="filter-option-inner-inner">
                            Fulltime
                          </div>
                        </div>{" "}
                      </div>
                    </button>
                    <div className="dropdown-menu ">
                      <div
                        className="inner show"
                        role="listbox"
                        id="bs-select-4"
                        tabIndex={-1}
                      >
                        <ul
                          className="dropdown-menu inner show"
                          role="presentation"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-padding">
              <h6 className="font-medium font-14">
                When hosting pets in your home, how frequently can you provide
                breaks?
              </h6>
              <p className="font-12">
                When hosting pets in your home, how frequently can you provide
                potty breaks, or walks, or feeds in case.
              </p>
              <div className="form-group">
                <div className="category-selection charge-select">
                  <div className="dropdown bootstrap-select form-control mySelect">
                    <select className="form-control mySelect" tabIndex={-98}>
                      <option>0-2 hrs</option>
                    </select>
                    <button
                      type="button"
                      className="btn dropdown-toggle btn-light"
                      data-toggle="dropdown"
                      role="combobox"
                      aria-owns="bs-select-5"
                      aria-haspopup="listbox"
                      aria-expanded="false"
                      title="0-2 hrs"
                    >
                      <div className="filter-option">
                        <div className="filter-option-inner">
                          <div className="filter-option-inner-inner">
                            0-2 hrs
                          </div>
                        </div>{" "}
                      </div>
                    </button>
                    <div className="dropdown-menu ">
                      <div
                        className="inner show"
                        role="listbox"
                        id="bs-select-5"
                        tabIndex={-1}
                      >
                        <ul
                          className="dropdown-menu inner show"
                          role="presentation"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <h6 className="font-medium font-14 mb-3">
                  Can you pickup pet from client’s place?
                </h6>
                <div className="form-group">
                  <div className="category-selection charge-select">
                    <div className="dropdown bootstrap-select form-control mySelect">
                      <select className="form-control mySelect" tabIndex={-98}>
                        <option>Yes</option>\<option>No</option>
                      </select>
                      <button
                        type="button"
                        className="btn dropdown-toggle btn-light"
                        data-toggle="dropdown"
                        role="combobox"
                        aria-owns="bs-select-6"
                        aria-haspopup="listbox"
                        aria-expanded="false"
                        title="Yes"
                      >
                        <div className="filter-option">
                          <div className="filter-option-inner">
                            <div className="filter-option-inner-inner">Yes</div>
                          </div>{" "}
                        </div>
                      </button>
                      <div className="dropdown-menu ">
                        <div
                          className="inner show"
                          role="listbox"
                          id="bs-select-6"
                          tabIndex={-1}
                        >
                          <ul
                            className="dropdown-menu inner show"
                            role="presentation"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <h6 className="font-medium font-14 mb-3">By what means?</h6>
                <div className="form-group">
                  <div className="category-selection charge-select">
                    <div className="dropdown bootstrap-select form-control mySelect">
                      <select className="form-control mySelect" tabIndex={-98}>
                        <option>CAR</option>
                      </select>
                      <button
                        type="button"
                        className="btn dropdown-toggle btn-light"
                        data-toggle="dropdown"
                        role="combobox"
                        aria-owns="bs-select-7"
                        aria-haspopup="listbox"
                        aria-expanded="false"
                        title="CAR"
                      >
                        <div className="filter-option">
                          <div className="filter-option-inner">
                            <div className="filter-option-inner-inner">CAR</div>
                          </div>{" "}
                        </div>
                      </button>
                      <div className="dropdown-menu ">
                        <div
                          className="inner show"
                          role="listbox"
                          id="bs-select-7"
                          tabIndex={-1}
                        >
                          <ul
                            className="dropdown-menu inner show"
                            role="presentation"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <h6 className="font-medium font-14 mb-3">How far?</h6>
                <div className="form-group">
                  <div className="category-selection charge-select">
                    <div className="dropdown bootstrap-select form-control mySelect">
                      <select className="form-control mySelect" tabIndex={-98}>
                        <option>15Kms</option>\<option>20Kms</option>
                      </select>
                      <button
                        type="button"
                        className="btn dropdown-toggle btn-light"
                        data-toggle="dropdown"
                        role="combobox"
                        aria-owns="bs-select-8"
                        aria-haspopup="listbox"
                        aria-expanded="false"
                        title="15Kms"
                      >
                        <div className="filter-option">
                          <div className="filter-option-inner">
                            <div className="filter-option-inner-inner">
                              15Kms
                            </div>
                          </div>{" "}
                        </div>
                      </button>
                      <div className="dropdown-menu ">
                        <div
                          className="inner show"
                          role="listbox"
                          id="bs-select-8"
                          tabIndex={-1}
                        >
                          <ul
                            className="dropdown-menu inner show"
                            role="presentation"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="tab-pane fade"
        id="contact"
        role="tabpanel"
        aria-labelledby="contact-tab"
      >
        <div className="preferences-details">
          <div className="booking-for">
            <h5 className="font-semibold">Special discount for your guests</h5>
            <div className="discount-check">
              <div className="custom-check">
                <label className="check ">
                  <input
                    type="radio"
                    className="class1"
                    name="is_name2"
                    defaultChecked={true}
                    defaultValue="dog"
                  />
                  <span className="checkmark" />
                  <h6>20% off on first booking with you</h6>
                  <p className="font-12">
                    Allow 20% of on booking amount for the first time guests.
                    This offers can attract new guests and help you to earn more
                    points and reviews
                  </p>
                </label>
              </div>
            </div>
            <div className="discount-check">
              <div className="custom-check">
                <label className="check ">
                  <input
                    type="radio"
                    className="class1"
                    name="is_name2"
                    defaultValue="dog"
                  />
                  <span className="checkmark" />
                  <h6>No offer on this service</h6>
                  <p className="font-12">
                    Allow 20% of on booking amount for the first time guests.
                    This offers can attract new guests and help you to earn more
                    points and reviews
                  </p>
                </label>
              </div>
            </div>
            <hr />
            <div className="stay-discount">
              <h5>Length-of-stay discount</h5>
              <p className="font-12">
                Allow 20% of on booking amount for the first time guests. This
                offers can attract new guests and help you to earn more points
                and reviews
              </p>
              <div className="weekly-discount mb-4">
                <h6 className="text-muted font-14 font-semibold">
                  Weekly discount
                </h6>
                <input
                  className="form-control mb-3"
                  id="weekly-discount"
                  name="discount"
                />
                <h6 className="font-normal tip">Tip: 21%</h6>
                <p className="font-12 mb-0">
                  This discount will apply to any reservation of 7 to 12 nights
                </p>
              </div>
              <div className="weekly-discount mb-3">
                <h6 className="text-muted font-14 font-semibold">
                  Monthly discount
                </h6>
                <input
                  className="form-control mb-3"
                  id="weekly-discount"
                  name="discount"
                />
                <h6 className="font-normal tip">Tip: 49%</h6>
                <p className="font-12 mb-0">
                  This discount will apply to any reservation of 7 to 12 nights
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAndFee;
