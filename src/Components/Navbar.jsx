import React from 'react';
import {Link} from 'react-router-dom'
import ExchangeRate from './ExchangeRate';

const Navbar = ({onChange,usdExchangeDefault}) =>{
    return(
        <div className='navbar'>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="residences">Apartamentos</Link></li>
                    <li><Link></Link></li>
                    <li><ExchangeRate  currentDay={new Date()}  onChange={onChange} usdExchangeDefault={usdExchangeDefault}/></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;

