const { expect } = require("@jest/globals");
const TicTacToe = require("../src/TicTacToe");

test('Printed Board', () => {
    const STRINGBOARD = "  | |  \n--|-|--\n  | |  \n--|-|--\n  | |  \n";
    let board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]

    expect(TicTacToe.printBoard(board)).toBe(STRINGBOARD);
})
