import { Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import * as Yup from "yup";
import { login } from "../../../../../redux/actions/auth/authAction";
import FormikControl from "../../../../formik/FormikControl";
import RectangleBtn from "../../../../UI/Buttons/RectangleBtn/RectangleBtn";

const LoginForm = () => {
  const dispatch = useDispatch();

  const { error, googleError } = useSelector((state) => state.auth);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .trim()
      .email("Введіть валідний емейл")
      .required(`Це поле є обов'язковим`),
    password: Yup.string().trim().required(`Це поле є обов'язковим`),
  });

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    dispatch(login(values.email.toLowerCase(), values.password));
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
          <Form className="LoginForm">
            <FormikControl
              control="input"
              type="email"
              label={`Ваш email`}
              name="email"
              isEmpty={formik.values.email}
            />
            <FormikControl
              control="input"
              type="password"
              label={`Ваш пароль`}
              name="password"
              isEmpty={formik.values.password}
            />
            <p className="LoginForm-error">{error || googleError}</p>
            <RectangleBtn
              buttonText="Ввійти"
              btnType="submit"
              disabledBtn={!formik.isValid}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default withRouter(LoginForm);
