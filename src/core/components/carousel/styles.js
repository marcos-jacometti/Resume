import styled from "styled-components";

export const Change = styled.div`
    display: flex;
    flex-direction: column;
    width: 61vw;

    div {
        display: flex;
        scroll-behavior: smooth;
        overflow-x: auto;
        ::-webkit-scrollbar {
            display: none;
        }
    }
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5vh;

    button {
        background: none;
        border: none;
        color: #ecec;
        cursor: pointer;
        margin-left: 1vw;
        font-size: 1.5vw;
        :hover {
            color: #fff;
        }
    }
`;