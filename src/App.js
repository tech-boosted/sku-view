import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home';
import SkuView from './components/SkuView/SkuView';

import './App.css';
import SideBar from './components/SideBar/SideBar';
import Header from './components/Header/Header';

var App = () => {

  return (
    <div>
      <Header />
      <div>
        <Router>
          <SideBar />
          <Routes>
            <Route path={'/'} exact  element={<Home />}></Route>
            <Route path={'/sku-view'} element={<SkuView />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;