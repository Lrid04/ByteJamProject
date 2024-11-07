'use client'; 
import React, { useState } from 'react';

const Remote = () => {
    const [inputValue, setInputValue] = useState('');

    const handleButtonClick = (value: string) => {
        if (value === "<-") {
            setInputValue(inputValue.slice(0, -1));
            return;
        }
        setInputValue(inputValue + value);
    };

    return (
        <div>
            <h1>Remote Feature</h1>
            <p>Use the keypad below:</p>
            
            <div className="keypad-container">
                <div className="input-display">{inputValue}</div>
                <div className="keypad-row1">
                    <button onClick={() => handleButtonClick('1')}>1</button>
                    <button onClick={() => handleButtonClick('2')}>2</button>
                    <button onClick={() => handleButtonClick('3')}>3</button>
                </div>
                <div className="keypad-row2">
                    <button onClick={() => handleButtonClick('4')}>4</button>
                    <button onClick={() => handleButtonClick('5')}>5</button>
                    <button onClick={() => handleButtonClick('6')}>6</button>
                </div>
                <div className="keypad-row3">
                    <button onClick={() => handleButtonClick('7')}>7</button>
                    <button onClick={() => handleButtonClick('8')}>8</button>
                    <button onClick={() => handleButtonClick('9')}>9</button>
                </div>
                <div className="keypad-row">
                    <button onClick={() => handleButtonClick('0')}>0</button>
                    <button onClick={() => handleButtonClick('<-')}>{'<-'}</button>
                </div>
            </div>
        </div>
    );
};

export default Remote;
