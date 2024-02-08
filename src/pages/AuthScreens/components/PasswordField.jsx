import classNames from "classnames";
import React, { useState } from "react";
import eyeIcon from "../../../assets/svgs/eye-icon.svg";
import eyeSlashIcon from "../../../assets/svgs/eye-slash-icon.svg";

const PasswordField = ({ Label, Password = "", setPassword }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="form-group grid gap-2 relative">
      <label htmlFor={Label} className="text-sm font-medium">
        {Label}
      </label>
      <input
        id={Label}
        type={showPassword ? "text" : "password"}
        className="rounded-lg py-3 px-4 border border-solid border-gray-300 w-full"
        placeholder="••••••••••"
        onChange={(e) => setPassword(e.target.value)}
      />
      {showPassword ? (
        <img
          className={classNames(
            "eyeSlashIcon absolute right-4 bottom-[18px] cursor-pointer",
            {
              hidden: !Password.length,
            }
          )}
          src={eyeSlashIcon}
          alt="eyeSlash"
          onClick={() => setShowPassword(false)}
        />
      ) : (
        <img
          className={classNames(
            "eyeIcon absolute right-4 bottom-[18px] cursor-pointer",
            {
              hidden: !Password.length,
            }
          )}
          src={eyeIcon}
          alt="eye"
          onClick={() => setShowPassword(true)}
        />
      )}
    </div>
  );
};

export default PasswordField;
