import * as C from "./styled";
import { useEffect, useState } from "react";
import useApi from "../../api/StockManagerAPI";

export const EditarFornecedor = ({data, action, onSubmit}) => {

    const api = useApi();
    const [codigo, setCodigo] = useState(data.itemFornecedor.id);

    const [estados, setEstados] = useState(data.estados);
    const [cidades, setCidades] = useState([]);

    const [nome, setNome] = useState(data.itemFornecedor.nome);
    const [telefone, setTelefone] = useState(data.itemFornecedor.telefone);
    const [rua, setRua] = useState(data.itemFornecedor.endereco.rua);
    const [cep, setCEP] = useState(data.itemFornecedor.endereco.cep);
    const [numero, setNumero] = useState(data.itemFornecedor.endereco.numero);

    const [selectedValueEstado, setSelectedValueEstado] = useState(data.itemFornecedor.endereco.estado);
    const [selectedValueCidade, setSelectedValueCidade] = useState();
    
    useEffect(() => {
        getCidades();
    }, [selectedValueEstado]);
  
    const getCidades = async () => {     
        const data = await api.getCidades(selectedValueEstado);
        setCidades(data)
    };

    function handleChangeNome (event) {
        setNome(event.target.value);
    }    
    function handleChangeTelefone (event) {
        setTelefone(event.target.value);
    } 
    function handleChangeNumero(event) {
        setNumero(event.target.value);
    } 
    function handleChangeRua(event) {
        setRua(event.target.value);
    }  
    function handleChangeCep(event) {
      let formattedCep = event.target.value;
      // Remove todos os caracteres que não são dígitos
      formattedCep = formattedCep.replace(/\D/g, "");
  
      // Adiciona o hífen após os primeiros 5 dígitos, se houver
      if (formattedCep.length > 5) {
        formattedCep = formattedCep.replace(/^(\d{5})(\d)/, "$1-$2");
      }
      setCEP(formattedCep);
      // Atualiza o estado do CEP apenas se estiver no formato correto ou estiver vazio
    }
    function handleChangeSelectedValueEstado(event) {
        setSelectedValueEstado(event.target.value);
    } 
    function handleChangeSelectedValueCidade(event) {
        setSelectedValueCidade(event.target.value);
    }
      
    function handleSubmitForm(event){
        event.preventDefault();  
        if(selectedValueCidade !== "" && selectedValueEstado !== "" && 
          codigo != "" & nome !== "" && 
          telefone !== "" && rua !== "" &&
          cep !== "" && numero !== ""){
            const json =   {
                "id": codigo,
                "nome": nome,
                "telefone": telefone,
                "endereco": {
                    "rua": rua,
                    "numero": numero,
                    "cidade": (JSON.parse(selectedValueCidade)).nome,
                    "estado": selectedValueEstado,
                    "cep": cep
                }
            }
            onSubmit(data.itemFornecedor.id, json);
            action();
        }

    }

    return (
        <C.Container>
          <C.Box>
            <C.Form action="PUT" onSubmit={handleSubmitForm}>
      
              <C.ButtonCloseArea>
                <C.Title>Editar Fornecedor</C.Title>
                <C.Button onClick={action} bg="#ff0000">Cancelar</C.Button>
              </C.ButtonCloseArea>

              <C.FormGroup>
                <C.Input type="text" id="id" value={codigo} disabled style={{fontFamily: "arial"}}/>
                <C.Label htmlFor="nome" active={"true"}>Código</C.Label>
              </C.FormGroup>
      
              <C.FormGroup>
                <C.Input type="text" id="nome" value={nome} onChange={handleChangeNome} required />
                <C.Label htmlFor="nome" active={nome.toString()}>Nome</C.Label>
              </C.FormGroup>
      
              <C.FormGroup>
                <C.Input
                  type="text"
                  required
                  value={telefone}
                  onChange={handleChangeTelefone}
                  maxLength={14}
                />
                <C.Label htmlFor="telefone" active={telefone.toString()}>
                  Telefone
                </C.Label>
              </C.FormGroup>
              
              <C.FormGroup>
                <C.Input type="text" id="rua" value={rua} onChange={handleChangeRua} required />
                <C.Label htmlFor="rua" active={rua.toString()}>Rua</C.Label>
              </C.FormGroup>
      
              <C.FormGroup>
                <C.Input type="text" id="numero" value={numero} onChange={handleChangeNumero} required />
                <C.Label htmlFor="numero" active={numero.toString()}>Número</C.Label>
              </C.FormGroup>
           
              <C.FormGroup>
                <C.Input type="text" 
                  value={cep}
                  maxLength={9}
                  onChange={handleChangeCep} 
                  required />
                <C.Label htmlFor="cep" active={cep.toString()}>
                  CEP
                </C.Label>
              </C.FormGroup>
      
              <C.FormGroup style={{margin: "10px 0"}}>
                <label htmlFor="estados" style={{color: "#26748A", fontWeight: "bold", fontSize: "14px", marginRight: "5px"}} required>Estados: </label>
                <C.Select id="estados" value={selectedValueEstado} onChange={handleChangeSelectedValueEstado}>
                  {estados &&
                    estados.map((item, index) => (
                      <C.Option key={index} value={item.sigla}>
                        {item.sigla}
                      </C.Option>
                    ))}
                </C.Select>
              </C.FormGroup>
      
              <C.FormGroup style={{margin: "10px 0"}}>
                <label htmlFor="cidades" style={{color: "#26748A", fontWeight: "bold", fontSize: "14px", marginRight: "10px"}}>Cidade: </label>
                <C.Select id="cidades" value={selectedValueCidade} onChange={handleChangeSelectedValueCidade} required>
                  <C.Option value=""></C.Option>
                  {cidades &&
                    cidades.map((item, index) => (
                      <C.Option key={index} value={JSON.stringify(item)}>
                        {item.nome}
                      </C.Option>
                    ))}
                </C.Select>
              </C.FormGroup>
              <C.ButtonAddArea>
                <C.Button bg="#069201" mg="0">Salvar Alterações</C.Button>
              </C.ButtonAddArea>
            </C.Form>
          </C.Box>
        </C.Container>  
    );

}

