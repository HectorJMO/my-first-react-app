import React from 'react';
import styled from 'styled-components';
import NavbarS from '../components/navbar/navbarS';
import Footer from '../components/footer/footer';
import Encabezado from '../components/encabezado/index';
import Portafolio from '../components/portafolio/portafolio';

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

const Section = styled.div`
    padding-top: 60px;
`;

const PortafolioContainer = () => {
    const info = {
        title: 'Portafolio',
        info: 'Praesent at nunc quis turpis ullamcorper placerat. Nam commodo massa et lacus efficitur, eu congue ipsum malesuada. Aliquam consequat quam ac volutpat convallis. Etiam iaculis metus turpis, at feugiat nulla gravida vel. Nam eu turpis vitae felis maximus eleifend hendrerit in dolor.'
    }

    return (
        <Wrapper>
            <NavbarS />
            <Section>
                <Encabezado title={info.title} info={info.info} key={info.title} />
            </Section>
            <Portafolio />
            <Footer />
        </Wrapper>
    );
};

export default PortafolioContainer;
