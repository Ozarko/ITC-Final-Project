import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormikControl from "../../formik/FormikControl";
import RectangleBtn from "../../UI/Buttons/RectangleBtn/RectangleBtn";
import SunLogo from "../../UI/SunLogo/SunLogo";

const Login = () => {
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

  const onSubmit = (values, onSubmitProps) => {
    console.log(values);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  return (
    <div className="Login">
      <div className="container">
        <div className="Login-box">
          <SunLogo />
          
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => {
              return (
                <Form className='Login-form'>
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
                  <RectangleBtn
                    buttonText="Надіслати"
                    btnType="submit"
                    disabledBtn={!formik.isValid}
                  />
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
