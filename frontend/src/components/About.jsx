import React from 'react';
import aboutimage from '../images/about.png';

function About() {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={aboutimage} alt=''/>
            </div>
            <div className='about-text'>
                <h1>CONOCE MAS SOBRE NOSOTROS</h1>
                <p>El proyecto busca crear un software para empresas colombianas que automatice la gestión de seguridad y procesos administrativos, mejorando la eficiencia y reduciendo costos. Los objetivos incluyen identificar requisitos, planificar, desarrollar el software, integrarlo con sistemas existentes y evaluar su impacto.</p>
                <button>READ MORE</button>
            </div>
        </div>
    );
}

export default About;