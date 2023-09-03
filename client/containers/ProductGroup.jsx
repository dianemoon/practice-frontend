import React from 'react';
import { useNavigate } from 'react-router-dom';
import Product from '../components/Product.jsx';
const MainProductData = require('../../server/data/MainProducts.json');

const ProductGroup = () => {

  const ProductJSXElements = [];
  
  MainProductData.forEach(product => {
    ProductJSXElements.push(<Product name={product.name} image1={product.image1} price={product.price} description={product.description} tag={product.tag}/>)
  })

  return (
    <div id='product-group-container'>
      <div id='product-group'>
        {ProductJSXElements}
      </div>
    </div>
  )
}

export default ProductGroup;