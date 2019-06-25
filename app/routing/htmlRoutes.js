// Dependecies
var path = require('path')
// htmlRoutes: This routes file renders views for the front end and responds to the client/view requests

module.exports = function (app) {
  // routes for html pages
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, '/../public/survey.html'))
  })

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/../public/index.html'))
  })
}
