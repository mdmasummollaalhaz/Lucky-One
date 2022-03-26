import React from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css'

const Cart = (props) => {
    const {cart, resetCart, bestMatch, removeFromCart, cartTotal} = props;
    
    return (
        <div className='cart-inner'>
            <h2>Cart Item: {cart.length}</h2>            
            {
                cart.map(cartItem =><CartItem key = {cartItem.id} removeFromCart={removeFromCart} cartItem ={cartItem}></CartItem>)
            }            
            <h3>Total Price: {cartTotal()}</h3>
            <button className='cart-btn' onClick={() => bestMatch()}>Best Match for you</button>
            <button className='cart-btn' onClick={() => resetCart()}>Reset Cart</button>
        </div>
    );
};

export default Cart;