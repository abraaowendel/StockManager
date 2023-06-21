import { useEffect, useState } from "react";
import { doLogin } from "../../helpers/auth/AuthHandler"
import useApi from "../../api/StockManagerAPI";
import * as C from "./styled";
import { isLogged } from "../../helpers/auth/AuthHandler";

const Login = () => {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [disable, setDisable] = useState(false);

  const api = useApi();

  useEffect(() => {
    if(isLogged()){
      window.location.href = "/"
    }
  })

  const handleInputUsername = (event) => {
    setUserName(event.target.value);
  };

  const handleInputPassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSetErrors = (message) => {
    setErrors(message);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setDisable(true)
    handleSetErrors("");

    if (username !== "" && password !== "") {
      const json = await api.login(username, password);

      if (!json.code) {
        doLogin(json.token);
        window.location.href = "/"
      }

      handleSetErrors(json.message);

    } else {
      handleSetErrors("Preencha seu e-mail ou senha.");
    }
    setDisable(false)

  };

  return (
    <>

      <C.Container>
        <C.Title>Fazer login</C.Title>
        <C.Form>
          <C.FormGroup>
            <C.Input
              type="text"
              value={username}
              onChange={handleInputUsername}
              required
              disabled={disable}/>
              <C.Label htmlFor="nome" active={username.toString()}>
                Username
              </C.Label>
            </C.FormGroup>

            <C.FormGroup>
              <C.Input
              type="password"
              value={password}
              onChange={handleInputPassword}
              required
              disabled={disable}/>
              <C.Label htmlFor="password" active={password.toString()}>
                Password
              </C.Label>
            </C.FormGroup>
  
       
  
          <C.Button onClick={handleSubmit} disabled={disable}>Login</C.Button>
        </C.Form>
  
        {errors != "" && 
        <C.ShowErrors>
          {errors}
        </C.ShowErrors>}
      </C.Container>
    
  
    </>
    
  );
};
export default Login;