import React, { useState } from 'react'



const Navbar = () => {

  const [isActiveClass, toggleClass] = useState("");

  const onclick = () => {
    if(isActiveClass == ""){
      toggleClass("is-active");
    }else{
      toggleClass("");
    }
  };

  return (
    <nav
      className='navbar is-fixed-top'
      role='navigation'
      aria-label='main navigation'
    >
      <div className='navbar-brand'>
        <a
          className='navbar-item'
          href='https://bulma.io'
        >
          <img
            src='https://bulma.io/images/bulma-logo.png'
            width='112'
            height='28'
          />
        </a>

        <a
          role='button'
          className={'navbar-burger ' + isActiveClass}
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
          onClick={()=>onclick()}
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>

      <div
        id='navbarBasicExample'
        className={'navbar-menu ' + isActiveClass}
      >
        <div className='navbar-start'>
          <a className='navbar-item'>Home</a>

          <a className='navbar-item'>Documentation</a>

          <div className='navbar-item has-dropdown is-hoverable'>
            <a className='navbar-link'>More</a>

            <div className='navbar-dropdown'>
              <a className='navbar-item'>About</a>
              <a className='navbar-item'>Jobs</a>
              <a className='navbar-item'>Contact</a>
              <hr className='navbar-divider' />
              <a className='navbar-item'>Report an issue</a>
            </div>
          </div>
        </div>

        <div className='navbar-end'>
          <div className='navbar-item'></div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
