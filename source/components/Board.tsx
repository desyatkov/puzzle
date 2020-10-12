// @ts-nocheck
import useGameState from "../controller/game";
import {box} from "blessed";
import Cell from "./Cell";
import React from "react";

const Board = () => {
	const [board, moves, solved, solvedArr, newGame, move, moveKey ] = useGameState();

	return (
		<box
			width={42}
			height={25}
			top="center"
			left="center"
			border={{type: 'line'}}
			style={{border: {fg: 'red'}}}
			draggable={false}
		>
			{
				board.slice(0,-1).map((pos, index) => (
					<Cell
						solvedArr={solvedArr}
						key={index}
						index={index}
						pos={pos}
						move={move}
					/>
				))
			}
			<StartBtn newGame={newGame}/>
		</box>
	)
}

const StartBtn = ({newGame}) => {
	return (
		<button
			border={{type: 'line'}}
			bottom={0}
			height={3}
			style={{
				textAlign: 'center',
				border: {fg: 'green'},
				fg: 'white',
				ta: 'center',
				hover: {
					bg: 'white'
				}
			}}
			mouse
			onPress={a => newGame()}
		>
			<text top="center" left="center">
				Start New Game
			</text>
		</button>
	)
}
export default Board;
