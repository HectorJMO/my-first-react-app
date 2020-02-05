import React from 'react';
import styled from 'styled-components';
import Encabezado from '../encabezado/index';

const Section = styled.div`
    margin: 0 auto;
    background-color: #fff;
    color: #555;
    font-family: 'Lato', 'Arial', sans-serif;
    font-weight: 300;
    font-size: 20px;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    padding-top: 30px;
    box-sizing: border-box;
    display: block;
`;

const AboutUs = () => {
    const parts = [
        {
            title: 'About Us',
            cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium mattis erat, et auctor orci cursus nec. Proin sed feugiat nunc. Mauris faucibus laoreet urna. Nulla urna enim, vehicula et eros eget, posuere accumsan eros.'
        },
        {
            title: 'Misión',
            cont: 'Integer dapibus nunc et fermentum malesuada. Mauris dignissim posuere ornare. Quisque porttitor, nunc in porttitor consequat, tortor leo feugiat mi, quis vehicula dolor metus ut purus. Nunc scelerisque justo urna, at ullamcorper diam hendrerit in. Praesent id nibh odio. Mauris ornare vel metus id lacinia. Praesent lobortis nibh at egestas tempus.'
        },
        {
            title: 'Visión',
            cont: 'Maecenas dictum, mi vitae pellentesque faucibus, tortor urna placerat nunc, sit amet pharetra diam elit sit amet arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent quis sollicitudin magna, in volutpat elit. Aenean diam dui, consectetur non viverra et, malesuada interdum massa. Ut facilisis augue et velit malesuada iaculis.'
        }, 
    ];
    return (
        <Section>
        {
            parts.map(({title, cont}) => (
                <Encabezado title={title} info={cont} key={title} />
            ))
        }
        </Section>
    );
};

export default AboutUs;
