import React from "react";
import { Route, Routes } from 'react-router-dom';

import Homepage from './pages/Homepage.jsx';
import Header from './containers/Header.jsx';
import HowItWorks from './pages/HowItWorks.jsx';
import Footer from './containers/Footer.jsx';
import Download from './pages/Download.jsx';


const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route
          exact
          path='/'
          element={<Homepage/>}
        />
        <Route
          exact
          path='/howitworks'
          element={<HowItWorks/>}
        />
          <Route
          exact
          path='/download'
          element={<Download/>}
        />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;