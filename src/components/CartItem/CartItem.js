import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRemove } from '@fortawesome/free-solid-svg-icons'
import './CartItem.css'

const CartItem = (props) => {
    const {img, name, id, price} = props.cartItem
    return (
        <ul className='cart-items'>
            <li><img src={img} alt="Cart Item img" />{name} - ${price} <button className='remove-btn' onClick={() => props.removeFromCart(id)}> <FontAwesomeIcon icon={faRemove} /></button> </li>
            
        </ul>
    );
};

export default CartItem;