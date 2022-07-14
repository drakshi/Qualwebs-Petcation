import React from "react";
import { strings } from "../../public/lang/Strings";
import User from ".";

export default function GlobalPreference() {
  return (
    <div className="col-12 col-md-8 col-lg-8 col-xl-8  column1">
      <div className="bg-white main-background global-details">
        <h5 className="font-20 font-semibold">{strings.Globalpreferences}</h5>
        <div className="booking-for">
          <div className="row">
            <div className="col-9 col-md-8 col-lg-8 col-xl-8">
              <h6 className="font-medium">{strings.Availability}</h6>
              <p className="font-14 mb-0">{strings.Markyouravailability}</p>
            </div>
            <div className="col-3 col-md-4 col-lg-4 col-xl-4 my-auto">
              <div className="on-off-toggle switch">
                <input
                  className="on-off-toggle__input"
                  type="checkbox"
                  id="active1"
                  defaultChecked
                />
                <label htmlFor="active1" className="on-off-toggle__slider" />
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-9 col-md-8 col-lg-8 col-xl-8">
              <h6 className="font-medium">{strings.Availability}</h6>
              <p className="font-14 mb-0">{strings.Markyouravailability}</p>
            </div>
            <div className="col-3 col-md-4 col-lg-4 col-xl-4 my-auto">
              <div className="on-off-toggle switch">
                <input
                  className="on-off-toggle__input"
                  type="checkbox"
                  id="active2"
                  defaultChecked
                />
                <label htmlFor="active2" className="on-off-toggle__slider" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white main-background global-details">
        <h5 className="font-20 font-semibold">{strings.Notifications}</h5>
        <div className="booking-for">
          <div className="msg-notify">
            <div className="mb-3">
              <h5 className="font-semibold mb-2">Messages</h5>
              <p className="mb-0 font-14 text-muted">
                {strings.Receivemessagesfromhosts}
              </p>
            </div>
            <div className="row">
              <div className="col-9 col-md-8 col-lg-8 col-xl-8">
                <h6 className="font-medium mb-0">{strings.Email}</h6>
              </div>
              <div className="col-3 col-md-4 col-lg-4 col-xl-4 my-auto">
                <div className="on-off-toggle switch">
                  <input
                    className="on-off-toggle__input"
                    type="checkbox"
                    id="active3"
                    defaultChecked
                  />
                  <label htmlFor="active3" className="on-off-toggle__slider" />
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-9 col-md-8 col-lg-8 col-xl-8">
                <h6 className="font-medium mb-0">{strings.Textmessage}</h6>
              </div>
              <div className="col-3 col-md-4 col-lg-4 col-xl-4 my-auto">
                <div className="on-off-toggle switch">
                  <input
                    className="on-off-toggle__input"
                    type="checkbox"
                    id="active4"
                    defaultChecked
                  />
                  <label htmlFor="active4" className="on-off-toggle__slider" />
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-9 col-md-8 col-lg-8 col-xl-8">
                <h6 className="font-medium">{strings.Browsernotification}</h6>
                <p className="font-14 mb-0">
                  {strings.Youcanmarkpickupserviceenable}
                </p>
              </div>
              <div className="col-3 col-md-4 col-lg-4 col-xl-4 my-auto">
                <div className="on-off-toggle switch">
                  <input
                    className="on-off-toggle__input"
                    type="checkbox"
                    id="active5"
                  />
                  <label htmlFor="active5" className="on-off-toggle__slider" />
                </div>
              </div>
            </div>
            <hr />
          </div>
          <div className="msg-notify">
            <div className="mb-3">
              <h5 className="font-semibold mb-2">{strings.Reminders}</h5>
              <p className="mb-0 font-14 text-muted">
                {strings.Receivebookingreminders}
              </p>
            </div>
            <div className="row">
              <div className="col-9 col-md-8 col-lg-8 col-xl-8">
                <h6 className="font-medium mb-0">{strings.Email}</h6>
              </div>
              <div className="col-3 col-md-4 col-lg-4 col-xl-4 my-auto">
                <div className="on-off-toggle switch">
                  <input
                    className="on-off-toggle__input"
                    type="checkbox"
                    id="active6"
                    defaultChecked
                  />
                  <label htmlFor="active6" className="on-off-toggle__slider" />
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-9 col-md-8 col-lg-8 col-xl-8">
                <h6 className="font-medium mb-0">{strings.Textmessage}</h6>
              </div>
              <div className="col-3 col-md-4 col-lg-4 col-xl-4 my-auto">
                <div className="on-off-toggle switch">
                  <input
                    className="on-off-toggle__input"
                    type="checkbox"
                    id="active7"
                    defaultChecked
                  />
                  <label htmlFor="active7" className="on-off-toggle__slider" />
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-9 col-md-8 col-lg-8 col-xl-8">
                <h6 className="font-medium">{strings.Browsernotification}</h6>
                <p className="font-14 mb-0">
                  {strings.Youcanmarkpickupserviceenable}
                </p>
              </div>
              <div className="col-3 col-md-4 col-lg-4 col-xl-4 my-auto">
                <div className="on-off-toggle switch">
                  <input
                    className="on-off-toggle__input"
                    type="checkbox"
                    id="active8"
                  />
                  <label htmlFor="active8" className="on-off-toggle__slider" />
                </div>
              </div>
            </div>
            <hr />
          </div>

          <div className="msg-notify">
            <div className="mb-3">
              <h5 className="font-semibold mb-2">
                {strings.Promotionsandtips}
              </h5>
              <p className="mb-0 font-14 text-muted">{strings.rec}</p>
            </div>
            <div className="row">
              <div className="col-9 col-md-8 col-lg-8 col-xl-8">
                <h6 className="font-medium mb-0">{strings.Email}</h6>
              </div>
              <div className="col-3 col-md-4 col-lg-4 col-xl-4 my-auto">
                <div className="on-off-toggle switch">
                  <input
                    className="on-off-toggle__input"
                    type="checkbox"
                    id="active9"
                    defaultChecked
                  />
                  <label htmlFor="active9" className="on-off-toggle__slider" />
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-9 col-md-8 col-lg-8 col-xl-8">
                <h6 className="font-medium mb-0">{strings.Textmessage}</h6>
              </div>
              <div className="col-3 col-md-4 col-lg-4 col-xl-4 my-auto">
                <div className="on-off-toggle switch">
                  <input
                    className="on-off-toggle__input"
                    type="checkbox"
                    id="active10"
                    defaultChecked
                  />
                  <label htmlFor="active10" className="on-off-toggle__slider" />
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-9 col-md-8 col-lg-8 col-xl-8">
                <h6 className="font-medium mb-0">{strings.Phonecalls}</h6>
              </div>
              <div className="col-3 col-md-4 col-lg-4 col-xl-4 my-auto">
                <div className="on-off-toggle switch">
                  <input
                    className="on-off-toggle__input"
                    type="checkbox"
                    id="active11"
                    defaultChecked
                  />
                  <label htmlFor="active11" className="on-off-toggle__slider" />
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-9 col-md-8 col-lg-8 col-xl-8">
                <h6 className="font-medium">{strings.Browsernotification}</h6>
                <p className="font-14 mb-0">
                  {strings.Youcanmarkpickupserviceenable}
                </p>
              </div>
              <div className="col-3 col-md-4 col-lg-4 col-xl-4 my-auto">
                <div className="on-off-toggle switch">
                  <input
                    className="on-off-toggle__input"
                    type="checkbox"
                    id="active12"
                  />
                  <label htmlFor="active12" className="on-off-toggle__slider" />
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <div className="bg-white main-background global-details">
        <h5 className="font-20 font-semibold">{strings.Generalpreferences}</h5>
        <div className="booking-for  selections">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-8 col-xl-9">
              <h6 className="font-medium">{strings.Language}</h6>
              <p className="font-14 mb-0">
                {strings.SetyourpreferedlanguageforPetcatiaon}
              </p>
            </div>
            <div className="col-12 col-md-4 col-lg-4 col-xl-3 my-auto">
              <div className="form-group mb-0">
                <div className="">
                  <div className="dropdown">
                    <select
                      className="form-control mySelect"
                      id="night-charge"
                      tabIndex={-98}
                    >
                      <option>English</option>
                    </select>
                    <button
                      type="button"
                      className="btn dropdown-toggle btn-light"
                      data-toggle="dropdown"
                      role="combobox"
                      aria-owns="bs-select-1"
                      aria-haspopup="listbox"
                      aria-expanded="false"
                      data-id="night-charge"
                      title="English"
                    >
                      <div className="filter-option">
                        <div className="filter-option-inner">
                          <div className="filter-option-inner-inner">
                            English
                          </div>
                        </div>{" "}
                      </div>
                    </button>
                    <div
                      className="dropdown-menu"
                      style={{
                        maxHeight: "1421.27px",
                        overflow: "hidden",
                        minHeight: 0,
                      }}
                    >
                      <div
                        className="inner show"
                        role="listbox"
                        id="bs-select-1"
                        tabIndex={-1}
                        aria-activedescendant="bs-select-1-0"
                        style={{
                          maxHeight: "1421.27px",
                          overflowY: "auto",
                          minHeight: 0,
                        }}
                      >
                        <ul
                          className="dropdown-menu inner show"
                          role="presentation"
                          style={{ marginTop: 0, marginBottom: 0 }}
                        >
                          <li className="selected active">
                            <a
                              role="option"
                              className="dropdown-item active selected"
                              id="bs-select-1-0"
                              tabIndex={0}
                              aria-setsize={1}
                              aria-posinset={1}
                              aria-selected="true"
                            >
                              <span className="text">English</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12 col-md-8 col-lg-8 col-xl-9">
              <h6 className="font-medium">{strings.Country}</h6>
              <p className="font-14 mb-0">
                {strings.SetyourpreferedlanguageforPetcatiaon}
              </p>
            </div>
            <div className="col-12 col-md-4 col-lg-4 col-xl-3 my-auto">
              <div className="form-group mb-0">
                <div className="">
                  <div className="dropdown">
                    <select
                      className="form-control mySelect"
                      id="night-charge"
                      tabIndex={-98}
                    >
                      <option>Japan</option>
                      <option>US</option>
                    </select>
                    <button
                      type="button"
                      className="btn dropdown-toggle btn-light"
                      data-toggle="dropdown"
                      role="combobox"
                      aria-owns="bs-select-2"
                      aria-haspopup="listbox"
                      aria-expanded="false"
                      data-id="night-charge"
                      title="US"
                    >
                      <div className="filter-option">
                        <div className="filter-option-inner">
                          <div className="filter-option-inner-inner">US</div>
                        </div>{" "}
                      </div>
                    </button>
                    <div
                      className="dropdown-menu"
                      style={{
                        maxHeight: "1501.27px",
                        overflow: "hidden",
                        minHeight: 0,
                      }}
                    >
                      <div
                        className="inner show"
                        role="listbox"
                        id="bs-select-2"
                        tabIndex={-1}
                        aria-activedescendant="bs-select-2-1"
                        style={{
                          maxHeight: "1501.27px",
                          overflowY: "auto",
                          minHeight: 0,
                        }}
                      >
                        <ul
                          className="dropdown-menu inner show"
                          role="presentation"
                          style={{ marginTop: 0, marginBottom: 0 }}
                        >
                          <li className="selected active">
                            <a
                              role="option"
                              className="dropdown-item active selected"
                              id="bs-select-2-0"
                              tabIndex={0}
                              aria-setsize={2}
                              aria-posinset={1}
                              aria-selected="true"
                            >
                              <span className="text">Japan</span>
                            </a>
                          </li>
                          <li className="selected active">
                            <a
                              role="option"
                              className="dropdown-item active selected"
                              id="bs-select-2-1"
                              tabIndex={0}
                              aria-setsize={2}
                              aria-posinset={2}
                              aria-selected="true"
                            >
                              <span className="text">US</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12 col-md-8 col-lg-8 col-xl-9">
              <h6 className="font-medium">{strings.Currency}</h6>
              <p className="font-14 mb-0">
                {strings.Selectcurrencyforallyourtransactions}
              </p>
            </div>
            <div className="col-12 col-md-4 col-lg-4 col-xl-3 my-auto">
              <div className="form-group mb-0">
                <div className="">
                  <div className="dropdown">
                    <select
                      className="form-control mySelect"
                      id="night-charge"
                      tabIndex={-98}
                    >
                      <option>¥ JPY</option>
                    </select>
                    <button
                      type="button"
                      className="btn dropdown-toggle btn-light"
                      data-toggle="dropdown"
                      role="combobox"
                      aria-owns="bs-select-3"
                      aria-haspopup="listbox"
                      aria-expanded="false"
                      data-id="night-charge"
                      title="¥ JPY"
                    >
                      <div className="filter-option">
                        <div className="filter-option-inner">
                          <div className="filter-option-inner-inner">¥ JPY</div>
                        </div>{" "}
                      </div>
                    </button>
                    <div
                      className="dropdown-menu"
                      style={{
                        maxHeight: "1581.27px",
                        overflow: "hidden",
                        minHeight: 0,
                      }}
                    >
                      <div
                        className="inner show"
                        role="listbox"
                        id="bs-select-3"
                        tabIndex={-1}
                        aria-activedescendant="bs-select-3-0"
                        style={{
                          maxHeight: "1581.27px",
                          overflowY: "auto",
                          minHeight: 0,
                        }}
                      >
                        <ul
                          className="dropdown-menu inner show"
                          role="presentation"
                          style={{ marginTop: 0, marginBottom: 0 }}
                        >
                          <li className="selected active">
                            <a
                              role="option"
                              className="dropdown-item active selected"
                              id="bs-select-3-0"
                              tabIndex={0}
                              aria-setsize={1}
                              aria-posinset={1}
                              aria-selected="true"
                            >
                              <span className="text">¥ JPY</span>
                            </a>
                          </li>
                        </ul>
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
  );
}

GlobalPreference.getLayout = function (page) {
  return <User>{page}</User>;
};
