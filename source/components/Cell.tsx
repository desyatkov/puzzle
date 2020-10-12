// @ts-nocheck
import React, {FC} from "react";
import { box, button } from 'blessed';
import { isEqual } from 'lodash';

const Cell: FC<{pos, index, move, solvedArr}> = ({pos, index, move, solvedArr}) => {
	return <button
		border={{type: 'line'}}
		width={10}
		top={pos[0]*5}
		left={pos[1]*10}
		height={5}
		style={{
			border: {fg: 'green'},
			fg: 'white',
			bg: isEqual(solvedArr[index], pos) ? 'blue' : 'magenta',
			hover: {
				bg: 'green'
			}
		}}
		draggable={false}
		mouse
		onPress={a=>move(index)}
	>
		<text top="center" left="center">
			{index+1}
		</text>
	</button>
}

export default Cell;
