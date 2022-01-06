import styled from "styled-components";

export const ProgressBar = styled.div`
    margin-top: 3.5vh;
`;

export const BarTitle = styled.div`
    display: flex;
    align-items: center;
    width: 50%;

    p {
        margin-top: 0;
    }

    svg {
        margin-right: 0.5vw;
        fill: ${props => props.fill};
        font-size: 1vw;
    }
`;

export const Bar = styled.div`
    width: 40vw;
    height: 1vh;
    border-radius: 1vw;
    background: #202020;
`;

export const ProgressDone = styled.div`
    height: 100%;
    width: ${props => props.width};
    display: flex;
    border-radius: 1vw;
    background: #473bf0;
`;