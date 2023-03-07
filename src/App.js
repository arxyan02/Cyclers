import Logo from './logo.jpg'
import Cycler from './cycler.jpg'
import './App.css'
import { IconButton } from '@mui/material';
function App() {
  return (
    <div className='App'>
      <div className='Topbar'>
        <div className='Logodiv'><img className='Logo' src={Logo}></img></div>
        <div className='Topbuttons'>
          <button className='Cyclersbutton'><h3>Cyclers</h3></button>
          <button className='Workingbutton'><h3>Working</h3></button>
          <button className='Helpbutton'><h3>help</h3></button>
          <button className='Explorebutton'><h3>Explore now</h3></button>
        </div>
      </div>
        <div className='Cycler'>
        <img className='Bike' src={Cycler}></img>
        </div> 
    </div>
  );
}

export default App;
