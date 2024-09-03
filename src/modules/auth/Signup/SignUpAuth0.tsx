"use client";
import { CredentialResponse, GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
require("dotenv").config();
const clientId = process.env.CLIENT_ID;

const SignUpGoogle = () => {
    const handleSuccess = (response: CredentialResponse) => {
        console.log(response);
    };
  return (
    <div>
        <GoogleOAuthProvider clientId={clientId}>...</GoogleOAuthProvider>;
      <GoogleLogin onSuccess={handleSuccess} />
    </div>
  );
};
export default SignUpGoogle;
