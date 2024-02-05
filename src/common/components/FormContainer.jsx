import React from "react";

const FormContainer = ({ children }) => {
  return (
    <div className="bg-white w-full min-h-screen grid place-items-center gap-6">
      {children}
    </div>
  );
};

export default FormContainer;
