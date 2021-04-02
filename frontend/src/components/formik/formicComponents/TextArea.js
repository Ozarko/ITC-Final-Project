import { ErrorMessage, Field } from 'formik';
import React from 'react'

const TextArea = ({ label, name, isEmpty, ...rest }) => {
  return (
    <div>
      <div className="form-control">
        <Field
          as="textarea"
          className={isEmpty ? "isNotEmpty" : null}
          id={`formId_${name}`}
          name={name}
          {...rest}
        />
        <label htmlFor={name}>{label}</label>
        <p>
          <ErrorMessage name={name} />
        </p>
      </div>
    </div>
  );
};

export default TextArea
