import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import PageHeader from './components/PageHeader';
import SideBar from './components/SideBar/SideBar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Insights from './components/Insights';

import './App.scss'

var App = () => {
  return (
    <div>
      {/* Displays the navbar */}
      {/* <Navbar /> */}
      <Router>
        <div className='columns'>
          <div className='column is-2'>
            <SideBar />
          </div>

          <div className='column'>
            <Navbar />
            <section className='section'>
            {/* <div className="container is-max-widescreen"> */}
              <PageHeader>
                <Routes>
                  <Route
                    path={'/'}
                    exact
                    element={<Dashboard />}
                  ></Route>
                  <Route
                    path={'/business-insights'}
                    exact
                    element={<Insights />}
                  ></Route>
                </Routes>
              </PageHeader>
            {/* </div> */}
            </section>
          </div>

        </div>
      </Router>
    </div>
  )
}

export default App
