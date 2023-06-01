import { useEffect, useState } from "react";
import "./styles.css";
import { api } from "../../api/api";

export const Estoque = () => {
  
  const [produtos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    fazerRequisicaoCategorias();
  }, []);

  useEffect(() => {
    fazerRequisicaoProdutos(selectedValue);
  }, [selectedValue]);

  const fazerRequisicaoCategorias = async () => {
    try {
      const data = await api.fetchCategorias();
      setCategorias(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fazerRequisicaoProdutos = async () => {
    try {
        const data = await api.fetchProdutos(selectedValue);
        if(data.content){
          setProdutos(data.content);
          return;
        }
        setProdutos(data);
    } catch (error) {
      console.log(error);
    }
  };

  function handleChange(event) {
    setSelectedValue(event.target.value);
  }

  return (
    <div className="container--estoque">
      <div className="box">
        <div className="box--left">
          <h2>Mercadorias</h2>
        </div> 
        <div className="box--rigth">
          <label htmlFor="select--estoque">Categorias: </label>
          <select className="select--estoque" value={selectedValue} onChange={handleChange}>
            <option value="Todas">Todas</option>
            {categorias && categorias.map((item, index) => (
              <option key={index} value={item.nome}>{item.nome}</option>
            ))}
          </select>
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
                <button>Editar</button>
                <button>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
