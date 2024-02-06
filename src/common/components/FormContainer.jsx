import React from "react";

const FormContainer = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-slate-500">
      <div className="bg-white w-full min-h-screen grid place-items-center gap-6">
        {children}
      </div>
    </div>
  );
};

export default FormContainer;
