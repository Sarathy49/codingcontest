
import './App.css';
import Ticket from './Components/Ticket';
import Appbar from './Components/Appbar';
import { Route,Router } from 'react-router-dom';
import Color from './Components/Post';
import Tickett from './Components/Post';
import Nav from './Components/navbar';

function App() {
  return (
    <div className="App">
      <Appbar />
      <Ticket/>
    
    </div>
  );
}

export default App;
