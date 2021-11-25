// import AppBar from '@mui/material/AppBar';
import {Box,ListItemButton, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom'
// import {ListItem,ListItemButton } from '@mui/material';
import '../style/MyStyle.css'

const Navvv= ()=> {
    

        


    return (
        

        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar  >
                    
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
                        PlantC
                    </Typography>
                    
                    <Link to="/Home"  className="color" >
                            <ListItemButton >
                                Home
                            </ListItemButton>
                    </Link>
                    <Link to="/Tache" className="color" >
                            <ListItemButton>
                                Tache
                            </ListItemButton>
                    </Link>
                    <Link to="/Agenda" className="color">
                            <ListItemButton>
                                Agenda
                            </ListItemButton>
                    </Link>
                    <Link to="/Inscription" className="color">
                                <ListItemButton  >
                                    Inscription
                                </ListItemButton>
                    </Link>
                    <Link to="/Mission" className="color" >
                                <ListItemButton >
                                    Mission
                                </ListItemButton>
                    </Link>
                    
                    
                        
                    <Button color="inherit" >Login</Button>
                    </Toolbar>
                </AppBar>
                </Box>
            {/* <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
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
             */}
        </div>
    )



}
export default Navvv;