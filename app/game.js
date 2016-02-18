// MVC model
'use strict'

// tic tac toe game model
class TicTacToeGame {
    // creates all variables necessary for game play
    constructor() {
        this._player1 = 1;
        this._player2 = 2;
        this._tiles = ["","","","","","","","",""];
        this._turn = 1; //current player's turn
        this._player1Wins = 0;
        this._player2Wins = 0;
        this._ties = 0;
        this._winner = undefined;
        this._gameOver = false;
    }
    
    // returns player 1
    get player1() {
        return this._player1;
    }
    
    // returns player 2
    get player2() {
        return this._player2;
    }
    
    // returns current gameboard
    get tiles() {
        return this._tiles;
    }
    
    // returns current player's turn
    get turn() {
        return this._turn;
    }
    
    // returns player 1's total wins
    get player1Wins() {
        return this._player1Wins;
    }
    
    // returns player 2's total wins
    get player2Wins() {
        return this._player2Wins;
    }
    
    // returns total ties
    get ties() {
        return this._ties;
    }
    
    // returns player 1 or player 2 if there is winner
    // returns undefined if tie and no winner
    get winner() {
        return this._winner;
    }
    
    // returns if the game is over with win or tie
    get gameOver() {
        return this._gameOver;
    }
    
    // updates game play after a turn is taken
    updateGame() { 
        //all the possible winning strategies in a 3x3 game
        var strategies = [0,1,2,3,4,5,6,7,8,0,3,6,1,4,7,2,5,8,0,4,8,2,4,6];
        
        // goes through current game board to look for a winning strategie
        for (var i = 0; i < strategies.length; i+=3) {
            if (this._tiles[strategies[i]] == "X" && this._tiles[strategies[i+1]] == "X" && this._tiles[strategies[i+2]] == "X") {
                this._winner = 1;
                this._player1Wins++;
                this._gameOver = true;
                return true; // player 1 is the winner, game over
            } else if (this._tiles[strategies[i]] == "O" && this._tiles[strategies[i+1]] == "O" && this._tiles[strategies[i+2]] == "O") {
                this._winner = 2;
                this._player2Wins++;
                this._gameOver = true;
                return true; // player 2 is the winner, game over
            }
        }
            
        for (var i = 0; i < this._tiles.length; i++) {
            if (this._tiles[i] === "") {
                this._gameOver = false;
                return false // no winner, game is ongoing
            }
        }
        this._winner = undefined;
        this._gameOver = true;
        this._ties++;
        return true; // no winner tie, game over
    }
    
    // uses provided index to update update game board and player turn
    takeTurn(index) {
        // player 1 makes a move
        if (this._turn === 1) {
            this._tiles[index] = "X";
            this._turn = 2;
        // player 2 makes a move
        } else {
            this._tiles[index] = "O";
            this._turn = 1;
        }       
    }
    
    // updates game board to empty board and variables for a new game
    newGame() {
        // empty game board
        this._tiles = ["","","","","","","","",""];
        // changes player's turn depending on last win or last tie
        if (this._winner === 1) {
            this._turn = 2;
        } else if (this._winner === 2) {
            this._turn = 1;
        } else if (this._winner === undefined && this._turn === 1) {
            this._turn = 2;
        } else {
            this._turn = 1;
        }
        this._gameOver = false;        
        this._winner = undefined;
    }
}

//export classes to be available to other modules.
module.exports.TicTacToeGame = TicTacToeGame;