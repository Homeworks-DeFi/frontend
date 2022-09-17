import React from 'react';
import { Routes, Route} from "react-router-dom";
import Home from './components/home/Home';
import About from './components/about/About'
import Marketplace from './components/marketplace/Marketplace';
import Signup from './components/signup/Signup';
import Login from './components/login/Login'
import InvestorPage from './components/investorPage/InvestorPage';
import CollectionDetails from './components/collectionDetails/CollectionDetails';
import LoanSeekerForm from './components/loanSeekerFoam/LoanSeekerForm';
import Loanseekerhome from './components/loanseekerhome/LandingPage';
import './App.css';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/home" element={ <Home/> } />
        <Route path="/about" element={<About />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/investor" element={<InvestorPage />} />
        <Route path="/loan" element={<LoanSeekerForm />} />
        <Route path=":id" element={<CollectionDetails />} />
        <Route path="/loanseekerhome" element={<Loanseekerhome />} />
      </Routes>
    </div>
  );
}

export default App;