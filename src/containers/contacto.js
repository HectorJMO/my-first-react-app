import React from 'react';
import styled from 'styled-components';
import NavbarS from '../components/navbar/navbarS';
import Footer from '../components/footer/footer';
import Formulario from '../components/formulario/index';

const Wrapper = styled.section`
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

const ContactoContainer = () => (
    <Wrapper>
        <NavbarS />
        <Formulario />
        <Footer />
    </Wrapper>
);

export default ContactoContainer;
