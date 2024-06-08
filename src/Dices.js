import React, { useState } from 'react';

const Dices = ({setError,error,selectedNumber,setSelectedNumber}) => {
    const arr = [1, 2, 3, 4, 5, 6];

    const numberSelectHandler = (val) =>{
        setSelectedNumber(val);
        setError("");
    } 

    return (
        <div className="dice">
            <p className='error'>{error}</p>
            <div className="dices">
                {arr.map((val, ind) => {
                    const isSelected = val === selectedNumber;
                    //console.log(selectedNumber)
                    const select = {
                        backgroundColor: isSelected ? 'black' : 'white',
                        color: isSelected ? 'white' : 'black',
                        cursor: 'pointer'
                    };

                    return (
                        <p
                            style={select}
                            key={ind}
                            onClick={() => numberSelectHandler(val)}
                        >
                            {val}
                        </p>
                    );
                })}
            </div>
            <h4>Select Number</h4>
        </div>
    );
};

export default Dices;
