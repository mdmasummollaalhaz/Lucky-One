import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    
    // Fetching the products data
    useEffect(() =>{
        fetch(`products.json`)
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])

    //Function for adding products to cart
    const addToCart = product =>{
        if(cart.length >= 4){
            alert("You can add up to 4 products in the cart.")
            return;
        }
        for(const cartItem of cart){
            if(cartItem.id === product.id){
                alert("You can't add same item twice. Please try another product.")
                return;
            }
        }
        if(cart.length<4){
            const newCart = [...cart, product];
            setCart(newCart);    
        }        
    }

    //Function ofr showing cart total
    const cartTotal = () =>{
        let cartPrice = 0;
        cart.forEach(product => {
            cartPrice = cartPrice + product.price;

        });
        return cartPrice;
    }
   
    //Function for remove item from cart
    const removeFromCart = id =>{
        const removedCart = cart.filter(cart =>cart.id != id);
        setCart(removedCart);
    }

    //Function selecting random best match product
    const bestMatch = () =>{
        const matched = [];
        for(const item of cart){
            matched.push(item.name);
        }

        for(const product of cart){
            console.log(product.name)
            console.log(matched)
            if(matched.includes(product.name)){
                console.log(product)
            }
        }
        const matchedItem = matched[Math.floor(Math.random()*matched.length)]
        if(typeof matchedItem === 'undefined'){
            alert("Your cart is empty. Please add some products first.")
        }
        else{ 
            const updatedCart = cart.filter(cart =>cart.name === matchedItem);
            setCart(updatedCart);                 
            alert('It looks "' + matchedItem + '" is fit for you!');      
        }
    }

    //Function for reset the cart
    const resetCart = () =>{
        setCart([]);
    }

    return (
        <div className='shop'>
            <div className='products'>
                {
                    products.map(product => <Products key={product.id} product={product} addToCart = {addToCart}></Products>)
                }
            </div>
            <div className='cart'>
                <Cart cart = {cart} cartTotal={cartTotal} removeFromCart={removeFromCart} bestMatch ={bestMatch} resetCart ={resetCart}></Cart>
            </div>
        </div>
    );
};

export default Shop;