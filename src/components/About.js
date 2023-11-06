import React from "react";
import { MdPhone, MdLocationPin, MdWhatsapp, MdMailOutline } from "react-icons/md";
import "./About.css";

const AboutUs = () => {


    return (
        <div className="section-about">
            <div className="company-info">
                <h2>Nuestra experiencia</h2>
                <p>
                    Más de 13 años desarrollando esta actividad nos aportan un gran conocimiento del sector inmobiliario, lo que nos permite conocer y anticiparnos a los cambios constantes del mercado y detectar nuevas oportunidades de negocio.
                </p>
            </div>
            <div className="other-projects">
                <h2>Proyectos exitosos</h2>
                <a className="other-projects-item" href="https://citymap.com.gt/propiedades/torre-zentia/">
                    <img className="other-projects-item-image" src={require('./../Images/edificio0.jpg')} alt="Zentia" width="100" height="132" />
                </a>
                <a className="other-projects-item" href="https://www.olimare.com/bienes-raices-republica-dominicana/santiago/-se-vende-torres-de-apartamentos-con-diseno-de-vanguardia-y-ultima-generacion-en-la-ci-5661.php">
                    <img src={require('./../Images/edificio1.jpeg')} alt="Olimare" width="100" height="132" />
                </a>
                <a className="other-projects-item" href="https://sinigual.org/etihad-towers-abu-dhabi/">
                    <img src={require('./../Images/edificio2.jpg')} alt="Etihad" width="100" height="132" />
                </a>
            </div>
            <div className="contact-info">
                <h2>Contactenos</h2>
                <a className="contact-info-item" href="(+506) 7721-7734"><MdPhone className="item-logo" />(+506) 7721-7734</a>
                <a className="contact-info-item" href="https://www.google.com/maps/place/Lago+de+La+Sabana/@9.9341842,-84.1038662,19z/data=!4m6!3m5!1s0x8fa0fd2becfd5cad:0x5f5c119538dcebe9!8m2!3d9.9348241!4d-84.1034112!16s%2Fg%2F11fn9z1mhr?entry=ttu">
                    <MdLocationPin className="item-logo" />350mts Oeste y 125mts Norte de la Contraloría General de la República.
                </a>
                <a className="contact-info-item" href="http://ws.me//(+506)88777777"><MdWhatsapp className="item-logo"/>(+506) 8877-7777</a>
                <a className="contact-info-item" href="mailto:VENTAS@DESARROLLO.CR"> <MdMailOutline className="item-logo"/>ventas@desarrollo.cr</a>
            </div>
        </div>
    );
};

export default AboutUs;