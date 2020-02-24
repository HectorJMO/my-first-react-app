import React from 'react';
import styled from 'styled-components';

import Button from './navbarButton';
import Fondo from '../../img/hero.jpg';
import Logo from '../../img/logoS.png';

const NavbarBackground = styled.div`
    background-image: -webkit-linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${(props)=>props.img});
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: auto;

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
const Navbar = styled.div`
    display: flex;
`;
const LogoImg = styled.img`
    height: 100px;
    width: auto;
    border-radius: 10px;
    float: left;
    margin-top: 20px;
    margin-left: 20px;
`;
const Row = styled.div`
    max-width: 1140px;
    margin: 0 auto;
`;

const navbar = () => {
    const links = [
        {text: 'CONTACTO', url: '/contacto'},
        {text: 'ABOUT US', url: '/aboutUs'},
        {text: 'PORTAFOLIO', url: '/portafolio'},
        {text: 'EQUIPO', url: '/equipo'},
        {text: 'HOME', url: '/home'}
    ];

    return(
        <NavbarBackground img={Fondo}>
            <Row>
                <a href="index.html">
                    <LogoImg src={Logo} alt="ConstructureLabs logo"  className="logo"></LogoImg>
                </a>
                {
                    links.map(({text, url}) => (
                        <Button url={url} text={text} key={url} />
                    ))
                }
            </Row>
            <div className='hero-text-box'>
                <h1>Construye, construye,<br/> construye!</h1>
                <a className="button b-alive" href='/contacto'>Contact Us</a>
                <a className="button b-ghost" href='/aboutUs'>About Us</a>
            </div>
        </NavbarBackground>
    );
};

export default navbar;