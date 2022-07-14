import React from "react";
import { useEffect } from "react";
import { useState } from "react";

interface IState {
  means_of_transport: string;
  business_hours: string;
  regular_holidays: string;
  is_open_on_sunday: number;
}
export default function SpotTransportation(props: any) {
  const [errors, setErrors] = useState<any>({});
  const [transportation, setTransportation] = useState<IState>({
    means_of_transport: "",
    business_hours: "",
    regular_holidays: "",
    is_open_on_sunday: 0,
  });

  useEffect(() => {
    if (props.data) {
      setTransportation({ ...props.data });
    }
  }, [props]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    setTransportation({ ...transportation, [e.target.name]: e.target.value });
    if (Object.keys(errors).includes(e.target.name)) {
      let newValue = { ...errors };
      delete newValue[e.target.name];
      setErrors(newValue);
    }
  };

  const onSubmit = () => {
    if (transportation.means_of_transport == "") {
      setErrors({ ...errors, means_of_transport: true });
      return false;
    }

    if (transportation.business_hours == "") {
      setErrors({ ...errors, business_hours: true });
      return false;
    }

    if (transportation.regular_holidays == "") {
      setErrors({ ...errors, regular_holidays: true });
      return false;
    }
    props.updateOperations(transportation);
    props.changePage(4);
  };
  return (
    <div className="select-spot-category content-padding">
      <h5 className="font-semibold mb-3">
        Transportation / Operational details*
      </h5>
      <div className="booking-for">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-12 col-xl-12">
            <div className="info-form">
              <h6 className="font-medium mb-3">Means of transport</h6>
              <div className="form-group">
                <textarea
                  className={
                    "form-control " +
                    (errors.means_of_transport ? "is-invalid" : "")
                  }
                  rows={6}
                  id="trasnport"
                  typeof="text"
                  value={transportation.means_of_transport}
                  onChange={onChange}
                  name="means_of_transport"
                  placeholder="5 mins walk from the west Exit of JR Ebisu Station                                                                                                                 3 mins walk from Exit 2 of the Tokyo Merto Hibiya Line"
                  defaultValue={""}
                />
              </div>
              <hr />
              <h6 className="font-medium mb-3">Business hours</h6>
              <div className="row">
                <div className="col-12 col-md-8 col-lg-8 col-xl-8">
                  <div className="form-group">
                    <textarea
                      className={
                        "form-control " +
                        (errors.business_hours ? "is-invalid" : "")
                      }
                      rows={6}
                      value={transportation.business_hours}
                      name="business_hours"
                      onChange={onChange}
                      id="business-hours"
                      typeof="text"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                  <div className="hours-bg hours-details">
                    <p className="mb-1 font-medium">Example</p>
                    <p className="mb-1 font-medium">[Monday to Gold]</p>
                    <p className="mb-1 font-medium">
                      11:00~15:00 (LO) 18:00~ the next 0:30 (LO24:00)
                    </p>
                    <p className="mb-1 font-medium">[Sat . Sun . Chu]</p>
                    <p className="mb-0 font-medium">11:00~21:00</p>
                  </div>
                </div>
              </div>
              <hr />
              <h6 className="font-medium mb-3">Regular holiday</h6>
              <div className="form-group">
                <input
                  className={
                    "form-control " +
                    (errors.regular_holidays ? "is-invalid" : "")
                  }
                  id="trasnport"
                  type="text"
                  name="regular_holidays"
                  onChange={onChange}
                  value={transportation.regular_holidays}
                  placeholder="Example Sunday, Monday"
                />
              </div>
              <div className="hours-details">
                <p className="mb-2 font-medium">
                  If you are open on Sunday, please check the following
                </p>
                <div className="custom-check">
                  <label className="check ">
                    <input
                      checked={transportation.is_open_on_sunday == 1}
                      onChange={() => {
                        setTransportation({
                          ...transportation,
                          is_open_on_sunday:
                            transportation.is_open_on_sunday == 1 ? 0 : 1,
                        });
                      }}
                      type="checkbox"
                      name="is_name2"
                    />
                    <span className="checkmark" />
                    Open on Sunday
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer px-0 pb-0 justify-content-between">
          <button className="btn btn-primary btn1 btn-edit">
            back
          </button>
          <button onClick={() => onSubmit()} className="btn btn-primary">
            Save &amp; proceed
          </button>
        </div>
      </div>
    </div>
  );
}
