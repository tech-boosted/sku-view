import React from 'react'

var Card = (props) => {
  return (
    <div className='card'>
      <header className='card-header'>
        <p className='card-header-title'>{props.title}</p>
        <button
          className='card-header-icon'
          aria-label='more options'
        >
          <span className='icon'>
            <i
              className='fas fa-angle-down'
              aria-hidden='true'
            ></i>
          </span>
        </button>
      </header>
      <div className='card-content'>
        <div className='content'>{props.children}</div>
      </div>
    </div>
  )
}

export default Card
