import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
    return (
        <div className="container">
            <div>
                <p>Fitness Randomizer is a mobile-first web application that allows clients to generate random workouts for a specific body part. Resistance training often becomes repetitive; this is a way to add some variation and keep the client engaged in their fitness habits!</p>

                <p>
                    Clients can generate random workouts for a specific muscle group, save those workouts for later, modify and comment on existing workouts, and delete workouts from their saved list.
                </p>
            </div>
        </div>
    );
}

export default AboutPage;
