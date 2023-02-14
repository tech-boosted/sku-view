import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home';
import Marketing from './components/Marketing/Marketing';

import './App.css';
import SideBar from './components/SideBar/SideBar';

class App extends React.Component {
  render() {
    return (
      <div>
{/*         <SideBar /> */}
        <Router>
          <Routes>
            <Route exact path={'/'} element={<Home />}></Route>
            <Route path={'/market'} element={<Marketing />}></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;