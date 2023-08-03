const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios')
const {rejectUnauthenticated} = require('../modules/authentication-middleware')

/**
 * GET route template
 */

router.get('/:muscle', rejectUnauthenticated, (req, res) => {
    // GET route code here
    // req.params.something gives us access to whatever is on the end of our request
    // from the saga.
    console.log('req.params.muscle', req.params.muscle);
    const muscle = req.params.muscle
    const key = `${
        process.env.API_KEY
    }`;
    // queryText
    axios.get(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, {
        headers: {
            'X-Api-Key': key
        }
    }).then(response =>{
        console.log('response is:', response.data);
        res.send(response.data);
    }).catch(error => {
        console.log('error in server GET');
        res.sendStatus(500);
    })

});

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => { 
    // POST route code here
    console.log('in server side POST route!');

});

module.exports = router;
