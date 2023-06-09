import { Link } from "react-router-dom"
import Logo from "../../assets/images/logo.svg"
import "./styles.css"
import { useState } from "react"

export const Header = () => {

    return(
      <>
         <header>
            <div className="sides">
                <div className="side--left">
                    <img src={Logo} alt=""/>
                    <h2>StockManager</h2>
                </div>
                <div className="side--right">
                    <ul>
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
                    </ul>
                </div>
            </div>
        </header> 
      
      </>
    )
}