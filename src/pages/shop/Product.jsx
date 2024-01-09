import React, { useContext } from 'react'

import { ShopContext } from '../../context/ShopContext';

export default function Product(props) {
  const { id, productName, price, productImage } = props.data;
  const {addToCart,cartItems}=useContext(ShopContext);
  const cartItemAmount=cartItems[id];
  return (
    <div className='product'>
      <img src={productImage} alt='dis'/>
      <div classaName='description'>
        <p><b>{productName}</b></p>
        <p><b>${price}</b></p>
      </div>
      <buton className="addToCartBttn" onClick={()=>addToCart(id)}>Add to Cart {cartItemAmount>0  && <>({cartItemAmount})</>}</buton>
    </div>
  )
}
 