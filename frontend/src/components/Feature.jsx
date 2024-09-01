import React from 'react';
import Featurebox from './Featurebox';
import fimage1 from '../images/1.svg';
import fimage2 from '../images/2.svg';
import fimage3 from '../images/3.svg';
import fimage4 from '../images/4.svg';

function Feature() {
    return (
        <div id='features'>
            <h1>FEATURES</h1>
            <div className='a-container'>
                <Featurebox image={fimage1} title="Agilidad" description="Mayor agilidad en el control de accesos y generacion de reportes" />
                <Featurebox image={fimage2} title="Monitoreo" description="Monitorización de accesos y eventos de seguridad" />
                <Featurebox image={fimage3} title="Historial" description="Registro de todos los eventos de seguridad" />
                <Featurebox image={fimage4} title="Visibilidad" description="Visibilidad de los eventos de seguridad" />
            </div>
        </div>
    );
}

export default Feature;