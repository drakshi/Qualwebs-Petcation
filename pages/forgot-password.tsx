import React, {useState} from "react";
import {strings} from "../public/lang/Strings";
import API from "../api/Api";
import {useSnackbar} from 'react-simple-snackbar';
import {useRouter} from "next/router";
import Link from "next/link";

interface IState {
    email: string;
}

const api = new API();

const ForgotPassword: React.FC<{}> = () => {
    const [email, setEmail] = useState<string>();
    const [resetObj, setResetObj] = useState({
        email: "",
        otp : "",
        new_password : "",
        confirm_password : ""
    })
    const router = useRouter();
    const [openSnackbar] = useSnackbar();
    const [resetView, setResetView] = useState(false);
    const [errors, setErrors] = useState<any>({});

    const onTextChange = (event) => {
        setEmail(event.target.value);
        setResetObj({...resetObj, [event.target.id]:event.target.value});
        setErrors({ ...errors, email : null });
    };

    const onResetChange = (event) => {
        setResetObj({...resetObj, [event.target.id]:event.target.value});
        setErrors({ ...errors, [event.target.id]: null });
    };

    const onsubmit = (e) => {
        e.preventDefault();
        if (!email) {
            setErrors({ ...errors, email: strings.enterEmailAddress });
        } else {
            api.forgotPassword({email}).then((res) => {
                if (res.data.status == 200) {
                    setResetObj({
                        email: email,
                        otp : "",
                        new_password : "",
                        confirm_password : ""
                    });
                    setResetView(true);
                    openSnackbar(res.data.message)
                } else {
                    openSnackbar(res.data.message)
                }
            }).catch((error) => {
                setErrors(error.response.data.errors);
            })
        }
    }

    const onReset = (e) => {
        e.preventDefault();
        if (!resetObj.email) {
            setErrors({ ...errors, email: strings.enterEmailAddress });
        }else if (!resetObj.otp) {
            setErrors({ ...errors, otp: strings.enterOtp });
        }else if (!resetObj.new_password) {
            setErrors({ ...errors, new_password: strings.enterNewPassword });
        }else if (!resetObj.confirm_password) {
            setErrors({ ...errors, confirm_password: strings.enterConfirmPassword });
        } else {
            api.resetPassword(resetObj).then((res) => {
                if (res.data.status == 200) {
                    setResetObj({
                        email: "",
                        otp : "",
                        new_password : "",
                        confirm_password : ""
                    });
                    openSnackbar(res.data.message)
                    setTimeout(()=>{
                        router.push('/signin');
                    }, 1000)
                } else {
                    openSnackbar(res.data.message)
                }
            }).catch((error) => {
                setErrors(error.response.data.errors);
            })
        }
    }

    return (
        <div className="vector">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                        <div className="bg-white main-content">
                            <div className="login-details">
                                <h5>{resetView ? strings.Resetyourpassword:strings.Forgotyourpassword}</h5>
                                <p className="font-14">{resetView ? strings.resetPasswordInstruction:strings.forgotPasswordInstruction}</p>
                            </div>
                            <div className="login-form">
                                <form>
                                    {!resetView && <div>
                                        <div className="form-group">
                                            <label>{strings.Emailaddress}</label>
                                            <input
                                                onChange={onTextChange}
                                                value={email}
                                                className="form-control"
                                                id="email"
                                                type="text"
                                            />
                                        </div>
                                        {errors && errors.email ? (
                                            <span
                                                style={{
                                                    color: "#ff0000",
                                                    fontSize: "12px",
                                                }}
                                            > {errors.email}
                                             </span>
                                        ) : null}
                                        <div className="text-center my-3">
                                            <button onClick={onsubmit} className="btn btn-primary w-100 ">
                                                {strings.Submit}
                                            </button>
                                        </div>
                                    </div>
                                    }
                                    {resetView && <div>
                                        <div className="form-group">
                                            <label>{strings.otp}</label>
                                            <input
                                                onChange={onResetChange}
                                                value={resetObj.otp}
                                                className="form-control"
                                                id="otp"
                                                type="number"
                                            />
                                        </div>
                                        {errors && errors.otp ? (
                                            <span
                                                style={{
                                                    color: "#ff0000",
                                                    fontSize: "12px",
                                                }}
                                            > {errors.otp}
                                             </span>
                                        ) : null}
                                        <div className="form-group">
                                            <label>{strings.newPassword}</label>
                                            <input
                                                onChange={onResetChange}
                                                value={resetObj.new_password}
                                                className="form-control"
                                                id="new_password"
                                                type="password"
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
                                        <div className="form-group">
                                            <label>{strings.confirmPassword}</label>
                                            <input
                                                onChange={onResetChange}
                                                value={resetObj.confirm_password}
                                                className="form-control"
                                                id="confirm_password"
                                                type="password"
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
                                        <div className="text-center my-3">
                                            <button onClick={onReset} className="btn btn-primary w-100 ">
                                                {strings.resetPassword}
                                            </button>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-sm-6">
                                            <div className="forget-password">
                                                    <a onClick={onsubmit} className="font-14 font-medium">
                                                        {strings.resend}
                                                    </a>
                                            </div>
                                        </div>
                                    </div>
                                    }
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
