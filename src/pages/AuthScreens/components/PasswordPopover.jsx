import React from "react";

const greenTick = (
  <svg
    className="w-3.5 h-3.5 me-2 text-green-400 dark:text-green-500"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 12"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M1 5.917 5.724 10.5 15 1.5"
    />
  </svg>
);
const grayTick = (
  <svg
    className="w-3 h-3 me-2.5 text-gray-300 dark:text-gray-400"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 14"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
    />
  </svg>
);
const PasswordPopover = ({ conditions }) => {
  return (
    <div
      data-popover
      id="popover-password"
      role="tooltip"
      className="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
    >
      <div className="p-3 space-y-2">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          Must have at least 12 characters
        </h3>
        <div className="grid grid-cols-4 gap-2">
          {conditions.map((condition, index) => {
            return condition.Value ? (
              <div
                key={index}
                className="h-1 bg-orange-300 dark:bg-orange-400"
              ></div>
            ) : (
              <div
                key={index}
                className="h-1 bg-gray-200 dark:bg-gray-600"
              ></div>
            );
          })}
        </div>
        {/* <p>It’s better to have:</p> */}
        <ul>
          {conditions.map((condition, index) => {
            return (
              <li key={index} className="flex items-center mb-1">
                {" "}
                {condition.Value ? greenTick : grayTick} {condition.Text}
              </li>
            );
          })}
        </ul>
      </div>
      <div data-popper-arrow></div>
    </div>
  );
};

export default PasswordPopover;
