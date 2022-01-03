import styled from "styled-components";
import img from "../img/profile.jpg";

export const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: ${props => props.justify};
    flex-direction: column;
    width: 100%;
    color: #fff;
    height: ${props => props.height};
    background: ${props => props.background};
`;

export const Div = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    justify-content: ${props => props.justify};
    flex-direction: ${props => props.direction};
    height: ${props => props.height};
    width: ${props => props.width};
    background: ${props => props.background};
    border-radius: ${props => props.radius};

    p {
        margin-top: 4vh;
    }
`;

export const Photo = styled.div`
    height: 40vh;
    width: 20vw;
    background-image: url(${img});
    background-size: cover;
    border-radius: 50%;
    border: 0.5vh solid #db0000;
`;