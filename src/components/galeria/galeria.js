import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { 
    Row, 
    PictureCase, 
    PictureImg 
} from './galeria.styled';

const Galeria = (props) => (
    <Row>
        <PictureCase>
            <Link to='/portafolioInd'>
                <PictureImg src={props.img} to={props.url} alt='Imagen no disponible' />
            </Link>
        </PictureCase>
    </Row>
);

export default Galeria;