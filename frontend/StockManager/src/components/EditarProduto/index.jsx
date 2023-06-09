import { useState } from "react";
import "./styles.css";

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
        
        // FALTA FAZER VALIDAÇÕES
       
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
        <div className="container--editar-produto" onSubmit={handleSubmitForm}>
            <div className="box-editar-produto">
                <form action="PUT">
                    <div className="box-edit--close">
                        <h2 style={{textAlign:"center"}}>Editar Mercadoria</h2>
                        <button onClick={action}>Cancelar</button>
                    </div>
                    <label htmlFor="" >Código</label>
                    <input type="text" disabled value={codigo} required/>
                    <label htmlFor="">Nome</label>
                    <input type="text" value={nome} onChange={handleChangeNome} required/> 
                    <label htmlFor="">Descrição</label>
                    <textarea name="" value={descricao} onChange={handleChangeDescricao} required></textarea> 
                    <label htmlFor="">Preço unitário</label>
                    <input type="number" placeholder="R$" value={preco} onChange={handleChangePreco} required/>
                    <button>Salvar Alterações</button>
                </form>
            </div>
        </div>    
    );

}

