import React from 'react';
import {
    Section,
    SectionImg,
    Columna,
    Blockquote,
    Cite
} from './portafolioInd.styled';
import { Titulo } from '../formulario/index';
import Encabezado from '../encabezado/index';
import PuntoLista from './puntoLista';
import Num1 from '../../img/num1.png';
import Num2 from '../../img/num2.png';
import Num3 from '../../img/num3.png';
import Num4 from '../../img/num4.png';
import Num5 from '../../img/num5.png';

const HeaderImg = (props) => {
    return (
        <SectionImg img={ props.img }>
            <Titulo>Opiniones de la prensa</Titulo>
            <Columna>
                <Blockquote>Suspendisse ac malesuada ipsum. Mauris luctus condimentum urna, vitae suscipit tellus viverra volutpat. Pellentesque massa dui, malesuada id imperdiet quis, viverra in dui.
                    <Cite>New York Times</Cite>
                </Blockquote>
            </Columna>
            <Columna>
                <Blockquote>Vestibulum ornare, orci sed scelerisque semper, tellus quam feugiat elit, a bibendum augue diam ac urna. Proin malesuada odio quis justo feugiat faucibus. Sed ullamcorper porttitor consectetur.
                    <Cite>El Universal</Cite>
                </Blockquote>
            </Columna>
            <Columna>
                <Blockquote>Donec efficitur, est sit amet rhoncus bibendum, lorem leo eleifend dolor, condimentum placerat dui neque a tellus. Pellentesque vitae volutpat est. Suspendisse potenti.
                    <Cite>Por Esto!</Cite>
                </Blockquote>
            </Columna>
        </SectionImg>
    );
}

const Body = () => {
    const titulo = {
        title: 'Edificio \"Elchin Gon\"',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium mattis erat, et auctor orci cursus nec. Proin sed feugiat nunc. Mauris faucibus laoreet urna. Nulla urna enim, vehicula et eros eget, posuere accumsan eros.'
    }
    const contenido = [
        {
            img: Num1,
            title: 'Morbi nunc ante',
            info: 'Curabitur nec augue semper, interdum mi a, posuere velit. Nulla ultrices dolor at tempus molestie.'
        },
        {
            img: Num2,
            title: 'Rutrum ac eros non',
            info: 'Vivamus at pulvinar massa, in blandit odio. Duis velit dui, aliquet in mauris quis, dignissim pulvinar dui.'
        },
        {
            img: Num3,
            title: 'Gravida convallis nunc',
            info: 'Phasellus cursus est in urna aliquam, sit amet pellentesque est luctus. In eu risus eget libero porttitor.'
        },
        {
            
            img: Num4,
            title: 'Vivamus a risus',
            info: 'Nullam a orci vel est varius convallis in et quam. Etiam sit amet odio vitae massa sollicitudin interdum.'
        },
        {
            
            img: Num5,
            title: 'Maecenas volutpat maximus',
            info: 'Morbi quis eros at odio sagittis sollicitudin in eget tellus. Nam ac dictum diam, non volutpat neque.'
        }
    ]
    return (
        <Section>
            <Encabezado title={titulo.title} info={titulo.info}></Encabezado>
            {
                contenido.map(({ img, title, info }) => (
                    <PuntoLista img={img} title={title} info={info} key={title} />
                ))
            }
</Section>
    );
}

export {
    HeaderImg,
    Body
}