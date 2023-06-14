import { useState } from "react";
import * as C from "./styled";

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
      <C.Container>
        <C.Box>
          <C.Form action="POST" onSubmit={handleSubmitForm}>
    
            <C.ButtonCloseArea>
              <C.Title>Cadastrar Mercadoria</C.Title>
              <C.Button bg="#FF0000" onClick={action}>Cancelar</C.Button>
            </C.ButtonCloseArea>
      
            <C.FormGroup>
              <C.Label htmlFor="nome">Nome</C.Label>
              <C.Input type="text" id="nome" value={nome} onChange={handleChangeNome} required/>
            </C.FormGroup>
      
            <C.FormGroup>
              <C.Label htmlFor="descricao">Descrição</C.Label>
              <C.Input id="descricao" value={descricao} onChange={handleChangeDescricao} required></C.Input>
            </C.FormGroup>
      
            <C.FormGroup>
              <C.Label htmlFor="preco">Preço unitário</C.Label>
              <C.InputGroup>
                <C.InputSimbol>R$</C.InputSimbol>
                <C.Input type="number" id="preco" step="0.05" min="0.0" placeholder="0.00" value={preco} onChange={handleChangePreco} required/>
              </C.InputGroup>
            </C.FormGroup>
      
            <C.FormGroup>
              <C.Label htmlFor="categoria">Categoria</C.Label>
              <C.Select id="categoria" value={selectedValueCategoria} onChange={handleChangeCategoria} required>
                <C.Option value=""></C.Option>
                {data.categorias &&
                  data.categorias.map((item, index) => (
                    <C.Option key={index} value={JSON.stringify(item)}>
                      {item.nome}
                    </C.Option>
                  ))}
              </C.Select>
            </C.FormGroup>
      
            <C.FormGroup>
              <C.Label htmlFor="fornecedor">Fornecedor</C.Label>
              <C.Select id="fornecedor" value={selectedValueFornecedor} onChange={handleChangeFornecedor} required>
              <C.Option value=""></C.Option>
                {data.fornecedores &&
                  data.fornecedores.map((item, index) => (
                    <C.Option key={index} value={JSON.stringify(item)} >
                      {item.nome}
                    </C.Option>
                  ))}
              </C.Select>
            </C.FormGroup>
            <C.ButtonAddArea>
              <C.Button bg="#069201" mg= "10px">Cadastrar Produto</C.Button>
            </C.ButtonAddArea>
          </C.Form>
        </C.Box>
      </C.Container>
      
    )

}