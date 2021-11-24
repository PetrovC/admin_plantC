
import './App.css';
import NavBar from "./componement/navBar/NavBar";
// import Navv from "./componement/navBar/nav";

import { useRoutes } from 'react-router-dom';
import { appRoute } from './route';



function App() {
  const router = useRoutes(appRoute)
  
  return (
    <div >
       {/* <Navv/> */}
      {router}
      <heads />
      <NavBar />
    </div>
    
  );
}

export default App;
