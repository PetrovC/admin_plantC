// import AppBar from '@mui/material/AppBar';
import {Box,List,ListItem,ListItemButton } from '@mui/material';
import { Link } from 'react-router-dom'

const Navvv= ()=> {
    

        


    return (
        

        <div>
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <nav aria-label="main mailbox folders">
                    <List>
                    <ListItem disablePadding>
                        <Link to="/Home" >
                            <ListItemButton>
                                PlantC
                            </ListItemButton>
                            </Link>
                        </ListItem>

                        <ListItem disablePadding>
                        <Link to="/Home" >
                            <ListItemButton>
                                Home
                            </ListItemButton>
                            </Link>
                        </ListItem>
                    

                        <ListItem disablePadding>
                        <Link to="/Tache" >
                            <ListItemButton>
                                Tache
                            </ListItemButton>
                            </Link>
                        </ListItem>
                        <ListItem disablePadding>
                        <Link to="/Agenda" >
                            <ListItemButton>
                                Agenda
                            </ListItemButton>
                            </Link>
                        </ListItem>

                        <ListItem disablePadding>
                            <Link to="/Inscription" >
                                <ListItemButton>
                                    Inscription
                                </ListItemButton>
                            </Link>
                        </ListItem>

                        <ListItem disablePadding>
                            <Link to="/Mission" >
                                <ListItemButton>
                                    Mission
                                </ListItemButton>
                            </Link>
                        </ListItem>

                    </List>
                </nav>
                </Box>
            
        </div>
    )



}
export default Navvv;