// Dependecies
var path = require('path')
// apiRoutes: This routes file renders views for the front end and responds to the client/view requests

// apiRoutes: This routes file returns data to the client/view. Responds to the client/view requests with data

module.exports = function (app) {
  // Get all examples
  app.get('/api/examples', function (req, res) {
    Example.findAll()
      .then(function (dbExamples) {
        res.json(dbExamples)
      })
  })

  // Create a new example
  app.post('/api/examples', function (req, res) {
    Example.create(req.body)
      .then(function (dbExample) {
        res.json(dbExample)
      })
  })

  // Delete an example by id
  app.delete('/api/examples/:id', function (req, res) {
    Example.destroy(req.params)
      .then(function (dbExample) {
        res.json(dbExample)
      })
  })

  // Render 404 page for any unmatched routes
  app.get('*', function (req, res) {
    res.render('404')
  })
}
