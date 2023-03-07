import React from 'react'

var Card = (props) => {
  return (
    <div className='card'>
      <header className='card-header'>
        <p className='card-header-title'>{props.title}</p>
      </header>
      <div className='card-content'>
        <div className='content'>{props.children}</div>
      </div>
    </div>
  )
}

export default Card
