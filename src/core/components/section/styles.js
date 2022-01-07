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

    @media screen and (max-width: 400px) {
        height: ${props => props.mediaHeight};
    }
`;

export const Div = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    flex-wrap: wrap;
    justify-content: ${props => props.justify};
    flex-direction: ${props => props.direction};
    height: ${props => props.height};
    width: ${props => props.width};
    background: ${props => props.background};
    border-radius: ${props => props.radius};
    margin-top: ${props => props.top};
    margin-left: ${props => props.left};

    p {
        margin-top: 4vh;
    }

    a {
        color: #fff;
    }

    svg {
        font-size: ${props => props.svgSize};
        fill: ${props => props.fill};
    }

    :hover {
        border: ${props => props.border};
        cursor: ${props => props.cursor};
    }

    @media screen and (max-width: 400px) {
        width: ${props => props.mediaWidth};
        height: ${props => props.mediaHeight};

        p {
            font-size: ${props => props.mediaFont};
        }

        svg {
            font-size: ${props => props.svgFont};
        }
    }
`;

export const Photo = styled.div`
    height: 40vh;
    width: 20vw;
    background-image: url(${img});
    background-size: cover;
    border-radius: 50%;
    border: 0.5vh solid #473bf0;

    @media screen and (max-width: 400px) {
        width: 70vw;
        height: 30vh;
    }
`;