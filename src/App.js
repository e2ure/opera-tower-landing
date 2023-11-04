import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Residences from './Components/Residences';
import Navbar from './Components/Navbar';
import ResidencesDetails from './Components/ResidencesDetails';

const usdExchangeDefault = {value:1,simbol:"$",iso: 'USD'};

function App() {
  const [actualExchange, setActualExchange] = useState(usdExchangeDefault);
  
  return (
    <div className="App">
      <div><Navbar onChange={setActualExchange} usdExchangeDefault={usdExchangeDefault}/></div>
      {/* <ExchangeRate currentDay={new Date()} onChange={setActualExchange} usdExchangeDefault={usdExchangeDefault}/>
      <Residences exchangeValue={actualExchange}/> */}
      <div>
        <Routes>
          <Route path='/' element={<Residences  exchangeValue={actualExchange}/>}/>
          <Route path='/residences' element={<Residences  exchangeValue={actualExchange}/>}/>
          <Route path='/residences-details' element={<ResidencesDetails exchangeValue={actualExchange} />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
