const API_URL = "http://localhost:8080";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcGkuU3RvY2tNYW5hZ2VyIiwic3ViIjoidGVzdEB0ZXN0LmNvbSIsImlkIjoxLCJleHAiOjE2ODY5NTIzNzJ9.7YAlexKj_yy4JYPdZG-3MPywxuIcJ6vbF49uwY1HNSA";

export const api = {

  trazerTodasCategorias: async () => {

    const url = `${API_URL}/categorias`;

    try {
      const response = await fetch(url, {
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
      } else {
        throw new Error("Erro na requisição: " + response.status);
      }
    } catch (error) {
      throw new Error("Erro na requisição: " + error.message);
    }
  },

  trazerTodosProdutos: async (categoria) => {
   
    const url = categoria !== "Todas"
      ? `${API_URL}/produtos?size=1000&category=${categoria}`
      : `${API_URL}/produtos?size=1000&sort=preco,desc`;

    try {
      const response = await fetch(url, {
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
      } else {
        throw new Error("Erro na requisição: " + response.status);
      }
    } catch (error) {
      throw new Error("Erro na requisição: " + error.message);
    }
  },
  atualizarProduto: async (produto) => {
    const url =  `${API_URL}/produtos/${produto.id}`

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Origin: "http://localhost:5173",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(produto)
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      } 
      else {
        throw new Error("Erro na requisição: " + response.status);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  },
  fazerLogin: async (username, password) => {
    const url = `${API_URL}/login`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: "http://localhost:5173"
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        return token;
      } else {
        throw new Error("Usuário ou senha incorretos.");
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
};
