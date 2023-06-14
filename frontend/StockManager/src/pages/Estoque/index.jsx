import * as C from "./styled";
import useApi from "../../api/StockManagerAPI";
import { useEffect, useState } from "react";

const Estoque = () => {

  const api = useApi();
  const [produtos, setProdutos] = useState([]);
  const [mostrarModalAdicionarProduto, setMostrarModalAdicionarProduto] = useState(false);
  const [mostrarModalSaidaProduto, setMostrarModalSaidaProduto] = useState(false);
  const [mostrarModalEntradaProduto, setMostrarModalEntradaProduto] = useState(false);


  const containerClass =
    mostrarModalSaidaProduto ||
    mostrarModalEntradaProduto ||
    mostrarModalAdicionarProduto ||
    produtos.length === 0
      ? "container--produtos no-scroll"
      : "container--produtos";
 
    return(
    <C.Container className={containerClass}>
        <C.Box>
            <C.BoxSideLeft>
                <C.Title>Estoque</C.Title>
            </C.BoxSideLeft>
            <C.BoxSideRigth>
                <C.Button bg="" onClick={{}}>Adicionar ao Estoque</C.Button>
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
            {produtos &&
                produtos.map((item, index) => (
                    <C.TableLine key={index}>
                        <C.TableColumn>{item.codigo}</C.TableColumn>
                        <C.TableColumn>{item.nome}</C.TableColumn>
                        <C.TableColumn>R$ {(item.preco).toFixed(2)}</C.TableColumn>
                        <C.TableColumn>R$ {(item.preco * item.quantidade).toFixed(2)}</C.TableColumn>
                        <C.TableColumn>{item.quantidade}</C.TableColumn>
                        <C.TableColumn>
                            <C.Btns>
                                <C.Button bg="#069201" onClick={() => null}>Entrada</C.Button>
                                <C.Button bg="#c40404" onClick={() => null}>Saida</C.Button>
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