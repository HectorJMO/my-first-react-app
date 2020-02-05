import styled from 'styled-components';

const Section = styled.section`
    background-color: #fff;
    color: #555;
    font-family: 'Lato', 'Arial', sans-serif;
    font-weight: 300;
    font-size: 20px;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    margin-top: 80px;
    padding: 0;
    box-sizing: border-box;
    display: block;
    &:before {
        content:"";
        display:table;
    }
    &:after {
        content:"";
        display:table;
        clear:both;
    }
`;

const SectionImg = styled.section`
    background-image: -webkit-linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${(props)=>props.img});
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${(props)=>props.img});
    background-size: cover;
    color: #fff;
    background-attachment: fixed;
    padding-bottom: 350px;
`;

const Columna = styled.div`
    display: block;
	float:left;
	margin: 1% 0 1% 1.6%;
    &:first-child { margin-left: 0; }
    width: 31%; 
`;

const Blockquote = styled.blockquote`
    padding: 2%;
    font-style: italic;
    line-height: 145%;
    position: relative;
    margin-top: 40px;
    &:before {
        content: "\201C";
        font-size: 500%;
        display: block;
        position: absolute;
        top: -5px;
        left: -5px;
    };
`;

const Cite = styled.cite`
    font-size: 90%;
    margin-top: 25px;
    display: block;
`;

export {
    Section,
    SectionImg,
    Columna,
    Blockquote,
    Cite
}