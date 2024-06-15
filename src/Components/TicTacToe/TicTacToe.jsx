import React from 'react';
import'./TicTacToe.css'
import circle_icon from "WhatsApp Image 2024-06-15 at 07.52.45_5a90fe53";
import cross_icon from  "WhatsApp Image 2024-06-15 at 07.52.44_1c39ba23";
const TicTacToe = () => {
  return (
    <div className='container'>
        <h1 className="tittle">Tic Tac Toe Game In <span>React</span></h1>
        <div className="board">

        </div>
        <button className="reset">Reset</button>
         </div>
  )
}

export default TicTacToe