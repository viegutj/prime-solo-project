const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();

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

router.put('/:id', rejectUnauthenticated, async (req, res) => {
    // PUT route code here

    console.log('in the server side PUT route!');
    console.log('req.params is: ', req.params);

    // queryText: we want to UPDATE the workout table as well as the exercise table,
    // we will probobly need multiple requests to accomplish this. Because there are multiple
    // SQL queries needed, async await would be a good tool to impliment here.

    // USE THIS FORMAT FOR ASYNC AWAIT
    const connection = await pool.connect();
    // Using basic JavaScript try/catch/finally

    
    try {
        await connection.query('BEGIN');
        // create sqlText for insertWorkoutQuery

        // UPDATE table_name
        // SET column_name1= value1, column_name2= value2
        // WHERE condition;

        const insertWorkoutQuery = `
            UPDATE "workout" 
            SET "user_id" = $1, "name" = $2, "rating" = $3
            WHERE "id" = $4;
            `

      // create sqlText for insertExercisesQuery
        // const insertExercisesQuery = `
        //     UPDATE "exercise" 
        //     SET "muscle" = $1, "equipment" = $2, "name" = $3, "instructions" = $4, "notes" = $5)
        //     WHERE "id" = ${exercise.id}
        //     `


        // make a query to replace a workout
        await connection.query(insertWorkoutQuery, [req.body.workout_details.user_id, req.body.workout_details.name, req.body.workout_details.rating, req.body.workout_details.id]);
    
        // make a query to replace all exercises
        for (exercise of req.body.server_response) {
            await connection.query(`
            UPDATE "exercise" 
            SET "muscle" = $1, "equipment" = $2, "name" = $3, "instructions" = $4, "notes" = $5
            WHERE "id" = $6;
            `, [
                exercise.muscle,
                exercise.equipment,
                exercise.name,
                exercise.instructions,
                exercise.notes,
                exercise.id,
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