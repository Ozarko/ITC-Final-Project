import { Form, Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { forgotPassword } from '../../../../../redux/actions/resetPassword/resetPasswordAction';
import FormikControl from '../../../../formik/FormikControl';
import RectangleBtn from '../../../../UI/Buttons/RectangleBtn/RectangleBtn';

const ForgotPasswordForm = () => {

  const dispatch = useDispatch()

  const { forgotReqError} = useSelector(
    (state) => state.resetPssw
  );

  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .trim()
      .email("Введіть валідний емейл")
      .required(`Це поле є обов'язковим`)
  });

  const onSubmit = ({email}, { setSubmitting, resetForm }) => {
    dispatch(forgotPassword(email.toLowerCase()));
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form className="ForgotPasswordForm">
            <FormikControl
              control="input"
              type="email"
              label={`Ваш email`}
              name="email"
              isEmpty={formik.values.email}
            />
            <p className="ForgotPasswordForm-error">{forgotReqError}</p>
            <RectangleBtn
              buttonText="Відновити пароль"
              btnType="submit"
              disabledBtn={!formik.isValid}
            />
          </Form>
        );
      }}
    </Formik>
  );
}

export default ForgotPasswordForm
