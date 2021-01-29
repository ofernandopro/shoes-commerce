import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../Rating';

function Product(props) {
  const { product } = props;
  return (
    <div>
      <div key={product._id} className="card">
        <Link to={`/product/${product._id}`}>
          <img
            className="medium"
            src={product.image}
            alt={product.name}
            width="250px" />
        </Link>
        <div className="card-body">
          <Link to={`/product/${product._id}`}>
            <h3>{product.name}</h3>
          </Link>
          <div className="text">
            <p>{product.description}</p>
          </div>
          <div className="row">
            <div className="price">
              <h2>${product.price.toFixed(2)}</h2>
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
