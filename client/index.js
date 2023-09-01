import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import styles from './styles/styles.scss';
import homeImage from './assets/home.jpg';

// init parent container at root element
const container = document.getElementById('root');
// initialize React app root at parent container
const root = createRoot(container);

// render
root.render(
  <App/>
);
