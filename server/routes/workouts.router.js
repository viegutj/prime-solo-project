const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios')
const {rejectUnauthenticated} = require('../modules/authentication-middleware')


router.get('/:user_id', rejectUnauthenticated, (req, res) => {
    // GET route code here

    console.log('in server side GET route!');
    console.log('req.params is: ', req.params);

    // queryText: we want to select all of the user's workouts
    const queryText = `SELECT * FROM "workout" WHERE "user_id" = ${req.params.user_id}`

        // pool.query to communicate with db
        pool.query(queryText)
            .then((result) => {
                res.send(result.rows);
            })
            .catch((error) => {
                console.log('ERROR: Get all workouts', error);
                res.sendStatus(500)
            })
});


module.exports = router;
