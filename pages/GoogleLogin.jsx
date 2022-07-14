import React from "react";
import ReactGoogleLogin from "react-google-login";
import { useRouter } from "next/router";
import { strings } from "../public/lang/Strings";

export default function GoogleLogin(props) {

    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res);
        alert(
            `Logged in successfully welcome ${res.profileObj.name}  See console for full profile object.`
        );
        router.push({pathname:'/'})
    }
    const router = useRouter();
    const onFailure = (res) => {
        console.log('Login failed: res:', res);
    };
    const clientId = '1021664644172-6q7alafvc3rhga1klpsondft47qjvv6u.apps.googleusercontent.com';

    return (
        <ReactGoogleLogin
            clientId={clientId}
            render={renderProps => (
                <div className="col-12 col-md-6 col-lg-6 col-xl-6" onClick={renderProps.onClick}>
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
            )}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
        />
    );
}

