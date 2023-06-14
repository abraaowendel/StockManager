import styled from 'styled-components';

export const Container = styled.div`
    background-color: #5E91F8;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form`
    min-width: 320px;
    min-height: 280px;
    border-radius: 10px;
    background-color: #fff;
    padding: 25px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const Input = styled.input`
    background-color: transparent;
    border: 1px solid #979797;
    margin-bottom: 15px;
    padding: 10px 8px;
    border-radius: 5px;
    outline: none;
    ::placeholder{
        color: #6d6b6b;
    }
`;
export const Button = styled.button ` 
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
    padding: 10px 0;
    font-weight: 600;
    background-color: #2F93AE;
    border: 1px solid ;
    color: #fff;
    :hover{
        background-color: #26748a;
    }
`;
export const ShowErrors = styled.div`
    padding-top: 20px;
    color: #fff;
`;
export const Title = styled.h1`
    padding: 10px 0;
    color: #fff;
`;
