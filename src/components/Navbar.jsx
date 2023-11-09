import React from 'react';
import {Link} from 'react-router-dom'
import ExchangeRate from './ExchangeRate';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css'

const Navbar = ({onChange,usdExchangeDefault}) =>{
    return(
        <div className='navbar'>
            <nav>
                <ul className='nav-container'>
                    <li className='nav-item' id='home'><Link to="/">Inicio</Link></li>
                    <li className='nav-item'><ScrollLink to="amenities">Amenidades</ScrollLink></li>
                    <li className='nav-item'><ScrollLink to="residences">Apartamentos</ScrollLink></li>
                    <li className='nav-item'><ScrollLink to="about">Sobre Nosotros</ScrollLink></li>
                    <li className='nav-currency'><ExchangeRate  currentDay={new Date()}  onChange={onChange} usdExchangeDefault={usdExchangeDefault}/></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;

