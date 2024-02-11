import classNames from "classnames";
import React, { useEffect } from "react";

const TextField = ({
  Label,
  SubLabel = "",
  placeholder = "e.g John.doe@acme.com",
  Text,
  setText,
  error = "",
  setError = (e) => {},
}) => {
  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (Label === "Email") {
        setText(Text.toLowerCase());
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, [Text]);

  return (
    <div className="form-group grid gap-2 content-baseline">
      <label htmlFor={Label} className="text-sm font-medium">
        {Label}{" "}
        <span className="text-sm font-normal text-gray-500">{SubLabel}</span>
      </label>
      <input
        id={Label}
        type="text"
        // autoComplete="off"
        value={Text}
        onFocus={() => setError("")}
        className={classNames(
          "w-full rounded-lg py-3 px-4 border border-solid border-gray-300 text-sm scroll-m-10",
          {
            "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500":
              error.length > 0,
          }
        )}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
      {error.length > 0 && (
        <p className="text-sm text-red-600 dark:text-red-500">
          <span className="font-medium"></span>
          {error}
        </p>
      )}
    </div>
  );
};

export default TextField;
