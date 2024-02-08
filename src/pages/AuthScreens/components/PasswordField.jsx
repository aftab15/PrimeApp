import classNames from "classnames";
import React, { useState } from "react";
import eyeIcon from "../../../assets/svgs/eye-icon.svg";
import eyeSlashIcon from "../../../assets/svgs/eye-slash-icon.svg";

const PasswordField = ({
  Label,
  Password = "",
  setPassword,
  error = "",
  setError,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="form-group grid gap-2 content-baseline">
      <label htmlFor={Label} className="text-sm font-medium">
        {Label}
      </label>
      <span className="relative">
        <input
          id={Label}
          type={showPassword ? "text" : "password"}
          className={classNames(
            "relative rounded-lg py-3 px-4 text-sm border border-solid border-gray-300 w-full",
            {
              "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500":
                error.length > 0,
            }
          )}
          onFocus={() => setError("")}
          placeholder="••••••••••"
          onChange={(e) => setPassword(e.target.value)}
        />

        {showPassword ? (
          <img
            className={classNames(
              "eyeSlashIcon absolute right-4 bottom-4 cursor-pointer",
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
              "eyeIcon absolute right-4 bottom-4 cursor-pointer",
              {
                hidden: !Password.length,
              }
            )}
            src={eyeIcon}
            alt="eye"
            onClick={() => setShowPassword(true)}
          />
        )}
      </span>
      {error.length > 0 && (
        <p className="text-sm text-red-600 dark:text-red-500">
          <span className="font-medium"></span>
          {error}
        </p>
      )}
    </div>
  );
};

export default PasswordField;
