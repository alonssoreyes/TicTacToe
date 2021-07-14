const { expect } = require("@jest/globals");
const TicTacToe = require("../src/TicTacToe");

describe('Scenario 1 |Print board Test', () => {
    test('Printed Board', () => {
        const STRINGBOARD = "  | |  \n--|-|--\n  | |  \n--|-|--\n  | |  \n";
        let board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ]
    
        expect(TicTacToe.printBoard(board)).toBe(STRINGBOARD);
    })
})
describe('Scenario 2', () => {
    test('User X Wins in a vertial line', () => {
        const symbol = "X";
        let scenarioXWin = [
            [symbol, "", ""],
            [symbol, "", ""],
            [symbol, "", ""],
        ]
    
        expect(TicTacToe.checkWin(symbol,scenarioXWin)).toStrictEqual(true);
        expect(typeof TicTacToe.checkWin(symbol,scenarioXWin)).toBe('boolean');
        expect(TicTacToe.checkWin("O",scenarioXWin)).toBe(false);

    })
})

