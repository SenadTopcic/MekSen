
import React from 'react';

const Button = ({onClick, buttonLabel }) => {
  return (
    <div className='btn' onClick={onClick}>{buttonLabel}</div>
  )
}

export default Button