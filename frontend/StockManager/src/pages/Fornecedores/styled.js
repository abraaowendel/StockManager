import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    position: relative;
    background-color: #141B2D;
    padding:0 30px;
    min-height: 100vh;
`;
export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 15px;
`;
export const BoxArea = styled.div`
    background-color: #1F2A40;
    padding: 20px 30px;
    border-radius: 8px;
    margin: 20px 0;
    background-color: #1F2A40;
    display: flex;
    flex-direction: column;
    width: 100%;
    transition: all .8s ease-in;
`;
export const BoxSideRigth = styled.div`
    display: flex;
    align-items: center;
`;
export const BoxSideLeft = styled.div`
    
`;
export const Button = styled.button`
    padding: 10px 15px;
    background-color: #3E4395;
    border-radius: 5px;
    border: 0;
    color: #fff;
    cursor: pointer;
    font-size: 15px;
    &:hover{
        opacity: .8;
    }
`;
export const Label = styled.label`
    color: #000;
    margin-right: 10px;
    
`;
export const Title = styled.h2`
    color: #fff;
    font-size: 30px;    
`; 
export const Select = styled.select`
    color: #000;
    cursor: pointer;
`;
export const Option = styled.option`
    color: #fff;
    font-size: 15px;
    
`;
export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    background-color: #141B2D;

`;
export const TableCabecalho = styled.thead`
    background-color: #141B2D;
`;
export const TableTitle = styled.th`
    padding: 10px;
    text-align: start;
    border: 1px solid #ccc;
    color: #fff;
`;
export const TableLine = styled.tr`
    background-color: #141B2D;

    &:nth-child(even) {
        background-color: #f2f2f2;
    }
`;
export const TableBody = styled.tbody`
    background-color: #141B2D;

`;
export const TableColumn = styled.td`
    color: #fff;
    padding: 10px;
    text-align: start;
    border: 1px solid #ccc;
    background-color: #141B2D;

`;
export const ButtonAction = styled.button`
    background-color: ${(props) => props.bg};
    cursor: pointer;
    width: 50%;
    margin:0 5px;
    padding: 8px 5px;
    border-radius: 5px;
    color: #fff;
    border: 0;
    font-size: 14px;
    &:hover{
        opacity: .8;
    }
`;
export const Btns = styled.div `
    display: flex;
`

