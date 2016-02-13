'use strict'

class TicTacToeGame {
    constructor() {
        this._player1 = 1;
        this._player2 = 2;
        this._gameBoard = [0,0,0,0,0,0,0,0,0];
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
        //all the possible winning strategies in threes
        var strategies = [0,1,2,3,4,5,6,7,8,0,3,6,1,4,7,2,5,8,0,4,8,2,4,6];
        
        for (var i = 0; i < strategies.length; i+=3) {
            if (b[i] == 1 && b[i+1] == 1 && b[i+2] == 1) {
                console.log("player 1 is the winner!");
                this._winner = 1;
                return true; //player 1 winner, game over
            } else if (b[i] == 2 && b[i+1] == 2 && b[i+2] == 2) {
                console.log("player 2 is the winner!");
                this._winner = 2;
                return true; //player 2 winner, game over
            }
        }
            
        for (var i = 0; i < b.length; i++) {
            if (b[i] == 0) {
                console.log("no winner yet!")//SL
                return false //no winner, game is ongoing
            }
        }
        this._turn = undefined;
        console.log("no winner, game over!")//SL
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

// var temp = new TicTacToeGame(); //SL
// console.log("gameOver: " + temp.gameOver) //SL

//export classes to be available to other modules.
module.exports.TicTacToeGame = TicTacToeGame;