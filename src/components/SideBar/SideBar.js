import React from 'react'
import { Link } from 'react-router-dom'

import linksData from '../Links.json'

const renderSublinks = (subLinks) => {
  var subArr = []
  subLinks.forEach((so, j) => {
    subArr.push(
      <li key={j}>
        <Link to={so.link}>{so.name}</Link>
      </li>
    )
  })
  return subArr
}

const renderLinks = () => {
  var arr = []
  linksData.links.forEach((e, i) => {
    if (e.link !== undefined) {
      arr.push(
        <li key={i}>
          <Link to={e.link}>{e.name}</Link>
        </li>
      )
    } else if (Array.isArray(e.subLinks)) {
      arr.push(
        <li key={i}>
          <a href="#">{e.name}</a>
          <ul>
            {renderSublinks(e.subLinks)}
          </ul>
        </li>
      )
    }
  })
  return arr
}

const SideBar = () => {
  return (
    <aside className='menu'>
      <ul className='menu-list'>
        {renderLinks()}
      </ul>
    </aside>
  )
}

export default SideBar
