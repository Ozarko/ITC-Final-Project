import React from 'react'
import ShopBtn from '../../../UI/Buttons/ShopBtn/ShopBtn'

const Follow = () => {
  return (
    <div className='Follow'>
      <div className='container'>
        <div className='Follow-box'>
          <h3>Слідкуй за нами в Inastagram</h3>
          
        </div>
        <ShopBtn to='/' text='Instagram' styleType='standart' />
      </div>
    </div>
  )
}

export default Follow
