
import './App.css';
import { useRoutes } from 'react-router-dom';
import { appRoute } from './route';
import DateAdapter from '@mui/lab/AdapterMoment';
import { LocalizationProvider } from '@mui/lab';
import Nav from './containers/Nav/Nav';
import Header from './containers/header/Header';



function App() {
  const router = useRoutes(appRoute)
  
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
    <>
      <Header/>
      {router}
      <Nav/>
    </>

    </LocalizationProvider>
    
  );
}

export default App;
