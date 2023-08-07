import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
    return (
        <div className="container">
            <h1>About</h1>
            <div>
                <p>Fitness Randomizer is a mobile-first web application that allows clients to generate random workouts for a specific body part. Resistance training often becomes repetitive; this is a way to add some variation and keep the client engaged in their fitness habits!</p>
                <p>
                    Clients can generate random workouts for a specific muscle group, save those workouts for later, modify and comment on existing workouts, and delete workouts from their saved list.
                </p>
                <h2>Technologies Used</h2>
                <p>This project demanded the use of many technologies; I learned many new tools for future development.</p>
                <p>Technologies used include: React, JSX, JavaScript, Node.js, Material UI, CSS, HTML, Express, Axios, Postman, and APIs.
                </p>

                <h2>Acknowledgements</h2>
                <p>I'm extremely grateful for all the folks who helped me get to this point in my development journey!</p>
                <p>I would like to thank: Prime, the Emerald Cohort, Emma, Key, Sam, family, and my fiance and my dog for believing in me.
                </p>
            </div>
        </div>
    );
}

export default AboutPage;
