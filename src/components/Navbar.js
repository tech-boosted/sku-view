import React, { useState } from 'react'
import Icon from '@mdi/react';
import { mdiAccount , mdiCog , mdiBell } from '@mdi/js';


const Navbar = () => {

  const [isActiveClass, toggleClass] = useState("");

  const onclick = () => {
    if (isActiveClass === "") {
      toggleClass("is-active");
    } else {
      toggleClass("");
    }
  };

  return (
    <nav
      className='navbar'
      role='navigation'
      aria-label='main navigation'
    >
      <div className='navbar-brand'>

        <a
          role='button'
          className={'navbar-burger ' + isActiveClass}
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
          onClick={() => onclick()}
          href="/"
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

        <div className='navbar-end px-4'>
          <div className='navbar-item'>
            <Icon path={mdiBell} size={1} />
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
