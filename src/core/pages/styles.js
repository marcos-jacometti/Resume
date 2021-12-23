import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    color: #dbd8e3;
    animation-name: fade;
    animation-duration: 2s;
    max-width: 30vw;

    div {
        display: flex;
        justify-content: center;
        margin-top: 3vh;
        line-height: 2.8vh;
    }

    svg {
        fill: #eebb99;
        margin-right: 5px;
    }

    @keyframes fade {
        from {
            transform: scale(0.9);
        }
        to {
            transform: scale(1);
        }
    }
`;