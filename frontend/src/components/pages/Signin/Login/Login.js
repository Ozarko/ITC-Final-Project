import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import * as Yup from "yup";
import { login } from "../../../../redux/actions/user/userAction";
import { link } from "../../../../routes/navigationLink";
import FormikControl from "../../../formik/FormikControl";
import RectangleBtn from "../../../UI/Buttons/RectangleBtn/RectangleBtn";

const Login = ({ location, history }) => {
  const dispatch = useDispatch();

  const { error, userInfo } = useSelector((state) => state.userLogin);
  const redirect = location.search ? location.search.split("=")[1] : link.shop;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

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
          <Form className="Login">
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
            <p className="Login-login-error">
              {error ? (
                <span>
                  Такого користувача немає...
                  <br /> Перевірте введення або зареєструйтесь.
                </span>
              ) : null}
            </p>
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

export default withRouter(Login);
