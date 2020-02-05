import styled from 'styled-components';

const Row = styled.li`
    display: block;
    float: left;
    width: 25%;
`;

const PictureCase = styled.figure`
    width: 100%;
    margin: 0;
    overflow: hidden;
    background-color: #000;
`;

const PictureImg = styled.img`
    width: 100%;
    height: auto;
    transform: scale(1.15);
    transition: transform 0.5s, opacity 0.5s;
    opacity: 0.7;
    &:hover{
        opacity: 1;
        transform: scale(1.03);
    }
`;

export {
    Row,
    PictureCase,
    PictureImg
};