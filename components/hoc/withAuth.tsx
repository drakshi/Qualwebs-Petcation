import React from "react";
import Cookies from "universal-cookie";
import router from "next/router";
const cookie = new Cookies();

const withAuth = (Component) => {
  const Auth = (props) => {
    if (typeof window !== "undefined") {
      var token = cookie.get("token");
      if (
        (token == null || token == undefined) &&
        router.pathname != "/signin" &&
        router.pathname != "/signup"
      ) {
        router.replace("/signin");
        return null;
      } else if (
        (router.pathname == "/signin" || router.pathname == "/signup") &&
        token
      ) {
        router.replace("/");
        return null;
      }

      return <Component {...props} />;
    }
    return null;
  };

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;
