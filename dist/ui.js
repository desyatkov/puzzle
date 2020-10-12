"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const BottomBox_1 = __importDefault(require("./components/BottomBox"));
const Board_1 = __importDefault(require("./components/Board"));
const App = ({ label = "15 Puzzle Game" }) => {
    return (
    // @ts-ignore
    react_1.default.createElement("box", { label: label, border: { type: 'line' }, style: { border: { fg: 'cyan' } } },
        react_1.default.createElement(Board_1.default, null),
        react_1.default.createElement(BottomBox_1.default, null)));
};
exports.default = App;
