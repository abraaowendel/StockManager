import * as C from "./styled";
import { useState } from "react";

export const EditarProduto = ({data, action, onSubmit}) => {

    const [codigo, setCodigo] = useState(data.codigo);
    const [nome, setNome] = useState(data.nome);
    const [descricao, setDescricao] = useState(data.descricao);
    const [preco, setPreco] = useState(data.preco);

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
               
        if(nome !== "" && descricao !== "" && preco !== ""){
            data.nome = nome;
            data.descricao = descricao;
            data.preco = preco;
            onSubmit(data.id, data);
            action();
            return;
        }
       
    }
    return (
        <C.Container>
            <C.Box>
                <C.Form action="PUT" onSubmit={handleSubmitForm}>
                    <C.ButtonCloseArea>
                      <C.Title style={{textAlign:"center"}}>Editar Mercadoria</C.Title>
                      <C.Button bg="#FF0000" onClick={action}>Cancelar</C.Button>
                    </C.ButtonCloseArea>

                    <C.FormGroup>
                        <C.Label htmlFor="" >Código</C.Label>
                        <C.Input type="text" disabled value={codigo} required style={{backgroundColor: "#ecece"}}/>
                    </C.FormGroup>
                    <C.FormGroup>
                        <C.Label htmlFor="">Nome</C.Label>
                        <C.Input type="text" value={nome} onChange={handleChangeNome} required/> 
                    </C.FormGroup> 
                    <C.FormGroup>   
                        <C.Label  htmlFor="">Descrição</C.Label>
                        <C.Textarea name="" value={descricao} onChange={handleChangeDescricao} required></C.Textarea> 
                    </C.FormGroup>
                    <C.FormGroup>
                        <C.Label  htmlFor="">Preço unitário</C.Label>
                        <C.InputGroup>
                            <C.InputSimbol>R$</C.InputSimbol>
                            <C.Input type="number" placeholder="R$" value={preco} onChange={handleChangePreco} required/>
                        </C.InputGroup>   
                    </C.FormGroup>
                    <C.ButtonAddArea>
                        <C.Button bg="#069201" mg="15px">Salvar Alterações</C.Button>
                    </C.ButtonAddArea>
                </C.Form>
            </C.Box>
        </C.Container>    
    );

}

