// apiRoutes: This routes file renders views for the front end and responds to the client/view requests

// apiRoutes: This routes file returns data to the client/view. Responds to the client/view requests with data

// call on the data needed for api to work
const neededData = require('../data/friends')

module.exports = function (app) {
  // Get all examples
  app.get('/api/friends', function (req, res) {
    res.json(surveyData)
  })

  // Create entry of results of user
  app.post('/api/friends', function (req, res) {
    res.json(surveyData)
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
