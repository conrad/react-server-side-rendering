var isNode = typeof module !== 'undefined' && module.exports
  , React = isNode ? require('react/addons') : window.React


var HelloMessage = React.createClass({
  getInitialState: function () {
    return {}
  },

  // Sends AJAX request to update the name property on state
  loadServerData: function() {
    $.get('/name', function(result) {
      if (this.isMounted()) {
        this.setState({name: result})
      }
    }.bind(this))
  },

  // During the server side rendering, componentDidMount and componentWillUnmount are never called and loadServerData is also never called.
  componentDidMount: function () {
    // Once the component is mounted every 3 seconds it will request a name from the /name and then it will display it.
    this.intervalID = setInterval(this.loadServerData, 3000)
  },

  componentWillUnmount: function() {
    clearInterval(this.intervalID)
  },

  // handleClick: function () {
  //   alert('You clicked!')
  // },

  render: function() {
    var name = this.state.name ? this.state.name : this.props.name
    return <div onClick={this.handleClick}>Hello {name}</div>
  }
})

if (isNode) {
  exports.HelloMessage = HelloMessage
} else {
  React.render(<HelloMessage name="Jake" />, document.getElementById('react-root'))
}
