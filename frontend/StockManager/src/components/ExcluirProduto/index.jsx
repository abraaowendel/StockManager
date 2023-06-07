import "./styles.css";

export const ExcluirProduto = ({action, data, onSubmit}) => {

    function handleModalExcluir() {
        onSubmit(data.id);
        action();
    }
    
    return(
      <div className="container--excluir-produto">
        <div className="box-excluir-produto">
            <h3>Tem certeza?</h3>
            <div className="btns">
                <button onClick={handleModalExcluir}>Sim</button>
                <button onClick={action}>Não</button>
            </div>
        </div>
      </div>
    )
}