import './App.css';
import LandingPage from './Pages/LandinPage';
import { Routes,Route } from 'react-router';
import About from './Components/Other/About';
function App() {
  return (
      <>
            <Routes>
                 <Route path='/'  element = {<LandingPage/>}/>
                 <Route path='/about'  element = {<About/>}/>
            </Routes>
      </>
  );
}

export default App;
