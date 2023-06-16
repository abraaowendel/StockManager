import { useState } from "react";
import * as C from "./styled";

export const AdicionarProdutoAoEstoque = ({ data, action, onSubmit }) => {

  const [selectedProduto, setSelectedProduto] = useState();
  const [quantidade, setQuantidade] = useState("");
  const [produtos, setProdutos] = useState(data.produtos);
  const [estoque, setEstoque] = useState(data.estoque);

  function handleChangeProduto(event) {
    console.log(event.target.value)
    setSelectedProduto(event.target.value);
  }
  function handleChangeQuantidade(event) {
    setQuantidade(event.target.value);
  }
  function handleSubmitForm(event) {
    event.preventDefault();
    if(quantidade > 0 && selectedProduto != null && selectedProduto != ""){
        const produto = JSON.parse(selectedProduto);
        const json = {
            "produto": {
             "id": produto.id,
             "nome": produto.nome,
             "descricao": produto.descricao,
             "codigo": produto.codigo,
             "preco": produto.preco,
             "dataDeCadastro": produto.dataDeCadastro,
             "categoria": {
                 "id": produto.categoria.id,
                 "nome": produto.categoria.nome
             },
             "fornecedor": {
                 "id": produto.fornecedor.id,
                 "nome": produto.fornecedor.nome,
                 "telefone": produto.fornecedor.telefone
             }
           },
           "quantidade": quantidade,
           "preco_total": 0
         }
        onSubmit(json);
        action();
    }
  }

  return (
    <C.Container>
      <C.Box>
        <C.Form action="POST" onSubmit={handleSubmitForm}>
          <C.ButtonCloseArea>
            <C.Title>Adicionar ao Estoque</C.Title>
            <C.Button onClick={action} bg="#ff0000">
              Cancelar
            </C.Button>
          </C.ButtonCloseArea>
          <C.FormGroup>          
          <C.Label htmlFor="nome">Mercadorias</C.Label>
            <C.Select id="mercadorias" value={selectedProduto} onChange={handleChangeProduto} required>
                <C.Option value=""></C.Option>
            {produtos &&
                produtos.filter((item) => {
                    return !estoque.find((estoqueItem) => estoqueItem.produto.id === item.id);
                    })
                    .map((item, index) => (
                    <C.Option key={index} value={JSON.stringify(item)}>
                        {item.codigo} - {item.nome}
                    </C.Option>
                ))}

            </C.Select>
          </C.FormGroup>
          
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
              Cadastrar Produto
            </C.Button>
          </C.ButtonAddArea>
        </C.Form>
      </C.Box>
    </C.Container>
  );
};
