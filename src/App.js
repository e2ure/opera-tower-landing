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

const Main = ({actualExchange}) => {
  return(
    <main>
      <section id='residences'>
        <Residences  exchangeValue={actualExchange}/>
      </section>
      <section id='amenities'> 
        <Amenidades/>
      </section>        
      <section id='about'>
        <AboutUs/>
      </section>
    </main>
  );
}

function App() {
  const [actualExchange, setActualExchange] = useState(usdExchangeDefault);
  
  return (
    <div className="App">
      <div><Navbar onChange={setActualExchange} usdExchangeDefault={usdExchangeDefault}/></div>
      <div>
        
         <Routes>
          <Route path='/' exact element={<Main actualExchange={actualExchange}/>}/>
          <Route path='/residences-details' element ={<ResidencesDetails exchangeValue={actualExchange} />}/>
        </Routes>
      </div>
      <Footer />
    </div>
    
  );
};

export default App;