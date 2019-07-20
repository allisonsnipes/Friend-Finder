// apiRoutes: This routes file renders views for the front end and responds to the client/view requests

// apiRoutes: This routes file returns data to the client/view. Responds to the client/view requests with data

// call on the data needed for api to work
const neededData = require('../data/friends')

module.exports = function (app) {
  // Get method route
  app.get('/api/friends', function (req, res) {
    res.json(neededData)
	})

	// post method route
	app.post('/api/friends', function (req, res) {
    console.log(req.body)

		let userScore = req.body.scores // pull the user score from the form post
		const scoresArr = [] // set up an empty array to hold the score
		let bestMatch = 0 // set initial best match to 0
		// loop through friendData json file to get users score and save it to a variable
		for (let i = 0; i < neededData.length; i++) {
      var scoreDiff = 0
			for (let j = 0; j < userScore.length; j++) {
        scoreDiff += Math.abs(parseInt(neededData[i].scores[j]) - parseInt(userScore[j]))
			}
      scoresArr.push(scoreDiff) // use the push method to push the difference score
		}
    // loop through scoreArr to find the best match
    for (let i = 0; i < scoresArr.length; i++) {
      if (scoresArr[i] <= scoresArr[bestMatch]) {
        bestMatch = i
			}
    }
    // return the best match to user
    let perfectMatch = neededData[bestMatch]
		res.json(perfectMatch)
		neededData.push(req.body)
	})

	// Delete an example by id
	app.delete('/api/friends/:id', function (req, res) {
    res.json(surveyData)
	})
};
