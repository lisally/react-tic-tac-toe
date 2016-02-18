// MVC controller
'use strict';

// loads model and view
var React = require('react');
var ReactDOM = require('react-dom');
var TicTacToeModel = require('./game.js');
var TicTacToeView = require('./components.js');

// tic tac toe game controller
class TicTacToeGame {
    // creates a new game model
    constructor() {
        this._game = new TicTacToeModel.TicTacToeGame();        
    }
    
    // renders game components
    startGame() {
        ReactDOM.render(<TicTacToeView.Title/>, document.getElementById('title'));
        ReactDOM.render(<TicTacToeView.Information controller={this}/>, document.getElementById('information'));        
        ReactDOM.render(<TicTacToeView.GameGrid tiles={this._game.tiles} controller={this}/>, document.getElementById('grid'));
        ReactDOM.render(<TicTacToeView.ScoreBoard controller={this}/>, document.getElementById('scoreboard'));    
    }
    
    // uses provided index to update game board
    // renders game components upon player's turn and update game play
    playGame(index) {
        // tile clicked has not been marked by a player and game is ongoing
        if (this._game.tiles[index] == "" && this._game.gameOver === false) {
            // player takes turn and game is updated
            this._game.takeTurn(index);
            this._game.updateGame();
            // game components are rendered
            ReactDOM.render(<TicTacToeView.GameGrid tiles={this._game.tiles} controller={this}/>, document.getElementById('grid'));        
            ReactDOM.render(<TicTacToeView.Information controller={this}/>, document.getElementById('information'));        
            ReactDOM.render(<TicTacToeView.ScoreBoard controller={this}/>, document.getElementById('scoreboard'));    
        } 
    }
}

// new tic tac toe game
var newTicTacToeGame = new TicTacToeGame();
newTicTacToeGame.startGame();
