"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const rand_1 = require("../utils/rand");
const NUM_ROWS = 4;
const NUM_COLS = 4;
const NUM_TILES = NUM_ROWS * NUM_COLS;
const EMPTY_INDEX = NUM_TILES - 1;
const SHUFFLE_MOVES_RANGE = [60, 80];
const MOVE_DIRECTIONS = ['up', 'down', 'left', 'right'];
class GameState {
    constructor() {
        this.startNewGame();
    }
    static getNewBoard() {
        return Array(NUM_TILES).fill(0).map((_, index) => [
            Math.floor(index / NUM_ROWS),
            index % NUM_COLS
        ]);
    }
    static getInstance() {
        if (!GameState.instance) { // @ts-ignore
            GameState.instance = new GameState();
        }
        return GameState.instance;
    }
    isSolved() {
        for (let i = 0; i < NUM_TILES; i++) {
            if (this.board[i][0] !== GameState.solvedBoard[i][0] ||
                this.board[i][1] !== GameState.solvedBoard[i][1])
                return false;
        }
        return true;
    }
    startNewGame() {
        this.moves = 0;
        this.board = GameState.getNewBoard();
        this.stack = [];
        this.shuffle();
    }
    shuffle() {
        this.shuffling = true;
        let shuffleMoves = rand_1.rand(SHUFFLE_MOVES_RANGE[0], SHUFFLE_MOVES_RANGE[1]);
        while (shuffleMoves-- > 0) {
            this.moveInDirection(MOVE_DIRECTIONS[rand_1.rand(0, 3)]);
        }
        this.shuffling = false;
    }
    canMoveTile(index) {
        if (index < 0 || index >= NUM_TILES)
            return false;
        const tilePos = this.board[index];
        const emptyPos = this.board[EMPTY_INDEX];
        if (tilePos[0] === emptyPos[0])
            return Math.abs(tilePos[1] - emptyPos[1]) === 1;
        else if (tilePos[1] === emptyPos[1])
            return Math.abs(tilePos[0] - emptyPos[0]) === 1;
        else
            return false;
    }
    moveTile(index) {
        if (!this.shuffling && this.isSolved())
            return false;
        if (!this.canMoveTile(index))
            return false;
        const emptyPosition = [...this.board[EMPTY_INDEX]];
        const tilePosition = [...this.board[index]];
        const boardAfterMove = [...this.board];
        boardAfterMove[EMPTY_INDEX] = tilePosition;
        boardAfterMove[index] = emptyPosition;
        if (!this.shuffling) { // @ts-ignore
            this.stack.push(this.board);
        }
        this.board = boardAfterMove;
        if (!this.shuffling) { // @ts-ignore
            this.moves += 1;
        }
        return true;
    }
    moveInDirection(dir) {
        const epos = this.board[EMPTY_INDEX];
        const posToMove = dir === 'up' ? [epos[0] + 1, epos[1]] :
            dir === 'down' ? [epos[0] - 1, epos[1]] :
                dir === 'left' ? [epos[0], epos[1] + 1] :
                    dir === 'right' ? [epos[0], epos[1] - 1] :
                        epos;
        let tileToMove = EMPTY_INDEX;
        for (let i = 0; i < NUM_TILES; i++) {
            if (this.board[i][0] === posToMove[0] && this.board[i][1] === posToMove[1]) {
                tileToMove = i;
                break;
            }
        }
        this.moveTile(tileToMove);
        return true;
    }
    getState() {
        return {
            solvedArr: GameState.solvedBoard,
            board: this.board,
            moves: this.moves,
            solved: this.isSolved(),
        };
    }
}
GameState.solvedBoard = GameState.getNewBoard();
GameState.instance = null;
function useGameState() {
    const gameState = GameState.getInstance();
    // @ts-ignore
    const [state, setState] = react_1.useState(gameState.getState());
    function newGame() {
        // @ts-ignore
        gameState.startNewGame();
        // @ts-ignore
        setState(gameState.getState());
    }
    function move(index) {
        // @ts-ignore
        gameState.moveTile(index);
        // @ts-ignore
        setState(gameState.getState());
    }
    function moveKey(name) {
        // @ts-ignore
        gameState.moveInDirection(name);
        // @ts-ignore
        setState(gameState.getState());
    }
    return [state.board, state.moves, state.solved, state.solvedArr, newGame, move, moveKey];
}
exports.default = useGameState;
