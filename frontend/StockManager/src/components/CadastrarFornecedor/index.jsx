import { useEffect, useState } from "react";
import useApi from "../../api/StockManagerAPI";
import * as C from "./styled";

export const CadastrarFornecedor = ({action, data, onSubmit}) => {

    const api = useApi();

    const [estados, setEstados] = useState(data.estados);
    const [cidades, setCidades] = useState("");

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");

    const [rua, setRua] = useState("");
    const [cep, setCEP] = useState("");
    const [numero, setNumero] = useState("");

    const [selectedValueEstado, setSelectedValueEstado] = useState(data.estados[0]?.sigla);
    const [selectedValueCidade, setSelectedValueCidade] = useState();

    useEffect(() => {
      getCidades();
    }, [selectedValueEstado]);

    const getCidades = async () => {     
      const data = await api.getCidades(selectedValueEstado);
      setCidades(data)
    };

    function handleSubmitForm(event){
        event.preventDefault();
    }

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
      setCEP(event.target.value);
    }
    function handleChangeSelectedValueEstado(event) {
      setSelectedValueEstado(event.target.value);
    } 
    function handleChangeSelectedValueCidade(event) {
      console.log(event.target.value)
      setSelectedValueCidade(event.target.value);
    }
    

    return(
        <C.Container>
          <C.Box>
            <C.Form action="POST" onSubmit={handleSubmitForm}>
      
              <C.ButtonCloseArea>
                <C.Title>Cadastrar Fornecedor</C.Title>
                <C.Button onClick={action} bg="#ff0000">Cancelar</C.Button>
              </C.ButtonCloseArea>
      
              <C.FormGroup>
                <C.Input type="text" id="nome" value={nome} onChange={handleChangeNome} required />
                <C.Label htmlFor="nome" active={nome !== ""}>Nome</C.Label>
              </C.FormGroup>
      
              <C.FormGroup>
                <C.Input type="text" id="telefone" value={telefone} onChange={handleChangeTelefone} required />
                <C.Label htmlFor="telefone" active={telefone !== ""}>Telefone</C.Label>
              </C.FormGroup>
      
              <C.FormGroup>
                <C.Input type="text" id="rua" value={rua} onChange={handleChangeRua} required />
                <C.Label htmlFor="rua" active={rua !== ""}>Rua</C.Label>
              </C.FormGroup>
      
              <C.FormGroup>
                <C.Input type="text" id="numero" value={numero} onChange={handleChangeNumero} required />
                <C.Label htmlFor="numero" active={numero !== ""}>Número</C.Label>
              </C.FormGroup>
      
              <C.FormGroup>
                <C.Input type="text" id="cep" value={cep} onChange={handleChangeCep} required />
                <C.Label htmlFor="cep" active={cep !== ""}>CEP</C.Label>
              </C.FormGroup>
      
              <C.FormGroup style={{margin: "10px 0"}}>
                <label htmlFor="estados" style={{color: "#26748A", fontWeight: "bold", fontSize: "14px", marginRight: "5px"}}>Estados: </label>
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
                <C.Select id="cidades" value={selectedValueCidade} onChange={handleChangeSelectedValueCidade}>
                  {cidades &&
                    cidades.map((item, index) => (
                      <C.Option key={index} value={JSON.stringify(item)}>
                        {item.nome}
                      </C.Option>
                    ))}
                </C.Select>
              </C.FormGroup>
              <C.ButtonAddArea>
                <C.Button bg="#069201" mg="0">Cadastrar Fornecedor</C.Button>
              </C.ButtonAddArea>
            </C.Form>
          </C.Box>
        </C.Container>
      );
}