import React, { useRef, useState } from "react";
import "./style.css";
import circle_icon from "./asserts/O_icon.png";
import cross_icon from "./asserts/X_icon.png";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const winnerRef = useRef(null);

  const toggle = (e, num) => {
    if (lock || board[num] !== "") return;

    const newBoard = [...board];
    newBoard[num] =
      count % 2 === 0
        ? (e.target.innerHTML = `<img src = ${cross_icon}>`)
        : (e.target.innerHTML = `<img src = ${circle_icon}>`);
    setBoard(newBoard);
    setCount((prevCount) => prevCount + 1);
    checkForWinner(newBoard);
  };

  const checkForWinner = (currentBoard) => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[b] === currentBoard[c]
      ) {
        declareWinner(currentBoard[a]);
        return;
      }
    }

    if (!currentBoard.includes("")) {
      declareWinner("Draw");
    }
  };

  const reset = () => {
    window.location.reload();
  };
  const declareWinner = (win) => {
    if (winnerRef.current) {
      if (win === "Draw") {
        winnerRef.current.textContent = "It's a draw!";
      } else if (
        win === "<img src = /static/media/X_icon.295b2ae7f5d622d7de41.png>"
      ) {
        winnerRef.current.textContent = "❌ Wins 🔥";
      } else {
        winnerRef.current.textContent = "⭕ Wins 🔥";
      }
    }

    setLock(true);
  };

  return (
    <>
      <div className="container">
        <h1 className="title" ref={winnerRef}>
          Tic Tac Toe Game In <span>React</span>
        </h1>
        <div className="board">
          <div className="row1">
            <div
              className="boxes"
              onClick={(e) => {
                toggle(e, 0);
              }}
            ></div>
            <div
              className="boxes"
              onClick={(e) => {
                toggle(e, 1);
              }}
            ></div>
            <div
              className="boxes"
              onClick={(e) => {
                toggle(e, 2);
              }}
            ></div>
          </div>

          <div className="row2">
            <div
              className="boxes"
              onClick={(e) => {
                toggle(e, 3);
              }}
            ></div>
            <div
              className="boxes"
              onClick={(e) => {
                toggle(e, 4);
              }}
            ></div>
            <div
              className="boxes"
              onClick={(e) => {
                toggle(e, 5);
              }}
            ></div>
          </div>

          <div className="row3">
            <div
              className="boxes"
              onClick={(e) => {
                toggle(e, 6);
              }}
            ></div>
            <div
              className="boxes"
              onClick={(e) => {
                toggle(e, 7);
              }}
            ></div>
            <div
              className="boxes"
              onClick={(e) => {
                toggle(e, 8);
              }}
            ></div>
          </div>
        </div>
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
};

export default TicTacToe;
