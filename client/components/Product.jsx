import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = () => {

  return (
    <div id='product'>
      <img src="https://cdn.shopify.com/s/files/1/0974/7950/products/Everyday-Bundle-Mocks-horizontal_1920x1281_crop_center.jpg.webp?v=1668446709"/>
      <div class='row-1'>
        <h2>Product Name</h2>
        <p>price</p>
      </div>
      <h3>product description</h3>
    </div>
  )
}

export default Product;