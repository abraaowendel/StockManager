import "./styles.css";
import useApi from "../../api/StockManagerAPI";
import { useEffect, useState } from "react";
import { EditarProduto } from "../../components/EditarProduto/index";
import { ScrollButton } from "../ScrollButton";
import { ExcluirProduto } from "../ExcluirProduto";
import { CadastrarProduto } from "../CadastrarProduto";

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
      setCategorias(json)
    }
    getCategorias(); 
  }, []);

  useEffect(() => {
    const getFornecedores = async () => {
      const json = await api.getFornecedores();
      setFornecedores(json)
    }
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
  };

  const addProduto = async (json) => {
    const data = await api.addProduto(json);
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
    mostrarModalEditarProduto || mostrarModalExcluirProduto || mostrarModalCadastrarProduto
      ? "container--produtos no-scroll"
      : "container--produtos";

  return (
    <div className={containerClass}>
      <div className="box">
        <div className="box--left">
          <h2>Mercadorias</h2>
        </div>
        <div className="box--rigth">
          <label htmlFor="select--produtos">Categorias: </label>
          <select
            className="select--produtos"
            value={selectedValueCategoria}
            onChange={handleChange}
          >
            <option value="Todas">Todas</option>
            {categorias &&
              categorias.map((item, index) => (
                <option key={index} value={item.nome}>
                  {item.nome}
                </option>
              ))}
          </select>
          <button className="btn--cadastrar-produto" onClick={handleModalCadastrarShow}>Cadastrar Produto</button>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th style={{ textAlign: "center" }}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos &&
            produtos.map((item, index) => (
              <tr key={index}>
                <td>{item.codigo}</td>
                <td>{item.nome}</td>
                <td>R$ {item.preco}</td>
                <td>{item.categoria.nome}</td>
                <td className="btns">
                  <button onClick={() => handleModalEditarShow(item)}>
                    Editar
                  </button>
                  <button onClick={() => handleModalExcluirShow(item)}>
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {mostrarModalCadastrarProduto && (
        <CadastrarProduto
          action={handleModalCadastrarShow}
          data={fornecedores}
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
      {!mostrarModalEditarProduto && <ScrollButton />}
      {}
    </div>
  );
};
