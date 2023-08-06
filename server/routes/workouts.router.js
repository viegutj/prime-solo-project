const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios')
const {rejectUnauthenticated} = require('../modules/authentication-middleware')


router.get('/', rejectUnauthenticated, (req, res) => {
    // GET route code here

    console.log('in server side POST route!');
    console.log('req.body is: ', req.body);

    // queryText: we want to select all of the user's workouts
    const queryText = `SELECT * WHERE "user_id" = ${req.body.user_id}`

    axios.get('/', rejectUnauthenticated, (req, res) => {
        // pool.query to communicate with db
        pool.query(queryText)
            .then((result) => {
                res.send(result.rows);
            })
            .catch((error) => {
                console.log('ERROR: Get all workouts', error);
                res.sendStatus(500)
            })
    })
});


module.exports = router;
