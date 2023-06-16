
import * as C from "./styled";
import useApi from "../../api/StockManagerAPI";
import { useEffect, useState } from "react";
import { EditarProduto } from "../../components/EditarProduto/index";
import { ExcluirProduto } from "../../components/ExcluirProduto";
import { CadastrarProduto } from "../../components/CadastrarProduto";
import { ScrollButton } from "../../components/ScrollButton";
import { Loading } from "../../components/Loading";

export const Produtos = () => {
  const [produtos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [fornecedores, setFornecedores] = useState([]);
  const [selectedValueCategoria, setSelectedValueCategoria] = useState("");
  const [itemProduto, setItemProduto] = useState("");
  const [mostrarModalEditarProduto, setMostrarModalEditarProduto] = useState(false);
  const [mostrarModalExcluirProduto, setMostrarModalExcluirProduto] = useState(false);
  const [mostrarModalCadastrarProduto, setMostrarModalCadastrarProduto] = useState(false);

  const api = useApi();

  useEffect(() => {
    const getCategorias = async () => {
      const json = await api.getCategorias();
      setCategorias(json);
    };
    getCategorias();
  }, []);

  useEffect(() => {
    const getFornecedores = async () => {
      const json = await api.getFornecedores();
      setFornecedores(json);
    };
    getFornecedores();
  }, []);

  useEffect(() => {
    getProdutos();
  }, [selectedValueCategoria]);

  const getProdutos = async () => {
    const data = await api.getProdutos(selectedValueCategoria);

    if (data.content) {
      setProdutos(data.content);
      return;
    }
    setProdutos(data);
  };

  const updateProduto = async (id, json) => {
    const data = await api.updateProduto(id, json);
    getProdutos();
  };

  const addProduto = async (json) => {
    const data = await api.addProduto(json);
    getProdutos();
  };

  const deleteProduto = async (id) => {
    const data = await api.deleteProduto(id);
    getProdutos();
  };

  function handleChange(event) {
    setSelectedValueCategoria(event.target.value);
  }
  function handleModalEditarShow(item) {
    setItemProduto(item);
    setMostrarModalEditarProduto(!mostrarModalEditarProduto);
  }
  function handleModalExcluirShow(item) {
    setItemProduto(item);
    setMostrarModalExcluirProduto(!mostrarModalExcluirProduto);
  }
  function handleModalCadastrarShow() {
    setMostrarModalCadastrarProduto(!mostrarModalCadastrarProduto);
  }

  const containerClass =
    mostrarModalEditarProduto ||
    mostrarModalExcluirProduto ||
    mostrarModalCadastrarProduto ||
    produtos.length === 0
      ? "container--produtos no-scroll"
      : "";

  return (
    <C.Container className={containerClass}>
      <C.Box >
        <C.BoxSideLeft >
          <C.Title>Mercadorias</C.Title>
        </C.BoxSideLeft>
        <C.BoxSideRigth>
          <C.Label htmlFor="select--produtos">Categorias: </C.Label>
          <C.Select
            id="select--produtos"
            value={selectedValueCategoria}
            onChange={handleChange}>

            <C.Option value="Todas">Todas</C.Option>
            {categorias &&
              categorias.map((item, index) => (
                <C.Option key={index} value={item.nome}>
                  {item.nome}
                </C.Option>
              ))}
          </C.Select>
          <C.Button onClick={handleModalCadastrarShow}>Cadastrar Mercadoria</C.Button>
        </C.BoxSideRigth>
      </C.Box>
      <C.Table>
        <C.TableCabecalho>
          <C.TableLine>
            <C.TableTitle>Cód.</C.TableTitle>
            <C.TableTitle>Nome</C.TableTitle>
            <C.TableTitle>Preço</C.TableTitle>
            <C.TableTitle>Categoria</C.TableTitle>
            <C.TableTitle style={{ textAlign: "center" }}>Ações</C.TableTitle>
          </C.TableLine>
        </C.TableCabecalho>
        <C.TableBody>
          {produtos &&
            produtos.map((item, index) => (
              <C.TableLine key={index}>
                <C.TableColumn>{item.codigo}</C.TableColumn>
                <C.TableColumn>{item.nome}</C.TableColumn>
                <C.TableColumn>R$ {item.preco}</C.TableColumn>
                <C.TableColumn>{item.categoria.nome}</C.TableColumn>
                <C.TableColumn>
                  <C.Btns>
                    <C.ButtonAction bg="#069201" onClick={() => handleModalEditarShow(item)}>
                      Editar
                    </C.ButtonAction>
                    <C.ButtonAction bg="#c40404" onClick={() => handleModalExcluirShow(item)}>
                      Excluir
                    </C.ButtonAction>
                  </C.Btns>
                </C.TableColumn>
              </C.TableLine>
            ))}
        </C.TableBody>
      </C.Table>

      {produtos.length === 0 && <Loading />}
      {mostrarModalCadastrarProduto && (
        <CadastrarProduto
          action={handleModalCadastrarShow}
          data={{ fornecedores, categorias }}
          onSubmit={addProduto}
        />
      )}
      {mostrarModalEditarProduto && (
        <EditarProduto
          action={handleModalEditarShow}
          data={itemProduto}
          onSubmit={updateProduto}
        />
      )}
      {mostrarModalExcluirProduto && (
        <ExcluirProduto
          action={handleModalExcluirShow}
          data={itemProduto}
          onSubmit={deleteProduto}
        />
      )}
      {!mostrarModalEditarProduto || !mostrarModalCadastrarProduto || !mostrarModalCadastrarProduto && <ScrollButton />}
    </C.Container>
  );
};
export default Produtos;