import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import styles from './styles/styles.scss';

// init parent container at root element
const container = document.getElementById('root');
// initialize React app root at parent container
const root = createRoot(container);

// render
root.render(
  <BrowserRouter>
    <App tab='home'/>
  </BrowserRouter>
);
