import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MessageBox from '../components/MessageBox';

function CartScreen(props) {
  const productId = props.match.params.id;
  const qnt = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qnt));
    }
  }, [dispatch, productId, qnt]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    props.history.push('/signin?redirect=shipping');
  }

  return (
    <Fragment>
      <Header />
      <div className="pruduct-main-page row top">
        <div className="col-2">
          <h1 className="shopping-cart-h1">Shopping Cart</h1>
          {cartItems.length === 0 ?
            <MessageBox>
              Cart is empty. <Link to="/">Go Shopping</Link>
            </MessageBox>
            :
            (
              <ul>
                {
                  cartItems.map((item) => (
                    <li key={item.product}>
                      <div className="row">
                        <div>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="small"
                          />
                        </div>
                        <div className="cart-product-name min-30">
                          <Link to={`/product/${item.product}`}>{item.name}</Link>
                        </div>
                        <div className="cart-select">
                          <select
                            value={item.qnt}
                            onChange={e =>
                              dispatch(
                                addToCart(item.product, Number(e.target.value))
                              )
                            }
                          >
                            {
                              [...Array(item.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                          </select>
                        </div>
                        <div className="cart-section-price">
                          ${item.price.toFixed(2)}
                        </div>
                        <div className="cart-section-button">
                          <button
                            type="button"
                            onClick={() => removeFromCartHandler(item.product)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </li>
                  ))
                }
              </ul>
            )
          }
        </div>
        <div className="section-card-body-cart">
          <div className="card-body-cart">
            <ul>
              <li>
                <h3>
                  Subtotal:
                </h3>
                <p>Quantity: {cartItems.reduce((a, c) => a + c.qnt, 0)} item{cartItems.length > 1 ? 's' : ''}</p>
                <p>Price:  <b>${cartItems.reduce((a, c) => a + c.price * c.qnt, 0).toFixed(2)}</b></p>
              </li>
              <li>
                <button
                  type="button"
                  onClick={checkoutHandler}
                  className="proceed-checkout-button primary block"
                  disabled={cartItems.length === 0}
                >
                  <p>Proceed to Checkout </p> <i class="fas fa-arrow-right"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default CartScreen;
