import React, { Children } from "react";
import "./AuthScreen.css";
import Logo from "../../assets/brand/Logo.svg";
import FormContainer from "./components/FormContainer";
import FormWrapper from "./components/FormWrapper";
import FormHeader from "./components/FormHeader";
import FormSocialButtons from "./components/FormSocialButtons";

const Activation = () => {
  return (
    <FormContainer>
      <FormWrapper>
        <img src={Logo} alt="Logo" className="w-full h-8" />
        <form className="w-full grid gap-6">
          <FormHeader
            heading="Start prospecting for free"
            subheading="Already have an account?"
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
            </div>
          </div>

          <button className="SubmitBtn">Submit</button>

          <div className="seperator flex items-center gap-6">
            <hr className="h-px w-4/5" />
            <p className="grow text-center w-full text-base font-medium text-gray-500">
              Or continue with
            </p>
            <hr className="h-px w-4/5" />
          </div>

          <FormSocialButtons />
        </form>
      </FormWrapper>
    </FormContainer>
  );
};

export default Activation;
