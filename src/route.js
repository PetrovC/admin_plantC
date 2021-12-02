import Home from "./Pages/admin/Home/Home"
import Agenda from "./Pages/admin/Agenda/Agenda"
import Admin from "./Pages/admin/Admin"
import Inscription from "./Pages/admin/Beneficiaire/Inscriptions"
import Login from "./Pages/Auth/Login/Login"
import Missions from "./Pages/admin/Missions/Missions"
import Tache from "./Pages/admin/Missions/Tache"


export const appRoute = [
    { path: '/', element: <Admin />, children: [
        { path: '/', element: <Home /> },
        { path: '/agenda', element: <Agenda/> },
        { path: '/adduser', element: <Inscription/>},
        { path: '/missions', element: <Missions/>},
        { path: '/taches', element: <Tache/>},
        
    ] },
    { path: '/login', element: <Login /> }
]