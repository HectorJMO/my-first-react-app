import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #fff;
    color: #555;
    font-family: 'Lato', 'Arial', sans-serif;
    font-weight: 300;
    font-size: 20px;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    margin: 0;
    padding: 80px 0;
    box-sizing: border-box;
    display: block;
`;

const Section = styled.div`
    max-width: 1140px;
    margin: 0 auto;
`;

export const Titulo = styled.h3`
    font-size: 180%;
    word-spacing: 2px;
    text-align: center;
    margin-bottom: 30px;
    &:after {
        display: block;
        height: 2px;
        background-color: #d1d8e0;
        content: " ";
        width: 100px;
        margin: 30px auto;
    }
`;

const Form = styled.input`
    display: block;
	float:left;
    margin: 10px 5px 10px 0;
    width: 66.13%; 
    &:first-child{
        margin-left: 0;
    }
`;

const Etiqueta = styled.label`
    
`;

const TextArea = styled.textarea`
    width: 100%;
    padding: 7px;
    border-radius: 3px;
    border: 1px solid #ccc;
    height: 100px;
`;

const Formulario = () => (
    <Wrapper>
        <Section>
            <Titulo>Contáctanos</Titulo>
        </Section>
        <Section>
            <Etiqueta>Name</Etiqueta>
            <Form type="text" name="name" id="name" placeholder="Your name" required></Form>
        </Section>
        <Section>
            <Etiqueta>Email</Etiqueta>
            <Form type="email" name="email" id="email" placeholder="Your email" required></Form>
        </Section>
        <Section>
            <Etiqueta>Cómo nos conociste?</Etiqueta>
            <select name="find-us" id="find-us">
                <option value="Amigos" selected>Amigos</option>
                <option value="Publicidad">Publicidad</option>
                <option value="Comerciales">Comerciales</option>
                <option value="Otros">otros</option>
            </select>
        </Section>
        <Section>
            <Etiqueta>Información del proyecto</Etiqueta>
            <TextArea name="message" placeholder="Tu información..." />
        </Section>
    </Wrapper>
);

export default Formulario;