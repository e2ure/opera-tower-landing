import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import AboutUs from './components/About';
import Amenidades from "./components/Amenidades";

import Residences from './components/Residences';
import Navbar from './components/Navbar';
import ResidencesDetails from './components/ResidencesDetails';
import Footer from './components/Footer';

const usdExchangeDefault = {value:1,simbol:"$",iso: 'USD'};

function App() {
  const [actualExchange, setActualExchange] = useState(usdExchangeDefault);
  
  return (
    <div className="App">
      <div><Navbar onChange={setActualExchange} usdExchangeDefault={usdExchangeDefault}/></div>
      <div>
         <Routes>
          {/* <Route path='/' exact Component={<Residences  exchangeValue={actualExchange}/>}/> */}
          <Route path='/residences-details' exact Component={<ResidencesDetails exchangeValue={actualExchange} />}/>
        </Routes>
        <section id='residences'>
          <Residences  exchangeValue={actualExchange}/>
        </section>
        <section id='amenities'> 
          <Amenidades/>
        </section>        
        <section id='about'>
          <AboutUs/>
        </section>
      </div>
      <Footer />
    </div>
    
  );
};

export default App;