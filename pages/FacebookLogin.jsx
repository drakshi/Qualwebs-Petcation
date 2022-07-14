import React, {useState} from "react";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { strings } from "../public/lang/Strings";
import {useRouter} from "next/router";


export default function LoginFacebook(props) {
    const [success, setSuccess] = useState(false);
    const onSuccess= (res) => {
        setSuccess(true);

        console.log('Login Success: currentUser:', res);
        success === true && router.push({pathname:'/'})
        alert(
            `Logged in successfully ${res.name} welcome See console for full profile object.`
        );
        success === true && router.push({pathname:'/'})
    };

    const router = useRouter();

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
        setSuccess(false)
    };

    const appId = "5557010350976999";
    return (
        <FacebookLogin
            appId={appId} // we created this, remember?
            render={renderProps =>(
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

            )}
            autoLoad={true}
            fields="name,email,picture"
            callback={onSuccess}
            onFailure={onFailure}
        />
            );
}
{/*onClick={renderProps.onClick}*/}
