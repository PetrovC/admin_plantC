import { Typography, Button,MenuItem} from "@mui/material";
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import { useState } from "react";


import 'react-datepicker/dist/react-datepicker.css'

import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';



const Tache= ()=> {
    
    
  const [age, setAge]= useState('Choisir');
  const handleChange = (event) => {
      setAge(event.target.value)
  }

  const [selectedDate,setSelectedDate]=  useState('')

  const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));

  const handleChange2 = (newValue) => {
    setValue(newValue);
  };

   
        


        return (
            
            
            <main>
                
                <Typography sx={{ mx: "auto"}}  component ='h1' variant='h3'>
                    Tache
                </Typography>
                <form>
                
                <Stack spacing={3} sx={{ mx: "auto", width: 600 }}>
                        <div>

                        
                        <Typography sx={{ mx: "auto"}} component ='h1' variant='h5'>
                            Type d'activité:
                        </Typography>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        
                        onChange={handleChange}
                        >
                            
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                       
                                  
                        </div>


                        <div>
                        <Typography component ='h1' variant='h5'>
                        Adress :
                        </Typography>
                        <TextField id="outlined-basic" variant="outlined">
                        <input type="text"  />
                        </TextField>
                        
                        </div>
                        <div>
                        <Typography component ='h1' variant='h5'>
                        Description :
                        </Typography>
                  
                        <TextareaAutosize
                        aria-label="minimum height"
                        
                        minRows={5}
                        placeholder="Description"
                        style={{ width: 300 }
                         }
                        ></TextareaAutosize>
                          
                         
                        
                        
                         </div>
                         <div>
                         <Typography component ='h1' variant='h5'>
                         Travailleur :
                        </Typography>
                         <TextField id="outlined-basic" variant="outlined">
                         <input type="text"  />
                        </TextField>
                         
                         </div>
                         <div>
                         <Typography component ='h1' variant='h5'>
                         Date :
                         </Typography>
                         
                           
                            
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                
                                    <DesktopDatePicker
                                    
                                    inputFormat="MM/dd/yyyy"
                                    value={value}
                                    onChange={handleChange2}
                                    renderInput={(params) => <TextField {...params} />}
                                    />
                            </LocalizationProvider>
                         
                         </div>

                         
                         <Button type="submit" variant="contained">
                                Envoyer
                         </Button>


                         </Stack>                    
                    
                         </form>
                
            </main>
            
        )

    

}
export default Tache;