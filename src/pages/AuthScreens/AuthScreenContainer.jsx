import React from "react";
import SignInForm from "./SignInForm";

const AuthScreenContainer = ({ screen }) => {
  const componentMap = {
    signin: <SignInForm />,
  };
  return (
    <div className="min-h-screen w-full bg-slate-500">
      {componentMap[screen]}
    </div>
  );
};

export default AuthScreenContainer;
