/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import linksData from '../Menu'
import Icon from '@mdi/react';
import "./SideBar.scss";

/* const renderSublinks = (subLinks) => {
  var subArr = []
  subLinks.forEach((so, j) => {
    subArr.push(
      <li key={j}>
        <Link to={so.link}>{so.name}</Link>
      </li>
    )
  })
  return subArr
} */

const renderLinks = () => {
  var arr = []
  linksData.links.forEach((e, i) => {
    if (e.link !== undefined) {
      arr.push(
        <Link to={e.link}  key={i}>
          <div className="is-flex is-flex-direction-row is-align-items-center p-2">
            <Icon path={e.icon} size={1} />
            <div className="menu-item px-2">
              {e.name}
            </div>
          </div>
        </Link>
      )
    } 
/*     else if (Array.isArray(e.subLinks)) {
      arr.push(
        <li key={i}>
          <a href="#">{e.name}</a>
          <ul>
            {renderSublinks(e.subLinks)}
          </ul>
        </li>
      )
    } */
  })
  return arr
}

const SideBar = () => {
  return (
    <aside className='menu'>
      <div className="logo px-4 py-5">
        <img src='https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' alt='' className='logo-img' />
      </div>
      <ul className='menu-list p-4'>
        {renderLinks()}
      </ul>
    </aside>
  )
}

export default SideBar
