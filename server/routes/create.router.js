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
    }).then(response => {
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
router.post('/', rejectUnauthenticated, (req, res) => { // POST route code here
    console.log('in server side POST route!');
    console.log('req.body is: ', req.body);

    

    // We will have to make two queries here. We need to insert this workout into our "workouts" table
    // as well as our "exercise" table. They are related via the foreign key of "workout_id" in "exercises" table.

    // We also need to send the "user_id" in the "workouts" query.

    // first query is for the "workouts" table, adding the name, rating (not really, they haven't entered it yet), and user id.
    const insertWorkoutQuery = `
    INSERT INTO "workouts" ("user_id")
    VALUES ($1)
    `
    // returning ID would be in the response.
    // I don't understand what RETURNING does? Do I need it here? I used it in the "movies" assignment,
        // but don't know what it does.

    // FIRST query makes workout
    pool.query(insertWorkoutQuery, [req.body.user_id])
    .then(result => { // we will need to identify the workout id
        console.log('result.rows[0].id is:', result.rows[0].id);
        let createdWorkoutId = result.rows[0].id;

        // SECOND query is for the "exercises" table, adding muscle, equipment, name, instructions, notes, and workout id.
        // We need to do this multiple times. How does that work?
        const insertExercisesQuery = `INSERT INTO "exercises" ("muscle", "equipment", "name", "instructions", "workout_id")
        VALUES  ($1, $2, $3, $4, $5, $6);
        `
        pool.query(insertExercisesQuery, [
            req.body.workout.muscle,
            req.body.workout.equipment,
            req.body.workout.name,
            req.body.workout.instructions,
            req.body.workout.id,
            createdWorkoutId
        ]).then(result => {
            console.log('result is: ', result);
            res.sendStatus(201);
        }).catch(error => {
            console.log('error with second query, exercises', error);
        })
        
    }).catch(error => {
        console.log('error with first query, workout');
    })
});

module.exports = router;