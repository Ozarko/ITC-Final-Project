import { Form, Formik } from 'formik'
import React from 'react'
import FormikControl from '../../../formik/FormikControl';
import RectangleBtn from '../../../UI/Buttons/RectangleBtn/RectangleBtn';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../../../../redux/actions/user/userAction';

const UpdateProfile = ({user}) => {
  
  // const dispatch = useDispatch()

  // const {success} = useSelector(state => state.userUpdateProfile)

  // const userInitialValues = {
  //   firstName: user.name.split(" ")[0],
  //   lastName: user.name.split(" ")[1],
  //   email: user.email,
  //   password: '',
  //   confirmPassword: ''
  // };

  // const onSubmit = (values, {setSubmitting}) => {
  //   dispatch(updateUserProfile({
  //     id: user._id,
  //     name: `${values.firstName} ${values.lastName}`,
  //     email: values.email,
  //     password: values.password
  //   }))
  //   setSubmitting(false)
  // }

    // const validationSchema = Yup.object({
    //   firstName: Yup.string(),
    //   lastName: Yup.string(),
    //   email: Yup.string().email("Введіть валідний емейл"),
    //   password: Yup.string()
    //     .trim()
    //     .min(5, "Пароль повинен містити мінімум 5 значень!"),
    //   confirmPassword: Yup.string()
    //     .trim()
    //     .when("password", {
    //       is: (val) => val !== user.password,
    //       then: Yup.string()
    //         .required("Дане поле є обов'язковим")
    //         .oneOf([Yup.ref("password"), ""], "Ви ввели різні паролі"),
    //     }),
    // });

  return (
    <div></div>
    // <Formik
    //   initialValues={userInitialValues}
    //   validationSchema={validationSchema}
    //   onSubmit={onSubmit}
    // >
    //   {
    //     formik => {
    //       return (
    //         <Form className='UpdateProfile'>
    //           <FormikControl
    //             control="input"
    //             type="text"
    //             label={`Ваше ім'я`}
    //             name="firstName"
    //             isEmpty={formik.values.firstName}
    //           />

    //           <FormikControl
    //             control="input"
    //             type="text"
    //             label={`Ваше прізвище`}
    //             name="lastName"
    //             isEmpty={formik.values.lastName}
    //           />

    //           <FormikControl
    //             control="input"
    //             type="email"
    //             label={`Ваш email`}
    //             name="email"
    //             isEmpty={formik.values.email}
    //           />

    //           <FormikControl
    //             control="input"
    //             type="password"
    //             label={`Ваш пароль`}
    //             name="password"
    //             isEmpty={formik.values.password}
    //           />

    //           <FormikControl
    //             control="input"
    //             type="password"
    //             label={`Підтвердіть ваш пароль`}
    //             name="confirmPassword"
    //             isEmpty={formik.values.confirmPassword}
    //           />

    //           <p className="Registration-error">
    //             {success && "Ваш профіль було оновлено"}
    //           </p>

    //           <RectangleBtn
    //             buttonText="Підтвердити зміни"
    //             btnType="submit"
    //             disabledBtn={!formik.isValid}
    //           />
    //         </Form>
    //       );
    //     }
    //   }
    // </Formik>
  )
}

export default UpdateProfile
