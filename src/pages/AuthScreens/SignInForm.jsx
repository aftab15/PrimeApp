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
import TextField from "./components/TextField";
import { VALIDATIONS } from "../../utils/constants";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!VALIDATIONS.EMAIL.test(email)) {
      setEmailError("Please enter a valid input");
      return;
    }
    if (password === "") {
      setPasswordError("Please enter a valid input");
      return;
    }
    if (emailError === "" && passwordError === "") {
      console.log({
        email,
        password,
      });
    }
  };
  return (
    <FormContainer>
      <FormWrapper>
        <img src={Logo} alt="Logo" className="w-full h-8" />
        <form onSubmit={handleSubmit} className="w-full grid gap-6">
          <FormHeader
            heading="Sign In"
            subheading="Don’t have an account?"
            link="/signup"
            linktext="Sign up"
          />
          <div className="Inputs grid gap-4">
            {/* Email */}
            <TextField
              Label="Email"
              Text={email}
              setText={setEmail}
              error={emailError}
              setError={setEmailError}
            />
            <PasswordField
              Label="Password"
              Password={password}
              setPassword={setPassword}
              error={passwordError}
              setError={setPasswordError}
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
          <Seperator />
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

export const Seperator = () => {
  return (
    <div className="separator flex justify-center items-center self-stretch gap-6">
      <div className="separator-1 h-px bg-gray-200 flex-grow" />
      <div className="text-gray-500 text-center text-base font-medium">
        Or continue with
      </div>
      <div className="separator-2 h-px bg-gray-200 flex-grow" />
    </div>
  );
};
export default SignInForm;
