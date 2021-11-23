import Home from "./Pages/Home"
import Agenda from "./Pages/Agenda"
import Tache from "./Pages/Tache"
import Mission from "./Pages/Missions"
import Inscription from "./Pages/Inscriptions"


export const appRoute = [
    {path : '', element:null},
    {path:'home', element:<Home />},
    {path:'Agenda', element:<Agenda />},
    {path:'Tache', element:<Tache />},
    {path:'Mission', element:<Mission />},
    {path : 'inscription', element:<Inscription />},

]