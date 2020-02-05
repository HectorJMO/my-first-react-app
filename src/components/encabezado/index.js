import React from 'react';
import styled from 'styled-components';

const Contenido = styled.div`
    padding : 10px 0;
    max-width: 1140px;
    margin: 0 auto;
`;

const Titulo = styled.h2`
    letter-spacing: 1px;
    font-size: 180%;
    word-spacing: 2px;
    text-align: center;
    margin-bottom: 30px;
`;

const Descripcion = styled.p`
    line-height: 145%;
    width: 80%;
    margin-left: 10%;
    margin-bottom: 30px;
`;

const Encabezado = (props) => (
    <Contenido>
        <Titulo>{props.title}</Titulo>
        <Descripcion>{props.info}</Descripcion>
    </Contenido>
);

export default Encabezado;