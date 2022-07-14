import React from "react";
import { strings } from "../../public/lang/Strings";
import Link from "next/link";
import API from "../../api/Api";
import {deleteCookie, validateEmail} from "../../utils/Helper";
import Router from "next/router";
import Cookies from "universal-cookie";
import withAuth from "../../components/hoc/withAuth";
import styles from "./signin.module.css";
import FeatherIcon from "feather-icons-react";

interface IState {
  email: string;
  password: string;
  rememberMe: boolean;
  errors: any;
  showPass: boolean;
}

const cookies = new Cookies();
const api = new API();
class SignIn extends React.Component<{}, IState> {
  private passwordInput: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      errors: {},
      showPass: false
    };
    this.passwordInput = React.createRef();
    this.onTextChange = this.onTextChange.bind(this);
    this.toggleSecurePassword = this.toggleSecurePassword.bind(this);
    this.checkboxOnChange = this.checkboxOnChange.bind(this);
  }

  componentDidMount(): void {
    let email = cookies.get('rem_email');
    let pass = cookies.get('rem_pass');
    if(email && pass){
      this.setState({email: email, password: pass, rememberMe: true})
    }
  }

  onTextChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    } as { [K in keyof IState]: IState[K] });
  };

  toggleSecurePassword = () => {
    this.setState({showPass: !this.state.showPass})
  };

  checkboxOnChange = (event) => {
    this.setState({
      rememberMe: event.target.value,
    });
  };

  loginUser = async () => {
    let that = this;
    this.setState({
      errors: {},
    });

    let data = JSON.stringify({
      email: this.state.email,
      password: this.state.password,
    });
    api
      .loginUser(data)
      .then((json) => {
        document.cookie = `id=${json.data.response.id}; path=/`;
        document.cookie = `token=${json.data.response.token}; path=/`;
        document.cookie = `firstname=${json.data.response.firstname}; path=/`;
        document.cookie = `lastname=${json.data.response.lastname}; path=/`;
        document.cookie = `phone_number=${json.data.response.phone_number}; path=/`;
        document.cookie = `profile_picture=${json.data.response.profile_picture}; path=/`;
        document.cookie = `email=${json.data.response.email}; path=/`;
        if (this.state.rememberMe){
          document.cookie = `rem_email=${json.data.response.phone_number}; path=/`;
          document.cookie = `rem_pass=${json.data.response.profile_picture}; path=/`;
        }else {
           deleteCookie('rem_email');
           deleteCookie('rem_pass');
        }

        Router.push("/");
      })
      .catch((error) => {
        console.log(error.response);
        if (error.response.status == 422) {
          that.setState({
            errors: error.response.data.errors,
          });
        }

        if (error.response.status == 400) {
          that.setState({
            errors: {
              email: [error.response.data.message],
            },
          });
        }
      });
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
                    <img
                      src="images/logo.png"
                      className="img-fluid"
                      alt={"logo"}
                    />
                  </div>
                  <p className="font-14">{strings.Welcomeagain}</p>
                </div>
                <div className="login-form">
                  <form>
                    <div className="row">
                      <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-sm-12">
                        <div className="form-group">
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
                            placeholder="Enter your registered email ID"
                            onChange={this.onTextChange}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-sm-12">
                        <div className="form-group login-password">
                          <div className="form-label-view">
                            <label>Password</label>
                            <label className={"error-text"}>
                              {this.state.errors.password
                                ? this.state.errors.password[0]
                                : ""}
                            </label>
                          </div>
                          <input
                            ref={this.passwordInput}
                            className={
                              "form-control " +
                              (this.state.errors.password ? "invalid" : "")
                            }
                            id="password"
                            type={this.state.showPass ? "text":"password"}
                            name="password"
                            placeholder="Enter your password"
                            onChange={this.onTextChange}
                          />
                          <FeatherIcon  className="svg-inline--fa fa-eye fa-w-18 fa-2x eye-icon" icon={this.state.showPass ? "eye-off" : "eye"}
                                        onClick={this.toggleSecurePassword}/>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-sm-6">
                        <div className="custom-check">
                          <label className="check ">
                            <input
                              onChange={this.checkboxOnChange}
                              type="checkbox"
                              name="is_name1"
                            />
                            <span className="checkmark" />
                            {strings.Rememberme}
                          </label>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-sm-6">
                        <div className="forget-password">
                          <Link href="/forgot-password">
                            <a className="font-14 font-medium">
                              {strings.Forgotpassword}
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="text-center my-3">
                      <a
                        onClick={this.loginUser.bind(this)}
                        className="btn btn-primary w-100"
                      >
                        {strings.Login}
                      </a>
                    </div>

                    <div className="loginOr">
                      <hr className="hrOr" />
                      <span className="spanOr">{strings.or}</span>
                    </div>
                    <div className="my-4">
                      <div className="row">
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
                                      src="images/facebook.png"
                                      className="img-fluid"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col pl-0 my-auto">
                                <h6 className="mb-0">
                                  {strings.ContinuewithFacebook}
                                </h6>
                              </div>
                            </div>
                          </div>
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
                                      src="images/google-plus.png"
                                      className="img-fluid"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col pl-0 my-auto">
                                <h6 className="mb-0">
                                  {strings.ContinuewithGoogle}
                                </h6>
                              </div>
                            </div>
                          </div>
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
                                      src="images/twitter.png"
                                      className="img-fluid"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col pl-0 my-auto">
                                <h6 className="mb-0">
                                  {strings.ContinuewithTwitter}
                                </h6>
                              </div>
                            </div>
                          </div>
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
                  </form>
                </div>
                <div className="text-center create-account mt-3">
                  <p className="font-12 mb-0 font-medium">
                    {strings.Donthaveanaccount}
                    <Link href="/signup">
                      <a
                        style={{ textDecoration: "underline" }}
                        className="font-medium "
                      >
                        {strings.Registernow}
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(SignIn);
