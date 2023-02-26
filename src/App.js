import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import SideBar from './components/SideBar/SideBar'
import Navbar from './components/Navbar'
import Home from './components/Home'

import './App.scss'
import Main from './components/Main'

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

              <Main>
                <div className='column'>
                  <Routes>
                    <Route
                      path={'/'}
                      exact
                      element={<Home />}
                    ></Route>
                  </Routes>
                </div>
              </Main>
            </div>
          </Router>
        </div>
      </section>
    </div>
  )
}

export default App
