import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Select from "react-select";
import API from "../../../api/Api";
import { D_BUDGET } from "../../../public/appData/StaticData";
import { strings } from "../../../public/lang/Strings";
import { numberInput } from "../../../utils/Helper";

interface IState {
  night_charge_id: number;
  noon_charge_id: number;
  payment_method_id: number;
  service_charge: number;
}

const api = new API();
export default function SpotBudget(props: any) {
  const [paymentMethods, setPaymentMethods] = useState<any>([]);

  const [budget, setBudget] = useState<IState>({
    night_charge_id: null,
    noon_charge_id: null,
    payment_method_id: 2,
    service_charge: null,
  });

  const [errors, setErrors] = useState<any>({});

  useEffect(() => {
    if (props.data) {
      setBudget({ ...props.data });
    }
  }, [props.data]);

  useEffect(() => {
    getPaymentMethods();
  }, []);

  const getPaymentMethods = () => {
    api
      .getPaymentMethods()
      .then((res) => {
        setPaymentMethods(res.data.response);
      })
      .catch((error) => {});
  };

  const onChangeNightCharges = (value: any) => {
    setErrors({...errors,night_charge_id:null})
    setBudget({ ...budget, night_charge_id: value.value });
  };

  const onChangeNoonCharges = (value: any) => {
    setErrors({...errors,noon_charge_id:null})
    setBudget({ ...budget, noon_charge_id: value.value });
  };

  const onSubmit = () => {
    setErrors({});
    // if (!budget.night_charge_id) {
    //   setErrors({ ...errors, night_charge_id: 'Select night charge range' });
    //   return false;
    // }
    //
    // if (!budget.noon_charge_id) {
    //   setErrors({ ...errors, noon_charge_id: 'Select night charge range' });
    //   return false;
    // }

    if (!budget.service_charge) {
      setErrors({ ...errors, service_charge: 'Enter service charge' });
      return false;
    }

    props.updateBudget({ ...budget });
    props.changePage(5);
  };

  return (
    <div className="select-spot-category content-padding">
      <h5 className="font-semibold mb-3">{strings.BudgetPayment}</h5>
      <div className="booking-for">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-12 col-xl-12">
            <div className="info-form">
              <h6 className="font-medium mb-2">{strings.Budget}</h6>
              <form>
                <div className="form-row">
                  <div className={"form-group col-sm-6"}>
                    <label>Night charges</label>
                    <Select
                      onChange={onChangeNightCharges}
                      value={D_BUDGET.find(
                        (v: any) => v.value == budget.night_charge_id
                      )}
                      isSearchable={false}
                      options={D_BUDGET}
                    />
                  </div>
                  {errors && errors.night_charge_id ? (
                      <span
                          style={{
                            color: "#ff0000",
                            fontSize: "12px",
                          }}
                      > {errors.night_charge_id}
                                             </span>
                  ) : null}
                  <div className={"form-group col-sm-6"}>
                    <label>Noon charges</label>
                    <Select
                      onChange={onChangeNoonCharges}
                      value={D_BUDGET.find(
                        (v: any) => v.value == budget.noon_charge_id
                      )}
                      isSearchable={false}
                      options={D_BUDGET}
                    />
                  </div>
                  {errors && errors.noon_charge_id ? (
                      <span
                          style={{
                            color: "#ff0000",
                            fontSize: "12px",
                          }}
                      > {errors.noon_charge_id}
                                             </span>
                  ) : null}
                </div>
                <hr className="mt-0" />
                <div className="payment-method">
                  <h6 className="font-medium mb-2">{strings.methodOfPayment}</h6>
                  <div className="row mb-2">
                    <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                      {paymentMethods.map((value,index) => (
                        <div key={index} className="custom-check">
                          <label className="check ">
                            <input
                              type="radio"
                              className="class1"
                              name="is_name2"
                              onChange={() =>
                                setBudget({
                                  ...budget,
                                  payment_method_id: value.id,
                                })
                              }
                              checked={value.id == budget.payment_method_id}
                              defaultValue="dog"
                            />
                            <span className="checkmark" />
                            {value.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <hr />
                <div className="service-charge">
                  <h6 className="font-medium mb-2">{strings.serviceCharges}</h6>
                  <div className={"form-group"}>
                    <input
                      className={"form-control"}
                      placeholder="Example 10% service charge, no charge"
                      id="service-charge"
                      onKeyPress={numberInput}
                      value={budget.service_charge}
                      onChange={(e) => {
                        setErrors({...errors,service_charge:null})
                        setBudget({
                          ...budget,
                          service_charge: Number(e.target.value) > 0 ? Number(e.target.value):null,
                        });
                      }}
                    />
                  </div>
                  {errors && errors.service_charge ? (
                      <span
                          style={{
                            color: "#ff0000",
                            fontSize: "12px",
                          }}
                      > {errors.service_charge}
                                             </span>
                  ) : null}
                </div>

                <div className="modal-footer px-0 pb-0 justify-content-between">
                  <button className="btn btn-primary btn1 btn-edit">
                    back
                  </button>
                  <a onClick={() => onSubmit()} className="btn btn-primary">
                    Save &amp; proceed
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
