import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #ffffffaa;
`
export const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;
    min-height: 600px;
`;

export const Form = styled.form`
    border: 1px solid #9b9999;
    border-radius: 10px;
    min-width: 430px;
    padding: 25px;
    background-color: #fff;
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    input[type="number"] {
        width: calc(100% - 40px); 
        padding-left: 10px;
        border-left: none;
        border-radius: 0 4px 4px 0;
    }
`;

export const ButtonCloseArea = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const ButtonAddArea = styled.div `
    button{
        width: 100%;
        padding: 10px;
        margin: 15px 0;
        font-size: 14px;
    }
`
export const Button = styled.button `
   padding: 7px 15px;
   margin-top: ${(props) => props.mg? "15px": "0px"};
   background-color: ${(props) => props.bg};
   cursor: pointer;
   border: 0;
   border-radius: 3px;
   color: #fff;
   font-weight: bold;
   font-size: 13px;
   &:hover{
     opacity: 0.8;
   }
`
export const Title = styled.h2 `
    font-style: 20px;
    color: #26748A;
    margin: 0;
`
export const Label = styled.label`
    margin: 5px 0;
    font-weight: bold;
    color: #26748A;
    font-size: 14px;
`
export const Input = styled.input`
    width: 100%;
    margin: 0;
    border-radius: 3px;
    padding: 10px;
    border: 1px solid #9B9999;
    outline: none;
`
export const InputGroup = styled.div`
    display: flex;
    align-items: center;
`
export const InputSimbol = styled.span`
    display: flex;
    align-items: center;
    padding: 8px;
    height: 42px;
    border: 1px solid #9B9999;
    background-color: #f0f0f0;
    border-radius: 3px 0px 0 3px;
    border-right-color: #9B9999;
    color: #a7a4a4;
`
export const Textarea = styled.textarea`
    resize: none;
    min-height: 90px;
    padding: 10px;
`
export const Select = styled.select`
 
`
export const Option = styled.option`
  
`
export const Btns = styled.option`
  width: 100%;
  display: flex;
`