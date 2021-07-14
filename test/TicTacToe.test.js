const { expect } = require("@jest/globals");
const TicTacToe = require("../src/TicTacToe");

test('Printed Board', () => {
    expect(TicTacToe.printBoard()).toBe("  | |  \n--|-|--\n  | |  \n--|-|--\n  | |  \n");
})
