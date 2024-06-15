import React, { useState } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [board, setBoard] = useState(Array(9).fill(""));

  const checkWinner = (newBoard) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        return newBoard[a];
      }
    }
    return null;
  };

  const toggle = (index) => {
    if (lock || board[index] !== "") {
      return;
    }

    let newBoard = [...board];
    newBoard[index] = count % 2 === 0 ? 'x' : 'o';

    setBoard(newBoard);
    setCount(count + 1);

    const winner = checkWinner(newBoard);
    if (winner) {
      alert(`${winner} wins!`);
      setLock(true);
    } else if (count === 8) {
      alert("It's a draw!");
      setLock(true);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setCount(0);
    setLock(false);
  };

  return (
    <div className='container'>
      <h1 className="title">Tic Tac Toe Game In <span>React</span></h1>
      <div className="board">
        {board.map((value, index) => (
          <div
            key={index}
            className="boxes"
            onClick={() => toggle(index)}
          >
            {value}
          </div>
        ))}
      </div>
      <button className="reset" onClick={resetGame}>Reset</button>
    </div>
  );
};

export default TicTacToe;
