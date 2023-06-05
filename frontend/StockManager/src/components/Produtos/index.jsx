import { useEffect, useState } from "react";
import "./styles.css";
import { api } from "../../api/api";
import { EditarProduto } from "../../components/EditarProduto/index"
import { ScrollButton } from "../ScrollButton";

export const Produtos = () => {
  
  const [produtos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [mostrarModalEditarProduto, setMostrarModalEditarProduto ] = useState(false);
  const [itemProduto, setItemProduto] = useState("");

  useEffect(() => {
    fazerRequisicaoCategorias();
  }, []);

  useEffect(() => {
    fazerRequisicaoProdutos(selectedValue);
  }, [selectedValue]);

  const fazerRequisicaoCategorias = async () => {
    try {
      const data = await api.trazerTodasCategorias();
      setCategorias(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fazerRequisicaoProdutos = async () => {
    try {
        const data = await api.trazerTodosProdutos(selectedValue);
        if(data.content){
          setProdutos(data.content);
          return;
        }
        setProdutos(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fazerAtualizacaoProduto = async (produtoAtualizado) => {

    try {
      const data = await api.atualizarProduto(produtoAtualizado);
      console.log(data);
    } 
    catch (error) {
      console.log(error);
    }
  };

  function handleChange(event) {
    setSelectedValue(event.target.value);
  }
  function handleModalEditarShow(item){
    setItemProduto(item);
    setMostrarModalEditarProduto(!mostrarModalEditarProduto);
  }

  const containerClass = mostrarModalEditarProduto ? "container--produtos no-scroll" : "container--produtos";

  return (
    <div className={containerClass}>
      <div className="box">
        <div className="box--left">
          <h2>Mercadorias</h2>
        </div> 
        <div className="box--rigth">
          <label htmlFor="select--produtos">Categorias: </label>
          <select className="select--produtos" value={selectedValue} onChange={handleChange}>
            <option value="Todas">Todas</option>
            {categorias && categorias.map((item, index) => (
              <option key={index} value={item.nome}>{item.nome}</option>
            ))}
          </select>
          <button className="btn--cadastrar-produto">Cadastrar Produto</button>
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
          {produtos && produtos.map((item, index) => (
            <tr key={index}>
              <td>{item.codigo}</td>
              <td>{item.nome}</td>
              <td>R$ {item.preco}</td>
              <td>{item.categoria.nome}</td>
              <td className="btns">
                <button onClick={() => handleModalEditarShow(item)}>Editar</button>
                <button>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {mostrarModalEditarProduto &&
          <EditarProduto action={handleModalEditarShow} data={itemProduto} onSubmit={fazerAtualizacaoProduto}/>
      }
      {!mostrarModalEditarProduto &&
        <ScrollButton/>
      }
    </div>
  );
};
