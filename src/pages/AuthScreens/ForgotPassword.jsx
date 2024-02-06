import React, { Children } from "react";
import "./AuthScreen.css";
import Logo from "../../assets/brand/Logo.svg";
import FormContainer from "./components/FormContainer";
import FormWrapper from "./components/FormWrapper";
import FormHeader from "./components/FormHeader";
import FormHelpText from "./components/FormHelpText";

const ForgotPassword = () => {
  return (
    <FormContainer>
      <FormWrapper>
        <img src={Logo} alt="Logo" className="w-full h-8" />
        <form className="w-full grid gap-6">
          <FormHeader
            heading="Forgot Password"
            subheading="Already know password?"
            link="/signin"
            linktext="Login here"
          />
          <div className="Inputs grid gap-4">
            {/* Email */}
            <div className="form-group grid gap-2">
              <label htmlFor="Email" className="text-sm font-medium">
                Email
              </label>
              <input
                type="text"
                className="rounded-lg py-3 px-4 border border-solid border-gray-300"
                placeholder="e.g. John.doe@acme.com"
              />
              <label htmlFor="" className="text-sm font-medium text-gray-500">
                Please provide email which is associated with your account.
              </label>
            </div>
          </div>

          <button className="SubmitBtn">Send password reset link</button>
          <FormHelpText
            text={"Need help? Contact"}
            link={"/signup"}
            linktext={"support@smarteinc.com"}
          />
        </form>
      </FormWrapper>
    </FormContainer>
  );
};

export default ForgotPassword;
