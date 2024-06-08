import React from 'react'

const TotalCount = ({score}) => {
  return (
    <div className='total_count'>
        <h2>{score}</h2>
        <h4>Total Count</h4>
    </div>
  )
}

export default TotalCount