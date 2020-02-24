import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled(Link)`
    &:link, &:visited{
    padding: 6px;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 90%;
    border-bottom: 2px solid transparent;
    transition: border-bottom 0.2s;
    }
    &:hover, &:active{
        border-bottom: 2px solid #d1d8e0;
    }
    display: flex;
    margin-left: 40px;
    float: right;
    list-style: none;
    margin-top: 60px;
`;
const Li = styled.li`
    list-style: none;
`

const NavbarButton = (props) => (
    <Li>
        <Button to={props.url}>{props.text}</Button>
    </Li>
);

export default NavbarButton;