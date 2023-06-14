import * as C from "./styled";
import { useEffect, useState } from "react";
import  { CadastrarFornecedor } from "../../components/CadastrarFornecedor"
import  { EditarFornecedor } from "../../components/EditarFornecedor"
import { Loading } from "../../components/Loading"
import useApi from "../../api/StockManagerAPI";
import { ExcluirFornecedor } from "../../components/ExcluirFornecedor";
import { ScrollButton } from "../../components/ScrollButton";

export const Fornecedores = () => {

  const api = useApi();

  const [fornecedores, setFornecedores] = useState([]);
  const [estados, setEstados] = useState([]);
  const [itemFornecedor, setItemFornecedor] = useState();

  const [mostrarModalCadastrarFornecedor, setMostrarModalCadastrarFornecedor] = useState(false);
  const [mostrarModalEditarFornecedor, setMostrarModalEditarFornecedor] = useState(false);
  const [mostrarModalExcluirFornecedor, setMostrarModalExcluirFornecedor] = useState(false);

  useEffect(() => getFornecedores, []);
  useEffect(() => getEstados, []);

  const getEstados = async  () => {
    const data = await api.getEstados();
    setEstados(data); 
  }

  const getFornecedores = async () => {
    const data = await api.getFornecedores();
    setFornecedores(data);    
  };  

  const updateFornecedores = async (id, json) => {
    const data = await api.updateFornecedores(id, json);
    getFornecedores();
  };

  const addFornecedores = async (json) => {
    const data = await api.addFornecedores(json);
    getFornecedores();
  };

  const deleteFornecedores = async (id) => {
    const data = await api.deleteFornecedores(id);
    getFornecedores();
  };

  function handleModalCadastrarShow() {
    setMostrarModalCadastrarFornecedor(!mostrarModalCadastrarFornecedor);
  }   
  function handleModalEditarShow(item) {
    setItemFornecedor(item);
    setMostrarModalEditarFornecedor(!mostrarModalEditarFornecedor);
  }   
  function handleModalExcluirShow(item) {
    setItemFornecedor(item);
    setMostrarModalExcluirFornecedor(!mostrarModalExcluirFornecedor);
  } 

  const containerClass =
    mostrarModalEditarFornecedor ||
    mostrarModalExcluirFornecedor||
    mostrarModalCadastrarFornecedor ||
    fornecedores.length === 0
      ? "container--produtos no-scroll"
      : "";

  return (
    <C.Container className={containerClass}>
      <C.Box>
        <C.BoxSideLeft>
          <C.Title>Fornecedores</C.Title>
        </C.BoxSideLeft>
        <C.BoxSideRigth>
          <C.Button bg="" onClick={handleModalCadastrarShow}>Cadastrar Fornecedor</C.Button>
        </C.BoxSideRigth>
      </C.Box>
      <C.Table className="table">
        <C.TableCabecalho>
          <C.TableLine>
            <C.TableTitle>Cod.</C.TableTitle>
            <C.TableTitle>Nome</C.TableTitle>
            <C.TableTitle>Telefone</C.TableTitle>
            <C.TableTitle>Rua</C.TableTitle>
            <C.TableTitle>Cidade</C.TableTitle>
            <C.TableTitle>Estado</C.TableTitle>
            <C.TableTitle style={{ textAlign: "center" }}>Ações</C.TableTitle>
          </C.TableLine>
        </C.TableCabecalho>
        <C.TableBody>
          {fornecedores &&
            fornecedores.map((item, index) => (
              <C.TableLine key={index}>
                <C.TableColumn>{item.id}</C.TableColumn>
                <C.TableColumn>{item.nome}</C.TableColumn>
                <C.TableColumn>{item.telefone}</C.TableColumn>
                <C.TableColumn>{item.endereco.rua}</C.TableColumn>
                <C.TableColumn>{item.endereco.cidade}</C.TableColumn>
                <C.TableColumn>{item.endereco.estado}</C.TableColumn>
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
      {fornecedores.length === 0 && <Loading />}
      {mostrarModalCadastrarFornecedor && (
        <CadastrarFornecedor
          action={handleModalCadastrarShow}
          data={{fornecedores, estados}}
          onSubmit={addFornecedores}
        />
      )}
      {mostrarModalEditarFornecedor && (
        <EditarFornecedor
          action={handleModalEditarShow}
          data={{itemFornecedor, fornecedores, estados}}
          onSubmit={updateFornecedores}
        />
      )} 
      {mostrarModalExcluirFornecedor && (
        <ExcluirFornecedor
          action={handleModalExcluirShow}
          data={itemFornecedor}
          onSubmit={deleteFornecedores}
        />
      )}
      {!mostrarModalEditarFornecedor || !mostrarModalCadastrarFornecedor || !mostrarModalCadastrarFornecedor && <ScrollButton />}
    </C.Container>
   
  );
};
export default Fornecedores;