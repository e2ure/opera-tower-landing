import React from "react";
import './App.css';
import AboutUs from './components/AboutUs';
import Amenidades from "./components/Amenidades";


const App = () => {
  return (
    <div className="App">
      <Amenidades />
      <AboutUs />
    </div>
    
  );
};

export default App;