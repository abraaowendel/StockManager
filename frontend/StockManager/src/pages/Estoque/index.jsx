import * as C from "./styled";
import useApi from "../../api/StockManagerAPI";
import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import { AdicionarProdutoAoEstoque } from "../../components/AdicionarProdutoAoEstoque";
import { EntradaProdutoAoEstoque } from "../../components/EntradaProdutoAoEstoque";
import { SaidaProdutoDoEstoque } from "../../components/SaidaProdutoDoEstoque";

const Estoque = () => {
  const api = useApi();

  const [estoque, setEstoque] = useState([]);
  const [produtos, setProdutos] = useState([]);

  const [mostrarModalAdicionarEstoque, setMostrarModalAdicionarEstoque] = useState(false);
  const [mostrarModalSaidaEstoque, setMostrarModalSaidaEstoque] = useState(false);
  const [mostrarModalEntradaEstoque, setMostrarModalEntradaEstoque] = useState(false);

  const [produto, setProduto] = useState();
  
  useEffect(() => {
    getEstoque();
  }, []);

  useEffect(() => {
    getProdutos();
  }, []);

  const getEstoque = async () => {
    const data = await api.getEstoque();
    setEstoque(data);
  };
  const getProdutos = async () => {
    const data = await api.getProdutos("Todas");
    setProdutos(data.content);
  };

  const addEstoque = async (json) => {
    const data = await api.addEstoque(json);
    getEstoque();
  };

  const updateEstoque = async (id, json) => {
    const data = await api.updateEstoque(id, json);
    getEstoque();
  };

  function handleModalAdicionarEstoqueShow() {
    setMostrarModalAdicionarEstoque(!mostrarModalAdicionarEstoque);
  }
  function handleModalEntradaEstoqueShow(item) {
    setProduto(item);
    setMostrarModalEntradaEstoque(!mostrarModalEntradaEstoque);
  }
  function handleModalSaidaEstoqueShow(item) {
    setProduto(item);
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
                        <C.TableColumn>R$ {(item.produto.preco * item.quantidade).toFixed(2)}</C.TableColumn>
                        <C.TableColumn>{item.quantidade}</C.TableColumn>
                        <C.TableColumn>
                            <C.Btns>
                                <C.ButtonAction bg="#069201" onClick={() => handleModalEntradaEstoqueShow(item)}>Entrada</C.ButtonAction>
                                <C.ButtonAction bg="#c40404" onClick={() => handleModalSaidaEstoqueShow(item)}>Saida</C.ButtonAction>
                            </C.Btns>
                        </C.TableColumn>
                    </C.TableLine>
                ))}
            </C.TableBody>
          </C.Table>

          {estoque.length === 0 && <Loading />}

          {mostrarModalAdicionarEstoque &&
            <AdicionarProdutoAoEstoque
              action={handleModalAdicionarEstoqueShow}
              data={{produtos, estoque}}
              onSubmit={addEstoque}
            />
          }
           {mostrarModalEntradaEstoque &&
            <EntradaProdutoAoEstoque
              action={handleModalEntradaEstoqueShow}
              data={produto}
              onSubmit={updateEstoque}
            />
          }
        {mostrarModalSaidaEstoque &&
            <SaidaProdutoDoEstoque
              action={handleModalSaidaEstoqueShow}
              data={produto}
              onSubmit={updateEstoque}
            />
          }

        </C.Container>
    );
}

export default Estoque;