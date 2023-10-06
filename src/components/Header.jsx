import React from 'react'
import imgSrc from "../assets/img/tbll_logo.png";

const Header = () => {
  return (
    <div className="image-container-play">
      <img
        src={imgSrc}
        alt="TestBusters learning lab Vienna 2023"
      />
    </div>
  )
}

export default Header