import React, { FC } from 'react';

const BottomBox:FC = () => {
	return (
		// @ts-ignore
		<box
			height={3}
			top={0}
			border={{type: 'line'}}
			style={{border: {fg: 'red'}}}
			draggable={false}
		>
			To play, just click with the mouse cursor on the selected cell. For end game Q or ESC.
		{/*@ts-ignore*/}
		</box>
	)
}

export default BottomBox;
