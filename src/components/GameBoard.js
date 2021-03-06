import React from 'react';
import './GameBoard.css';
import config from '../utlis/config';

const GameBoard = props => {
  const { boardSize } = props;
  const { letters } = config;
  let boardRows = []

  for (let i = 0; i <= boardSize; i++) {
    boardRows.push(
      <div className="boardLetter" key={letters[i]}>
        <p>{letters[i]}</p>
      </div>
    )
  }

  for (let i = 1; i <= boardSize; i++) {
    boardRows.push(
      <div className="boardRow" key={i}>
        <p>{i}</p>
      </div>
    )

    for (let j = 1; j <= boardSize; j++) {
      boardRows.push(<div className="boardCell" key={letters[j] + i} id={`x${j - 1}y${i - 1}`} onClick={props.handleGuess}></div>)
    }
  }

  return (
    <div className="board">
      {boardRows}
    </div>
  )
}

export default GameBoard;