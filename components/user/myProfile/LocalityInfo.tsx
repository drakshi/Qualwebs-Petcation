import setDate from "date-fns/esm/fp/setDate/index.js";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import API from "../../../api/Api";
import { useSnackbar } from "react-simple-snackbar";
import { errorOptions, successOptions } from "../../../public/appData/AppData";

const initialState = {
  description: "",
  live_in_house: 0,
  non_smoking_household: 0,
  no_children_present: 0,
  fenced_yard: 0,
  dog_other_pets: 0,
};

interface I_PROPS {
  locality: any;
  callApi: (data: any) => void;
}

const api = new API();
const LocalityInfo: React.FC<I_PROPS> = (props) => {
  const [data, setData] = useState<any>(
    props.locality != null ? props.locality : initialState
  );
  const [openSuccess, closeSuccess] = useSnackbar(successOptions);
  const [openError, closeError] = useSnackbar(errorOptions);

  const onChecked = (e) => {
    setData({ ...data, [e.target.name]: e.target.checked == true ? 1 : 0 });
  };

  useEffect(() => {
    if (props.locality) {
      setData(props.locality);
    }
  }, [props.locality]);

  const saveLocality = () => {
    props.callApi(data);
  };

  return (
    <div className="bg-white main-background profile-background">
      <div className="basic-details">
        <h5 className="font-semibold">Extra info about locality</h5>
      </div>
      <div className="row">
        <div className="col-12 col-md-8 col-lg-8 col-xl-8">
          <textarea
            className="form-control"
            placeholder="Write your details"
            rows={4}
            value={data.description ? data.description : ""}
            onChange={(e) => {
              setData({ ...data, description: e.target.value });
            }}
            defaultValue={""}
          />
          <div className="locality-content mt-3">
            <div className="custom-check mb-1">
              <label className="check ">
                <input
                  checked={data.live_in_house == 1}
                  type="checkbox"
                  name="live_in_house"
                  onChange={onChecked}
                />
                <span className="checkmark" />
                Lives in a House
              </label>
            </div>
            <div className="custom-check mb-1">
              <label className="check ">
                <input
                  type="checkbox"
                  checked={data.non_smoking_household == 1}
                  name="non_smoking_household"
                  onChange={onChecked}
                />
                <span className="checkmark" />
                Non-Smoking Household
              </label>
            </div>
            <div className="custom-check mb-1">
              <label className="check ">
                <input
                  type="checkbox"
                  checked={data.no_children_present == 1}
                  name="no_children_present"
                  onChange={onChecked}
                />
                <span className="checkmark" />
                No Children Present
              </label>
            </div>
            <div className="custom-check mb-1">
              <label className="check ">
                <input
                  type="checkbox"
                  checked={data.fenced_yard == 1}
                  name="fenced_yard"
                  onChange={onChecked}
                />
                <span className="checkmark" />
                Has a Fenced Yard
              </label>
            </div>
            <div className="custom-check mb-1">
              <label className="check ">
                <input
                  type="checkbox"
                  checked={data.dog_other_pets == 1}
                  name="dog_other_pets"
                  onChange={onChecked}
                />
                <span className="checkmark" />
                Has pet
              </label>
            </div>
          </div>
          <div className="mt-3">
            <button onClick={saveLocality} className="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalityInfo;
