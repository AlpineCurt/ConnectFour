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

    it('makeHtmlboard() ')

    afterEach(function() {
        board = [];
        WIDTH = 7;
        HEIGHT = 6;
        // const htmlBoard1 = document.getElementById('board');
        // htmlBoard1.innerHTML = '';
    })
});