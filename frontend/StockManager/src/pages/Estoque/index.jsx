import * as C from "./styled";
import useApi from "../../api/StockManagerAPI";
import { useEffect, useState } from "react";

const Estoque = () => {

  const api = useApi();

  const [estoque, setEstoque] = useState([]);
  const [produtos, setProdutos] = useState([]);

  const [mostrarModalAdicionarEstoque, setMostrarModalAdicionarEstoque] = useState(false);
  const [mostrarModalSaidaEstoque, setMostrarModalSaidaEstoque] = useState(false);
  const [mostrarModalEntradaEstoque, setMostrarModalEntradaEstoque] = useState(false);
  const [produtoId, setProdutoId] = useState();
  const [produto, setProduto] = useState();
  
  useEffect(() => {
    getEstoque();
  }, []);

  useEffect(() => {
    getEstoque();
  }, []);

  const getEstoque = async () => {
    const data = await api.getEstoque();
    setEstoque(data);
  };
  const getProdutos = async () => {
    const data = await api.getProdutos();
    setProdutos(data);
  };

  const addEstoque = async (id, json) => {
    const data = await api.addEstoque(id, json);
    getEstoque();
  };

  const addQuantity = async (id, json) => {
    const data = await api.updateEstoque(id, json, true);
    getEstoque();
  };

  const removeQuantity = async (id, json) => {
    const data = await api.deleteProduto(id, json, false);
    getEstoque();
  };

   function handleChange(event) {
   }

   function handleModalAdicionarEstoqueShow(item) {
    setProduto(item);
    setMostrarModalAdicionarEstoque(!mostrarModalAdicionarEstoque);
   }
   function handleModalEntradaEstoqueShow(id) {
     setProdutoId(id);
     setMostrarModalEntradaEstoque(!mostrarModalEntradaEstoque);
   }
   function handleModalSaidaEstoqueShow(id) {
     setProdutoId(id);
     setMostrarModalSaidaEstoque(!mostrarModalSaidaEstoque);
   }
   const containerClass =
   mostrarModalSaidaEstoque ||
   mostrarModalEntradaEstoque ||
   mostrarModalAdicionarEstoque||
   estoque.length === 0
     ? "container--produtos no-scroll"
     : "container--produtos";

 return(
    <C.Container className={containerClass}>
        <C.Box>
            <C.BoxSideLeft>
                <C.Title>Estoque</C.Title>
            </C.BoxSideLeft>
            <C.BoxSideRigth>
                <C.Button bg="" onClick={handleModalAdicionarEstoqueShow}>Adicionar ao Estoque</C.Button>
            </C.BoxSideRigth>
        </C.Box>
            <C.Table className="table">
                <C.TableCabecalho >
                    <C.TableLine>
                        <C.TableTitle>Cód.</C.TableTitle>
                        <C.TableTitle>Nome</C.TableTitle>
                        <C.TableTitle>Preço unitário</C.TableTitle>
                        <C.TableTitle>Preço Total</C.TableTitle>
                        <C.TableTitle>Quantidade</C.TableTitle>
                        <C.TableTitle style={{ textAlign: "center" }}>Ações</C.TableTitle>
                    </C.TableLine>
                </C.TableCabecalho>
            <C.TableBody>
            {estoque &&
                estoque.map((item, index) => (
                    <C.TableLine key={index}>
                        <C.TableColumn>{item.produto.codigo}</C.TableColumn>
                        <C.TableColumn>{item.produto.nome}</C.TableColumn>
                        <C.TableColumn>R$ {(item.produto.preco).toFixed(2)}</C.TableColumn>
                        <C.TableColumn>R$ {(item.precoTotal).toFixed(2)}</C.TableColumn>
                        <C.TableColumn>{item.quantidade}</C.TableColumn>
                        <C.TableColumn>
                            <C.Btns>
                                <C.ButtonAction bg="#069201" onClick={() => mostrarModalEntradaEstoque(item.id)}>Entrada</C.ButtonAction>
                                <C.ButtonAction bg="#c40404" onClick={() => mostrarModalSaidaEstoque(item.id)}>Saida</C.ButtonAction>
                            </C.Btns>
                        </C.TableColumn>
                    </C.TableLine>
                ))}
            </C.TableBody>
          </C.Table>
        </C.Container>
    );
}

export default Estoque;