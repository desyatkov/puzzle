import useGameState from "../controller/game";
import Cell from "./Cell";
import React from "react";

const Board = () => {
	// @ts-ignore
	const [board, moves, solved, solvedArr, newGame, move, moveKey ] = useGameState();

	return (
		// @ts-ignore
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
				board.slice(0,-1).map((pos:string, index:number) => (
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
		{/* @ts-ignore */}
		</box>
	)
}

// @ts-ignore
const StartBtn = ({newGame}) => {
	return (
		<button
			border={{type: 'line'}}
			bottom={0}
			height={3}
			style={{
				textAlign: 'center',
				// @ts-ignore
				border: {fg: 'green'},
				fg: 'white',
				ta: 'center',
				hover: {
					bg: 'white'
				}
			}}
			mouse
			onPress={() => newGame()}
		>
			{/* @ts-ignore*/}
			<text top="center" left="center">
				Start New Game
			</text>
		</button>
	)
}
export default Board;
