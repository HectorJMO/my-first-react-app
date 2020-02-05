import React from 'react';
import styled from 'styled-components';

import Tarjetas from './tarjetas';
import Encabezado from '../encabezado/index';
import Hector from '../../img/Hector.jfif';
import Pablo from '../../img/Pablo.jfif';
import Adrian from '../../img/Adrian.jfif';

const Section = styled.div`
    padding : 80px 0;
    max-width: 1140px;
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

const Column = styled.div`
    display: block;
	float:left;
    margin: 1% 0 1% 1.6%;
    width: 32.26%; 
`;

const Equipo = () => {
    const titulo = 
        {
            title: 'Equipo',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium mattis erat, et auctor orci cursus nec. Proin sed feugiat nunc. Mauris faucibus laoreet urna. Nulla urna enim, vehicula et eros eget, posuere accumsan eros.'
        };
    const tarjetas = [
        {
            name: 'Pablo Meléndez',
            img: Pablo,
            cont: 'Nullam pretium mattis erat, et auctor orci cursus nec. Proin sed feugiat nunc. Mauris faucibus laoreet urna. Pellentesque luctus accumsan quam at pretium. Integer tincidunt faucibus sagittis. Nam dignissim tortor sit amet massa rutrum pellentesque. Sed elementum viverra dolor, eu vestibulum quam facilisis at. Cras rutrum mi quis vehicula consectetur.'
        },
        {
            name: 'Héctor Magaña',
            img: Hector,
            cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus laoreet urna. Vehicula et eros eget, posuere accumsan eros. Nunc dapibus elit placerat lorem porttitor, in lacinia ligula vehicula. Nam non tincidunt eros. Vestibulum posuere aliquam mauris id ullamcorper.'
        },
        {
            name: 'Adrian Rocha',
            img: Adrian,
            cont: 'Nulla urna enim, vehicula et eros eget, posuere accumsan eros. Aliquam pellentesque, justo sed consectetur dignissim, risus libero mattis sem, nec feugiat eros augue quis mi. Phasellus iaculis sit amet enim in finibus. Nulla in nulla vel massa rutrum luctus. Proin sit amet massa aliquet, auctor lorem non, ultrices nisi.'
        }
    ];

    return (
        <Section>   
            <Encabezado title={titulo.title} info={titulo.info} key={titulo.title}/>
            {
                tarjetas.map(({name, img, cont}) => (
                    <Tarjetas name={name} img={img} cont={cont} key={name} />
                ))
            }
        </Section>
    );
}

export default Equipo;