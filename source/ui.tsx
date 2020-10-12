import React, { FC } from 'react';
import BottomBox from './components/BottomBox';
import Board from './components/Board';

const App: FC<{label?: string}> = ({label = "15 Puzzle Game"}) => {
	return (
		// @ts-ignore
		<box label={label}
			border={{type: 'line'}}
			style={{border: {fg: 'cyan'}}}>
			<Board />
			<BottomBox />
			{/*@ts-ignore*/}
		</box>
	)
};

export default App;
