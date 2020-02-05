import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from './navbarButton';
import Logo from '../../img/logoS.png';

const Wrapper = styled.div`
    background-color: #666666;
    height: 100px;
    background-position: center;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: block;
    color: #555;
    font-family: 'Lato', 'Arial', sans-serif;
    font-weight: 300;
    font-size: 20px;
    text-rendering: optimizeLegibility;
`;

const LogoLink = styled(Link)`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', 'Arial', sans-serif;
    font-weight: 300;
    font-size: 20px;
    text-rendering: optimizeLegibility;
`;

const LogoImg = styled.img`
    height: 70px;
    width: auto;
    border-radius: 10px;
    float: left;
    margin-top: 15px;
    margin-left: 20px;
`;

const navbarS = () => {
    const links = [
        {text: 'CONTACTO', url: '/contacto'},
        {text: 'ABOUT US', url: '/aboutUs'},
        {text: 'PORTAFOLIO', url: '/portafolio'},
        {text: 'EQUIPO', url: '/equipo'},
        {text: 'HOME', url: '/home'}
    ];

    return (
        <Wrapper>
            <LogoLink to="/">
                <LogoImg src={Logo} alt="ConstructureLabs logo" />
            </LogoLink>
            {
                links.map(({text, url}) => (
                    <Button url={url} text={text} key={url} />
                ))
            }
        </Wrapper>
    );
};

export default navbarS;