import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart } from '../../../../redux/actions/cart/cartActions';
import RemoveBtn from '../../../UI/Buttons/RemoveBtn/RemoveBtn';
import Quantity from '../../../UI/Quantity/Quantity';

const CartItem = (props) => {

  const dispatch = useDispatch();

  const addQty = (qty) => {
    dispatch(addProductToCart(props.product, qty + 1))
  }

  const removeQty = (qty) => {
    dispatch(addProductToCart(props.product, qty - 1))
  }

  const removeFromCartHandler = (id) => {
    console.log('remove')
  }

  return (
    <div className="CartItem">
      <div className="CartItem-image">
        <img src={props.image} alt={props.description} />
      </div>
      <div className="CartItem-info">
        <h5>{props.categories.join(" & ")}</h5>
        <div className="CartItem-info-name">
          <h4>{props.name}</h4>
        </div>
        <div className="CartItem-info-descAndLikes">
          <div className="CartItem-info-descAndLikes-desc">
            <p className="title">Допис :</p>
            <p>Тут буде щось</p>
          </div>
          <div className="CartItem-info-descAndLikes-likes">
            <p className="title">Сердечок :</p>
            <p>{props.likes}</p>
          </div>
        </div>
      </div>
      <div className="CartItem-qntDelAndPrice">
        <div className="CartItem-qntDelAndPrice-qntDel">
          <Quantity count={props.qty} inStock={props.countInStock} clickHandlerIncrement={addQty} clickHandlerDecrement={removeQty}/>
          <RemoveBtn clickHandler={()=> console.log('')} />
        </div>
        <div className='CartItem-qntDelAndPrice-price'>
          <h5>{props.qty * props.price} <span>грн</span></h5>
        </div>
      </div>
    </div>
  );
};

export default CartItem
