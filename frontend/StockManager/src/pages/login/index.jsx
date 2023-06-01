import { useState } from "react"
import "../login/styles.css";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";

export const Login = () => {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(false);
  const navigate = useNavigate();

  const handleInputUsername = (event) => {
    setUserName(event.target.value);
  };

  const handleInputPassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSetErrors = () => {
    setErrors(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita o comportamento padrão do formulário
    
    if (username !== "" && password !== "") {
      try {
        const token = await api.fazerLogin(username, password);
        navigate("/");
      } catch (error) {
        handleSetErrors();
        console.log(error);
      }
    }
    else{
      handleSetErrors();
    }
  };

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

