import React from 'react';
import styled from 'styled-components';
import Galeria from '../galeria/galeria';

import Foto1 from '../../img/edificio1.jpg';
import Foto2 from '../../img/edificio2.jpg';
import Foto3 from '../../img/edificio3.jpg';
import Foto4 from '../../img/edificio4.jpg';
import Foto5 from '../../img/edificio5.jpg';
import Foto6 from '../../img/edificio6.jpeg';
import Foto7 from '../../img/edificio7.jpg';
import Foto8 from '../../img/edificio8.jpg';

const Column = styled.ul`
    list-style: none;
    width: 100%;
`;

const GaleryBlock = styled.div`
    margin-top: 80px;
    margin-bottom: 750px;
    padding: 0;
    box-sizing: border-box;
    display: block;
`;

const Portafolio = () => {
    const pictures = [
        { img: Foto1, url: '/portafolioInd' },
        { img: Foto2, url: '/portafolioInd' },
        { img: Foto3, url: '/portafolioInd' },
        { img: Foto4, url: '/portafolioInd' },
        { img: Foto5, url: '/portafolioInd' },
        { img: Foto6, url: '/portafolioInd' },
        { img: Foto7, url: '/portafolioInd' },
        { img: Foto8, url: '/portafolioInd' }
    ];

    return (
        <GaleryBlock>
                <Column>
                    {
                        pictures.map(({ img, url }) => (
                            <Galeria img={img} url={url} key={img} />
                        ))
                    }
                </Column>
            </GaleryBlock>
    );
};

export default Portafolio;
        