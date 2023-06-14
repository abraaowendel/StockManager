import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #ffffffaa;
`;
export const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;
    width: 280px;
    height: 150px;
    border: 1px solid #9b9999;
    background-color: #fff;
    border-radius: 10px;
    margin-top: 50px;
`;
export const Title = styled.h3`
    font-size: 20px;
    color: #26748A;
    text-align: center;
`;
export const Btns = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 30px;
    margin-top: 10px;
`;
export const Button = styled.div`
    width: 100%;
    padding: 8px;
    margin:0 10px;
    font-weight: bold;
    color: #fff;
    text-align: center;
    border-radius: 3px;
    background-color: ${(props) => props.bg};
    cursor: pointer;
    &:hover{
        opacity: .8;
    }
`;

