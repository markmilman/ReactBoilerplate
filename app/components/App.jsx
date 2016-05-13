var React = require('react');

var App = React.createClass({
    render: function(){
        return (
            <div>
                <h1>{this.state.name}</h1>
            </div>

        );
    },
    getDefaultProps: function() {
        return {
            name: 'New App'
        };
    },
    getInitialState: function () {
        return {
            name: this.props.name
        };
    },

});

module.exports = App;
