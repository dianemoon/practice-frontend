import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  return (
    <div id='header-container'>
      <div id='header'>
        <h1>Practice</h1>
        <div className="header-page-links">
          {/* <div className="header-page-links-group-1"> */}
            <p>HOW IT WORKS</p>
            {/* <div class="workflows-dropdown">
              <button class="workflows-button"></button>
              <div class="workflows-content">
                <a>AUDIO CONSOLE</a>
                <a>PHOTO CONSOLE</a>
                <a>VIDEO CONSOLE</a>
                <a>MINI CONSOLE</a>
              </div>
            </div> */}
            <p>DOWNLOAD</p>
            <p>BLOG</p>
            <p>SUPPORT</p>
          {/* </div> */}
            <strong>SHOP</strong>
          {/* <img></img>
          <div class="currency-dropdown">
            <button class="dropdown-button"></button>
            <div class="dropdown-content">
              <a>USD ($)</a>
              <a>CAD ()</a>
              <a>EUR ()</a>
              <a>AUD ()</a>
              <a>GBP ()</a>
              <a>KRW ()</a>
              <a>JPY ()</a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Header;