"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const react_1 = __importDefault(require("react"));
const BottomBox = () => {
    return (react_1.default.createElement("box", { height: 3, top: 0, border: { type: 'line' }, style: { border: { fg: 'red' } }, draggable: false }, "To play, just click with the mouse cursor on the selected cell. For end game Q or ESC."));
};
exports.default = BottomBox;
