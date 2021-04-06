import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import * as Yup from "yup";
import { register } from "../../../../redux/actions/user/userAction";
import { link } from "../../../../routes/navigationLink";
import FormikControl from "../../../formik/FormikControl";
import RectangleBtn from "../../../UI/Buttons/RectangleBtn/RectangleBtn";

const Registration = ({history}) => {
  const dispatch = useDispatch();

  const { error, userInfo } = useSelector((state) => state.userRegister);

  useEffect(()=> {
    if(!error && userInfo) {
      history.push(link.shop)
    }
  }, [error, dispatch, userInfo, history])

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required(`Дане поле є обов'язковим`),
    lastName: Yup.string().required(`Дане поле є обов'язковим`),
    email: Yup.string()
      .trim()
      .email("Введіть валідний емейл")
      .required(`Дане поле є обов'язковим`),
    password: Yup.string()
      .trim()
      .required(`Дане поле є обов'язковим`)
      .min(5, "Пароль повинен містити мінімум 5 значень!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Ви ввели різні паролі")
      .required(`Дане поле є обов'язковим`),
  });

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    dispatch(register(`${values.firstName} ${values.lastName}`, values.email, values.password))
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
          <Form className="Registration">
            <FormikControl
              control="input"
              type="text"
              label={`Ваше ім'я`}
              name="firstName"
              isEmpty={formik.values.firstName}
            />

            <FormikControl
              control="input"
              type="text"
              label={`Ваше прізвище`}
              name="lastName"
              isEmpty={formik.values.lastName}
            />

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

            <FormikControl
              control="input"
              type="password"
              label={`Підтвердіть ваш пароль`}
              name="confirmPassword"
              isEmpty={formik.values.confirmPassword}
            />
            <p className="Registration-error">
              {error ? (
                <span>
                  Користувач з вказаним email уже зареєстрований...
                </span>
              ) : null}
            </p>

            <RectangleBtn
              buttonText="Зареєструватись"
              btnType="submit"
              disabledBtn={!formik.isValid}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default withRouter(Registration);
