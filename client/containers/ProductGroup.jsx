import React from 'react';
import { useNavigate } from 'react-router-dom';
import Product from '../components/Product.jsx';

const ProductGroup = () => {

  return (
    <div id='product-group-container'>
      <div id='product-group'>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>
    </div>
  )
}

export default ProductGroup;