import { ErrorMessage, Field } from 'formik';
import React, { Fragment } from 'react'

const Checkbox = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control-checkbox">
      <label>{label}</label>
      <div className="form-control-checkbox-field">
        <Field name={name} {...rest}>
          {({ field }) => {
            return options.map((option) => {
              return (
                <Fragment key={option.key}>
                  <div className="form-control-checkbox-field-box path">
                    <input
                      type="checkbox"
                      id={option.value}
                      {...field}
                      value={option.value}
                      checked={field.value.includes(option.value)}
                    />
                    <svg viewBox="0 0 21 21">
                      <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
                    </svg>
                  </div>
                  <label htmlFor={option.value}>{option.key}</label>
                </Fragment>
              );
            });
          }}
        </Field>
        <p>
          <ErrorMessage name={name} />
        </p>
      </div>
    </div>
  );
};

export default Checkbox;
