import React, {useState} from 'react';
import './App.css';
import Residences from './Components/Residences';
import ExchangeRate from './Components/ExchangeRate';

function App() {
  const [actualExchange, setActualExchange] = useState(1);
  return (
    <div className="App">
      <ExchangeRate currentDay={new Date()} onChange={setActualExchange}/>
      <Residences exchangeValue={actualExchange}/>
    </div>
  );
}

export default App;
