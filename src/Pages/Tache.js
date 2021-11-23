import { Typography } from "@mui/material";
import React from 'react';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import Stack from '@mui/material/Stack';



const Tache= ()=> {
    
    

   
        


        return (
            
            
            <main>
                
                <Typography component ='h1' variant='h3'>
                    Tache
                </Typography>
                <form >
                <Stack spacing={3} sx={{ mx: "auto", width: 600 }}>
                        <div>
                        <Typography component ='h1' variant='h5'>
                                
                                type d'activiter
                                
                        </Typography>
                        
                        
                        <select >
                            <option value="grapefruit">1</option>
                            <option value="lime">2</option>
                            <option value="coconut">3</option>
                            <option value="mango">4</option>
                        </select>
                       
                        
                        </div>


                        <div>
                        <TextField id="outlined-basic" label="Adress" variant="outlined">
                        <input type="text"  />
                        </TextField>
                        
                        </div>
                        <div>
                        <TextareaAutosize
                        aria-label="minimum height"
                        label="Description"
                        minRows={5}
                        placeholder="Minimum 3 rows"
                        style={{ width: 300 }
                         }
                        ></TextareaAutosize>
                        
                        
                         </div>
                         <div>
                         <TextField id="outlined-basic" label="travailleur" variant="outlined">
                         <input type="text"  />
                        </TextField>
                         
                         </div>
                         <div>
                         
                         
                        
                         
                         </div>

                         <input type="submit" value="Envoyer" />
                         </Stack>                    
                    </form>
                
            </main>
            
        )

    

}
export default Tache;