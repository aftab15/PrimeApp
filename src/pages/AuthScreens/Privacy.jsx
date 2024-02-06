import React from "react";
import "./AuthScreen.css";
import Logo from "../../assets/brand/Logo.svg";
import FormContainer from "./components/FormContainer";
import FormWrapper from "./components/FormWrapper";
import LeftIcon from "../../assets/svgs/arrow-left-outline.svg";
import { Link } from "react-router-dom";
import { Privacy_Policy } from "../../utils/messages";

const Privacy = () => {
  return (
    <FormContainer>
      <FormWrapper>
        <span className="w-full h-8 relative flex justify-center items-center">
          <Link to={"/signup"} className="BackBtn absolute left-0">
            <img src={LeftIcon} alt="LeftIcon" />
          </Link>
          <img src={Logo} alt="Logo" className="h-8" />
        </span>

        <div className="w-full grid gap-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Privacy Policy
          </h2>
          {Privacy_Policy.map((data) => {
            return <Topic Heading={data.heading} Text={data.text} />;
          })}
        </div>
      </FormWrapper>
    </FormContainer>
  );
};

const Topic = ({ Heading, Text }) => {
  return (
    <div className="Topic grid gap-2">
      <h3 className="text-base font-medium">{Heading}</h3>
      <p className="text-sm font-normal text-gray-600">{Text}</p>
    </div>
  );
};

export default Privacy;
