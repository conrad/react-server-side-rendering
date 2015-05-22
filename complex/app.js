require('node-jsx').install()

var express = require('express')
  , app = express()
  , React = require('react/addons')
  , components = require('./public/components.jsx')

var HelloMessage = React.createFactory(components.HelloMessage)


app.engine('jade', require('jade').__express)
app.set('view engine', 'jade')

app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res){
  res.render('index', {
    // This method serves up the initial pre-rendered page
    react: React.renderToString(HelloMessage({name: "John"}))
  })
})

// When the client makes requests at /name, the server will respond with the name Conrad with a current date & time.
app.get('/name', function(req, res){
  res.send("Conrad, " + new Date().toString())
})

app.listen(3000, function() {
  console.log('Listening on port 3000...')
})