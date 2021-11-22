
import './App.css';
import { useRoutes } from 'react-router-dom';
import { appRoute } from './route';

function App() {
  const router = useRoutes(appRoute)
  
  return (
    <div >
      {router}
    </div>
  );
}

export default App;
