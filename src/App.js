import './App.css';
import LandingPage from './Pages/LandinPage';
import { Routes,Route } from 'react-router';
import About from './Components/LandingPageComponents/About';
import UserTypeSelection from "./Components/Registration/UserRegistration";
import {useState} from "react";
import BuyerRegistration from "./Components/Registration/BuyerRegistrationForm";
import PublisherRegistration from "./Components/Registration/PublisherRegistrationForm";
import Navbar from "./Components/CommonComponents/Navbar";
import Login from "./Components/CommonComponents/Login";
import BuyerDashboard from "./Components/BuyerComponents/BuyerDashboard";
import PublisherDashboard from "./Components/PublisherComponents/PublisherDashboard";


function App() {
    const [userType, setUserType] = useState(null);

  const handleUserTypeSelect = (type) => {
    setUserType(type);
  };
  return (
      <>
            <Navbar/>
            <Routes>
                 <Route path='/'  element = {<LandingPage/>}/>
                 <Route path='/about'  element = {<About/>}/>
                 <Route path='/login'  element = {<Login/>}/>
                 <Route path="/registration" element={!userType ? (
                        <UserTypeSelection onSelectUserType={handleUserTypeSelect} />
                      ) : userType === 'buyer' ? (
                        <BuyerRegistration onBack={() => setUserType(null)} />
                      ) : (
                        <PublisherRegistration onBack={() => setUserType(null)} />
                      )}/>
                <Route  path='/buyerdashboard' element={<BuyerDashboard/>}/>
                <Route  path='/publisherdashboard' element={<PublisherDashboard/>}/>
            </Routes>
      </>
  );
}

export default App;
