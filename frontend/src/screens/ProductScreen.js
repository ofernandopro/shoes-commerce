import React, { Fragment, useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Rating from '../components/Rating';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { detailsProduct } from '../actions/productActions';

function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qnt, setQnt] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qnt=${qnt}`);
  };

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
            <Fragment>
              <Header />
              <div className="back-to-result-link">
                <i class="fas fa-arrow-left"></i>
                <Link to="/">
                  <p>Back to result</p>
                </Link>
              </div>
              <div className="pruduct-main-page">
                <div className="row top">
                  <div className="col-2">
                    <img className="large" src={product.image} alt={product.name}></img>
                  </div>
                  <div className="product-details">
                    <ul>
                      <li>
                        <div className="row-rating">
                          <Rating
                            rating={product.rating}
                            numReviews={product.numReviews}
                          ></Rating>
                          <div className="qnt-reviews">({product.numReviews} Reviews)</div>
                        </div>
                      </li>

                      <li className="details-name">
                        <h1>{product.name}</h1>
                      </li>

                      <li className="details-price">
                        <h3>Price:</h3>
                        <p>${product.price.toFixed(2)}</p>
                      </li>

                      <li className="description">
                        <h3>Description: </h3>
                        <p className="description-text">{product.description}</p>
                      </li>
                    </ul>
                  </div>
                  <div className="col-1">
                    <div className="card card-body">
                      <ul>
                        <li>
                          <div className="row">
                            <div className="price">
                              <h2>${product.price.toFixed(2)}</h2>
                            </div>
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
                        {
                          product.countInStock > 0 && (
                            <>
                              <li>
                                <div className="row">
                                  <div>Quantity:</div>
                                  <div>
                                    <select className="select-qnt" value={qnt} onChange={(e) => setQnt(e.target.value)}>
                                      {
                                        [...Array(product.countInStock).keys()].map(
                                          (x) => (
                                            <option key={x + 1} value={x + 1}>
                                              {x + 1}
                                            </option>
                                          )
                                        )}
                                    </select>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <button onClick={addToCartHandler} className="primary block">Add to Cart</button>
                                  <div onClick={addToCartHandler} className="box-price">
                                    | <span><i class="fas fa-shopping-basket"></i></span>
                                  </div>
                                </div>
                              </li>
                            </>
                          )
                        }

                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="reviews-section">

              </div>

              <Footer />
            </Fragment>
          )
      }
    </div>
  )
}

export default ProductScreen;
