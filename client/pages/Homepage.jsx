import React from 'react';
import Home from '../containers/Home.jsx';
import ProductGroup from '../containers/ProductGroup.jsx';
import Description from '../containers/Description.jsx';

const Homepage = () => {
  return (
    <>
      <Home/>
      <ProductGroup/>
      <Description/>
    </>
  )
}

export default Homepage;