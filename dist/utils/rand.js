"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rand = void 0;
function rand(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}
exports.rand = rand;
