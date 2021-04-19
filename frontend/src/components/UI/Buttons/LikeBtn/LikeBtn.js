import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
const LikeBtn = () => {
  
  const [cliked, setClicked] = useState()

  const clickHandler = () => {
    setClicked(!cliked)
  }

  return (
    <button onClick={()=> clickHandler()} className={`LikeBtn cursorHoverEffect ${cliked && 'clicked'}`}>
      <FaRegHeart />
    </button>
  )
}

export default LikeBtn
