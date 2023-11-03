import React,{useEffect,useState} from "react";
import './Residences.css'

const Residences = ({exchangeValue}) =>{
    const startingValue = 150000
    return (
        <div className="residences">
            <h1>Apartamentos Únicos</h1>
            <p>Apartamentos con increíbles vistas, desde tipo Estudio hasta apartamentos de 1 y 2 habitaciones.</p>
            <p>Con precios que inician en los {exchangeValue?.simbol}{(exchangeValue?.value * startingValue)}</p>
        </div>
    );
}

 export default Residences;