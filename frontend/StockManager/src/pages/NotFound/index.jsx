import Cookies from "js-cookie";
import {isLogged, doLogout } from "../../helpers/auth/AuthHandler";
import { useEffect } from "react";

const NotFound = () => {

  useEffect(() => handleIsLogged,[])

  const handleIsLogged = () => {
    if(!isLogged()){
      window.location.href = "/entrar"
    }
  }
    return (
        <div style={{ width: "100%", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}> 
            <h1 style={{fontSize: "150px", color: "#ccc"}}>404</h1>
            <p style={{fontSize: "25px", color: "#ccc"}}>Essa página não existe.</p>
        </div>
    );
}
 
export default NotFound;