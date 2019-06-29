// *********************************************************************************
// Packages required to make project run
// *********************************************************************************

// Dependencies
const path = require('path')
const express = require('express')

// dont forget to set up express to have ports and data parsing
const app = express()
const PORT = process.env.PORT || 3000 // allows heroku to set up its own port but my localhost will use port 3000
app.use(express.static('app/public'))
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

// require routing
require('./app/routing/apiRoutes')(app)
require('./app/routing/htmlRoutes')(app)

// still require listener on port funciton and console log to make sure its working
app.listen(PORT, function () {
  console.log('app listening on port: ' + PORT)
})
