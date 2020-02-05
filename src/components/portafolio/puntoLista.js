import React from 'react';
import styled from 'styled-components';

const Punto = styled.div`
    line-height: 145%;
    width: 80%;
    margin-left: 0%;
    margin-bottom: 35px;
    display: block;
    float: left;
`;

const Imagen = styled.img`
    margin-left: 30%;
    margin-right: 30px;
    float: left;
    width: 6%;
`;

const PuntoLista = (props) => (
    <Punto>
        <Imagen src={props.img} />
        <h4>{props.title}</h4>
        <p>{props.info}</p>
    </Punto>
);

export default PuntoLista;