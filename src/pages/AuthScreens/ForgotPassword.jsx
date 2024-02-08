import React, { Children, useState } from "react";
import "./AuthScreen.css";
import Logo from "../../assets/brand/Logo.svg";
import FormContainer from "./components/FormContainer";
import FormWrapper from "./components/FormWrapper";
import FormHeader from "./components/FormHeader";
import FormHelpText from "./components/FormHelpText";
import TextField from "./components/TextField";
import { VALIDATIONS } from "../../utils/constants";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!VALIDATIONS.EMAIL.test(email)) {
      setEmailError("Please enter a valid input");
      return;
    }

    if (emailError === "") {
      console.log({
        email,
      });
    }
  };

  return (
    <FormContainer>
      <FormWrapper>
        <img src={Logo} alt="Logo" className="w-full h-8" />
        <form onSubmit={handleSubmit} className="w-full grid gap-6">
          <FormHeader
            heading="Forgot Password"
            subheading="Already know password?"
            link="/signin"
            linktext="Login here"
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
            <label htmlFor="" className="text-sm font-medium text-gray-500">
              Please provide email which is associated with your account.
            </label>
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
