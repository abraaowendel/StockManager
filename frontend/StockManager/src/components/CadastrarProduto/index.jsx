import { useState } from "react";
import "./styles.css";

export const CadastrarProduto = ({data, action, onSubmit}) => {

    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState("");
    const [selectedValueCategoria, setSelectedValueCategoria] = useState();
    const [selectedValueFornecedor, setSelectedValueFornecedor] = useState();

    function handleChangeCategoria(event) {
        setSelectedValueCategoria(event.target.value);
    } 
    function handleChangeFornecedor(event) {
        setSelectedValueFornecedor(event.target.value);
    }
    function handleChangeNome (event) {
        setNome(event.target.value);
    } 
    function handleChangeDescricao (event) {
        setDescricao(event.target.value);
    } 
    function handleChangePreco (event) {
        setPreco(event.target.value);
    }
    function handleSubmitForm(event){
        event.preventDefault();

        const obj = JSON.parse(selectedValueFornecedor);

        if( selectedValueCategoria !== undefined 
            && selectedValueFornecedor !== undefined 
            && nome !== "" 
            && descricao !== "" 
            && preco !== ""){

            const json = {
                nome: nome,
                descricao: descricao,
                codigo:"",
                preco: preco,
                quantidade: 0,
                data_de_cadastro: "",
                categoria: JSON.parse(selectedValueCategoria),
                fornecedor: {
                    id: obj.id,
                    nome: obj.nome,
                    telefone: obj.telefone
                }
            };

            onSubmit(json);
            action()
        }
    
    }

    return(
        <div className="container--cadastrar-produto">
        <div className="box-cadastrar-produto">
          <form action="POST" onSubmit={handleSubmitForm}>
      
            <div className="box-add--close">
              <h2>Cadastrar Mercadoria</h2>
              <button onClick={action}>Cancelar</button>
            </div>
      
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" value={nome} onChange={handleChangeNome} required/>
            </div>
      
            <div className="form-group">
              <label htmlFor="descricao">Descrição</label>
              <textarea id="descricao" value={descricao} onChange={handleChangeDescricao} required></textarea>
            </div>
      
            <div className="form-group">
              <label htmlFor="preco">Preço unitário</label>
                <div className="input-group">
                    <span className="input-group-symbol">R$</span>
                    <input type="number" id="preco" step="0.05" min="0.0" placeholder="0.00" value={preco} onChange={handleChangePreco} required/>
                </div>
            </div>
      
            <div className="form-group">
              <label htmlFor="categoria">Categoria</label>
              <select className="select--produtos" id="categoria" value={selectedValueCategoria} onChange={handleChangeCategoria}>
                <option value=""></option>
                {data.categorias &&
                  data.categorias.map((item, index) => (
                    <option key={index} value={JSON.stringify(item)}>
                      {item.nome}
                    </option>
                  ))}
              </select>
            </div>
      
            <div className="form-group">
              <label htmlFor="fornecedor">Fornecedor</label>
              <select className="select--produtos" id="fornecedor" value={selectedValueFornecedor} onChange={handleChangeFornecedor}>
              <option value=""></option>
                {data.fornecedores &&
                  data.fornecedores.map((item, index) => (
                    <option key={index} value={JSON.stringify(item)} >
                      {item.nome}
                    </option>
                  ))}
              </select>
            </div>
      
            <button className="btn-cadastrar-produto">Cadastrar Produto</button>
          </form>
        </div>
      </div>
      
    )

}