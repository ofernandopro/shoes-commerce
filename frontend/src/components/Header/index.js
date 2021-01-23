import React from 'react';
import './style.css';
import MenuImg from '../../assets/menu.png';
import CartImg from '../../assets/cart.png';

function Header() {
  return (
    <header className="row">
      <div>
        <img className="menu-icon" src={MenuImg} alt="Menu Icon" width="20px" />
        <a className="brand" href="/">ShoesCommerce</a>
      </div>
      <div className="input">
        <div className="search-icon-box"><i className="fas fa-search"></i></div>
        <input className="search-input" placeholder="Search for a product..." type="text" />
      </div>
      <div>
        <div className="signin">
          <a className="sign-in-option" href="/signin">Sign In <i className="fas fa-sort-down"></i></a>
        </div>
        <div className="cart">
          <a href="/cart">
            <img className="cart-icon" src={CartImg} alt="Cart Icon" width="55px" />
          </a>
          <span className="cart-items-circle">
            <p>2</p>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
