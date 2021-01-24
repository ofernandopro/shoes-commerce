import React from 'react';
import Rating from '../Rating';

function Product(props) {
  const { product } = props;
  return (
    <div>
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
            <Rating
              rating={product.rating}
              numReviews={product.numReviews}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product;
