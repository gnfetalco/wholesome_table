import React from 'react'

function ReviewList({name, message}) {
  return (
    <div className='reviewItems'>
      <p className='revName'>{name}</p>
      <p className='revMsg'>"{message}"</p>
    </div>
  )
}

export default ReviewList