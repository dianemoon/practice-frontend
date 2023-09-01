import React from "react";
import Header from './containers/Header.jsx';
import Home from './containers/Home.jsx';
import ProductGroup from './containers/ProductGroup.jsx';
import Footer from './containers/Footer.jsx';

const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <ProductGroup/>
    </div>
  );
}

export default App;