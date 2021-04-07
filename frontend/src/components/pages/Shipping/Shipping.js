import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { link } from "../../../routes/navigationLink";
import ShippingContactInfoControl from "./ContactInfoControl/ContactInfoControl";
import ShippingFormControl from "./ShippingFormControl/ShippingFormControl";
import ShippingOrder from "./Order/Order";

const Shipping = ({ history }) => {
  const { productInCart } = useSelector((state) => state.cart);
  
  useEffect(() => {
    if (!productInCart.length) {
      history.push(link.shop);
    }
  }, [history, productInCart]);

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    policyCheck: false,
  }

  return (
    <section className="Shipping">
      <div className="container">
        <div className="Shipping-details">
          <Formik>
            {(formik) => {
              return (
                <Form className="Shipping-form">
                  <ShippingFormControl count="1" title="Контактна інформація" subTitle='Ваші дані'>
                    <ShippingContactInfoControl formik={formik}/>
                  </ShippingFormControl>

                </Form>
              );
            }}
          </Formik>
        </div>
        <div className="Shipping-order">
          <ShippingOrder productInCart={productInCart} />
        </div>
      </div>
    </section>
  );
};

export default Shipping;
