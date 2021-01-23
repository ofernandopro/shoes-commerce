import React from 'react';
import './style.css';
import data from '../../data';

function Products() {
  return (
    <main>
      <div className="main-wrapper">
        <div className="row center">

          {
            data.products.map(product => (
              <div key={product._id} className="card">
                <a href={`/product/${product._id}`}>
                  <img
                    className="medium"
                    src={product.image}
                    alt={product.name}
                    width="250px" />
                </a>
                <div className="card-body">
                  <a href={`/product/${product._id}`}>
                    <h3>{product.name}</h3>
                  </a>
                  <div className="text">
                    <p>{product.description}</p>
                  </div>
                  <div className="row">
                    <div className="price">
                      <h2>${product.price}</h2>
                    </div>
                    <div className="rating">
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star-half-alt"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </main>
  );
}

export default Products;
