import React from 'react'
import imgSrc from "../assets/img/404-page-not-found.png";


const PageNotFound = () => {
  return (
    <>
      <img
      src={imgSrc}
      className="text-flicker-in-glow"
      alt="Image Not Found"
      style={{ width: '60%', height: '60%' }}
      />
  </>
  )
}

export default PageNotFound