import React, {useState} from 'react';
import './App.css';
import Residences from './Components/Residences';
import ExchangeRate from './Components/ExchangeRate';

const usdExchangeDefault = {value:1,simbol:"$",iso: 'USD'};

function App() {
  const [actualExchange, setActualExchange] = useState(usdExchangeDefault);
  
  return (
    <div className="App">
      <ExchangeRate currentDay={new Date()} onChange={setActualExchange} usdExchangeDefault={usdExchangeDefault}/>
      <Residences exchangeValue={actualExchange}/>
    </div>
  );
}

export default App;
