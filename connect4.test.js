describe('Game Initialization', function() {

    beforeEach(function(){
        board = [];
    })

    it('makeBoard() with no parameters should have 7 columns and 6 rows', function() {
        makeBoard();
        expect(board.length).toEqual(6);
        expect(board[0].length).toEqual(7);
    })

    it('makeBoard(10, 12) should have 10 columnd and 12 rows', function() {
        makeBoard(10, 12);
        expect(board.length).toEqual(12);
        expect(board[0].length).toEqual(10);
    })

    afterEach(function() {
        board = [];
    })
});