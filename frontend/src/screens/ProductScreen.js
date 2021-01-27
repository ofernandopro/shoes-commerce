import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import data from '../data';
import Rating from '../components/Rating';
import { Link } from 'react-router-dom';

function ProductScreen(props) {
  const product = data.products.find((x) => x._id === props.match.params.id);
  if (!product) {
    return <div> Product Not Found</div>;
  }
  return (
    <Fragment>
      <Header />
      <div className="pruduct-main-page">
        <Link to="/">Back to result</Link>
        <div className="row top">
          <div className="col-2">
            <img className="large" src={product.image} alt={product.name}></img>
          </div>
          <div className="col-1">
            <ul>
              <li>
                <h1>{product.name}</h1>
              </li>
              <li>
                <div className="row">
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  ></Rating>
                  ({product.numReviews} Reviews)
                </div>
              </li>
              <li>Price: ${product.price}</li>
              <li>
                Description:
                <p className="description-text">{product.description}</p>
              </li>
            </ul>
          </div>
          <div className="col-1">
            <div className="card card-body">
              <ul>
                <li>
                  <div className="row">
                    <div>Price:</div>
                    <div className="price">${product.price}</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div>Status:</div>
                    <div>
                      {product.countInStock > 0 ? (
                        <span className="success">In Stock</span>
                      ) : (
                          <span className="danger">Unavailable</span>
                        )}
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <button className="primary block">Add to Cart</button>
                    <div className="box-price">
                      | <span><i class="fas fa-shopping-basket"></i></span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default ProductScreen;
