import React from 'react';
import { useNavigate } from 'react-router-dom';
import Product from '../components/Product.jsx';

const ProductGroup = () => {

  return (
    <div id='product-group'>
      <h1>product group</h1>
      <Product/>
      {/* <Product/>
      <Product/>
      <Product/> */}
    </div>
  )
}

export default ProductGroup;