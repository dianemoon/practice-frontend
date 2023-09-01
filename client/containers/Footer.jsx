import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

  return (
    <div id='footer'>

      <div class='footer-section'>
        <h2>Monogram</h2>
        <p>
          305 King St. W. 
          <br/>
          Suite 502 
          <br/>
          Kitchener, ON 
          <br/>
          Canada
        </p>
      </div>

      <div class='footer-section'>
        <h2>Quick Links</h2>
        <ul>
          <li><a href='http://google.com/'>Home</a></li>
          <li><a href='http://google.com/'>How it Works</a></li>
          <li><a href='http://google.com/'>Shop</a></li>
          <li><a href='http://google.com/'>Download</a></li>
        </ul>
      </div>

      <div class='footer-section'>
        <h2>Help</h2>
          <ul>
            <li><a href='http://google.com/'>FAQs</a></li>
            <li><a href='http://google.com/'>Support Center</a></li>
            <li><a href='http://google.com/'>Shipping and Sales</a></li>
          </ul>
      </div>

      <div class='footer-section'>
        <h2>Information</h2>
          <ul>
            <li><a href='http://google.com/'>About Us</a></li>
            <li><a href='http://google.com/'>Work with us</a></li>
            <li><a href='http://google.com/'>Privacy Policy</a></li>
            <li><a href='http://google.com/'>Terms of Use</a></li>
            <li><a href='http://google.com/'>Terms of Sale</a></li>
            <li><a href='http://google.com/'>Press Kit</a></li>
          </ul>
      </div>

      <div class='footer-section' id='footer-subscribe'>
        <h2>Subscribe to Monogram</h2>
        <p>Master productivity with <b>Creative Console</b> and get all the latest Monogram news.</p>
        <form>
          <input type='email' placeholder='Email address'></input>
          <input type='submit'></input>
        </form>
        <p>© Monogram 2023</p>
      </div>

    </div>
  )
}

export default Footer;