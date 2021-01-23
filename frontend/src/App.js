import React, { Fragment } from 'react';
import Header from "./components/Header";
import MainBanner from "./components/MainBanner";
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <MainBanner />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
