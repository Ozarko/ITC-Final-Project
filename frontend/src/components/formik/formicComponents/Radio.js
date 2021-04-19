import { ErrorMessage, Field } from 'formik';
import React, { Fragment } from 'react';

const Radio = (props) => {
  const { label, name, options, ...rest } = props;
  
  return (
    <div className="form-control-radio">
      <label>{label}</label>
      <div className='form-control-radio-field'>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <Fragment key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </Fragment>
            );
          });
        }}
      </Field>
      </div>
      <p>
        <ErrorMessage name={name} />
      </p>
    </div>
  );
};

export default Radio;