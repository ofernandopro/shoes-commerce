import React, { useEffect } from 'react';
import './style.css';
import Product from '../Product';
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../actions/productActions';

function Products() {
  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <main>
      <div className="main-wrapper">
        {loading ? <LoadingBox></LoadingBox>
          :
          error ? <MessageBox variant="danger">{error}</MessageBox>
            : <div className="row center">
              {
                products.map(product => (
                  <Product key={product._id} product={product} />
                ))
              }
            </div>
        }
      </div>
    </main>
  );
}

export default Products;
