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
        data.nome = nome;
        data.descricao = descricao;
        data.preco = preco;

        onSubmit(data);
        action();
    }
    return (
        <div className="container--editar-produto" onSubmit={handleSubmitForm}>
            <div className="box">
                <form action="">
                    <div className="box-edit--close">
                        <h2 style={{textAlign:"center"}}>Editar Mercadoria</h2>
                        <button onClick={action}>Cancelar</button>
                    </div>
                    <label htmlFor="" >Código</label>
                    <input type="text" disabled value={codigo}/>
                    <label htmlFor="">Nome</label>
                    <input type="text" value={nome} onChange={handleChangeNome}/> 
                    <label htmlFor="">Descrição</label>
                    <textarea name="" value={descricao} onChange={handleChangeDescricao}></textarea> 
                    <label htmlFor="">Preço unitário</label>
                    <input type="number" step="0.05" min="0" placeholder="R$" value={preco} onChange={handleChangePreco}/>
                    <button>Salvar Alterações</button>
                </form>
            </div>
        </div>    
    );

}

