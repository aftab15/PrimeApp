import React from "react";

const AuthWrapper = ({ children }) => {
  return (
    <div className="AuthWrapper bg-gray-50 flex lg:justify-end">{children}</div>
  );
};

export default AuthWrapper;
