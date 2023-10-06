
import React from 'react';

const Button = ({onClick, buttonLabel, btnClass }) => {
  return (
    <div className={btnClass} onClick={onClick}>{buttonLabel}</div>
  )
}

export default Button