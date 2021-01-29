import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import Footer from '../components/Footer';
import Header from '../components/Header';

function CartScreen(props) {
  const productId = props.match.params.id;
  const qnt = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;

  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qnt));
    }
  }, [dispatch, productId, qnt]);
  return (
    <Fragment>
      <Header />
      <div>
        <h1>Cart Screen</h1>
        <p>
          Add to Cart : ProductID: {productId} Qnt: {qnt}
        </p>
      </div>
      <Footer />
    </Fragment>
  );
}

export default CartScreen;
