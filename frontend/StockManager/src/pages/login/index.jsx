import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useApi from "../../api/StockManagerAPI";
import "./styles.css";

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
  };

  return (
    <div className="container">
      <h1>Fazer Login</h1>
      <form>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleInputUsername}
          required
          disabled={disable}/>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleInputPassword}
          required
          disabled={disable}/>

        <button onClick={handleSubmit} disabled={disable}>Login</button>
      </form>

      {errors != "" && <div className="errors">{errors}</div>}
    </div>
  );
};
export default Login;