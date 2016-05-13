var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');



var name = undefined
var msg = 'FANEK'
ReactDOM.render(
    <Greeter name={name} message={msg}/>, document.getElementById('app')
    );
