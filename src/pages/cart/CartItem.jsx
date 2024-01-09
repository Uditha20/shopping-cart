import React,{useContext} from 'react'
import { ShopContext } from '../../context/ShopContext';
// import "./cart.css";

export default function CartItem(props) {
  const { id, productName, price, productImage } = props.data;

  const {cartItems,addToCart, removeFromCart}=useContext(ShopContext) 
   return (
    <div className='cartItems'>
        <img src={productImage}  alt='product_image'/>
        <div className='description'>
            <p>
               <b>{productName}</b> 
            </p>
            <p>${price}</p>
            <div className='countHandler'>
              <button onClick={()=>{addToCart(id)}}>+</button>
             <input value={cartItems[id]}/>
              <button  onClick={()=>{removeFromCart(id)}}>-</button>

            </div>
        </div>
    </div>
  )
}
