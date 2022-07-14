import React, { useEffect, useState } from "react";
import {
  I_BOARDING_SERVICE_PET,
  I_PET_ADDITIONAL_SERVICE,
} from "../../../models/boardingService.interface";

let initialState: I_PET_ADDITIONAL_SERVICE = {
  name: "",
  description: "",
  price: 0,
};

interface I_PROPS {
  data: any;
  addData: (id, data) => void;
  removeData: (id, index) => void;
}
export default function AdditonalServiceSidebar({
  data,
  addData,
  removeData,
}: I_PROPS) {
  const [customService, setCustomService] =
    useState<I_PET_ADDITIONAL_SERVICE>(initialState);
  const [errors, setErrors] = useState<any>({});

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors({});
    setCustomService({ ...customService, [e.target.name]: e.target.value });
  };

  const validateAndAdd = () => {
    if (customService.name == "") {
      setErrors({ name: true });
    } else if (customService.description == "") {
      setErrors({ description: true });
    } else if (customService.price == 0) {
      setErrors({ price: true });
    } else {
      setErrors({});
      addData(data.pet_type, customService);
      setCustomService(initialState);
    }
  };
  return (
    <div
      className="sidebar-modal modal service-modal left services fade"
      id="services"
      tabIndex={-1}
      role="dialog"
      style={{ display: "none" }}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-sm" role="document">
        <div className="modal-content">
          <div className="modal-header border-0 py-3">
            <div className="close-button">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" className="font-12 font-regular">
                  × Close
                </span>
              </button>
            </div>
          </div>
          <div className="modal-body">
            <div className="optional-details mt-3">
              <h5>
                Want to offer optional custom service when customer book
                boarding?
              </h5>
            </div>
            <div className="row">
              <div className="col-12 col-md-10 col-lg-10 col-xl-10 mx-auto">
                <div className="optional-details">
                  <div className="optional">
                    <div className="d-flex justify-content-between mb-2">
                      <div>
                        <p className="font-10 mb-0">Name of the service</p>
                      </div>
                      <div className="help-tip">
                        <p>lorem ipsum</p>
                      </div>
                    </div>
                    <div className="form-group mb-0">
                      <input
                        className={
                          "form-control valid-control " +
                          (errors.name ? "invalid" : "")
                        }
                        placeholder="Enter name of service"
                        type="text"
                        name="name"
                        onChange={onTextChange}
                        value={customService.name}
                      />
                    </div>
                  </div>
                  <div className="optional">
                    <div className="d-flex justify-content-between mb-2">
                      <div>
                        <p className="font-10 mb-0">Describe the service</p>
                      </div>
                      <div className="help-tip">
                        <p>lorem ipsum</p>
                      </div>
                    </div>
                    <div className="form-group mb-0">
                      <input
                        className={
                          "form-control valid-control " +
                          (errors.description ? "invalid" : "")
                        }
                        placeholder="Enter description of service here"
                        type="text"
                        name="description"
                        onChange={onTextChange}
                        value={customService.description}
                      />
                    </div>
                  </div>
                  <div className="optional">
                    <div className="d-flex justify-content-between mb-2">
                      <div>
                        <p className="font-10 mb-0">Price of the service</p>
                      </div>
                      <div className="help-tip">
                        <p>lorem ipsum</p>
                      </div>
                    </div>
                    <div className="form-group mb-0">
                      <input
                        className={
                          "form-control valid-control " +
                          (errors.price ? "invalid" : "")
                        }
                        placeholder="Enter price of service"
                        type="text"
                        name="price"
                        onChange={onTextChange}
                        value={customService.price}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <a href="#" className="font-10 text-white">
                    + Add another custom service offering
                  </a>
                </div>
                <button
                  onClick={validateAndAdd}
                  className="btn btn-primary my-2"
                >
                  Save
                </button>
              </div>
            </div>
            {data &&
              data.custom_services.map((value, index) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignSelf: "center",
                    alignItems: "center",
                    marginTop: "15px",
                  }}
                >
                  <p style={{ color: "white" }}>
                    {value.name + "  ¥ " + value.price}
                  </p>
                  <a
                    href="#"
                    onClick={() => removeData(data.pet_type, index)}
                    style={{ fontSize: "16px", color: "white" }}
                  >
                    Delete
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
