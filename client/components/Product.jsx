import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = () => {

  return (
    <div id='product'>
      <div class='image-row'>
        <img src="https://cdn.shopify.com/s/files/1/0974/7950/products/Everyday-Bundle-Mocks-horizontal_1920x1281_crop_center.jpg.webp?v=1668446709"/>
        <strong>PRE-ORDER</strong>
      </div>
      <div class='row-1'>
        <h2>MINI CONSOLE</h2>
        <p>$20</p>
      </div>
      <h3>Ideal for photo & video. Adaptable to any workflow.</h3>
    </div>
  )
}

export default Product;