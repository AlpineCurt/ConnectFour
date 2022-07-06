describe('Game Initialization', function() {

    beforeEach(function(){
        board = [];
        WIDTH = 7;
        HEIGHT = 6;
    })

    it('makeBoard() with no parameters should have 7 columns and 6 rows', function() {
        makeBoard();
        expect(board.length).toEqual(6);
        expect(board[0].length).toEqual(7);
    })

    it('makeBoard() with 8 columns and 5 rows', function() {
        WIDTH = 8;
        HEIGHT = 5;
        makeBoard();
        expect(board.length).toEqual(5);
        expect(board[0].length).toEqual(8);
    })

    afterEach(function() {
        board = [];
        WIDTH = 7;
        HEIGHT = 6;
        // const htmlBoard1 = document.getElementById('board');
        // htmlBoard1.innerHTML = '';
    })
});

describe('Win conditions', function() {
    beforeEach(function() {
        WIDTH = 7;
        HEIGHT = 6;
    })

    it('horizontal win', function() {
        board = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, 2, null, null, null, null],
            [null, null, 2, 1, 1, 1, 1],
            [2, 2, 1, 2, 2, 1, 1]
        ]
        currPlayer = 1;
        
        expect(checkForWin()).toEqual(true);
    })

    it('vertical win', function () {
        board = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [2, null, null, null, null, null, null],
            [2, null, null, null, null, null, null],
            [2, null, null, null, null, 1, null],
            [2, 1, null, 1, null, 1, 1]
        ]
        currPlayer = 2;

        expect(checkForWin()).toEqual(true);
    })

    it('diagonal downward-right win', function() {
        board = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [2, null, null, null, null, null, null],
            [1, 2, null, null, null, null, null],
            [1, 1, 2, null, null, null, null],
            [1, 2, 1, 2, null, null, null]
        ]
        currPlayer = 2;

        expect(checkForWin()).toEqual(true);
    })

    it('diagonal downward-left win', function() {
        board = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, 1],
            [null, null, null, null, null, 1, 2],
            [null, null, null, null, 1, 2, 2],
            [1, null, null, 1, 1, 2, 2]
        ]
        currPlayer = 1;
        
        expect(checkForWin()).toEqual(true);
    })

    it('No winner yet', function() {
        board = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [1, 2, 1, 2, 1, 2, 1],
            [2, 1, 2, 1, 2, 1, 2],
            [1, 2, 1, 2, 1, 2, 1]
        ]
        currPlayer = 1;

        expect(checkForWin()).not.toEqual(true);

    })

    afterEach(function() {
        currPlayer = 1;
        board = [];
    })
})
/*
board = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]
]*/