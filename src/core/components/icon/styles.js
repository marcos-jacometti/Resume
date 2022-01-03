import styled from "styled-components";

export const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 1vw;
    border-radius: 20%;
    margin-top: ${props => props.top};
    background: ${props => props.background};
    height: ${props => props.height};
    width: ${props => props.width};
    font-size: ${props => props.font};

    :hover {
        cursor: pointer;
        color: #950101;
    }
`;