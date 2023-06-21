import * as C from "./styled";
import Logo from "../../assets/images/logo.svg"
import { Link } from "react-router-dom"
import {isLogged } from "../../helpers/auth/AuthHandler";

export const Header = () => {
    let logged = isLogged();

    return(
      <>
      {logged && 
            <C.HeaderArea>
            <C.Sides>
                <C.SideLeft>
                
                </C.SideLeft>
                <C.SideRight>
                    <C.Ul>
                        <Link to="/mercadorias" style={{
                            color: "#fff",
                            margin: "0 20px",
                            cursor: "pointer"}}
                            onMouseOver={(e) => {e.target.style.color = '#ccc';}}
                            onMouseLeave={(e) => {e.target.style.color = '#fff';}}
                            >Mercadorias</Link>

                        <Link to="/estoque" style={{
                            color: "#fff",
                            margin: "0 20px",
                            cursor: "pointer"}}
                            onMouseOver={(e) => {e.target.style.color = '#ccc';}}
                            onMouseLeave={(e) => {e.target.style.color = '#fff';}}
                            >Estoque</Link>
                        <Link to="/fornecedores" style={{
                            color: "#fff",
                            margin: "0 20px",
                            cursor: "pointer"}}
                            onMouseOver={(e) => {e.target.style.color = '#ccc';}}
                            onMouseLeave={(e) => {e.target.style.color = '#fff';}}
                            >Fornecedores</Link>
                    </C.Ul>
                </C.SideRight>
            </C.Sides>
        </C.HeaderArea> 
      }
        
      </>
    )
}