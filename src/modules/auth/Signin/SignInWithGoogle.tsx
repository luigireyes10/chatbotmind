import React, { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";

const clientId = process.env.GOOGLE_CLIENT_ID;

const SignInWithGoogle = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  const onSuccess = (response: any) => {
    console.log("SUCCESS", response);
  };
  const onFailure = (response: any) => {
    console.log("FAILED", response);
  };

  return (
      <GoogleLogin
        clientId={clientId}
        buttonText=""
        onSuccess={onSuccess}
        onFailure={onFailure}
        className="google-login"
      />
  );
};

export default SignInWithGoogle;
