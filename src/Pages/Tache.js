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

//css
import '../componement/style/MyStyle.css'



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
                
                <Typography sx={{ mx: "auto"}}  component ='h1' variant='h3' >
                    Tache
                </Typography>
                <form>
                
                <Stack spacing={3} sx={{ mx: "auto", width: 600 }}>
                        <Stack sx={{ mx: "auto",width: 600}} > 

                        

                        
                        <Typography sx={{ mx: "auto"}} component ='h1' variant='h5' >
                            Type d'activité:
                        </Typography>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        
                        onChange={handleChange}
                        sx={{ width: '100%'}}
                        >
                            
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                       
                                  
                        </Stack>

                        <Stack sx={{ mx: "auto",width: 600}} >
                        
                        <Typography component ='h1' variant='h5'sx={{ mx: "auto"}}>
                        Adress :
                        </Typography>
                        <TextField id="outlined-basic" variant="outlined" sx={{ width: '100%'}}>
                        <input type="text"  />
                        </TextField>
                        
                        
                        </Stack>


                        <Stack sx={{ mx: "auto",width: 600}} >
                        <Typography component ='h1' variant='h5'sx={{ mx: "auto"}}>
                        Description :
                        </Typography>
                  
                        <TextareaAutosize
                        aria-label="minimum height"
                        
                        minRows={5}
                        placeholder=""
                        style={{ width: 600 }
                         }
                        ></TextareaAutosize>
                          
                          </Stack>
                        
                        
                         
                          <Stack sx={{ mx: "auto",width: 600}} >
                         <Typography component ='h1' variant='h5' sx={{ mx: "auto"}}>
                         Travailleur :
                        </Typography>
                         <TextField id="outlined-basic" variant="outlined" sx={{ width: '100%'}}>
                         <input type="text"  />
                        </TextField>
                         
                        </Stack>


                        <Stack sx={{ mx: "auto",width: 600}} >
                         <Typography component ='h1' variant='h5'sx={{ mx: "auto"}}>
                         Date :
                         </Typography>
                         
                           
                            
                            <LocalizationProvider dateAdapter={AdapterDateFns} >
                                
                                    <DesktopDatePicker
                                    sx={{ width: '100%'}}
                                    inputFormat="MM/dd/yyyy"
                                    value={value}
                                    onChange={handleChange2}
                                    renderInput={(params) => <TextField {...params} />}
                                    />
                            </LocalizationProvider>
                         
                            </Stack>

                            <Stack sx={{ mx: "auto",width: 600}} >
                         <Button type="submit" variant="contained" style={{ width: 100 }} sx={{ mx: "auto"}}>
                                Envoyer
                         </Button>
                         </Stack>

                         </Stack>                    
                    
                         </form>
                
            </main>
            
        )

    

}
export default Tache;