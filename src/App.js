import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import AboutUs from './components/AboutUs';
import Amenidades from "./components/Amenidades";

import Residences from './Components/Residences';
import Navbar from './Components/Navbar';
import ResidencesDetails from './Components/ResidencesDetails';

const usdExchangeDefault = {value:1,simbol:"$",iso: 'USD'};

function App() {
  const [actualExchange, setActualExchange] = useState(usdExchangeDefault);
  
  return (
    <div className="App">
      <div><Navbar onChange={setActualExchange} usdExchangeDefault={usdExchangeDefault}/></div>
      <div>
        <Routes>
          <Route path='/' element={<Residences  exchangeValue={actualExchange}/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/amenities' element={<Amenidades/>}/>
          <Route path='/residences' element={<Residences  exchangeValue={actualExchange}/>}/>
          <Route path='/residences-details' element={<ResidencesDetails exchangeValue={actualExchange} />}/>
        </Routes>
      </div>
    </div>
    
  );
};

export default App;