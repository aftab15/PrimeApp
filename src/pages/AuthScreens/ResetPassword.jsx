import React, { Children, useState } from "react";
import "./AuthScreen.css";
import Logo from "../../assets/brand/Logo.svg";
import FormContainer from "./components/FormContainer";
import FormWrapper from "./components/FormWrapper";
import FormHeader from "./components/FormHeader";
import FormHelpText from "./components/FormHelpText";
import eyeIcon from "../../assets/svgs/eye-icon.svg";
import eyeSlashIcon from "../../assets/svgs/eye-slash-icon.svg";
import classNames from "classnames";
import PasswordField from "./components/PasswordField";

const ResetPassword = () => {
  const [Password, setPassword] = useState("");
  const [CPassword, setCPassword] = useState("");
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
            <PasswordField
              Label="New Password"
              Password={Password}
              setPassword={setPassword}
            />
            <PasswordField
              Label="Confirm Password"
              Password={CPassword}
              setPassword={setCPassword}
            />
          </div>

          <button className="SubmitBtn  bg-Fire-Opal-500 hover:bg-Fire-Opal-600">Set password</button>
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
