import styled from "styled-components";

export const Sections = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: ${props => props.height};
    width: ${props => props.width};
    background-color: ${props => props.background};
    color: #fff;
`;