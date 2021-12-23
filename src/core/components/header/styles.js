import styled from "styled-components";
import img from "../img/profile.jpg";

export const Wrapper = styled.header`
    display: flex;
    height: 12vh;
    border-bottom: thin inset #393e46;
    color: #dbd8e3;
`;

export const Headers = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${props => props.flex};
    width: 50%;
    height: 100%;

    div {
        height: 8vh;
        width: 4vw;
        border-radius: 50%;
        margin-right: 1vw;
        margin-left: 1vw;
        background-image: url(${img});
        background-repeat: no-repeat;
        background-size: cover;
        :hover {
            transform: rotate(350deg);
            border: 2px solid #dbd8e3;
        }
    }

    p {
        margin-right: 3vw;
        font-weight: bold;
        :hover {
            color: #fff;
            cursor: pointer;
        }
    }
`;