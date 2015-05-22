// At the beginning and at the end of this component, we have conditions that allow it work with both the browser and Node.

var isNode = typeof module !== 'undefined' && module.exports
  , React = isNode ? require('react/addons') : window.React

// Here, with the definition of the React component, it looks just like any other.
var HelloMessage = React.createClass({
  handleClick: function () {
    alert('You clicked!')
  },

  render: function() {
    return <div onClick={this.handleClick}>Hello {this.props.name}</div>
  }
})


if (isNode) {
  exports.HelloMessage = HelloMessage
} else {
  React.render(<HelloMessage name="Jake" />, document.getElementById('react-root'))
}



