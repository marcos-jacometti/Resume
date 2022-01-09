import styled from "styled-components";

export const Wrapper = styled.header`
    display: flex;
    flex-direction: row;
    height: 8vh;
    position: fixed;
    border-bottom: thin solid #808080;
    background: #000500;
    top: 0;
`;

export const Containers = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${props => props.justify};
    width: ${props => props.width};
    padding: 2vh;

    h1 {
        color: #473bf0;
    }

    a {
        text-decoration: none;
        color: #fff;
        font-weight: bold;
        font-size: 0.9vw;

        :hover {
            color: #473bf0;
        }
    }

    @media screen and (max-width: 400px) {
        padding: 1vh;

        h1 {
            font-size: 3vw;
        }
        
        a {
            font-size: 2vw;
        }
    }
`;