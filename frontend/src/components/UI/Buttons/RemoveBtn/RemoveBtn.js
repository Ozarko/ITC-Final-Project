import React from 'react'
import { GiTrashCan } from 'react-icons/gi'

const RemoveBtn = ({clickHandler}) => {
  return (
    <button className="RemoveBtn" onClick={clickHandler}>
      <GiTrashCan/>
    </button>
  )
}

export default RemoveBtn
