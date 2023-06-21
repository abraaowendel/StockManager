import styled, { css }from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form`
    min-width: 320px;
    border-radius: 10px;
    padding: 25px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const FormGroup = styled.div`
  margin: 10px 0;
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  pointer-events: none;
  font-weight: 600;
  color: #9b9999;
  font-size: 14px;
  transition: all 0.3s;
  border-radius: 5px 10px;

  ${(props) =>
    props.active &&
    css`
      top: -10px;
      font-size: 12px;
      color: #26748a;
      transform: translateY(0%);
      background-color: #fff;
      padding: 0 5px;
    `}
`;

export const Input = styled.input`
  width: 100%;
  margin: 0;
  border-radius: 3px;
  padding: 15px 10px;
  border: 1px solid #9b9999;
  outline: none;
  background: transparent;
  color: #fff;
  &:focus + ${Label} {
    top: -10px;
    font-size: 12px;
    color: #3E4395;
    transform: translateY(0%);
    background-color: #fff;
    padding: 0 5px;
  }
 
`;

export const Button = styled.button ` 
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
    padding: 10px 0;
    font-weight: 600;
    background-color: #3E4395;
    border: 1px solid transparent;
    color: #fff;
    &:hover{
        opacity: .8;
    }
`;
export const ShowErrors = styled.div`
    padding-top: 20px;
    color: #fff;
`;
export const Title = styled.h1`
    color: #fff;
`;
