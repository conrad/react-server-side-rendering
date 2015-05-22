require('node-jsx').install()

var express = require('express');
var app = express();
var React = require('react/addons');
var components = require('./public/components.jsx');  // loads the React component written with JSX

// generates a function which can create HelloMessage components
var HelloMessage = React.createFactory(components.HelloMessage);


app.engine('jade', require('jade').__express)
app.set('view engine', 'jade')

app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res){
  res.render('index', {
    // React component & web page rendered and sent to the browser
    react: React.renderToString(HelloMessage({name: "John"}))

    // 1. creates a new HelloMessage component with name property John. 
    // 2. Using React.renderToString, render the HTML for the component.
      // The component is only rendered, NOT mounted. Any methods related to mounting are NOT called.

    // After the component is created we pass its HTML to the index template, which displays it as we saw earlier.

  })
})

app.listen(3000, function() {
  console.log('Listening on port 3000...')
})
