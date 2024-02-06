import React, { Children } from "react";
import "./AuthScreen.css";
import Logo from "../../assets/brand/Logo.svg";
import FormContainer from "./components/FormContainer";
import FormWrapper from "./components/FormWrapper";
import FormHeader from "./components/FormHeader";
import FormHelpText from "./components/FormHelpText";

const ResetPassword = () => {
  return (
    <FormContainer>
      <FormWrapper>
        <img src={Logo} alt="Logo" className="w-full h-8" />
        <form className="w-full grid gap-6">
          <FormHeader
            heading="Reset your password"
            subheading="Already know password?"
            link="/signin"
            linktext="Login here"
          />
          <div className="Inputs grid gap-4">
            <div className="form-group grid gap-2">
              <label htmlFor="Password" className="text-sm font-medium">
                New Password
              </label>
              <input
                type="password"
                className="rounded-lg py-3 px-4 border border-solid border-gray-300"
                placeholder="***********"
              />
            </div>{" "}
            <div className="form-group grid gap-2">
              <label htmlFor="Password" className="text-sm font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                className="rounded-lg py-3 px-4 border border-solid border-gray-300"
                placeholder="***********"
              />
            </div>
          </div>

          <button className="SubmitBtn">Set password</button>
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

export default ResetPassword;
