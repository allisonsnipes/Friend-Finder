// Dependecies
var path = require('path')
// htmlRoutes: This routes file renders views for the front end and responds to the client/view requests

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/../public/index.html'))
  })

  // routes for html pages
  app.get('/index', function (req, res) {
    res.sendFile(path.join(__dirname, '/../public/index.html'))
  })

  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, '/../public/survey.html'))
  })
}
