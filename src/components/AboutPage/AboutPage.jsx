import { Box, Typography } from '@mui/material';
import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
    return (
        <Box 
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        sx={{m: 3}} 
        >
                <Typography variant="h1" sx={{ fontSize: 50 }}>About</Typography>
                <Typography sx={{ fontSize: 18 }}>MN Fitness is a mobile-first web application 
                that allows clients to generate random workouts for a specific body part. 
                Resistance training often becomes repetitive; this is a way to add variation
                and keep the client engaged in their fitness habits!
                </Typography>
            <br />
                <Typography variant="h2" sx={{ fontSize: 30 }}>Technologies Used</Typography>
                <Typography sx={{ fontSize: 18 }}>React, JSX, JavaScript, Node.js, Material UI, CSS, HTML, Express, Axios, Postman, SQL, and APIs.
                </Typography>
            <br />
                <Typography variant="h2" sx={{ fontSize: 30 }}>Acknowledgements</Typography>
                <Typography sx={{ fontSize: 18 }}>Prime, the Emerald Cohort, Emma, Key, Sam, family, and my fiance and my dog for believing in me.
                </Typography>
            <br />
                <Typography variant="h2" sx={{ fontSize: 30 }}>Connect with Me</Typography>
                <Typography sx={{ fontSize: 18 }}>LinkedIn</Typography>
                <img src="https://chart.googleapis.com/chart?cht=qr&chl=http%3A%2F%2Fwww.linkedin.com%2Fin%2Fjonathan-viegut&chs=180x180&choe=UTF-8&chld=L|2" alt="LinkedIn QR" />
        </Box>
    );
}

export default AboutPage;
