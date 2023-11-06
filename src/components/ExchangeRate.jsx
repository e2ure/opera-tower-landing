import React,{useEffect,useState} from "react";
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExchangeRate = ({onChange,currentDay,usdExchangeDefault}) =>{
    const [colonValue, setColonValue] = useState(null)

    useEffect(()=>{
        const dayPath = `${currentDay.getDate()}/${currentDay.getMonth() +1}/${currentDay.getFullYear()}`
        fetch(`https://tipodecambio.paginasweb.cr/api/${dayPath}`)
        .then( (reponse ) => reponse.json())
        .then( data => setColonValue({value:data.venta,simbol:"₡",iso:"CRC"}))
    },[]);

    const handleChange = (event) =>{
        const isoValue = event.target.value;
        const selectedValue = isoValue === 'USD' ? usdExchangeDefault : colonValue;
        onChange(selectedValue);
    }

    return (
        <div>
            <label>Seleccione la moda:</label>
            <Form.Select onClick={handleChange}>
                <option key={usdExchangeDefault} value={usdExchangeDefault.iso}>{usdExchangeDefault.iso}</option>
                {(colonValue && <option value={colonValue.iso}>{colonValue.iso}</option>)}
            </Form.Select>
        </div>
    );
}

export default ExchangeRate;