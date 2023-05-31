import { useState } from "react"
import "../login/styles.css";

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

        if(username != "" || password != ""){
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

                const data = await response.json();
                const token = data.token; 
                console.log(token);

              } 
              else {
                handleSetErrors();
              }

            } 
            catch (error) {
              console.log(error)
            }

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

