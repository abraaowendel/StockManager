import * as C from "./styled";
import { useEffect, useState } from "react";
import { BiBarChart } from "react-icons/bi";
import useApi from "../../api/StockManagerAPI";

const Home = () => {
    const api = useApi();

    const [quantidadeProdutos, setQuantidadeProdutos] = useState(0);
    const [quantidadeProdutosEmEstoque, setQuantidadeProdutosEmEstoque] = useState(0);
    const [quantidadeProdutosZeradosNoEstoque, setQuantidadeProdutosZeradosNoEstoque] = useState(0);

    useEffect(() => getQuantidadeProdutos, [])
    useEffect(() => getQuantidadeProdutosEmEstoque, [])
    useEffect(() => getQuantidadeProdutosZeradosNoEstoque, [])

    const getQuantidadeProdutos = async () => {
        const data = await api.getProdutosQuantidade();
        setQuantidadeProdutos(data);
    }
    const getQuantidadeProdutosEmEstoque = async () => {
        const data = await api.getProdutosQuantidadeEmEstoque();
        setQuantidadeProdutosEmEstoque(data);
    } 
    const getQuantidadeProdutosZeradosNoEstoque = async () => {
        const data = await api.getProdutosZeradosQuantidadeEmEstoque();
        setQuantidadeProdutosZeradosNoEstoque(data);
    }

    return(
        <C.Container>
            <C.BoxArea>
                <C.Box>
                    <C.BoxTop>
                        <BiBarChart style={{fontSize: "45px", color: "#fff"}}/>
                        <C.Title>Página Inicial</C.Title>
                    </C.BoxTop> 
                    <C.BoxDown>
                        <C.Desc>Visão geral do Controle de Estoque</C.Desc>
                    </C.BoxDown>
                </C.Box>
                <C.BoxDetails>
                    <C.BoxDetailsItem bg="#0E6DFD">
                        <C.BoxDetailsItemDesc > {quantidadeProdutos} Produtos Cadastrados</C.BoxDetailsItemDesc>
                        <C.BoxDetailsItemDesc> {quantidadeProdutosEmEstoque} Itens no estoque</C.BoxDetailsItemDesc>
                    </C.BoxDetailsItem>   
                    <C.BoxDetailsItem bg="#D23443">
                        <C.BoxDetailsItemDesc> {quantidadeProdutosZeradosNoEstoque} Produtos com estoque<br/> Zerado</C.BoxDetailsItemDesc>
                        <C.BoxDetailsItemDesc> </C.BoxDetailsItemDesc>
                    </C.BoxDetailsItem>   
                    <C.BoxDetailsItem bg="#FCC008">
                        <C.BoxDetailsItemDesc></C.BoxDetailsItemDesc>
                        <C.BoxDetailsItemDesc></C.BoxDetailsItemDesc>
                    </C.BoxDetailsItem>
                </C.BoxDetails>
            </C.BoxArea>
        </C.Container>
    )
}

export default Home;