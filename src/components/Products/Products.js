import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Products.css'

const Products = (props) => {
    const {id, name, seller, price, img} = props.product;
    const addToCart = props.addToCart;
    return (
        <div className='product'>
            {/* <h4>{seller}</h4> */}
            <div className='productImg'>
                <img src={img} alt="Product image" />
            </div>
            <div className='productDetails'>
                <h3>{name}</h3>
                <p>Price: ${price}</p>
                <div >
                    <button className='add-to-cart' onClick={() => addToCart(props.product)}><span>Add to Cart</span>  <FontAwesomeIcon className='cart-icons' icon={faShoppingCart} /></button>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Products;