import { Typography } from "@mui/material";
import React from 'react';





const Tache= ()=> {
    
    

   
        


        return (
            

            <main>
                
                <Typography component ='h1' variant='h3'>
                    Tache
                </Typography>
                <form >
                        <Typography component ='h1' variant='h5'>
                                <label component ='h1'>
                                type d'activiter
                                </label>
                        </Typography>
                        <div>
                        <select >
                            <option value="grapefruit">1</option>
                            <option value="lime">2</option>
                            <option value="coconut">3</option>
                            <option value="mango">4</option>
                        </select>
                        </div>
                        <div>
                        <input type="text"  />
                        </div>
                        <div>
                        <textarea>
                          Bonjour, voici du texte dans une zone de texte
                         </textarea>
                         </div>
                         <div>
                         <input type="text"  />
                         </div>
                         <div>
                         <input type="date"  />
                         </div>

                         <input type="submit" value="Envoyer" />
                                                
                    </form>
                
            </main>
        )

    

}
export default Tache;