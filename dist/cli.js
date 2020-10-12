#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const blessed_1 = __importDefault(require("blessed"));
const react_blessed_1 = require("react-blessed");
const meow_1 = __importDefault(require("meow"));
const ui_1 = __importDefault(require("./ui"));
const cli = meow_1.default(`
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
const screen = blessed_1.default.screen({
    autoPadding: true,
    smartCSR: true,
    title: "Puzzle 15 example",
});
screen.key(["escape", "q", "C-c"], () => process.exit(0));
react_blessed_1.render(react_1.default.createElement(ui_1.default, { label: cli.flags.name }), screen);
