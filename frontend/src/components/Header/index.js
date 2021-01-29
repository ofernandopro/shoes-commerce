import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css';
import MenuImg from '../../assets/menu.png';
import CartImg from '../../assets/cart.png';

function Header() {

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <header className="row">
      <div>
        <img className="menu-icon" src={MenuImg} alt="Menu Icon" width="20px" />
        <Link className="brand" to="/">ShoesCommerce</Link>
      </div>
      <div className="input">
        <div className="search-icon-box"><i className="fas fa-search"></i></div>
        <input className="search-input" placeholder="Search for a product..." type="text" />
      </div>
      <div>
        <div className="signin">
          <Link className="sign-in-option" to="/signin">Sign In <i className="fas fa-sort-down"></i></Link>
        </div>
        <div className="cart">
          <Link to="/cart">
            <img className="cart-icon" src={CartImg} alt="Cart Icon" width="55px" />
          </Link>
          {cartItems.length > 0 && (
            <span className="cart-items-circle">
              <p>
                {cartItems.length}
              </p>
            </span>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
