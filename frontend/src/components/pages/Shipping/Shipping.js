import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { link } from "../../../routes/navigationLink";
import ShippingFormControl from "./ShippingFormControl/ShippingFormControl";
import ShippingOrder from "./Order/Order";
import * as Yup from "yup";
import RectangleBtn from "../../UI/Buttons/RectangleBtn/RectangleBtn";
import FormikControl from "../../formik/FormikControl";
import Loader from "../../UI/Loader/Loader";

const Shipping = ({ history }) => {
  const { productInCart } = useSelector((state) => state.cart);

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (!productInCart.length) {
      history.push(link.shop);
    }
  }, [history, productInCart]);

  const deliveryOption = [
    { key: "Адресна доставка", value: "address" },
    { key: "Новою Поштою", value: "NovaPoshta" },
  ];

  const initialValues = {
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    phone: user.phone || "",
    email: user.email || "",
    polycyChec: [],
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required(`Дане поле є обов'язковим`),
    lastName: Yup.string().required(`Дане поле є обов'язковим`),
    phone: Yup.string()
      .required(`Дане поле є обов'язковим`)
      .trim()
      .matches(
        /^\+?3?8?(0\d{9})$/,
        `Будь ласка, введіть правильний номер телефону`
      ),
    polycyChec: Yup.array().min(1, `Дане поле є обов'язковим.`),
    email: Yup.string()
      .trim()
      .email("Введіть валідний емейл")
      .required(`Це поле є обов'язковим`),
    dlrOption: Yup.string().required("Required")
  });

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);
    setSubmitting(false);
    // resetForm();
  };

  return (
    <>
      <Loader loading={!user.firstName} />
      {user.firstName && (
        <section className="Shipping">
          <div className="container">
            <div className="Shipping-intro">
              <h3>Доставка та спосіб оплати.</h3>
            </div>
            <div className="Shipping-box">
              <div className="Shipping-box-details">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  {(formik) => {
                    return (
                      <Form className="Shipping-box-details-form">
                        <ShippingFormControl
                          count="1"
                          title="Контактна інформація"
                          subTitle="Ваші дані"
                        >
                          <div className="Shipping-box-details-form-toInLine">
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
                          </div>
                          <FormikControl
                            control="input"
                            type="text"
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
                            control="checkbox"
                            label=""
                            name="polycyChec"
                            options={[
                              {
                                key:
                                  "Я даю згоду на опрацювання персональних даних.",
                                value: "Погоджуюсь",
                              },
                            ]}
                          />
                        </ShippingFormControl>
                        <ShippingFormControl
                          count="2"
                          title="Адреса та доставка"
                          subTitle="Виберіть спосіб доставки"
                        >
                          <FormikControl
                            control="radio"
                            label=""
                            name="dlrOption"
                            options={deliveryOption}
                          />
                        </ShippingFormControl>
                        <ShippingFormControl
                          count="3"
                          title="Спосіб оплати"
                          subTitle="Ваші дані"
                        >
                          {/* {buttonText, clickHandler, disabledBtn, btnType = 'button'} */}
                          <RectangleBtn
                            buttonText="Перейти до оплати"
                            btnType="submit"
                          />
                        </ShippingFormControl>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
              <div className="Shipping-box-order">
                <ShippingOrder productInCart={productInCart} />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Shipping;
