import React, { useEffect, useRef } from "react";

const InputControl = ({type, name, value, valueFromInput, valid, errorMessage}) => {
  const currentInput = useRef();

  useEffect(() => {
    if (type === "email") {
      currentInput.current.focus();
    }
  }, []);

  return (
    <div className={''}>
      <input
        ref={currentInput}
        onChange={valueFromInput}
        type={type}
        name={name}
        value={value}
      />
      <label htmlFor={name}>{name}</label>
      <p>{valid === null || valid ? null : errorMessage}</p>
    </div>
  );
};

export default InputControl;
