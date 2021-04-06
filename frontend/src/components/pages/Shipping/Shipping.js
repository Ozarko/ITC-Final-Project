import React from 'react'
import { useSelector } from 'react-redux';
import ShippingOrder from './ShippingOrder/ShippingOrder'

const Shipping = () => {
  const { productInCart } = useSelector((state) => state.cart);
  return (
    <section className='Shipping'>
      <div className='container'>
        <div className='Shipping-details'>

        </div>
        <div className='Shipping-order'>
          <ShippingOrder productInCart={productInCart}/>
        </div>
      </div>
    </section>
  )
}

export default Shipping
