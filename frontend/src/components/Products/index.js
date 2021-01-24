import React from 'react';
import './style.css';
import data from '../../data';
import Product from '../Product';

function Products() {
  return (
    <main>
      <div className="main-wrapper">
        <div className="row center">
          {
            data.products.map(product => (
              <Product key={product._id} product={product} />
            ))
          }
        </div>
      </div>
    </main>
  );
}

export default Products;
