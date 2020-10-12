// @ts-nocheck
import React, { FC } from 'react';
import { box } from 'blessed';
import BottomBox from './components/BottomBox';
import Board from './components/Board';

const App: FC<{label?: string}> = ({label = "15 Puzzle Game"}) => {
	return (
		<box label={label}
			border={{type: 'line'}}
			style={{border: {fg: 'cyan'}}}>
			<Board />
			<BottomBox />
		</box>
	)
};

export default App;
