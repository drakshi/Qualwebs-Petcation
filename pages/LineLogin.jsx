import React, { useState } from 'react';

import {LineLogin } from 'reactjs-line-login';
import 'reactjs-line-login/dist/index.css';
import {strings} from "../public/lang/Strings";

export default function LoginLine(props) {

    const [payload, setPayload] = useState(null);
    const [idToken, setIdToken] = useState(null);

    return (
        <div>
            <LineLogin
                clientID='1657300676'
                clientSecret='5d1c36adfbb5fe93c103299f001fa518'
                scope='openid profile email'
                setPayload={setPayload}
                onClick={()=>console.log("clicked")}
                setIdToken={setIdToken}
            />
            {payload && idToken ? (
                console.log('payload', payload, 'idToken', idToken)
            ) : (
                <></>
            )}
        </div>
    );
}
