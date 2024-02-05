import React, { Children } from "react";
import Logo from "../../assets/Logo.svg";
import Google from "../../assets/Google.svg";
import cloud from "../../assets/cloud.svg";
import Microsoft from "../../assets/Microsoft.svg";
import FormContainer from "../../common/components/FormContainer";

const SignInForm = () => {
  return (
    <FormContainer>
      <FormWrapper>
        <img src={Logo} alt="Logo" className="w-full h-8" />
        <form className="w-full grid gap-6">
          <FormHeader
            heading="Sign In"
            subheading="Don’t have an account?"
            link="signup"
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
            <a href="fg" className="text-blue-600 ">
              Forgot password?
            </a>
          </div>

          <button className="SubmitBtn">Submit</button>

          <div className="seperator flex items-center gap-6">
            <hr class="h-px w-4/5" />
            <p className="grow text-center w-full text-base font-medium text-gray-500">
              Or continue with
            </p>
            <hr class="h-px w-4/5" />
          </div>

          <div className="SSO flex justify-between flex-col gap-4 sm:flex-row items-center text-sm font-medium text-gray-900">
            <button className="px-5 py-2.5 flex items-center justify-center gap-2 border border-solid border-gray-200 rounded-lg w-full sm:w-32">
              <img src={Google} alt="" />
              Google
            </button>
            <button className="px-5 py-2.5 flex items-center justify-center gap-2 border border-solid border-gray-200 rounded-lg w-full sm:w-32">
              <img src={Microsoft} alt="" />
              Microsoft
            </button>

            <button className="px-5 py-2.5 flex items-center justify-center gap-2 border border-solid border-gray-200 rounded-lg w-full sm:w-32">
              <img src={cloud} alt="" />
              SSO
            </button>
          </div>

          <Help
            text={"Need help? Contact"}
            link={"signup"}
            linktext={"support@smarteinc.com"}
          />
        </form>
      </FormWrapper>
    </FormContainer>
  );
};

const FormHeader = ({ heading, subheading, link, linktext }) => {
  return (
    <div className="form-group">
      <h3 className="text-2xl font-bold">{heading}</h3>
      <Help text={subheading} link={link} linktext={linktext} />
    </div>
  );
};

const Help = ({ text, link, linktext }) => {
  return (
    <div className="form-group">
      <p className="text-sm font-normal text-gray-500">
        {text}{" "}
        <a href={link} className="text-blue-700">
          {linktext}
        </a>
      </p>
    </div>
  );
};

const FormWrapper = ({ children }) => {
  return (
    <div className="w-full max-w-md grid items-center gap-2.5 p-4">
      {children}
    </div>
  );
};

export default SignInForm;
