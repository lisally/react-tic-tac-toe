'use strict'

var React = require('react');
var ReactDOM = require('react-dom');

// title component of view
// returns tic tac toe game title
var Title = React.createClass({
  render: function() {
    return <h1>Tic Tac Toe</h1>;
  }
});

// information component of view
// returns player turn and game status
var Information = React.createClass({
    render: function() {
        var controller = this.props.controller
        if (controller._game.gameOver === false) {
            // displays player turn
            return <p>Player {controller._game.turn}'s Turn </p>        
        } else if (controller._game.gameOver == true && controller._game.winner != undefined) {    
            // displays game over and winner
            return <p>Game Over, Player {controller._game.winner} Wins! </p>              
        } else {
            // displays game over and tie
            return <p>Game Over, Tie!</p>          
        }          
    }
})

// game button component of view
// returns button for game grid
var GameButton = React.createClass({
    // onclick function that uses controller for game play
    handleClick: function() {
        var controller = this.props.controller;
        controller.playGame(this.props.id);
    },
    
    render: function() {
        return <button onClick={this.handleClick}>{this.props.display}</button>;
    }
});

// game grid component of view
// returns a game grid for the game using game button components
var GameGrid = React.createClass({
    // onclick function that uses controller to play game again 
    handleClick: function() {
        var controller = this.props.controller
        controller._game.newGame();
        controller.startGame();
    },
    
    // returns game buttons to make game grid of size 3x3
    render: function() {
        var controller = this.props.controller
        // first row of game grid made of game button components
        var row1 = this.props.tiles.map(function(value, index) {
            if (index == 0 || index == 1 || index == 2) {
                return (
                    <td>
                    <GameButton id={index} display={value} controller={controller}/>
                    </td>
                )
            }
        }, this)
        // second row of game grid made of game button components
        var row2 = this.props.tiles.map(function(value, index) {
            if (index == 3 || index == 4 || index == 5) {
                return (
                    <td>
                    <GameButton id={index} display={value} controller={controller}/>
                    </td>
                )
            }
        }, this)
        // third row of game grid made of game button components
         var row3 = this.props.tiles.map(function(value, index) {
            if (index == 6 || index == 7 || index == 8) {
                return (
                    <td>
                    <GameButton id={index} display={value} controller={controller}/>
                    </td>
                )
            }
        }, this)
        // all rows, entire 3x3 game grid
        var allRows = (
            <table>
            <tr>{row1}</tr>
            <tr>{row2}</tr>
            <tr>{row3}</tr>                
            </table>            
        )
        // returns button to play game again if the game is over
        if (controller._game.gameOver === true) {
            return (
                <div>
                {allRows}
                <button onClick={this.handleClick}>Play Again</button>   
                </div>
            )
        } else {
            // returns game grid if the game is ongoing
            return (
                <div>
                {allRows}                
                </div>
            )
        }
    }   
})

// scoreboard component of view
// returns total player 1 and player 2 wins, returns total ties
var ScoreBoard = React.createClass({
    render: function() {
        var controller = this.props.controller
        return (
            <div>
            <p>(X) Player 1 Wins: {controller._game.player1Wins}</p>
            <p>(O) Player 2 Wins: {controller._game.player2Wins}</p>
            <p>Ties: {controller._game.ties}</p>
            </div>
        )
    }
})

//export classes to be available to other modules.
module.exports.Title = Title;
module.exports.Information = Information
module.exports.GameGrid = GameGrid;
module.exports.ScoreBoard = ScoreBoard;