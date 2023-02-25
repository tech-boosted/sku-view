import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import SideBar from './components/SideBar/SideBar'
import Navbar from './components/Navbar'
import Home from './components/Home'

var App = () => {
  return (
    <div>
      {/* Displays the navbar */}
      <Navbar />

      <section className='section'>
        <div className='container is-fluid'>
          <Router>
            <div className='columns'>
              <div className='column is-2'>
                <SideBar />
              </div>

              <div className='column'>
                <Routes>
                  <Route
                    path={'/'}
                    exact
                    element={<Home />}
                  ></Route>
                </Routes>
              </div>
            </div>
          </Router>
        </div>
      </section>
    </div>
  )
}

export default App
