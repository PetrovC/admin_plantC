
import './App.css';
import NavBar from "./componement/navBar/NavBar";

import { useRoutes } from 'react-router-dom';
import { appRoute } from './route';


function App() {
  const router = useRoutes(appRoute)
  
  return (
    <div >
       
      {router}
      <heads />
      <NavBar />
    </div>
    
  );
}

export default App;
