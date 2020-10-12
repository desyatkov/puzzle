// @ts-nocheck
import React, { FC } from 'react';
import {box} from "blessed";

const BottomBox = () => {
	return (
		<box
			height={3}
			top={0}
			border={{type: 'line'}}
			style={{border: {fg: 'red'}}}
			draggable={false}
		>
			To play, just click with the mouse cursor on the selected cell. For end game Q or ESC.
		</box>
	)
}

export default BottomBox;
