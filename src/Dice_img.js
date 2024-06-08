import React, { useState } from 'react'
import Rules from './Rules'

const Dice_img = ({showRules,setShowRules,resetScore,curr_dice,roleDice}) => {



  return (
    <div className='dice_img'>
        <img src={`images/dice_${curr_dice}.png`} 
            onClick={roleDice}
         />
         <button className='play_btn1' onClick={resetScore}>Reset Score</button>
         <button className='play_btn' onClick={() => setShowRules((prev) => !prev)}>{showRules ? 'Hide' : 'Show'}Show Rules</button>
        {showRules && <Rules />}
    </div>
  )
}

export default Dice_img