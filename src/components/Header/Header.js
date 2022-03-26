import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header-area'>
            <h1>The Power Shop</h1>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#home">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#shop">Shop</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#faq">FAQ</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 content">
                        <h1>One kind of naturel Products, You can Buy from us.</h1>
                        <a href="#shop"><button className='btn'>Check all products</button></a>
                    </div>
                    <div className="col-md-7">
                        <img class="img-fluid" src="https://cdn.shopify.com/s/files/1/0532/1172/5997/files/HEI_Webshop_Frontpage_product_s_copy_d19262e7-153a-44e6-85b4-c437de025e53_2048x.jpg?v=1619683290" alt="" />
                        <div className='boxContent'>
                            <h4>Popular Product</h4>
                            <h2>HEI PICTOGRAM BOX</h2>
                            <p>Set of 400 cards to support communication and language development in daily preschool life.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;