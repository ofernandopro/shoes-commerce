import React, { Fragment } from 'react';
import Header from '../components/Header';
import Products from '../components/Products';
import Footer from '../components/Footer';
import MainBanner from '../components/MainBanner';

function HomeScreen() {
  return (
    <Fragment>
      <Header />
      <MainBanner />
      <Products />
      <Footer />
    </Fragment>
  )
}

export default HomeScreen;
