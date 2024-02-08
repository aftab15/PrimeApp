import React, { useState } from "react";
import "./AuthScreen.css";
import Logo from "../../assets/brand/Logo.svg";
import FormContainer from "./components/FormContainer";
import FormWrapper from "./components/FormWrapper";
import FormHeader from "./components/FormHeader";
import FormHelpText from "./components/FormHelpText";
import FormSocialButtons from "./components/FormSocialButtons";
import { Link } from "react-router-dom";
import eyeIcon from "../../assets/svgs/eye-icon.svg";
import eyeSlashIcon from "../../assets/svgs/eye-slash-icon.svg";
import PasswordField from "./components/PasswordField";

const SignInForm = () => {
  const [Password, setPassword] = useState("");
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
            <PasswordField
              Label="Password"
              Password={Password}
              setPassword={setPassword}
            />
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

          <div className="separator flex justify-center items-center self-stretch gap-6">
            <div className="separator-1 h-px bg-gray-200 flex-grow" />
            <div className="text-gray-500 text-center text-base font-medium">
              Or continue with
            </div>
            <div className="separator-2 h-px bg-gray-200 flex-grow" />
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
