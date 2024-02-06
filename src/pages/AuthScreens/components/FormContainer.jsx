import React from "react";
import AuthWrapper from "../AuthWrapper";

const FormContainer = ({ children }) => {
  return (
    <AuthWrapper>
      <div className="min-h-screen w-full lg:w-2/5 bg-slate-500">
        <div className="bg-white w-full min-h-screen grid place-items-center gap-6">
          {children}
        </div>
      </div>
    </AuthWrapper>
  );
};

export default FormContainer;
