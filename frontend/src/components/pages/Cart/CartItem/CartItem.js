import React from 'react'
import { useDispatch } from 'react-redux';
import Quantity from '../../../UI/Quantity/Quantity';

const CartItem = (props) => {
  const dispatch = useDispatch()

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
          <Quantity count={1}/>
        </div>
      </div>
    </div>
  );
};

export default CartItem
