
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
--Create a new database called `prime_app` and create a `user` table:

--```SQL
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "workout" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (80),
	"rating" INT,
	"user_id" INT REFERENCES "user"
);
-- "column" type REFERENCES "table"

CREATE TABLE "exercise" (
	"id" SERIAL PRIMARY KEY,
	"muscle" VARCHAR (1000),
	"equipment" VARCHAR (1000),
	"name" VARCHAR (1000),
	"instructions" VARCHAR (1000),
	"notes" VARCHAR (1000),
	"workout_id" INT REFERENCES "workout"
);