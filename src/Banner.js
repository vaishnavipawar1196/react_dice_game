import React from 'react'

const Banner = ({toggle}) => {
  return (
    <div className='banner container'>
        <div className='banner_img'>
            <img src="images/dices 1.png" alt="" />
        </div>
        <div className='banner_content'>
            <h2>DICE GAME</h2>
            <button className='play_btn' onClick={toggle}>PLAY GAME</button>
        </div>
    </div>
  )
}

export default Banner