'use strict'

class TicTacToeGame {
    constructor() {
        this._player1 = 1;
        this._player2 = 2;
        this._gameBoard = [1,1,0,0,0,1,1,1,0];
        this._turn = 1; //current player's turn
        this._player1Wins = 0;
        this._player2Wins = 0;
        this._ties = 0;
        this._winner = undefined;
        // this._gameOver = false;
    }
    
    get player1() {
        return this._player1;
    }
    
    get player2() {
        return this._player2;
    }
    
    get turn() {
        return this._turn;
    }
    
    get player1Wins() {
        return this._player1Wins;
    }
    
    get player2Wins() {
        return this._player2Wins;
    }
    
    get ties() {
        return this._ties;
    }
    
    get winner() {
        return this._winner;
    }
    
    get gameOver() { 
        var b = this._gameBoard;
        // console.log(b[3] == b[4] == b[5]) //SL
        
        // incorrect logic! fix later.
        if (b[0] == b[1] == b[2] ||
            b[3] == b[4] == b[5] ||
            b[6] == b[7] == b[8] ||
            b[0] == b[3] == b[6] ||
            b[1] == b[4] == b[7] ||
            b[2] == b[5] == b[8] ||
            b[0] == b[4] == b[8] ||
            b[2] == b[4] == b[6]) {
                this._winner = this._turn;
                // console.log("winner!")//SL
                return true; //winner, game over
            }
            
        for (var i = 0; i < b.length; i++) {
            if (b[i] === 0) {
                // console.log("no winner yet!")//SL
                return false //no winner, game is ongoing
            }
        }
        this._turn = undefined;
        // console.log("no winner!")//SL
        return true; //tie, game over
    }
    
    makeMove(element) {
        this._gameBoard[element] = this._turn;
        if (this._turn === 1) {
            this._turn = 2;
        } else {
            this._turn = 1;
        }
    }
    
    newGame() {
        this._gameBoard = [0,0,0,0,0,0,0,0,0];
        this._winner = undefined;
        this._turn = 1;
    }
}

var temp = new TicTacToeGame();
console.log(temp.gameOver) //SL

//export classes to be available to other modules.
module.exports.TicTacToeGame = TicTacToeGame;