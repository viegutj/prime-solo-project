## Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy

-------------------------------------------



# MN Fitness - Prime Solo Project

Fitness Randomizer is a mobile-first web application that allows clients to generate random workouts for a specific body part. Resistance training often becomes repetitive; this is a way to add some variation and keep the client engaged in their fitness habits!

Clients can generate random workouts for a specific muscle group, save those workouts for later, modify and comment on existing workouts, and delete workouts from their saved list.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

- Fork
- Clone SSH
- `git clone {SSH}`
- `code .`
- `npm run server`
- In a NEW terminal - `npm run client`

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table

Create a new database called `prime_app` and create a `user` table:

```SQL
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
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [React]
* [MUI]
* [API]
* [Redux]
* [Redux-Saga]
* [JavaScript]
* [HTML]
* [CSS]

## Authors

* **Jonathan Viegut**

## Acknowledgments

* Material UI for having well organized and accessible docs
* Prime Digital Academy for supportive peers and teachers