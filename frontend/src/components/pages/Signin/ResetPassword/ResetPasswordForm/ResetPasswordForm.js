import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { resetPassword } from '../../../../../redux/actions/resetPassword/resetPasswordAction';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import FormikControl from '../../../../formik/FormikControl';
import RectangleBtn from '../../../../UI/Buttons/RectangleBtn/RectangleBtn';

const ResetPasswordForm = () => {
    const dispatch = useDispatch();

    const { resetError } = useSelector(state => state.resetPssw)

    const {token} = useParams();

    const initialValues = {
      password: "",
      confirmPassword: "",
    };

    const validationSchema = Yup.object({
      password: Yup.string()
        .trim()
        .required(`Дане поле є обов'язковим`)
        .min(5, "Пароль повинен містити мінімум 5 значень!"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), ""], "Ви ввели різні паролі")
        .required(`Дане поле є обов'язковим`),
    });

    const onSubmit = ({password}, { setSubmitting, resetForm }) => {
      dispatch(resetPassword(password, token));
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
            <Form className="ResetPasswordForm">
              <FormikControl
                control="input"
                type="password"
                label={`Введіть новий пароль`}
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
              <p className="ResetPasswordForm-error">{resetError}</p>
              <RectangleBtn
                buttonText="Змінити пароль"
                btnType="submit"
                disabledBtn={!formik.isValid}
              />
            </Form>
          );
        }}
      </Formik>
    );
}

export default ResetPasswordForm
