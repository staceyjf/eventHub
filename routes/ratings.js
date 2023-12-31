const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/ratings')
const ensureLoggedIn = require('../config/ensureLoggedIn');

/*
params that can be extracted from the url - if you need to pass params to the function, you can do so using query params or URL function to handle the request
*/

// // GET /rating/:id/edit  - View a form for editing a rating & myFav Cat of venues (restrict to user who submitted the rating)
// // Doing this in show so not currently needing a separate view
// router.get('/rating/:id/edit', ensureLoggedIn, reviewsController.edit);

// PUT /ratings/:id - Handle the edit rating form being submitted restricted to logged in users)
router.put('/ratings/:id', ensureLoggedIn, reviewsController.update);

// DELETE /ratings/:id - Delete a venue (restricted to logged in users)
router.delete('/ratings/:id', ensureLoggedIn, reviewsController.delete);

module.exports = router;
