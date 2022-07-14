import React from "react";
import ReactTwitterLogin from "react-twitter-login";
import { strings } from "../public/lang/Strings";

export default function TwitterLogin() {
    const authHandler = (error, data) => {
        if (error) return console.error(error);
        console.log(data);
    };
    return (
        <ReactTwitterLogin
            authCallback={authHandler}
            consumerKey="CEdkvn2wsjnDRwVWNX8y10epn" // We created this, remember?
            consumerSecret="2DU9auajUWBROP0tTbColcG08yZf4BGqMCK1d00WjX2rFp1eGL" // We created this, remember?
            children={
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
            }
        />
    );
}
