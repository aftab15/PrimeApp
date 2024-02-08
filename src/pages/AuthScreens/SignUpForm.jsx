import React, { useState } from "react";
import "./AuthScreen.css";
import Logo from "../../assets/brand/Logo.svg";
import FormContainer from "./components/FormContainer";
import FormWrapper from "./components/FormWrapper";
import FormHeader from "./components/FormHeader";
import FormHelpText from "./components/FormHelpText";
import { Link } from "react-router-dom";
import PasswordField from "./components/PasswordField";
import TextField from "./components/TextField";
import { VALIDATIONS } from "../../utils/constants";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [designation, setDesignation] = useState("");

  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [cPassword, setCPassword] = useState("");
  const [cPasswordError, setCPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!VALIDATIONS.EMAIL.test(email)) {
      document.getElementById("Email").scrollIntoView();
      setEmailError("Please enter a valid input");
      return;
    }
    if (firstName === "") {
      setFirstNameError("Please enter a valid input");
      return;
    }
    if (lastName === "") {
      setLastNameError("Please enter a valid input");
      return;
    }
    if (password === "") {
      setPasswordError("Please enter a valid input");
      return;
    }
    if (cPassword === "") {
      setCPasswordError("Please enter a valid input");
      return;
    }
    if (cPassword !== password) {
      setCPasswordError("Passwords do not match!");
      return;
    }
    if (emailError === "" && passwordError === "") {
      
    }
  };
  return (
    <FormContainer>
      <FormWrapper>
        <img src={Logo} alt="Logo" className="w-full h-8" />
        <form onSubmit={handleSubmit} className="w-full grid gap-6">
          <FormHeader
            heading="Sign up Activation"
            subheading="Already have an account? "
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
            {/* Designation */}
            <TextField
              Label="Designation"
              SubLabel="(Optional)"
              placeholder="e.g. Product Manager"
              Text={designation}
              setText={setDesignation}
            />
            {/* Info */}
            <div className="form-multi-group grid sm:grid-cols-2 gap-2">
              <TextField
                Label="First Name"
                placeholder="e.g. John"
                Text={firstName}
                setText={setFirstName}
                error={firstNameError}
                setError={setFirstNameError}
              />
              <TextField
                Label="Last Name"
                placeholder="e.g. Doe"
                Text={lastName}
                setText={setLastName}
                error={lastNameError}
                setError={setLastNameError}
              />
            </div>

            {/* Password Group */}
            <div className="form-multi-group grid sm:grid-cols-2 gap-2">
              <PasswordField
                Label="Password"
                Password={password}
                setPassword={setPassword}
                error={passwordError}
                setError={setPasswordError}
              />
              <PasswordField
                Label="Confirm Password"
                Password={cPassword}
                setPassword={setCPassword}
                error={cPasswordError}
                setError={setCPasswordError}
              />
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
