'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Title = React.createClass({
  render: function() {
    return <h1>Tic Tac Toe</h1>;
  }
});

var GameButton = React.createClass({
    render: function() {
        return <button>SL</button>
    }
})

var GameGrid = React.createClass({
    render: function() {
        return (
            <ul>    
            <GameButton id="0"/>
            <GameButton id="1"/>
            <GameButton id="2"/>
            <br/>
            <GameButton id="3"/>
            <GameButton id="4"/>
            <GameButton id="5"/>
            <br/>
            <GameButton id="6"/>
            <GameButton id="7"/>
            <GameButton id="8"/>
            </ul>     
        );
    }
})

ReactDOM.render(<Title/>, document.getElementById('title'));
ReactDOM.render(<GameGrid/>, document.getElementById('grid'));
