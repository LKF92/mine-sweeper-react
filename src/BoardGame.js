import React, { useState } from "react";
import Square from "./Square";

const BoardGame = () => {
  const width = 9; // width of the board
  const numberOfSquare = width * width; // number of squares in the board
  const generateBoardArray = (numberOfBombs, width) => {
    const bombs = [...Array(numberOfBombs)].map((e, i) => ({ bomb: true }));
    const board = [...Array(numberOfSquare)].map((e, i) => ({ bomb: false }));
    // We inject the bomb randomly in the empty board
    bombs.map(bomb => {
      board.splice(Math.round(Math.random() * 81), 1, bomb);
    });

    return board;
  };
  const GameArray = generateBoardArray(10, width);
  console.log(GameArray);

  const line = [...Array(width)].map((e, i) => <Square key={i} />);
  return <div>{line}</div>;
};

export default BoardGame;
