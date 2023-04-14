import React from "react";

const InputForm = ({
  name,
  label,
  type,
  value,
  onChange,
  placeholder,
  disabledValue,
  requiredValue,
  css,
  isOptionnal = false,
}) => {
  return (
    <div className="my-1 py-4">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
        {isOptionnal ? (
          <span className="text-neutral-400 ps-2">- Optionnel</span>
        ) : null}
      </label>
      <input
        onChange={onChange}
        value={value}
        type={type}
        name={name}
        id={name}
        class={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ${css}`}
        placeholder={placeholder ? placeholder : ""}
        required={requiredValue ? requiredValue : true}
        disabled={disabledValue}
        autoComplete
      />
    </div>
  );
};

export default InputForm;
