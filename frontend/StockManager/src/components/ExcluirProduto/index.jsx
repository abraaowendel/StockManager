import * as C from "./styled";

export const ExcluirProduto = ({action, data, onSubmit}) => {

    function handleModalExcluir() {
        onSubmit(data.id);
        action();
    }
    
    return(
      <C.Container>
        <C.Box>
            <C.Title>Tem certeza?</C.Title>
            <C.Btns>
                <C.Button bg="#069201" onClick={handleModalExcluir}>Sim</C.Button>
                <C.Button bg="#c40404" onClick={action}>Não</C.Button>
            </C.Btns>
        </C.Box>
      </C.Container>
    )
}