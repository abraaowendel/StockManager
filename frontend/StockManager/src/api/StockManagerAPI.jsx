const API_URL = "http://localhost:8080";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcGkuU3RvY2tNYW5hZ2VyIiwic3ViIjoidGVzdEB0ZXN0LmNvbSIsImlkIjoxLCJleHAiOjE2ODgwNDk3ODh9.IJBCXJSO6oSAo3f_w57tyHWXjM9iPnKFkRsQnleGOt4";


//GET
const apiFetchGet = async (endpoint) => {
    const response = await fetch(`${API_URL}${endpoint}`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Origin: "http://localhost:5173",
        Authorization: `Bearer ${token}`
      }
    });
  
    if (response.ok) {
      const data = await response.json();
      return data;
    } 
    else {
      throw new Error("Erro na requisição: " + response.status);
    }
 
}

//POST
const apiFetchPost = async (endpoint, body) => {
    const response = await fetch(`${API_URL}${endpoint}`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Origin: "http://localhost:5173",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(body)
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } 
    else if(response.status === 401){
      const data = await response.json();
      return data;
    }
    else {
      throw new Error("Erro na requisição: " + response.status);
    }
}

//PUT
const apiFetchPut = async (endpoint, body) => {
    const response = await fetch(`${API_URL}${endpoint}`,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Origin: "http://localhost:5173",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(body)
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } 
    else {
      throw new Error("Erro na requisição: " + response.status);
    }
}
//DELETE
const apiFetchDelete = async (endpoint) => {

    const response = await fetch(`${API_URL}${endpoint}`,{
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Origin: "http://localhost:5173",
        Authorization: `Bearer ${token}`
      }
    });

    if (response.status === 204) {
      return null;
    }
    else {
      throw new Error("Erro na requisição: " + response.status);
    }
}

export const StockManagerAPI = {

  login: async (username, password) => {
      const json = await apiFetchPost("/login", {username, password})
      return json;
  },
  getEstados: async() => {
    const response = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome",{
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if(response.ok){
      const json = await response.json();
      return json;
    }
  },
  getCidades: async(UF) => {
    const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if(response.ok){
      const json = await response.json();
      return json;
    }
  },
  getCategorias: async () => {
      const json = await apiFetchGet("/categorias");
      return json;
  },
  getProdutos: async (categoria) => {
    const url = categoria !== "Todas"
      ? `/produtos?size=1000&category=${categoria}&sort=codigo,asc`
      : `/produtos?size=1000&sort=codigo,asc`;
    const json = await apiFetchGet(url);
    return json;
  },
  updateProduto: async (id, body) => {
    const json = await apiFetchPut(`/produtos/${id}`, body);
    return json;
  },
  addProduto: async (body) => {
    const json = await apiFetchPost("/produtos", body);
    return json;
  },
  deleteProduto: async (id) => {
    const json = await apiFetchDelete(`/produtos/${id}`);
    return json;
  },
  getFornecedores: async () =>{
    const json = await apiFetchGet(`/fornecedores`);
    return json;
  },
  updateFornecedores: async (id, body) => {
    const json = await apiFetchPut(`/fornecedores/${id}`, body);
    return json;
  },
  addFornecedores: async (body) => {
    const json = await apiFetchPost("/fornecedores", body);
    return json;
  },
  deleteFornecedores: async (id) => {
    const json = await apiFetchDelete(`/fornecedores/${id}`);
    return json;
  },
}


export default () => StockManagerAPI;