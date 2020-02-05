import React from 'react';
import styled from 'styled-components';
import AboutUs from '../components/aboutUs/aboutUs';
import NavbarS from '../components/navbar/navbarS';
import Footer from '../components/footer/footer';

const Section = styled.div`
    margin: 0 auto;
    background-color: #fff;
    color: #555;
    font-family: 'Lato', 'Arial', sans-serif;
    font-weight: 300;
    font-size: 20px;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    display: block;
`;

const AboutUsContainer = () => (
        <Section>
            <NavbarS />
            <AboutUs />
            <Footer />
        </Section>
);

export default AboutUsContainer;
