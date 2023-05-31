import { useEffect, useState } from "react";
import "./styles.css";

export const Estoque = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fazerRequisicao();
  }, []);

  const fazerRequisicao = async () => {

    const url = "http://localhost:8080/produtos";
    
    const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcGkuU3RvY2tNYW5hZ2VyIiwic3ViIjoidGVzdEB0ZXN0LmNvbSIsImlkIjoxLCJleHAiOjE2ODU2NDQ4OTV9.lHWIbzxueFCqTYXPZ7gbs68YiXZyzq-O7kxE7ueAgQo";

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Origin': 'http://localhost:5173',
          Authorization: `Bearer ${token}`
      }});

      if (response.ok) {
        const data = await response.json();
        setProdutos(data.content);
      } 
      else {
        console.log("Erro na requisição:", response.status);
      }
    } catch (error) {
      console.log("Erro na requisição:", error.message);
    }
  };

  return (
    <div className="container--estoque">
      <h2>Mercadorias</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th style={{textAlign: "center"}}>Ações</th>
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
                <button onClick={{}}>Editar</button>
                <button onClick={{}}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    <button className="btn--cadastrar-produto">Cadastrar Produto</button>
    </div>
  );
};
