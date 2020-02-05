import React from 'react';
import styled from 'styled-components';

const Column = styled.div`
    padding: 1%;
    max-width: 1140px;
    margin: 0 auto;
    display: block;
	float:left;
    margin: 1% 0 1% 1.6%;
    width: 31%; 
    &:first-child {
        margin-left: 0;
    }
`;

const Pp = styled.img`
    display: block;
    height: 200px;
    width: auto;
    border-radius: 100px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
`;

const Titulo = styled.h3`
    letter-spacing: 1px;
    font-size: 110%;
    margin-bottom: 15px;
`;

const Contenido = styled.p`
    text-align: justify;
    font-size: 110%;
`;

const Tarjetas = (props) => (
    <Column>
        <Pp src={props.img} alt="Imagen no disponible" />
        <Titulo>{props.name}</Titulo>
        <Contenido>{props.cont}</Contenido>
    </Column>
);

export default Tarjetas;