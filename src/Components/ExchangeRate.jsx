import React,{useEffect,useState} from "react";
const usdExchangeDefault = {value:1,simbol:"$",iso: 'USD'};

const ExchangeRate = ({onChange,currentDay}) =>{
    const [colonValue, setColonValue] = useState(null)

    useEffect(()=>{
        const dayPath = `${currentDay.getDate()}/${currentDay.getMonth() +1}/${currentDay.getFullYear()}`
        fetch(`https://tipodecambio.paginasweb.cr/api/${dayPath}`)
        .then( (reponse ) => reponse.json())
        .then( data => setColonValue({value:data.venta,simbol:"₡",iso:"CRC"}))
    },[]);

    return (
        <div>
            <label>Seleccione la moda:</label>
            <select onChange={(event) =>{ onChange(event.target.value)}}>
                <option value={usdExchangeDefault}>{usdExchangeDefault.iso}</option>
                <option value={colonValue}>{colonValue.iso}</option>
            </select>
        </div>
    );
}

export default ExchangeRate;