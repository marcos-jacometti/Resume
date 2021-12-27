import styled from "styled-components";
import img from "../img/profile.jpg";

export const Wrapper = styled.header`
    display: flex;
    flex-direction: row;
    height: auto;
    color: #fff;
`;

export const Containers = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${props => props.justify};
    width: ${props => props.width};
    padding: 10px;

    h4 {
        color: red;
    }

    h5 {
        margin-left: 2vw;
    }
`;