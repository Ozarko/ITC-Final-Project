import { Form, Formik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import FormikControl from "../../../formik/FormikControl";
import RectangleBtn from "../../../UI/Buttons/RectangleBtn/RectangleBtn";

const ContactForm = () => {
  const [showForm, setShowForm] = useState(true);

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(`Обов'язково вкажіть`),
    email: Yup.string()
      .trim()
      .email(`Некоректно введені дані`)
      .required("Обов'язкове поле"),
    phone: Yup.string()
      .trim()
      .matches(/^\+?3?8?(0\d{9})$/, `Некоректно введені дані`)
      .required(`Обов'язкове поле`),
    message: Yup.string().required(`Обов'язкове поле`),
  });

  const onSubmit = (values, onSubmitProps) => {
    console.log(values);
    setShowForm(false);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
    setTimeout(() => {
      setShowForm(true);
    }, 3000);
  };
  if (showForm) {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form className="ContactForm">
              <FormikControl
                control="input"
                type="text"
                label={`Ваше ім'я`}
                name="name"
                isEmpty={formik.values.name}
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
                type="text"
                label={`Ваш телефон`}
                name="phone"
                isEmpty={formik.values.phone}
              />

              <FormikControl
                control="textarea"
                label={`Ваше повідомлення`}
                name="message"
                isEmpty={formik.values.message}
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
    );
  } else {
    return (
        <div className="ContactForm-sent">
          <h3>Ваше повідомлення уже прямує до нас!</h3>
          <p>Найближчим часом ми зв'яжемось з вами.</p>
        </div>
    );
  }
};

export default ContactForm;
