import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1100px;
    margin: auto;
    padding: 30px 0; 
    position: relative;
    top: 0;
    bottom: 0;

    &.no-scroll{
        overflow: hidden;
        height: calc(100vh - 60px);
    }
`;
export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3px;
`;
export const BoxSideRigth = styled.div`
    display: flex;
    align-items: center;
`;
export const BoxSideLeft = styled.div`
    
`;
export const Button = styled.button`
    margin: 0 0 0 20px;
    padding: 10px;
    background-color: #26748A;
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
    color: #000;
    font-size: 30px;
    margin: 10px 0;
`;
export const Select = styled.select`
    color: #000;
    cursor: pointer;
`;
export const Option = styled.option`
    color: #000;
    font-size: 15px;
`;
export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;
export const TableCabecalho = styled.thead`
`;
export const TableTitle = styled.th`
    padding: 10px;
    text-align: start;
    border: 1px solid #ccc;
`;
export const TableLine = styled.tr`
    &:nth-child(even) {
        background-color: #f2f2f2;
    }
`;
export const TableBody = styled.tbody`

`;
export const TableColumn = styled.td`
    padding: 10px;
    text-align: start;
    border: 1px solid #ccc;
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

