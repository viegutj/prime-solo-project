const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:workout_id', rejectUnauthenticated, (req, res) => {
  // GET route code here
    console.log('in server side GET route for edit.router.js!');
    console.log('req.params.workout_id for edit.router.js is: ', Number(req.params.workout_id));

    // queryText we want to grab all exercises that match our workout_id
    const queryText = `SELECT * FROM "exercise" WHERE "workout_id" = '${Number(req.params.workout_id)}';`

    // pool.query to communicate with database
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('Error: get exercises for a workout', error);
        res.sendStatus(500);
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
  // DELETE route code here

  console.log('in server side DELETE route!');
  console.log('req.params is: ', req.params);

  // queryText: we want to delete the workout with a specific id that matches a user_id
  const queryText = `DELETE FROM "exercise" WHERE "id" = ${Number(req.params.id)};`

  // pool.query to communicate with database
  pool.query(queryText)
      .then((result) => {
          res.sendStatus(200)
      })
      .catch((error) => {
          console.log('Error: delete workout', error);
          res.sendStatus(500);
      })
})

module.exports = router;