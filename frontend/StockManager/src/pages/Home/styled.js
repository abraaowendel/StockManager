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
    flex-direction: column;
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
export const Title = styled.h1`
    color: #fff;
    margin: 0 10px;
`;
export const BoxTop = styled.div`
    display: flex;
`;
export const BoxDown = styled.div`
    margin-top: 10px;
`;
export const Desc = styled.p`
    font-size: 18px;
    color: #ccc;
`;
export const BoxDetails = styled.div`
    display: flex;
    justify-content: stretch;
    flex-wrap: nowrap;
    gap: 25px;
`
export const BoxDetailsItem = styled.div`
    background-color: ${(props) => props.bg};
    border-radius: 5px;
    width: 33%;
    padding: 30px;
`;
export const BoxDetailsItemDesc = styled.div`
    font-size: 18px;
    color: #fff;
`;