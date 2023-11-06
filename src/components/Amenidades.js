import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './Amenidades.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import cineImg from './images/cine.jpg'
import poolImg from './images/pool.jpg'
import gymImg from './images/gimnasio.jpg'

const Amenidades = () => {
    return (
        <div className="Amenidades">
            <div className="Titulo">
                <h1>Amenidades</h1>
            </div>
            <Carousel className="Carousel">
                <Carousel.Item>
                    <div>
                        <img src={cineImg} alt="Sala de cine" />
                    </div>
                    <Carousel.Caption>
                        <h3>Disfrute del cine sin salir de casa</h3>
                        <p>Estrenos todo los meses.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div>
                        <img src={poolImg} alt="Mesa de billar" />
                    </div>
                    <Carousel.Caption>
                        <h3>Mesa de billar</h3>
                        <p>Pasela bien con sus amigos.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div>
                        <img src={gymImg} alt="Gimnasio" />
                    </div>
                    <Carousel.Caption>
                        <h3>Ejercitese</h3>
                        <p>
                            Cuide su salud y manteganse en forma.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Amenidades;