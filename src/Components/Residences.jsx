import React,{useEffect,useState} from "react";
import './Residences.css'
import residencesImg from './images/Residence.jpg'

const Residences = ({exchangeValue}) =>{
    const startingValue = 150000
    return (
        <div className="residences">
            <div className="item">
                <h1>Apartamentos Únicos</h1>
                <p>Apartamentos con increíbles vistas, desde tipo Estudio hasta apartamentos de 1 y 2 habitaciones.</p>
                <p>Con precios que inician en los <b>{exchangeValue?.simbol}{Intl.NumberFormat('en-US').format((exchangeValue?.value * startingValue))}</b></p>
            </div>
            <div className="item">
                <img src={residencesImg}></img>
            </div>
        </div>
    );
}

 export default Residences;