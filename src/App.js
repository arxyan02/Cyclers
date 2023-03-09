import Logo from './logo.jpg'
import Cycler from './cycler.jpg'
import './App.css'
import Searchbar from './Searchbar';
import Bottomlogos from './Bottomlogos';
import { IconButton } from '@mui/material';
function App() {
  return (
    <div className='App'>
      <div className='Topbar'>
        <div className='Logodiv'><img className='Logo' src={Logo}></img></div>
        <div className='Topbuttons'>
          <IconButton sx={{color: 'black', marginRight: 7 ,fontSize: 17 }}><h3>Cycling</h3></IconButton>
          <IconButton sx={{color: 'black', marginRight: 7,fontSize: 17}}><h3>Working</h3></IconButton>
          <IconButton sx={{color: 'black', marginRight: 7,fontSize: 17}}><h3>Help</h3></IconButton>
          <IconButton sx={{color: 'black',fontSize: 17}}><h3>Explore now</h3></IconButton>
        </div>
      </div>
        <div className='MainPage'>
        <div className='Bottomleft'>
          <div className='HeadText'>
            Away from<br/> the crowds<br/> cycling
          </div>
          <div className='SubText'>Explore Dream Destination</div>
          <div className='SearchBar'><Searchbar/></div>
          <div className='Logos'><Bottomlogos/></div>
        </div>  
        <div className='BottomRight'>
        <div className='Cycler'>
           <img className='Bike' src={Cycler}></img>
          </div>
        </div>
        </div>
         
    </div>
  );
}

export default App;
