import styled from "styled-components";

export const ProgressBar = styled.div`

`;

export const Bar = styled.div`
    width: 40vw;
    height: 1vh;
    border-radius: 1vw;
    background: #202020;
    position: relative;
`;

export const ProgressDone = styled.div`
    height: 100%;
    width: ${props => props.width};
    display: flex;
    border-radius: 1vw;
    background: red;
`;