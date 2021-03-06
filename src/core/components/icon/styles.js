import styled from "styled-components";

export const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 1vw;
    border-radius: 20%;
    margin-top: ${props => props.top};
    background: ${props => props.background};
    height: ${props => props.height};
    width: ${props => props.width};
    font-size: ${props => props.font};

    :hover {
        color: ${props => props.hover};
        animation: no 600ms;
    }

    @keyframes no {
        0% {transform: translateX(0);}
        35% {transform: translateX(-15%);}
        70% {transform: translateX(15%);} 
        100% {transform: translateX();}
    }

    @media screen and (max-width: 400px) {
        font-size: ${props => props.mediaFont};
        height: ${props => props.mediaHeight};
    width: ${props => props.mediaWidth};
    }
`;