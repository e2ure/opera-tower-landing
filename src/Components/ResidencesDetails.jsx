import React,{useState} from "react";
import './ResidencesDetails.css'
import residencesImg from './images/residence_siteplan_2.jpg';
import data from '../Data/residences.json';
import studioSizeImage from './images/studio-size.jpg';
import oneBethSize from './images/mid-size.jpg';
import toeBethSize from './images/full-size.jpg';
import ApartmentDetail from "./ApartmentDetail";

const ResidencesDetails = ({exchangeValue}) =>{
    const [apartment, setApartment] = useState(null);
    const [modalShow, setModalShow] = useState(false);

    const showDetailModal = (selected) =>{
        setApartment(selected);
        setModalShow(true);
    }

    return (
        <div className="residences-details">
            <div className="item">
                <h1>Apartamentos Únicos</h1>                
                <img src={residencesImg} className="tilte-img"></img>
            </div>
            <div className="item">
                <h2>Selecciona el estilo que más te guste</h2>
                <div className="apartments">
                    {data.map( residence => {
                        console.log(residence)
                        switch(residence.type){
                            case 'studio-size':
                                return(
                                    <div className="item">
                                        <h3>Apartamento tipo Estudio</h3>
                                        <p>Precios desde los <b>{exchangeValue?.simbol} {Intl.NumberFormat('en-US').format((exchangeValue?.value * residence["starting-price"]))} </b></p>
                                        <img src={studioSizeImage} className="apartments-img" onClick={()=> showDetailModal(residence)}/>
                                    </div>
                                )
                            break;
                            case 'mid-size':
                                return(
                                    <div className="item">
                                        <h3>Apartamento de 1 cuarto y 1 baño</h3>
                                        <p>Precios desde los <b>{exchangeValue?.simbol} {Intl.NumberFormat('en-US').format((exchangeValue?.value * residence["starting-price"]))} </b></p>
                                        <img src={oneBethSize} className="apartments-img" onClick={()=> showDetailModal(residence)}/>
                                    </div>
                                )
                            break;
                            case 'full-size':
                                return(
                                    <div className="item">
                                        <h3>Apartamento de 2 cuartos y 2 baños</h3>
                                        <p>Precios desde los <b>{exchangeValue?.simbol} {Intl.NumberFormat('en-US').format((exchangeValue?.value * residence["starting-price"]))} </b></p>
                                        <img src={toeBethSize} className="apartments-img" onClick={()=> showDetailModal(residence)}/>
                                    </div>
                                )
                            break;
                            default:
                                return("")
                        }
                    })}
                </div>
            </div>
            {(apartment && <ApartmentDetail apartment={apartment} show={modalShow} onHide={() => setModalShow(false)}/>)}
        </div>
    );
}

 export default ResidencesDetails;