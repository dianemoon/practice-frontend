import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({name, image1, price, description, tag}) => {

  return (
    <div id='product'>
      <div class='image-row'>
        <img src={image1}/>
        <strong>{tag}</strong>
      </div>
      <div class='row-1'>
        <h2>{name}</h2>
        <p>${price}</p>
      </div>
      <h3>{description}</h3>
    </div>
  )
}

export default Product;