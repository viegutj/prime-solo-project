const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios')
const {rejectUnauthenticated} = require('../modules/authentication-middleware')

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
        // console.log('response is:', response.data);
        
        // randomize our array response
        const shuffle = (array) => { 
            return array.sort(() => Math.random() - 0.5); 
        }; 
        const shuffledArray = shuffle(response.data); 

        const slicedArray = shuffledArray.slice(0, 5);

        console.log(slicedArray);


        // //only return five exercises
        // shuffled.forEach((movie, index) => {
        //     if(index >= 5) return;

        res.send(slicedArray);
    }).catch(error => {
        console.log('error in server GET', error);
        res.sendStatus(500);
    })

});


router.post('/', rejectUnauthenticated, async (req, res) => { // POST route code here
    console.log('in server side POST route!');
    console.log('req.body is: ', req.body);


    // THESE ARE FROM EMMA --- USE THIS FORMAT FOR ASYNC AWAIT
    const connection = await pool.connect()
    // Using basic JavaScript try/catch/finally
    try {
        await connection.query('BEGIN');
        // create sqlText for insertWorkoutQuery
        const insertWorkoutQuery = `
            INSERT INTO "workout" ("user_id", "name", "rating")
            VALUES ($1, $2, $3)
            RETURNING "id";
            `
        // create sqlText for insertExercisesQuery
        const insertExercisesQuery = `INSERT INTO "exercise" ("muscle", "equipment", "name", "instructions", "workout_id")
            VALUES  ($1, $2, $3, $4, $5);
            `
        // make a query to POST a workout
        const result = await connection.query(insertWorkoutQuery, [req.body.user_id, 'Workout Name', '0'])
        let createdWorkoutId = result.rows[0].id;
        // make a query to POST all 10 exercises
        // QUESTION: How will I get the workout_id?
        // SOLVED: we store the result in a variable and use the
        // same syntax as before
        for (exercise of req.body.workout) {
            await connection.query(insertExercisesQuery, [
                exercise.muscle,
                exercise.equipment,
                exercise.name,
                exercise.instructions,
                createdWorkoutId,
            ])
        }
        await connection.query('COMMIT');
        console.log('success in async/await: WOOT!');
        res.sendStatus(201);
    } catch (error) {
        await connection.query('ROLLBACK');
        console.log(`Transaction Error - Rolling back transfer`, error);
        res.sendStatus(500);
    } finally {
        // Always runs - both after successful try & after catch
        // Put the client connection back in the pool
        // This is super important!
        connection.release();
    }
});
module.exports = router;
