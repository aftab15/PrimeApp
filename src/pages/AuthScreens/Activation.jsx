import React, { Children, useState } from "react";
import "./AuthScreen.css";
import Logo from "../../assets/brand/Logo.svg";
import FormContainer from "./components/FormContainer";
import FormWrapper from "./components/FormWrapper";
import FormHeader from "./components/FormHeader";
import FormSocialButtons from "./components/FormSocialButtons";
import { VALIDATIONS } from "../../utils/constants";
import TextField from "./components/TextField";
import FormHelpText from "./components/FormHelpText";
import { Seperator } from "./SignInForm";

const Activation = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!VALIDATIONS.EMAIL.test(email)) {
      document.getElementById("Email").scrollIntoView();
      setEmailError("Please enter a valid input");
      return;
    }
    console.log({ email });
  };

  return (
    <FormContainer>
      <FormWrapper>
        <img src={Logo} alt="Logo" className="w-full h-8" />
        <form onSubmit={handleSubmit} className="w-full grid gap-6">
          <FormHeader
            heading="Start prospecting for free"
            subheading="Already have an account?"
            link="/signin"
            linktext="Login here"
          />
          <div className="Inputs grid gap-4">
            {/* Email */}
            <TextField
              Label="Email"
              placeholder="e.g John.doe@acme.com"
              Text={email}
              setText={setEmail}
              error={emailError}
              setError={setEmailError}
            />
          </div>

          <button className="SubmitBtn">Submit</button>

          <Seperator />

          <FormSocialButtons />

          <FormHelpText
            text={"Did not received link?"}
            link={"/signup"}
            linktext={"Send again"}
          />
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

export default Activation;
