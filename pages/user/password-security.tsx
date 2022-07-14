import React, {useState} from "react";
import { strings } from "../../public/lang/Strings";
import User from ".";
import {useRouter} from "next/router";
import {useSnackbar} from 'react-simple-snackbar';
import API from "../../api/Api";

let api = new API();

export default function PasswordSecurity() {

  const router = useRouter();
  const [openSnackbar] = useSnackbar();
  const [resetView, setResetView] = useState(false);
  const [errors, setErrors] = useState<any>({});

  const onTextChange = (event) => {
    setResetObj({...resetObj, [event.target.id]:event.target.value});
  };

  const [resetObj, setResetObj] = useState({
    current_password : '',
    new_password : '',
    confirm_password : ''
  })

  const onSubmit = (e) => {
    e.preventDefault();
    if (!resetObj.current_password) {
      setErrors({ ...errors, current_password: strings.enterOldPassword });
    }else if (!resetObj.new_password) {
      setErrors({ ...errors, new_password: strings.enterNewPassword });
    }else if (!resetObj.confirm_password) {
      setErrors({ ...errors, confirm_password: strings.enterConfirmPassword });
    } else {
      api.changePassword(resetObj).then((res) => {
        if (res.data.status == 200) {
          setErrors({});
          setResetObj({
            current_password : '',
            new_password : '',
            confirm_password : ''
          });
          openSnackbar(res.data.message)
        } else {
          openSnackbar(res.data.message)
        }
      }).catch((error) => {
        setErrors(error.response.data.errors);
      })
    }
  }

  return (
    <div className="col-12 col-md-8 col-lg-8 col-xl-8  column1">
      <div className="bg-white main-background">
        <div className="password-details">
          <h5 className="font-semibold font-20 mb-3">
            {strings.PasswordAndSecurity}
          </h5>

            <div className="form-row">
              <div className="form-group col-sm-5">
                <input
                  className="form-control"
                  type="password"
                  id="current_password"
                  placeholder="Current password"
                  onChange={onTextChange}
                  value={resetObj.current_password}
                />
              </div>
              {errors && errors.current_password ? (
                  <span
                      style={{
                        color: "#ff0000",
                        fontSize: "12px",
                      }}
                  > {errors.current_password}
                                             </span>
              ) : null}
            </div>
            <div className="form-row">
              <div className="form-group col-sm-5">
                <input
                  className="form-control"
                  type="password"
                  id="new_password"
                  placeholder="New password"
                  onChange={onTextChange}
                  value={resetObj.new_password}
                />
              </div>
              {errors && errors.new_password ? (
                  <span
                      style={{
                        color: "#ff0000",
                        fontSize: "12px",
                      }}
                  > {errors.new_password}
                                             </span>
              ) : null}
              <div className="form-group col-sm-5">
                <input
                  className="form-control"
                  type="password"
                  id="confirm_password"
                  placeholder="Confirm password"
                  onChange={onTextChange}
                  value={resetObj.confirm_password}
                />
              </div>
              {errors && errors.confirm_password ? (
                  <span
                      style={{
                        color: "#ff0000",
                        fontSize: "12px",
                      }}
                  > {errors.confirm_password}
                                             </span>
              ) : null}
            </div>
            <button onClick={onSubmit} className="btn btn-primary">Update password</button>

        </div>
      </div>
      <div className="bg-white main-background">
        <h5 className="font-semibold font-20">Account</h5>
        <div className="row">
          <div className="col-sm-6 my-auto">
            <div className="deactive">
              <p className="text-muted mb-0 font-14">Deactivate my account</p>
            </div>
          </div>
          <div className="col-sm-6 alignment">
            <div className="deactive-btn">
              <button className="btn btn-primary btn1 btn-accept btn-reject">
                Deactive
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

PasswordSecurity.getLayout = function (page) {
  return <User>{page}</User>;
};
