import React from 'react';

import { Typography } from "@mui/material";


const NavBar= ()=> {
    

        


        return (
            

            <main>
                
                <Typography component ='h1' variant='h3'>
                    NavBar
                </Typography>
                <ul>
                <li><a href="http://localhost:3001/Agenda">Agenda</a></li>
                <li><a href="http://localhost:3001/Home">Home</a></li>
                <li><a href="http://localhost:3001/Tache">Tache</a></li>
                <li><a href="http://localhost:3001/Mission">Mission</a></li>
                <li><a href="http://localhost:3001/Inscription">Inscription</a></li>
                 </ul>
            </main>
        )

    

}
export default NavBar;