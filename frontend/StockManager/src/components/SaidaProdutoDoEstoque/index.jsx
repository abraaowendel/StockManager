import { useState } from "react";
import * as C from "./styled";

export const SaidaProdutoDoEstoque = ({ data, action, onSubmit }) => {

  const [selectedProduto, setSelectedProduto] = useState(data);
  const [quantidade, setQuantidade] = useState();


  function handleChangeQuantidade(event) {
    setQuantidade(event.target.value);
  }

  function handleSubmitForm(event) {
    event.preventDefault();
    if(quantidade <= selectedProduto.quantidade && quantidade > 0 ){
        selectedProduto.quantidade -= Number(quantidade);
        onSubmit(data.id, data);
        action();
    }
  }

  return (
    <C.Container>
      <C.Box>
        <C.Form action="POST" onSubmit={handleSubmitForm}>
          <C.ButtonCloseArea>
            <C.Title>Atualizar estoque </C.Title>
            <C.Button onClick={action} bg="#ff0000">
              Cancelar
            </C.Button>
          </C.ButtonCloseArea>
          
          <C.FormGroup>
            <C.Label htmlFor="nome">Quantidade</C.Label>
            <C.Input
              type="number"
              min="1"
              id="nome"
              value={quantidade}
              onChange={handleChangeQuantidade}
              required
            />
          </C.FormGroup>

          <C.ButtonAddArea>
            <C.Button bg="#069201">
                Atualizar Estoque
            </C.Button>
          </C.ButtonAddArea>
        </C.Form>
      </C.Box>
    </C.Container>
  );
};
