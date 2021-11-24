
import './App.css';



import { useRoutes } from 'react-router-dom';
import { appRoute } from './route';
import Navvv from './componement/navBar/NavBar';



function App() {
  const router = useRoutes(appRoute)
  
  return (
    <div >
      <Navvv/>
       
      {router}
      <heads />
      
    </div>
    
  );
}

export default App;
