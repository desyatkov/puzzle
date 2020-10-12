"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const lodash_1 = require("lodash");
const Cell = ({ pos, index, move, solvedArr }) => {
    return react_1.default.createElement("button", { border: { type: 'line' }, width: 10, top: pos[0] * 5, left: pos[1] * 10, height: 5, style: {
            // @ts-ignore
            border: { fg: 'green' },
            fg: 'white',
            bg: lodash_1.isEqual(solvedArr[index], pos) ? 'blue' : 'magenta',
            hover: {
                bg: 'green'
            }
        }, draggable: false, mouse: true, onPress: () => move(index) },
        react_1.default.createElement("text", { top: "center", left: "center" }, index + 1));
};
exports.default = Cell;
