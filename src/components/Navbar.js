import React, { useState } from 'react'
import Icon from '@mdi/react';
import { mdiAccount , mdiCog , mdiBell } from '@mdi/js';


const Navbar = () => {

  const [isActiveClass, toggleClass] = useState("");

  const onclick = () => {
    if (isActiveClass == "") {
      toggleClass("is-active");
    } else {
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
          href='/'
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
          onClick={() => onclick()}
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
          <a className='navbar-item' href='/'>Dashboard</a>

          <a className='navbar-item' href='/my-channels'>My Channels</a>

          <a className='navbar-item' href='/reports'>Reports</a>
        </div>

        <div className='navbar-end'>
          <div className='navbar-item'>
            <Icon path={mdiBell} size={1} />
          </div>
          <div className='navbar-item'>
            <Icon path={mdiCog} size={1} />
          </div>
          <div className='navbar-item'>
            <Icon path={mdiAccount} size={1} />
          </div>
        </div>
      </div>
    </nav >
  )
}

export default Navbar
