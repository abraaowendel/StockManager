import { useState } from "react";
import "./styles.css";

export const CadastrarProduto = ({data, action, onSubmit}) => {

    const [codigo, setCodigo] = useState("");
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState("");

    console.log(data);

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
       
    }

    return(
        <div className="container--cadastrar-produto" onSubmit={handleSubmitForm}>
        <div className="box-cadastrar-produto">
            <form action="POST">
                <div className="box-add--close">
                    <h2 style={{textAlign:"center"}}>Cadastrar Mercadoria</h2>
                    <button onClick={action}>Cancelar</button>
                </div>
                <input type="text" value={codigo}/>
                <label htmlFor="">Nome</label>
                <input type="text" value={nome} onChange={handleChangeNome}/> 
                <label htmlFor="">Descrição</label>
                <textarea name="" value={descricao} onChange={handleChangeDescricao}></textarea> 
                <label htmlFor="">Preço unitário</label>
                <input type="number" placeholder="R$" value={preco} onChange={handleChangePreco}/>
                <button>Cadastrar Produto</button>
            </form>
        </div>
    </div>    
    )

}