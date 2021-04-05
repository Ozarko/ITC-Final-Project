import { ErrorMessage, Field } from 'formik';
import React from 'react'

const Input = ({label, name, isEmpty, ...rest}) => {
  return (
    <div className="form-control">
      <Field
        className={isEmpty ? "isNotEmpty" : null}
        id={`formId_${name}`}
        name={name}
        {...rest}
        autoComplete="off"
      />
      <label htmlFor={name}>{label}</label>
      <p>
        <ErrorMessage name={name} />
      </p>
    </div>
  );
}

export default Input
