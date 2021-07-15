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
describe('Scenario 2', () => {
    test('User X Wins in a vertial line', () => {
        const symbol = "X";
        let scenarioXWinFirstColumn = [
            [symbol, "", ""],
            [symbol, "", ""],
            [symbol, "", ""],
        ]
        let scenarioXWinSecondColumn = [
            ["", symbol, ""],
            ["", symbol, ""],
            ["", symbol, ""],
        ]
        let scenarioXWinThirdColumn = [
            ["", "", symbol],
            ["", "", symbol],
            ["", "", symbol],
        ]
    
        expect(TicTacToe.checkWin(symbol,scenarioXWinFirstColumn)).toStrictEqual(true);
        expect(TicTacToe.checkWin(symbol,scenarioXWinSecondColumn)).toStrictEqual(true);

        expect(TicTacToe.checkWin(symbol,scenarioXWinThirdColumn)).toStrictEqual(true);

        expect(typeof TicTacToe.checkWin(symbol,scenarioXWinFirstColumn)).toBe('boolean');
        expect(TicTacToe.checkWin("O",scenarioXWinFirstColumn)).toBe(false);

    })
})
describe('Scenario 3', () => {
    test('User "O"  Wins in a horizontal line', () => {
        const symbol = "O";
        let scenarioOWinFirstRow = [
            [symbol, symbol, symbol],
            ["", "", ""],
            ["", "", ""],
        ]
        let scenarioOWinSecondRow = [
            ["", "", ""],
            [symbol, symbol, symbol],
            ["", "", ""],
        ]
        let scenarioOWinThirdRow = [
            ["", "", ""],
            ["", "", ""],
            [symbol, symbol, symbol],
        ]

        expect(TicTacToe.checkWin(symbol,scenarioOWinFirstRow)).toBe(true)
        expect(TicTacToe.checkWin(symbol,scenarioOWinSecondRow)).toBe(true)

        expect(TicTacToe.checkWin(symbol,scenarioOWinThirdRow)).toBe(true)

    })
    
})
describe('Scenario 4', () => {
    test('User "X"  Wins in a diagonal line', () => {
        const symbol = "X";
        let scenarioXWinFirstDiagonal = [
            [symbol, "", ""],
            ["", symbol, ""],
            ["", "", symbol],
        ]
        let scenarioXWinSecondDiagonal = [
            ["", "", symbol],
            ["", symbol, ""],
            [symbol, "", ""],
        ]

        expect(TicTacToe.checkWin(symbol,scenarioXWinFirstDiagonal)).toBe(true)
        expect(symbol).toBe("X")

        expect(TicTacToe.checkWin(symbol,scenarioXWinSecondDiagonal)).toBe(true)

    })
    
})
describe('Scenario 5 ', () => {
    test('Game ends with a draw', () => {
        const symbol = "X";
        let scenarioXWinFirstDiagonal = [
            ["X", "O", "O"],
            ["O", "O", "X"],
            ["X", "X", "O"],
        ]

        expect(TicTacToe.isDraw()).toBe(true)

    })
    
})