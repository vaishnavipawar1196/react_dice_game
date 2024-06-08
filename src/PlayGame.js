import React, {useState} from 'react'
import TotalCount from './TotalCount'
import Dices from './Dices'
import Dice_img from './Dice_img'

const PlayGame = () => {

  const [score,setScore] = useState(0);
  const [curr_dice,setCurrDice] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState();
  const [error,setError] = useState();
  const [showRules,setShowRules] = useState(false);
  
  const generateRandomNumber = (min,max) =>{
    return Math.floor(Math.random() * (max-min) +min);
  };
  const roleDice = () => {

      if(!selectedNumber){
        setError("Number is not selected!")
        return;
      };

      const randomNumber = generateRandomNumber(1,7);
      setCurrDice((pre) => randomNumber);
      //console.log(randomNumber)

      if(selectedNumber == randomNumber){
        setScore((val) => val + randomNumber)
      }else{
        setScore((val) => val - 2)
      }
      setSelectedNumber(undefined)
  }
  console.log(score)

  const resetScore = () => {
    setScore(0);
  }

  return (
    <>
      <div className='main container'>
          <TotalCount score={score} />
          <Dices setError={setError} error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
      </div>
      <div className='main'>
        <Dice_img showRules={showRules} setShowRules={setShowRules} resetScore={resetScore} curr_dice={curr_dice} roleDice={roleDice} />
      </div>
    </>
  )
}

export default PlayGame