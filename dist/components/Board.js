"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const game_1 = __importDefault(require("../controller/game"));
const Cell_1 = __importDefault(require("./Cell"));
const react_1 = __importDefault(require("react"));
const Board = () => {
    const [board, moves, solved, solvedArr, newGame, move, moveKey] = game_1.default();
    return (react_1.default.createElement("box", { width: 42, height: 25, top: "center", left: "center", border: { type: 'line' }, style: { border: { fg: 'red' } }, draggable: false },
        board.slice(0, -1).map((pos, index) => (react_1.default.createElement(Cell_1.default, { solvedArr: solvedArr, key: index, index: index, pos: pos, move: move }))),
        react_1.default.createElement(StartBtn, { newGame: newGame })));
};
const StartBtn = ({ newGame }) => {
    return (react_1.default.createElement("button", { border: { type: 'line' }, bottom: 0, height: 3, style: {
            textAlign: 'center',
            border: { fg: 'green' },
            fg: 'white',
            ta: 'center',
            hover: {
                bg: 'white'
            }
        }, mouse: true, onPress: a => newGame() },
        react_1.default.createElement("text", { top: "center", left: "center" }, "Start New Game")));
};
exports.default = Board;
