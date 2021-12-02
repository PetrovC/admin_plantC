import { Typography, TextField, Button } from "@mui/material";
import React from 'react';
import Stack from '@mui/material/Stack';


const Inscription= ()=> {
    

        


        return (
            

            <main>
                
                <Typography component ='h1' variant='h3'>
                    Création Client
                </Typography>
                <form>
                
                <Stack spacing={3} sx={{ mx: "auto", width: 600 }}>
                        

                        <Stack sx={{ mx: "auto",width: 600}} >
                        
                        <Typography component ='h1' variant='h5'sx={{ mx: "auto"}}>
                        Nom :
                        </Typography>
                        <TextField id="outlined-basic" variant="outlined" sx={{ width: '100%'}}>
                        <input type="text"  />
                        </TextField>
                        
                        
                        </Stack>
                        <Stack sx={{ mx: "auto",width: 600}} >
                        
                        <Typography component ='h1' variant='h5'sx={{ mx: "auto"}}>
                        Prénom :
                        </Typography>
                        <TextField id="outlined-basic" variant="outlined" sx={{ width: '100%'}}>
                        <input type="text"  />
                        </TextField>
                        
                        
                        </Stack>
                        <Stack sx={{ mx: "auto",width: 600}} >
                        
                        <Typography component ='h1' variant='h5'sx={{ mx: "auto"}}>
                        Email :
                        </Typography>
                        <TextField id="outlined-basic" variant="outlined" sx={{ width: '100%'}}>
                        <input type="text"  />
                        </TextField>
                        
                        
                        </Stack>
                        <Stack sx={{ mx: "auto",width: 600}} >
                        
                        <Typography component ='h1' variant='h5'sx={{ mx: "auto"}}>
                        Adresse :
                        </Typography>
                        <TextField id="outlined-basic" variant="outlined" sx={{ width: '100%'}}>
                        <input type="text"  />
                        </TextField>
                        
                        
                        </Stack>
                        <Stack sx={{ mx: "auto",width: 600}} >
                        
                        <Typography component ='h1' variant='h5'sx={{ mx: "auto"}}>
                        Numéro de téléphone  :
                        </Typography>
                        <TextField id="outlined-basic" variant="outlined" sx={{ width: '100%'}}>
                        <input type="text"  />
                        </TextField>
                        
                        
                        </Stack>


                        


                        

                            <Stack sx={{ mx: "auto",width: 600}} >
                         <Button type="submit" variant="contained" style={{ width: 100 }} sx={{ mx: "auto"}}>
                                Valider
                         </Button>
                         </Stack>

                         </Stack>                    
                    
                         </form>
            </main>
        )

    

}
export default Inscription;


