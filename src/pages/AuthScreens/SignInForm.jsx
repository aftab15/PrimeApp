import React, { Children } from "react";
import "./AuthScreen.css";
import Logo from "../../assets/brand/Logo.svg";
import FormContainer from "./components/FormContainer";
import FormWrapper from "./components/FormWrapper";
import FormHeader from "./components/FormHeader";
import FormHelpText from "./components/FormHelpText";
import FormSocialButtons from "./components/FormSocialButtons";
import { Link } from "react-router-dom";

const SignInForm = () => {
  return (
    <FormContainer>
      <FormWrapper>
        <img src={Logo} alt="Logo" className="w-full h-8" />
        <form className="w-full grid gap-6">
          <FormHeader
            heading="Sign In"
            subheading="Don’t have an account?"
            link="/signup"
            linktext="Sign up"
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
            {/* Password */}
            <div className="form-group grid gap-2">
              <label htmlFor="Password" className="text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                className="rounded-lg py-3 px-4 border border-solid border-gray-300"
                placeholder="***********"
              />
            </div>
          </div>
          <div className="RememberMeForgotPassword flex justify-between items-center text-sm font-medium">
            <div className="form-group flex items-center gap-2 select-none text-gray-500">
              <input
                type="checkbox"
                className="rounded bg-gray-50 border border-gray-300"
                id="RememberMeChk"
              />
              <label htmlFor="RememberMeChk">Remember me</label>
            </div>
            <Link replace to="/forgotpassword" className="text-blue-600 ">
              Forgot password?
            </Link>
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

export default SignInForm;
