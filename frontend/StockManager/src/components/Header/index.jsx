import Logo from "../../assets/images/logo.svg"
import "./styles.css";

export const Header = () => {
    return(
       <header>
            <div className="sides">
                <div className="side--left">
                    <img src={Logo} alt=""/>
                    <h2>StockManager</h2>
                </div>
                <div className="side--right">
                    <ul>
                        <li>Produtos</li>
                        <li>Estoque</li>
                    </ul>
                </div>
            </div>
       </header> 
    )
}