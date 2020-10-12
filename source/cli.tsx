#!/usr/bin/env node
import React from 'react';
import blessed from "blessed";
import { render } from 'react-blessed';

import meow from 'meow';
import App from './ui';

const cli = meow(`
	Usage
	  $ cli-puzzle

	  $ cli-puzzle --name Game
`, {
	flags: {
		name: {
			type: 'string'
		}
	}
});


const screen = blessed.screen({
	autoPadding: true,
	smartCSR: true,
	title: "Puzzle 15 example",
});

screen.key(["escape", "q", "C-c"], () => process.exit(0));

render(<App label={cli.flags.name} />, screen);
