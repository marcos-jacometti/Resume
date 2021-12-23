import styled from "styled-components";

export const Cards = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    height: 40vh;
    width: 15vw;
    margin-left: 0.2vw;
    border-radius: 13%;
    background: #352f44;
    font-weight: bold;
    flex: none;
    
    :hover {
        animation-name: fade;
        animation-duration: 2s;
        cursor: pointer;
    }

    svg {
        fill: ${props => props.fill};
        font-size: 7vw;
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