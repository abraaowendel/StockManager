import styled from 'styled-components';

export const ScrollButton = styled.button`
    border: 0;
    cursor: pointer;
    position: fixed;
    bottom: 0;
    right: 30px;
    padding: 0;
    margin: 0;
    background-color: transparent;
    scroll-behavior: smooth;
    &:hover{
        opacity: 0.8;
        background-color: transparent;
    }
`;

