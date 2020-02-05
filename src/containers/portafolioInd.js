import React from 'react';
import styled from 'styled-components';
import { HeaderImg, Body } from '../components/portafolio/portafolioInd';
import NavbarS from '../components/navbar/navbarS';
import Footer from '../components/footer/footer';
import Foto from '../img/edificiomax.jpg';

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

const PortafolioIndContainer = () => (
    <Section>
        <NavbarS />
        <HeaderImg img={Foto} />
        <Body />
        <Footer />
    </Section>
);

export default PortafolioIndContainer;