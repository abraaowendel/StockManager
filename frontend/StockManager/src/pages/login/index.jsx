import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useApi from "../../api/StockManagerAPI";
import * as C from "./styled";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [disable, setDisable] = useState(false);

  const api = useApi();
  const navigate = useNavigate();

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
      const token = await api.login(username, password);

      if (!token.code) {
        navigate("/mercadorias");
      }

      handleSetErrors(token.message);

    } else {
      handleSetErrors("Preencha seu e-mail ou senha.");
    }
    setDisable(false)

  };

  return (
    <C.Container>
      <C.Title>Fazer Login</C.Title>
      <C.Form>
        <C.Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleInputUsername}
          required
          disabled={disable}/>

        <C.Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleInputPassword}
          required
          disabled={disable}/>

        <C.Button onClick={handleSubmit} disabled={disable}>Login</C.Button>
      </C.Form>

      {errors != "" && 
      <C.ShowErrors>
        {errors}
      </C.ShowErrors>}
    </C.Container>
  );
};
export default Login;