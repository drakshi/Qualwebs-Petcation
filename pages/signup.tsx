import React from "react";
import { strings } from "../public/lang/Strings";
import "react-day-picker/lib/style.css";
import DayPickerInput from "react-day-picker/DayPickerInput";
import parseDate from "react-day-picker/moment";
import formatDate from "react-day-picker/moment";
import Link from "next/link";
import API from "../api/Api";
import Cookies from "universal-cookie";
import { withSnackbar } from "react-simple-snackbar";
import Router from "next/router";
import withAuth from "../components/hoc/withAuth";
import YearMonthForm from "../components/common/YearMonthForm";
import { errorOptions } from "../public/appData/AppData";
import moment from "moment";
import FeatherIcon from "feather-icons-react";
import LoginGoogle from './GoogleLogin';
import LoginLine from './LineLogin';
import TwitterLogin from './TwiiterLogin';
import LoginFacebook from "./FacebookLogin";

interface IState {
  dateOfBirth: Date;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  condition: boolean;
  errors: any;
  month: Date;
  showConfirm: boolean;
  showPass: boolean;
  rememberMe: boolean;
}

const api = new API();
const cookies = new Cookies();
class Signup extends React.Component<any, IState> {
  private passwordInput: React.RefObject<HTMLInputElement>;
  private confirmInput: React.RefObject<HTMLInputElement>;
  constructor(props) {
    super(props);
    this.state = {
      dateOfBirth: null,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      condition: false,
      errors: {},
      month: new Date(),
      rememberMe: false,
      showConfirm: false,
      showPass: false,
    };
    this.passwordInput = React.createRef();
    this.confirmInput = React.createRef();
    this.handleDateChange = this.handleDateChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.checkboxOnChange = this.checkboxOnChange.bind(this);
    this.checkboxRememberOnChange = this.checkboxRememberOnChange.bind(this);
  }

  handleDateChange(day) {
    this.setState({ dateOfBirth: day });
  }

  onTextChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    } as { [K in keyof IState]: IState[K] });
  };

  checkboxOnChange = (event) => {
    this.setState({
      condition: event.target.checked,
    });
  };

  checkboxRememberOnChange = (event) => {
    this.setState({
      rememberMe: !this.state.rememberMe,
    });
  };


  registerUser = async (e: React.FormEvent<HTMLInputElement>) => {
    if(!this.state.confirmPassword) {
      let errors = this.state.errors;
      errors.confirmPassword = 'Enter confirm password';
      this.setState({errors: errors});

      console.log('a',errors)
      return
    }
    e.preventDefault();
    let that = this;
    this.setState({
      errors: {},
    });
    let data = JSON.stringify({
      firstname: this.state.firstName,
      lastname: this.state.lastName,
      email: this.state.email,
      dob: this.state.dateOfBirth
        ? moment(this.state.dateOfBirth).format("DD/MM/yyyy")
        : null,
      password: this.state.password,
      is_agree: this.state.condition,
    });
    api
      .registerUser(data)
      .then((json) => {
        document.cookie = `id=${json.data.response.id}; path=/`;
        document.cookie = `token=${json.data.response.token}; path=/`;
        document.cookie = `firstname=${json.data.response.firstname}; path=/`;
        document.cookie = `lastname=${json.data.response.lastname}; path=/`;
        document.cookie = `email=${json.data.response.email}; path=/`;
        document.cookie = `profile_picture=${json.data.response.profile_picture}; path=/`;
        document.cookie = `phone_number=${json.data.response.phone_number}; path=/`;

        if(this.state.rememberMe){
          document.cookie = `rem_email=${this.state.email}; path=/`;
          document.cookie = `rem_pass=${this.state.password}; path=/`;
        }

        Router.push("/");
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status == 422) {
          that.setState({
            errors: error.response.data.errors,
          });
          if (error.response.data.errors.is_agree) {
            this.props.openSnackbar("Agree to Terms and condition");
          }
        }
      });
  };

  handleYearMonthChange = (month) => {
    this.setState({
      month: month,
    });
  };

  toggleSecurePassword = () => {
    this.setState({showPass: !this.state.showPass})
  };

  toggleConfirmPassword = () => {
    this.setState({showConfirm: !this.state.showConfirm})
  };
  onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
        `Logged in successfully welcome ${res.profileObj.name}  See console for full profile object.`
    );
  };

   onFailure = (res) => {
    console.log('Login failed: res:', res);
  };


  render() {
    return (
      <div className="vector">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 col-xl-6">
              <div className="bg-white main-content">
                <div className="login-details">
                  <div className="logo-img mb-2">
                    <img src="images/logo.png" className="img-fluid" />
                  </div>
                  <p className="font-14">
                    {strings.Createyourfreeaccounttoday}
                  </p>
                </div>
                <div className="login-form">
                  <form>
                    <div className="form-row">
                      <div className="form-group col-sm-6">
                        <div className="form-label-view">
                          <label>{strings.Firstname}</label>
                          <label className={"error-text"}>
                            {this.state.errors.firstname
                              ? this.state.errors.firstname[0]
                              : ""}
                          </label>
                        </div>
                        <input
                          className={
                            "form-control " +
                            (this.state.errors.firstname ? "invalid" : "")
                          }
                          id="fname"
                          type="text"
                          name="firstName"
                          onChange={this.onTextChange}
                        />
                      </div>
                      <div className="form-group col-sm-6">
                        <div className="form-label-view">
                          <label>{strings.Lastname}</label>
                          <label className={"error-text"}>
                            {this.state.errors.lastname
                              ? this.state.errors.lastname[0]
                              : ""}
                          </label>
                        </div>
                        <input
                          className={
                            "form-control " +
                            (this.state.errors.lastname ? "invalid" : "")
                          }
                          id="lname"
                          type="text"
                          name="lastName"
                          onChange={this.onTextChange}
                        />
                      </div>
                      <div className="form-group col-sm-6">
                        <div className="form-label-view">
                          <label>{strings.Emailaddress}</label>
                          <label className={"error-text"}>
                            {this.state.errors.email
                              ? this.state.errors.email[0]
                              : ""}
                          </label>
                        </div>
                        <input
                          className={
                            "form-control " +
                            (this.state.errors.email ? "invalid" : "")
                          }
                          id="email"
                          type="email"
                          name="email"
                          onChange={this.onTextChange}
                        />
                      </div>
                      <div className="form-group col-sm-6">
                        <div className="form-label-view">
                          <label>{strings.DateofBirth}</label>
                        </div>
                        <div
                          className={
                            "form-control valid-control " +
                            (this.state.errors.dob ? "invalid" : "")
                          }
                        >
                          <DayPickerInput
                            formatDate={formatDate.formatDate}
                            parseDate={parseDate.parseDate}
                            dayPickerProps={{
                              modifiers: {
                                disabled: [
                                  {
                                    after: new Date(),
                                  },
                                ],
                              },
                              month: this.state.month,
                              captionElement: ({ date, localeUtils }) => (
                                <YearMonthForm
                                  isDob={true}
                                  before={true}
                                  date={date ? date : new Date()}
                                  localeUtils={localeUtils}
                                  onChange={this.handleYearMonthChange.bind(
                                    this
                                  )}
                                />
                              ),
                            }}
                            inputProps={{
                              style: {
                                border: 0,
                                background: "transparent",
                              },
                              readOnly: true,
                            }}
                            placeholder="DD/MM/YYYY"
                            format="DD/MM/yyyy"
                            value={this.state.dateOfBirth}
                            onDayChange={this.handleDateChange}
                          />
                        </div>
                      </div>
                      <div className="form-group col-sm-6">
                        <label>Password</label>

                        <input
                          ref={this.passwordInput}
                          className={
                            "form-control " +
                            (this.state.errors.password ? "invalid" : "")
                          }
                          id="password"
                          type={this.state.showPass ? "text":"password"}
                          name="password"
                          onChange={this.onTextChange}
                        />
                        <FeatherIcon  className="svg-inline--fa fa-eye fa-w-18 fa-2x eye-icon" icon={this.state.showPass ? "eye-off" : "eye"}
                                     onClick={this.toggleSecurePassword}/>

                        <label className={"error-text"}>
                          {this.state.errors.password
                            ? this.state.errors.password[0]
                            : ""}
                        </label>
                      </div>
                      <div className="form-group col-sm-6">
                        <label>Confirm password</label>
                        <input
                          ref={this.confirmInput}
                          className={
                            "form-control " +
                            (this.state.errors.confirmPassword ? "invalid" : "")
                          }
                          id="confirm-password"
                          type={this.state.showConfirm ? "text":"password"}
                          name="confirmPassword"
                          onChange={this.onTextChange}
                        />
                        <FeatherIcon  className="svg-inline--fa fa-eye fa-w-18 fa-2x eye-icon" icon={this.state.showConfirm ? "eye-off" : "eye"}
                                        onClick={this.toggleConfirmPassword}/>
                      </div>
                      <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-sm-6 mb-4">
                        <div className="custom-check">
                          <label className="check ">
                            <input
                                onChange={this.checkboxRememberOnChange}
                                type="checkbox"
                                name="is_name1"
                            />
                            <span className="checkmark" />
                            {strings.Rememberme}
                          </label>
                        </div>
                      </div>

                      <div className="custom-check">
                        <label className="check ">
                          <input
                            onChange={this.checkboxOnChange}
                            type="checkbox"
                            checked={this.state.condition}
                          />
                          <span className="checkmark" />
                          {`I agree to `}<label className="create-account"><Link href={''}><a className="font-medium">Terms of Service</a></Link></label> and <label className="create-account"><Link href={''}><a className="font-medium">Privacy Policy</a></Link></label>{strings.registerTerm}
                        </label>
                      </div>
                    </div>
                    <div className="text-center my-3">
                      <a
                        onClick={this.registerUser.bind(this)}
                        className="btn btn-primary w-100"
                      >
                        {strings.Joinnow}
                      </a>
                    </div>
                    <div className="loginOr">
                      <hr className="hrOr" />
                      <span className="spanOr">{strings.or}</span>
                    </div>
                    <div className="my-4">
                      <div className="row">
                        <LoginFacebook onClick={this.registerUser.bind(this)}/>
                        <LoginGoogle />
                        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                        <TwitterLogin />
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                          <div className="signup-content">
                            <a href="#" />
                            <div className="row social-icns">
                              <a href="#"></a>
                              <div className="col-auto my-auto">
                                <a href="#"></a>
                                <div className="social-img">
                                  <a href="#" />
                                  <a href="#">
                                    <img
                                      src="images/line.png"
                                      className="img-fluid"
                                    />
                                  </a>
                                </div>
                              </div>
                              {/*<LoginLine/>*/}
                               <div className="col pl-0 my-auto">
                                <h6 className="mb-0">
                                  {strings.ContinuewithLine}
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center create-account">
                      <p className="font-12 mb-0 font-medium">
                        {strings.Alreadyhaveanaccount}
                        <Link href={"./signin"}>
                          <a className="font-medium">{strings.Login}</a>
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(withSnackbar(Signup, errorOptions));
