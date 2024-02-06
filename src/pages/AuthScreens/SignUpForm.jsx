import React from "react";
import "./AuthScreen.css";
import Logo from "../../assets/brand/Logo.svg";
import FormContainer from "./components/FormContainer";
import FormWrapper from "./components/FormWrapper";
import FormHeader from "./components/FormHeader";
import FormHelpText from "./components/FormHelpText";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  return (
    <FormContainer>
      <FormWrapper>
        <img src={Logo} alt="Logo" className="w-full h-8" />
        <form className="w-full grid gap-6">
          <FormHeader
            heading="Sign up Activation"
            subheading="Already have an account? "
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
            {/* Designation */}
            <div className="form-group grid gap-2">
              <label htmlFor="Email" className="text-sm font-medium">
                Designation{" "}
                <span className="text-sm font-normal text-gray-500">
                  (Optional)
                </span>
              </label>
              <input
                type="text"
                className="rounded-lg py-3 px-4 border border-solid border-gray-300"
                placeholder="e.g. Product Manager"
              />
            </div>
            {/* Info */}
            <div className="form-multi-group grid sm:grid-cols-2 gap-2">
              <div className="form-group grid gap-2">
                <label htmlFor="Email" className="text-sm font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  className="rounded-lg py-3 px-4 border border-solid border-gray-300 w-full"
                  placeholder="e.g. John"
                />
              </div>
              <div className="form-group grid gap-2 ">
                <label htmlFor="Email" className="text-sm font-medium">
                  Last name
                </label>
                <input
                  type="text"
                  className="rounded-lg py-3 px-4 border border-solid border-gray-300 w-full"
                  placeholder="e.g. doe"
                />
              </div>
            </div>

            {/* Password */}
            <div className="form-multi-group grid sm:grid-cols-2 gap-2">
              <div className="form-group grid gap-2">
                <label htmlFor="Email" className="text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  className="rounded-lg py-3 px-4 border border-solid border-gray-300 w-full"
                  placeholder="**********"
                />
              </div>
              <div className="form-group grid gap-2 ">
                <label htmlFor="Email" className="text-sm font-medium">
                  Confirm Password
                </label>
                <input
                  type="text"
                  className="rounded-lg py-3 px-4 border border-solid border-gray-300 w-full"
                  placeholder="**********"
                />
              </div>
            </div>
          </div>
          <div className="form-group flex items-center gap-2 select-none text-gray-500">
            <input
              type="checkbox"
              className="rounded bg-gray-50 border border-gray-300"
              id="PrivacyPolicy"
            />
            <label className="text-sm font-normal" htmlFor="PrivacyPolicy">
              I agree to the{" "}
              <Link to={"/privacypolicy"} className="text-blue-700">
                Privacy Policy
              </Link>{" "}
              and <Link className="text-blue-700">Terms of Conditions.</Link>
            </label>
          </div>

          <button className="SubmitBtn">Activate & Sign in</button>
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

export default SignUpForm;
