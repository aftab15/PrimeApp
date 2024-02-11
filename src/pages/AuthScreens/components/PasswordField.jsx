import classNames from "classnames";
import React, { useEffect, useState } from "react";
import eyeIcon from "../../../assets/svgs/eye-icon.svg";
import eyeSlashIcon from "../../../assets/svgs/eye-slash-icon.svg";
import PasswordPopover from "./PasswordPopover";

const PasswordField = ({
  Label,
  Password = "",
  setPassword,
  error = "",
  setError = (e) => {},
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [Conditions, setConditions] = useState([
    {
      Text: "Include at least one uppercase letter",
      Value: false,
    },
    {
      Text: "Include at least one lowercase letter",
      Value: false,
    },
    {
      Text: "Include atleast one number",
      Value: false,
    },
    {
      Text: "Include at least one special character",
      Value: false,
    },
  ]);

  useEffect(() => {
    console.log(Password);
    if (Password.length > 0) {
      const Array = verifyPassword(Password);
      setConditions(Array);
      if (
        Array.find((condition) => {
          return condition.Value === false;
        })
      ) {
        setError(" ");
      } else {
        setError("");
      }
    }
  }, [Password]);

  return (
    <div className="form-group grid gap-2 content-baseline">
      <label htmlFor={Label} className="text-sm font-medium">
        {Label}
      </label>
      <span className="relative">
        <input
          id={Label}
          type={showPassword ? "text" : "password"}
          data-popover-target={
            Label === "New Password" ? "popover-password" : undefined
          }
          data-popover-placement="bottom"
          className={classNames(
            "relative rounded-lg pl-3 pr-10 py-3 text-sm border border-solid border-gray-300 w-full",
            {
              "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500":
                error.length > 0,
            }
          )}
          onFocus={() => setError("")}
          placeholder="••••••••••"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        {Label === "New Password" && (
          <PasswordPopover conditions={Conditions} />
        )}
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

const verifyPassword = (input) => {
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const numberRegex = /[0-9]/;
  const specialCharacterRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

  const containsUppercase = uppercaseRegex.test(input);
  const containsLowercase = lowercaseRegex.test(input);
  const containsNumber = numberRegex.test(input);
  const containsSpecialCharacter = specialCharacterRegex.test(input);

  return [
    { Text: "Include at least one uppercase letter", Value: containsUppercase },
    { Text: "Include at least one lowercase letter", Value: containsLowercase },
    { Text: "Include atleast one number", Value: containsNumber },
    {
      Text: "Include at least one special character",
      Value: containsSpecialCharacter,
    },
  ];
};

export default PasswordField;
