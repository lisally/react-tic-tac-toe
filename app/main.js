'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Title = React.createClass({
  render: function() {
    return <h1>Tic Tac Toe</h1>;
  }
});

ReactDOM.render(<Title />, document.getElementById('content'));