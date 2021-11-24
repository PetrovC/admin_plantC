import React from 'react';

import { Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom'



const NavBar= ()=> {
    

        


        return (
            

            <main>
                
                
                <Stack spacing={3} sx={{ mx: "auto", width: 600 }}>
                <Typography component ='h1' variant='h3'>
                    NavBar
                </Typography>
                {/* <ul>
                <li><a href="/Agenda">Agenda</a></li>
                <li><a href="/Home">Home</a></li>
                <li><a href="/Tache">Tache</a></li>
                <li><a href="/Mission">Mission</a></li>
                <li><a href="/Inscription">Inscription</a></li>
                 </ul> */}
                 
                    <Link to="/Home">
                    Home
                    </Link>
                    <Link to="/Tache" >
                    Tache
                    </Link>
                    <Link to="/Mission" >
                    Mission
                    </Link>
                    <Link to="/Agenda" >
                    Agenda
                    </Link>
                    <Link to="/Inscription" >
                    Inscription
                    </Link>
                
                 </Stack>
            </main>
        )

    

}
export default NavBar;