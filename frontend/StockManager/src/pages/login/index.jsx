import { useState } from "react"
import "./styles.css";

export const Login = () => {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState(false);

    function handleInputUsername(event){
        setUserName(event.target.value)
    }

    function handleInputPassword(event){
        setPassword(event.target.value)
    }
    
    function handleSetErrors(){
        setErrors(true)
    }

    async function handleSubmit(event) {

        event.preventDefault(); // Evita o comportamento padrão do formulário
      
        // Cria um objeto com os dados do formulário
        const formData = {
          username: username,
          password: password
        };
        
        try {
          const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Origin': 'http://localhost:5173' // Adicione essa linha
            },
            body: JSON.stringify(formData)
          });
        
          if (response.ok) {
            // A resposta foi bem-sucedida, pode fazer algo aqui, como redirecionar para outra página
            const data = await response.json();
            const token = data.token; // Verifique o nome correto da propriedade do objeto JSON que contém o token
            // Faça algo com o token, como armazená-lo em algum lugar para uso posterior
            console.log(token);
          } else {
            // A resposta foi um erro, você pode tratar o erro aqui
            handleSetErrors();
          }
        } catch (error) {
          // Ocorreu um erro na requisição, você pode tratá-lo aqui
        }
        
      }

    return (

        <div className="container">

            <h1>Fazer Login</h1>  

            <form>
                <input type="text" placeholder="Username" value={username} onChange={handleInputUsername}/>
                <input type="password" placeholder="Password" value={password} onChange={handleInputPassword}/>
                <button onClick={handleSubmit}>Login</button>
            </form>

            {errors &&
              <div className="errors">
                Usuário ou Senha incorretos...
              </div>
            }
    
        </div>
    )
}

