import React from 'react';
import styled from 'styled-components';

import Navbar from '../components/navbar/navbar';
import Equipo from '../components/equipo/index';
import AboutUs from '../components/aboutUs/aboutUs';
import Formulario from '../components/formulario/index';
import Portafolio from '../components/portafolio/portafolio';
import Footer from '../components/footer/footer';

const Section = styled.section`
    background-color: #fff;
    color: #555;
    font-family: 'Lato', 'Arial', sans-serif;
    font-weight: 300;
    font-size: 20px;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: block;
`;

const HomeContainer = () => (
    <Section>   
        <Navbar />
        <Equipo />
        <Portafolio />
        <AboutUs />
        <Formulario />
        <Footer />
    </Section>
);

export default HomeContainer;
