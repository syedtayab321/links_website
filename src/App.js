import './App.css';
import LandingPage from './Pages/LandinPage';
import { Routes,Route } from 'react-router';
import About from './Components/LandingPageComponents/About';
import UserTypeSelection from "./Components/Registration/UserRegistration";
import {useState} from "react";
import BuyerRegistration from "./Components/Registration/BuyerRegistrationForm";
import PublisherRegistration from "./Components/Registration/PublisherRegistrationForm";
import Login from "./Components/CommonComponents/Login";
import PublisherDashboard from "./PublisherPortal/PublisherDashboard";
import ForgotPassword from "./Components/CommonComponents/ForgotPassword";
import EmailConfirmation from "./Components/CommonComponents/EmailConfirmation";
import BuyerDashboard from "./BuyerPortal/BuyerDashboard";
import BuyerWebsiteListings from "./BuyerPortal/BuyerPages/BuyerWebsiteListing";
import LinkInsertion from "./BuyerPortal/BuyerPages/LinkInsertion";
import BuyerOrderDetails from "./BuyerPortal/BuyerPages/BuyerOrders";
import BuyerManagePayments from "./BuyerPortal/BuyerPages/BuyerManagePayments";
import BuyerProfile from "./BuyerPortal/BuyerPages/BuyerProfile";


function App() {
    const [userType, setUserType] = useState(null);

  const handleUserTypeSelect = (type) => {
    setUserType(type);
  };
  return (
      <>
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
                <Route path = '/forgot-password' element = {<ForgotPassword/>}/>
                <Route path = '/confirmation' element = {<EmailConfirmation/>}/>
                <Route path = '/buyer-listing' element = {<BuyerWebsiteListings/>}/>
                <Route path = '/link-insertion' element = {<LinkInsertion/>}/>
                <Route path = '/buyer-orders' element = {<BuyerOrderDetails/>}/>
                <Route path='/buyer-payments'  element={<BuyerManagePayments/>} />
                <Route path='/buyer-profile' element={<BuyerProfile/>} />
            </Routes>
      </>
  );
}

export default App;
